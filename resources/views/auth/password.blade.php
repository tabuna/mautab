<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" href="/favicon.png" />
  <title>Cloudme</title>

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
  <link rel="stylesheet" href="/font-awesome.min.css">
  <link rel="stylesheet" href="/animate.css">
  <link rel="stylesheet" href="/style.css">
  <script src="/wow.js"></script>
  <script>
    new WOW().init();
  </script>

</head>
<body>


<header class="header-login-bg">

  <nav class="navbar navbar-default">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span class="sr-only">Меню</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">
          <img title="" alt="" src="/img/logo.png">
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
        <ul class="nav navbar-nav navbar-right">
                  @if (Auth::guest())
            <li><a href="/auth/login">Войти</a></li>
            <li><a href="/auth/register">Зарегистрироваться</a></li>
           @else
          <li><a href="#">{{ Auth::user()->name }} </a></li>
          @endif
        </ul>
      </div>
    </div>
  </nav>




  <div class="container text-center">
    <h3>Хостинг для вашего сайта</h3>

    <h1>Востановление доступа</h1>
  </div>




  <div class="container login-container">
    <div class="login-form text-center">


{!! Form::open(array('routing' => '/password/email','class' => 'col-xs-12 col-md-6')) !!}
   


        <div class="form-group">
          {!! Form::label('email', 'E-Mail Адрес', array('class' => 'control-label')) !!}
          {!! Form::email('email', @$email, array('size'=> '100','class' => 'form-control'))!!}
        </div>





       {!!  Form::token(); !!}
        <input type="submit" class="button-full" value="Востановить пароль">
    {!! Form::close() !!}


      <div  class="col-xs-12 col-md-6">


		@if (session('status'))
			<div class="alert alert-success">
				{{ session('status') }}
			</div>
		@endif


          @if (count($errors) > 0)
            <div class="alert alert-danger">
              <strong>Что то пошло не так!</strong> Пожалуйста проверьте вводимые данные.<br><br>
              <ul>
                @foreach ($errors->all() as $error)
                  <li>{{ $error }}</li>
                @endforeach
              </ul>
            </div>
          @endif

        <img class="img-responsive" alt="" src="/img/email-mockup.png">
      </div>



    </div>
  </div>





</header>





@include('footer')