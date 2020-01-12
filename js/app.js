$(document).ready(function () {
    $('.ba-menu-btn').on('click', function () {

        $('.ba-menu').toggle();
    });

    $(window).on('resize', function () {
        if ($(this).width() > 991) {
            $('.ba-menu').show();
        } else {
            $('.ba-menu').hide();
        }


    })
    $(window).width()





    $('#showSearch').on('click', function(){

// if ($('.ba-search-form').hasClass('open')){
//     $('#showSearch i').addClass('fa-times');
    
// }else{
//     $('#showSearch i').removeClass('fa-times');
// }


        $('.ba-search-form').toggleClass('open')
        $('#showSearch i').toggleClass('fa-times');
    })








})