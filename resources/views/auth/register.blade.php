@include('header')



<div class="container text-center">
    <h1>Регистрация</h1>
</div>


<div class="container login-container">
    <div class="login-form text-center">


        <form action="/auth/register" method="post" class="col-xs-12 col-md-6">
            <div class="form-group">

                {!! Form::label('nickname', 'Псевдоним', array('class' => 'control-label')) !!}
                {!! Form::text('nickname', @$nickname, array('size'=> '50','class' => 'form-control'))!!}
            </div>

            <div class="form-group">
                {!! Form::label('name', 'Имя', array('class' => 'control-label')) !!}
                {!! Form::text('name', @$name, array('size'=> '50','class' => 'form-control'))!!}
            </div>

            <div class="form-group">
                {!! Form::label('lastname', 'Фамилия', array('class' => 'control-label')) !!}
                {!! Form::text('lastname', @$lastname, array('size'=> '50','class' => 'form-control'))!!}
            </div>


            <div class="form-group">
                {!! Form::label('package', 'Тарифный план', array('class' => 'control-label')) !!}

                {!! Form::select('package', array(
                '0' => 'Любительский',
                '1' => 'Профессиональный',
                '2' => 'Корпоративный'),
                null,
                array('class' => 'form-control'))
                !!}
            </div>


            <div class="form-group">
                {!! Form::label('email', 'E-Mail Адрес', array('class' => 'control-label')) !!}
                {!! Form::email('email', @$email, array('size'=> '100','class' => 'form-control'))!!}
            </div>


            <div class="form-group">
                {!! Form::label('password', 'Пароль', array('class' => 'control-label')) !!}
                {!! Form::password('password', array('size'=> '100','class' => 'form-control'))!!}
            </div>


            <div class="form-group">
                {!! Form::label('password_confirmation', 'Повторите пароль', array('class' => 'control-label')) !!}
                {!! Form::password('password_confirmation', array('size'=> '100','class' => 'form-control'))!!}
            </div>


            {!!  Form::token(); !!}
            <input type="submit" class="btn btn-blue" value="Зарегистрироваться">
            {!! Form::close() !!}


            <div  class="col-xs-12 col-md-6">

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









@include('footer')















