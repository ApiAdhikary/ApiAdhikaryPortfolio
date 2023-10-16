$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

     // toggle menu/navbar script

     $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

     });
        // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Computer Science Engineer","Computer Science Engineer","Computer Science Engineer","Computer Science Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Computer Science Engineer","Computer Science Engineer","Computer Science Engineer","Computer Science Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    let form = document.getElementById("contact-form");

    async function handleSubmit(event) {
        event.preventDefault();
        let data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                Swal.fire(
                    'Success',
                    'Thanks for your submission!',
                    'success'
                )
                form.reset()
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        console.log(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        Swal.fire(
                            'Error',
                            'Oops! There was a problem submitting your form',
                            'error'
                        )
                    }
                })
            }
        }).catch(error => {
            Swal.fire(
                'Error',
                'Oops! There was a problem submitting your form',
                'error'
            )
        });
    }
    form.addEventListener("submit", handleSubmit)
});

$(function(){
    $('.menu li a').on('click', function(){
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 100);
        return false
    });

});

