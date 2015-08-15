@extends('app')

@section('content')

    <div class="panel panel-default">
        <div class="panel-heading">Basic form</div>
        <div class="panel-body">

            <form action="{{URL::route('manager.index')}}"
                  method="get" class="col-xs-12" role="form">

                <div class="input-group m-b">
                    <div class="input-group-btn dropdown" dropdown="">
                        <button type="submit" class="btn btn-default" tabindex="-1">Перейти</button>
                        <button class="btn btn-default" data-toggle="dropdown" aria-expanded="false"><span
                                    class="caret"></span></button>
                        <ul class="dropdown-menu">
                            <li><a href="">Action</a></li>
                            <li><a href="">Another action</a></li>
                            <li><a href="">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="">Separated link</a></li>
                        </ul>

                    </div>
                    <!-- /btn-group -->
                    <input type="text" name="path" class="form-control" placeholder="/"
                           value="{{Session::get('Path', '')}}" class="form-control">
                </div>


                <input type="hidden" name="_token" value="{{csrf_token()}}">
            </form>


            <table class="table table-responsive">

                <thead>
                <tr>
                    <th>#</th>
                    <th colspan="3">Название</th>
                    <th>Вес</th>
                    <th>Права</th>
                    <th>Дата</th>
                    <th>Управление</th>
                </tr>
                </thead>


                <tbody>

                @foreach($listDirectory as $list)
                    <tr>

                        <td>
                            <div class="checkbox">
                                <label class="i-checks">
                                    <input type="checkbox" name="1" value="Documents"><i></i>
                                </label>
                            </div>
                        </td>


                        <td colspan="3">
                            @if($list['type'] == 'd')
                                <i class="fa fa-folder-open"></i>  <a
                                        href="{{URL::route('manager.index',['name' => $list['name']])}}">{{$list['name']}}</a>
                            @else
                                <i class="fa fa-file-code-o"></i>
                                {{$list['name']}}
                            @endif
                        </td>

                        <td>
                            {{$list['size']}}
                        </td>


                        <td>
                            {{$list['permissions']}}
                        </td>

                        <td>
                            {{$list['date']}}
                        </td>


                        <td class="actions">
                            <button type="button" class="btn btn-default"><i class="fa fa-cog"></i></button>

                            <a href="#" data-toggle="modal"
                               data-target="#Modal-permission-{{str_replace(".",'',$list['name'])}}"
                               class="btn btn-default">
                                <i class="fa fa-lock"></i>
                            </a>


                            <a href="#" data-toggle="modal"
                               data-target="#Modal-delete-{{str_replace(".",'',$list['name'])}}"
                               class="btn btn-danger">
                                <i class="fa fa-trash"></i>
                            </a>

                            <!-- Modal -->
                            <div class="modal fade" id="Modal-delete-{{str_replace(".",'',$list['name'])}}"
                                 tabindex="-1"
                                 role="dialog" aria-labelledby="myModalLabel"
                                 aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close"><span
                                                        aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="myModalLabel">Удалить {{$list['name']}} ?</h4>
                                        </div>
                                        <div class="modal-body">
                                            Вы действительно хотите удалить {{$list['name']}}
                                        </div>
                                        <div class="modal-footer">
                                            <form action="{{URL::route('manager.destroy')}}"
                                                  method="post">
                                                <button type="button" class="btn btn-default" data-dismiss="modal">Нет
                                                </button>
                                                <button type="submit" class="button-small">Да</button>
                                                <input type="hidden" name="name" value="{{$list['name']}}"/>
                                                <input type="hidden" name="type" value="{{$list['type']}}">
                                                <input type="hidden" name="_method" value="DELETE">
                                                <input type="hidden" name="_token" value="{{csrf_token()}}">
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <!-- Modal -->
                            <div class="modal fade" id="Modal-permission-{{str_replace(".",'',$list['name'])}}"
                                 tabindex="-1"
                                 role="dialog" aria-labelledby="myModalLabel"
                                 aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal"
                                                    aria-label="Close"><span
                                                        aria-hidden="true">&times;</span></button>
                                            <h4 class="modal-title" id="myModalLabel">Удалить {{$list['name']}} ?</h4>
                                        </div>
                                        <div class="modal-body">
                                            Вы действительно хотите изменить права {{$list['name']}}
                                        </div>
                                        <div class="modal-footer">
                                            <form action="{{URL::route('manager.update')}}"
                                                  method="post">

                                                <div class="form-group">
                                                    <input type="number" class="form-control" name="permission" value="
                            {{$list['permissions']}}">
                                                </div>

                                                <button type="button" class="btn btn-default" data-dismiss="modal">Нет
                                                </button>
                                                <button type="submit" class="button-small">Да</button>
                                                <input type="hidden" name="name" value="{{$list['name']}}"/>
                                                <input type="hidden" name="_method" value="PUT">
                                                <input type="hidden" name="_token" value="{{csrf_token()}}">
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </td>
                    </tr>
                @endforeach


                </tbody>
            </table>
        </div>
    </div>






@endsection
