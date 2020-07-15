$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $('#navBar1').addClass('floatingNav');
    } else {
        $('#navBar1').removeClass('floatingNav');
    }
});

function readMore(city) {
    let dots = document.querySelector(`.car[data-city="${city}"] .dots`);
    let moreText = document.querySelector(`.car[data-city="${city}"] .more`);
    let btnText = document.querySelector(`.car[data-city="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
document.getElementById("datefield").setAttribute("min", today);
