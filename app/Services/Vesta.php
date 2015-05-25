<?php namespace App\Services;

use App\Services\VestaAPI\VestaBD;
use App\Services\VestaAPI\VestaCron;
use App\Services\VestaAPI\VestaDNS;
use App\Services\VestaAPI\VestaService;
use App\Services\VestaAPI\VestaUser;
use App\Services\VestaAPI\VestaWeb;
use Config;
use Sentry;
use SSH;

class Vesta  {

	use VestaBD, VestaDNS, VestaUser, VestaWeb, VestaService, VestaCron;

	public $vst_username;
	public $vst_password;
	public $vst_server;

	//Для ssh соединения
	public $VESTA_CMD = '/usr/local/vesta/bin/';
	public $output;


	public function __construct()
	{
		if (!Sentry::check()) {

			// User is not logged in, or is not activated
			$this->vst_username = (string)Config::get('vesta.server')[Config::get('vesta.primary')]['login'];
			$this->vst_password = (string)Config::get('vesta.server')[Config::get('vesta.primary')]['password'];
			$this->vst_server   = (string)Config::get('vesta.server')[Config::get('vesta.primary')]['ip'];
		} else {
			$this->vst_username = 'admin';//(string)Config::get('vesta.server')[Sentry::getUser()->server]['login'];
			$this->vst_password = '03af4d';//(string)Config::get('vesta.server')[Sentry::getUser()->server]['password'];
			$this->vst_server   = '151.80.164.81';//(string)Config::get('vesta.server')[Sentry::getUser()->server]['ip'];
		}

	}


