let bars_menu = document.querySelector("#bars-menu");
let navbar_menu = document.querySelector(".navbar_menu");
let menu = document.querySelector(".menu");

let search = document.querySelector(".search");
let input_search = document.querySelector(".input-search");

//show menu bars
bars_menu.onclick = () => {
    // if (navbar_menu.style.top === "-100%") {
    //     navbar_menu.style.top = "11%";
    // } else {
    //     navbar_menu.style.top = "-100%";
    // }
    menu.classList.toggle("fa-times");
    navbar_menu.classList.toggle("active");
}
//show input search
search.onclick = () => {
    input_search.classList.toggle("active");
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        640: {
            items: 2
        },
        820: {
            items: 3
        },
        1200: {
            items: 4
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});