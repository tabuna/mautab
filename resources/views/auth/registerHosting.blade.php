@include('header')


<div class="web-open">
    <div>
        <img class="img-responsive" alt="banner" src="/images/background-auth.jpeg">

        <div class="caption">
            <div class="caption-wrapper">
                <div class="caption-info">


                    <div class="container container-auth">


                        <h1>Активировать хостинг</h1>

                        <form action="/auth/hosting" method="post">


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


                            <div class="form-group">
                                <label for="nickname">Псевдоним</label>
                                <input type="text" name="nickname" size="50" value="{{old('nickname')}}"
                                       class="form-control">
                            </div>


                            <div class="form-group">
                                <label for="package">Тарифный план</label>
                                <select class="form-control" name="package">
                                    <option value="0">Любительский</option>
                                    <option value="1">Профессиональный</option>
                                    <option value="2">Корпоративный</option>
                                </select>
                            </div>

                            <input type="hidden" name="_method" value="PUT">
                            <input type="hidden" name="_token" value="{{csrf_token()}}">
                            <input type="submit" class="btn btn-blue" value="Зарегистрироваться">
                        </form>


                    </div>


                </div>
            </div>
        </div>
    </div>
</div>


@include('footer')















