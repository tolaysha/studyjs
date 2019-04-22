$(document).ready(function (){
    $('#julia').on('click', function(){
        $('#julia').animate(
            {
                opacity: 'toggle',
                height : 'toggle'
            }, 3000
        );
        $('#qwe')[0].style.display = '';
    });
    $('#qwe').on('click', function(){
        $('#julia').animate(
            {
                opacity: 'toggle',
                height : 'toggle'
            }, 3000
        );
        $('#qwe')[0].style.display = 'none';
    });
    $('#qwe').on('click', function(){
        $('#more').on('click', function () {
            $('#modal')[0].style.display= 'block';
        });
         
    });

});
//альтернативы jquery в nativejs
//$-->document.querySelectorAll('sds').foreach();
//.classlist
//$.ajax --> fetch
//animations