	public function sendQuery($cmd, $arg1 = NULL, $arg2 = NULL, $arg3 = NULL, $arg4 = NULL, $arg5 = NULL, $arg6 = NULL, $arg7 = NULL, $arg8 = NULL, $arg9 = NULL)
    {

    		// Проверям, если нам нужен json то выводим его или же код ошибки
	    $argReturnCodeDetector = array($arg1, $arg2, $arg3, $arg4, $arg5, $arg6, $arg7, $arg8, $arg9);
			if (in_array('json',$argReturnCodeDetector))
				$this->vst_returncode = 'no';
			else
				$this->vst_returncode = 'yes';


		    $postvars = array(
		    	    'user' => $this->vst_username,
				    'password' => $this->vst_password,
				    'returncode' => $this->vst_returncode,
				    'cmd' => $cmd,
				    'arg1' => $arg1,
				    'arg2' => $arg2,
				    'arg3' => $arg3,
				    'arg4' => $arg4,
				    'arg5' => $arg5,
			        'arg6' => $arg6,
			        'arg7' => $arg7,
			        'arg8' => $arg8,
			        'arg9' => $arg9,
			);


	    /*
				Версия php
				$options = array(
						'http' => array(
							'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
							'method'  => 'POST',
							'content' => http_build_query($postvars),
						),
						"ssl"=>array(
							"verify_peer"=>false,
							"verify_peer_name"=>false,
						),
				);


				$url = 'https://' . Auth::user()->IpServer . ':8083/api/';
				$context  = stream_context_create($options);
				$test = file_get_contents($url, false, $context);
				return file_get_contents($url, false, $context);
	*/


	    $postdata = http_build_query($postvars);
	    $curl     = curl_init();


	    curl_setopt($curl, CURLOPT_URL, 'https://' . $this->vst_server . ':8083/api/');
	    curl_setopt($curl, CURLOPT_RETURNTRANSFER, TRUE);
	    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, FALSE);
	    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, FALSE);
	    curl_setopt($curl, CURLOPT_POST, TRUE);
	    curl_setopt($curl, CURLOPT_POSTFIELDS, $postdata);


	    $query = curl_exec($curl);

	    // dd($curl);
        //Если он должен возвращать ошибку, и она случилось перенаправить на 404 страницу
        if($this->vst_returncode == 'yes' && $query !=0 )
            $this->Exceptions($query);
        else
	        return $query;

    }

	public function  Exceptions($code)
	{
		switch ($code) {
			case 1:
				throw new ArgsException('Not enough arguments provided');
				break;
			case 2:
				throw new \App\Exceptions\InvalidException('Object or argument is not valid');
				break;
			case 3:
				throw new NotexistException("Object doesn't exist");
				break;
			case 4:
				throw new ExistsException('Object already exists');
				break;
			case 5:
				throw new SuspendedException('Object is suspended');
				break;
			case 6:
				throw new UnspendedException('Object is already unsuspended');
				break;
			case 7:
				throw new InuseException("Object can't be deleted because is used by the other object");
				break;
			case 8:
				throw new LimitException('Object cannot be created because of hosting package limits');
				break;
			case 9:
				throw new PasswordException('Wrong password');
				break;
			case 10:
				throw new ForbidenException('Object cannot be accessed be the user');
				break;
			case 11:
				throw new DisabledException('Subsystem is disabled');
				break;
			case 12:
				throw new ParsingException('Configuration is broken');
				break;
			case 13:
				throw new DiskException('Not enough disk space to complete the action');
				break;
			case 14:
				throw new LaException('Server is to busy to complete the action');
				break;
			case 15:
				throw new ConnectException('Connection failed. Host is unreachable');
				break;
			case 16:
				throw new FtpException('FTP server is not responding');
				break;
			case 17:
				throw new DbException('Database server is not responding');
				break;
			case 18:
				throw new RrdException('RRDtool failed to update the database');
				break;
			case 19:
				throw new UpdateException('Update operation failed');
				break;
			case 20:
				throw new RestartException('Service restart failed');
				break;
		}
	}

	public function sendQuery2($cmd, $arg1 = NULL, $arg2 = NULL, $arg3 = NULL, $arg4 = NULL, $arg5 = NULL, $arg6 = NULL)
	{
		$argReturnCodeDetector = array($arg1, $arg2, $arg3, $arg4, $arg5, $arg6);
		if (in_array('json', $argReturnCodeDetector))
			$this->vst_returncode = 'no';
		else
			$this->vst_returncode = 'yes';

		//Э ТО БЛЯТЬ НАДО ПЕРЕПИСАТЬ, ЧЁ ЗА ХУЙНЯ А НЕ АПИ

		// Prepare arguments
		if (isset($cmd)) $cmd = escapeshellarg($cmd);
		if (isset($arg1)) $arg1 = escapeshellarg($arg1);
		if (isset($arg2)) $arg2 = escapeshellarg($arg2);
		if (isset($arg3)) $arg3 = escapeshellarg($arg3);
		if (isset($arg4)) $arg4 = escapeshellarg($arg4);
		if (isset($arg5)) $arg5 = escapeshellarg($arg5);
		if (isset($arg6)) $arg6 = escapeshellarg($arg6);
		if (isset($arg7)) $arg7 = escapeshellarg($arg7);
		if (isset($arg8)) $arg8 = escapeshellarg($arg8);
		if (isset($arg9)) $arg9 = escapeshellarg($arg9);

		// Build query
		$cmdquery = $this->VESTA_CMD . $cmd . " ";
		if (!empty($arg1)) {
			$cmdquery = $cmdquery . $arg1 . " ";
		}
		if (!empty($arg2)) {
			$cmdquery = $cmdquery . $arg2 . " ";
		}
		if (!empty($arg3)) {
			$cmdquery = $cmdquery . $arg3 . " ";
		}
		if (!empty($arg4)) {
			$cmdquery = $cmdquery . $arg4 . " ";
		}
		if (!empty($arg5)) {
			$cmdquery = $cmdquery . $arg5 . " ";
		}
		if (!empty($arg6)) {
			$cmdquery = $cmdquery . $arg6 . " ";
		}
		if (!empty($arg7)) {
			$cmdquery = $cmdquery . $arg7 . " ";
		}
		if (!empty($arg8)) {
			$cmdquery = $cmdquery . $arg8 . " ";
		}
		if (!empty($arg9)) {
			$cmdquery = $cmdquery . $arg9;
		}


		SSH::run($cmdquery, function ($output) {
			$this->output .= $output;
		});


		return (string)$this->output;

	}

}
