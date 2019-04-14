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

});