<?php
namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class VestaFacades extends Facade {

// extends Facade
    /**
     * Получить зарегистрированное имя компонента.
     *
     * @return string
     */
    protected static function getFacadeAccessor() { 
		    return  'App\Services\Vesta';
    }

}




?>