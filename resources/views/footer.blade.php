<!--  FOOTER  -->
<footer class="footer col-xs-12">
  <p class="copyright">© Copyright CloudMe, все права защищены. </p>
</footer>
<!--  END OF FOOTER  -->


<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->


<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<!--  TinyMCE -->
<script src="{{asset('/dist/plugins/tinymce/tinymce.min.js')}}" type="text/javascript"></script>

<!-- Процесс регистрации-->

<script type="text/javascript">
    $(document).ready(function () {

        //Добавить алиас после ввода домена
        /*
        $('input[name="v_domain"]').blur(function(){
            var currVal = $(this).val();
            var checkSimbl = currVal.indexOf(".") + 1;
            if(checkSimbl != 0){
                var arrVal = currVal.split(".");

                var domain = arrVal[1];


                var correctDomain = "www." + domain;
                (arrVal[2]) ? correctDomain += "." + arrVal[2] : correctDomain;
                $("textarea[name='v_aliases']").val(correctDomain);
            }else{
                var correctDomain = "www." + currVal;
                $("textarea[name='v_aliases']").val(correctDomain);
            }
        });*/

        //Функция добавления FTP
        function clickAddFtp(elem, num){
            //Форма нового FTP
            var strHtml = '<div class="ftp-groupz"><div class="form-group"><label>FTP#' + num + '<a href="#" class="del-current-ftp"><small>Удалить</small></a></label>            </div><div class="form-group"><label>Аккаунт</label><div><small>Префикс {{(!is_null(Sentry::getUser())) ? Sentry::getUser()->nickname : '' }}_ будет автоматически добавлен к названию аккаунта</small></div><input type="hidden" class="v-ftp-user-is-new" name="v_ftp_user[' + num + '][is_new]" value="1"/><input type="text" name="v_ftp_user[' + num + '][v_ftp_user]" class="form-control ftp_usr" value=""/></div><div class="form-group"><label>Пароль / <a href="#" class="genPass">сгенерировать</a></label>            <input type="text" name="v_ftp_user[' + num + '][v_ftp_password]" id="ftppas" class="form-control" value=""/></div><div class="form-group"><label>Path</label><input type="text" name="v_ftp_user[' + num + '][v_ftp_path]" class="form-control" value=""/></div>            <div class="form-group"><label>Отправить данные FTP аккаунта по адресу</label><input type="text" name="v_ftp_user[' + num + '][v_ftp_email]" class="form-control" value=""/></div</div>';

            elem.before(strHtml);
        }

        $('body').on('click','#addFtps',function(){
            //Получаем количество элементов FTP
            var countElems = $(".ftp-groupz").length;
            //Добавляем новый с порядковым номером +1
            clickAddFtp($(this), countElems + 1);
            return false;
        });

        //Удаление ненужного фтп
        $('body').on('click','.del-current-ftp',function(){
            var obj = $(this);
            var rapentObj = $(obj).parent().parent().parent();
            rapentObj.empty();
            return false
        });


        //Проверка нужен ли дополнительный фтп
        $('input[name="v_ftp"]').change(function () {
            if ($(this).prop("checked")) {
                $(".add-ftp").slideDown(500, function () {
                    $('input', this).attr('disabled', false);
                });
            } else {
                $(".add-ftp").slideUp(500, function () {
                    $('input', this).attr('disabled', true);
                });
            }
        });

        //Проверка нужна ли поддержка nginx
        $('input[name="v_proxy"]').change(function () {
            //Если чекед то показываем текстарею
            if ($(this).prop("checked")) {
                $(".supp-niginx").slideDown(300, function () {
                    $(' textarea', this).attr('disabled', false);
                });
            } else {
                $(".supp-niginx").slideUp(300, function () {
                    $(' textarea', this).attr('disabled', true);
                });
            }
        });
        //Функция добавления префикса текущего юзера
        function addPrefix(input) {
            var currVal = $(input).val();
            var issetVal = currVal.indexOf("{{(!is_null(Sentry::getUser())) ? Sentry::getUser()->nickname : '' }}");
            if (issetVal == '-1') {
                var needle = "{{(!is_null(Sentry::getUser())) ? Sentry::getUser()->nickname : '' }}" + "_" + currVal;
                $(input).val(needle);
            }
        }

        //Функция-Генератор случайного пароля
        function randWD() {
            return Math.random().toString(36).slice(2, 2 + Math.max(1, Math.min(10, 10)));
        }

        //Добавление случайного пароля в инпут
        $('body').on('click', '.genPass', function(){
            var genPas = randWD().toUpperCase();
            $(this).parent().next('input').val(genPas);
            return false;
        });
        //Добавление префикса для юзера фтп
        $('body').on('blur', '.ftp_usr', function() {
            addPrefix($(this));
        });


        //Добаваление префикса для БД когда она добаляется
        $("input[name='v_database']").blur(function () {
            addPrefix($(this));
        });
        //Добаваление префикса для БД когда она добаляется
        $("input[name='v_dbuser']").blur(function() {
            addPrefix($(this));
        });

        //Анимация показа форма добавления БД
        $("#show-add-bd").click(function(){
            var obj = $("#add-shadow");
            var attrExpande = $("#show-add-bd").attr("aria-expanded");
            var heiForm = $("#add-bd");

            if(!heiForm.hasClass('collapsing')){
                if(attrExpande == 'false'){
                    $(".btn" ,obj).attr('disabled',true);
                    obj.addClass('add-opacity');
                }else{
                    $(".btn" ,obj).attr('disabled',false);
                    obj.removeClass('add-opacity');
                }
            }
        });

        var navListItems = $('div.setup-panel div a'),
                allWells = $('.setup-content'),
                allNextBtn = $('.nextBtn');

        allWells.hide();

        navListItems.click(function (e) {
            e.preventDefault();
            var $target = $($(this).attr('href')),
                    $item = $(this);

            if (!$item.hasClass('disabled')) {
                navListItems.removeClass('active').addClass('btn-default');
                $item.addClass('active');
                allWells.hide();
                $target.show();
                //$target.find('input:eq(0)').focus();
            }
        });


        //Проба загрузки
        $('form').submit(function () {
            $('body').addClass('add-opacity');
            $('#wath').addClass('load');
        });


        // Для wysing редактора

        //Визуальный редактор
        $(function () {
            tinymce.init({
                theme: "modern",
                skin: 'light',
                language: 'ru',
                selector: "textarea.textareaedit",
                extended_valid_elements: "img[class=img-responsive|!src|border:0|alt|title|width|height|style]",
                plugins: "image,code,link,preview,hr,media,responsivefilemanager",
                toolbar: "styleselect | fontsizeselect   | bullist numlist outdent indent | link image media  | preview code | more  ",
                menu: "false",
                statusbar: false,
                setup: function (editor) {
                    editor.addButton('more', {
                        text: 'Превью',
                        onclick: function () {
                            editor.insertContent('<!--more-->');
                        }
                    });
                },

                external_filemanager_path: "/dist/filemanager/",
                filemanager_title: "Файловый менеджер",
                external_plugins: {"filemanager": "/dist/filemanager/plugin.min.js"}
            });
        });
    });


    /* detect touch */
    if ("ontouchstart" in window) {
        document.documentElement.className = document.documentElement.className + " touch";
    }
    if (!$("html").hasClass("touch")) {
        /* background fix */
        $(".parallax").css("background-attachment", "fixed");
    }

    /* fix vertical when not overflow
     call fullscreenFix() if .fullscreen content changes */
    function fullscreenFix() {
        var h = $('body').height();
        // set .fullscreen height
        $(".content-b").each(function (i) {
            if ($(this).innerHeight() <= h) {
                $(this).closest(".fullscreen").addClass("not-overflow");
            }
        });
    }
    $(window).resize(fullscreenFix);
    fullscreenFix();

    /* resize background images */
    function backgroundResize() {
        var windowH = $(window).height();
        $(".background").each(function (i) {
            var path = $(this);
            // variables
            var contW = path.width();
            var contH = path.height();
            var imgW = path.attr("data-img-width");
            var imgH = path.attr("data-img-height");
            var ratio = imgW / imgH;
            // overflowing difference
            var diff = parseFloat(path.attr("data-diff"));
            diff = diff ? diff : 0;
            // remaining height to have fullscreen image only on parallax
            var remainingH = 0;
            if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
                var maxH = contH > windowH ? contH : windowH;
                remainingH = windowH - contH;
            }
            // set img values depending on cont
            imgH = contH + remainingH + diff;
            imgW = imgH * ratio;
            // fix when too large
            if (contW > imgW) {
                imgW = contW;
                imgH = imgW / ratio;
            }
            //
            path.data("resized-imgW", imgW);
            path.data("resized-imgH", imgH);
            path.css("background-size", imgW + "px " + imgH + "px");
        });
    }
    $(window).resize(backgroundResize);
    $(window).focus(backgroundResize);
    backgroundResize();

    /* set parallax background-position */
    function parallaxPosition(e) {
        var heightWindow = $(window).height();
        var topWindow = $(window).scrollTop();
        var bottomWindow = topWindow + heightWindow;
        var currentWindow = (topWindow + bottomWindow) / 2;
        $(".parallax").each(function (i) {
            var path = $(this);
            var height = path.height();
            var top = path.offset().top;
            var bottom = top + height;
            // only when in range
            if (bottomWindow > top && topWindow < bottom) {
                var imgW = path.data("resized-imgW");
                var imgH = path.data("resized-imgH");
                // min when image touch top of window
                var min = 0;
                // max when image touch bottom of window
                var max = -imgH + heightWindow;
                // overflow changes parallax
                var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow; // fix height on overflow
                top = top - overflowH;
                bottom = bottom + overflowH;
                // value with linear interpolation
                var value = min + (max - min) * (currentWindow - top) / (bottom - top);
                // set background-position
                var orizontalPosition = path.attr("data-oriz-pos");
                orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
                $(this).css("background-position", orizontalPosition + " " + value + "px");
            }
        });
    }
    if (!$("html").hasClass("touch")) {
        $(window).resize(parallaxPosition);
        //$(window).focus(parallaxPosition);
        $(window).scroll(parallaxPosition);
        parallaxPosition();
    }











</script>
</body>
</html>
