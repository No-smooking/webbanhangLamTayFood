$(document).ready(function(){
    $('.navbar__nav--account').click(function(){
        $('.show__item--account').show();
    })
    $('.navbar__nav--account-show').click(function(){
        $('.show__item--account').show();
    })
    $('.hide__item--account').click(function(){
        $('.show__item--account').hide();
    })
    $('.login__form i').click(function(){
        const types = $('#password').attr("type")
        types == "password"? $('#password').attr("type","text"): $('#password').attr("type",'password')
    })
    $('.navbar__menu--icons').click( function(){
        const idHeader = $(this).closest("header").attr("id");
        console.log(idHeader) 
        
        if(idHeader == "header"){
            $('#header').hide()
            $('.banner').hide()
            $('#menu__main').show()
        }else{
            $('#menu__main').hide()
            $('#header').show()
            $('.banner').show()

        }
    })
    $('.link__home').click(()=>{
        $('#menu__main').hide()
        $('#header').show()
        $('.banner').show()
    })
    $('.navbar__close--icons').click(function(){
        const idLogin = $('.show__item--account').attr("id")
        if(idLogin == "navbar__login"){
            $('.show__item--account').hide();
        }
    })
})