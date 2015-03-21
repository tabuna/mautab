@extends('page')

@section('content')



<div class="support-subheader">
	<div class="row"> 
		<div class="small-12 columns">
			<h2>{{Lang::get('tikets.Tickets')}}</h2>

@if (Session::has('good'))

    <div class="alert alert-success">{{Session::get('good')}}</div>

@endif

			<p>Stumptown fanny pack ullamco Neutra, Banksy keytar deep v four loko cray proident chillwave. Tote bag Brooklyn Bushwick pour-over. Helvetica shabby chic vegan stumptown. Occaecat yr seitan forage. Typewriter lo-fi sartorial, church-key hella est pickled sustainable master cleanse.</p>
		</div>
	</div>
</div>






<div class="features premium-servers">


<div class="row">
  <div class="small-12 columns">

				<table data-wow-delay="0.3s" class="flat-table flat-table-1 responsive wow fadeInUp tablesaw tablesaw-stack" data-mode="stack">
				   <thead>
					   	<tr>
						    <th>Номер заявки</th>
						    <th>Сообщение</th>
						    <th>Статус</th>
						    <th>Управление</th>
					   </tr>
				   </thead>
				    <tbody>
					@foreach ($Tikets as $Tiket)
					     <tr>
						     <td>{{ $Tiket->id }}</td>
						     <td>{{ $Tiket->title }}</td>
						     <td>@if (!$Tiket->complete)
						     		Рассматриваеться
						     	 @else
						     	 	Решено
						     	 @endif
						     </td>
						     <td><a href="/tiket/{{ $Tiket->id }}">Просмотреть ветку</a></td>
					     </tr>
					@endforeach
					</tbody>
				</table>



<div class="spacing-top-50"></div>

				<form action="/tikets/add" method="POST">
					<h2>Новая проблема? Напиши и всё будет решено</h2>
					<h3>Заголовок</h3>
					<input type="text" name="title">
					<h3>Описание</h3>
					<textarea name="message" cols="3"></textarea>
					<input type="hidden" name="_token" value="{{ csrf_token() }}">
					<input type="submit" value="Войти">
				</form>


  </div>
</div>
          
 </div>
@endsection






