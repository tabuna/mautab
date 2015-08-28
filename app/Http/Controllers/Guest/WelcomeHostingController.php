<?php namespace Mautab\Http\Controllers\Guest;

use Mautab\Http\Controllers\Controller;
use Mautab\Models\Package;

class WelcomeHostingController extends Controller
{


	/*
	|--------------------------------------------------------------------------
	| Welcome Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders the "marketing page" for the application and
	| is configured to only allow guests. Like most of the other sample
	| controllers, you are free to modify or remove it as you desire.
	|
	*/


	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		$Package = Package::whereHidden('false')->orderBy('price', 'ASC')->get();

		return view('welcome.hosting', [
			'Package' => $Package
		]);
	}

	public function price()
	{
		return view('welcome.price');
	}

}
