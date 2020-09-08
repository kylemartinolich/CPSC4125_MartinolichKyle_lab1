$(document).ready(
    function(){
        $('.btn-primary').click(function(){
            var newItem = $('.form-control').val();
            $('.list-group').append('<li class="list-group-item list-group-item-success">' + newItem + '</li>');
        });
        
        $('.list-group').on('click','li', function(){
            $(this).remove();    
        });
    }
);