
var nav = document.getElementById("nav")
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll == 0){
        nav.classList.remove("bg-dark");
        nav.classList.add("bg-faded")
    }
    else {
        nav.classList.add("bg-dark");
        nav.classList.remove("bg-faded")
    }
});


if(window.location.pathname !== "/index.html"){
    var buttercup;
    readTextFile("./buttercup.json", function(json){
    buttercup = JSON.parse(json);
    for (variant in buttercup){
        buttercup[variant].forEach(value => {
            document.getElementById(variant).innerHTML += `
            <div class="col-lg-4 col-md-6 col-sm-12 p-5">
                <div class="card">
                    <img src="./images/products/default.png" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title text-center">${value.product_name}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-warning text-center">View Product</a>
                    </div>
                    </div>
            </div>
                    `;
        });
    }
});
}

// hover effect.
// const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

// portfolioItems.forEach(portfolioItem => {
//     portfolioItem.addEventListener('mouseover', () => {
//         portfolioItem.childNodes[1].classList.add('img-darken');
//     })

//     portfolioItem.addEventListener('mouseout', () => {
//         portfolioItem.childNodes[1].classList.remove('img-darken');
//     })

//     var AFdiv = document.getElementById("AF"); onclick="location.href='cafe - trial.html';"
// })