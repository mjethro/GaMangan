
// parse product.
var products;
//usage:
readTextFile("./products.json", function(json){
  products = JSON.parse(json);
  console.log(products);
});

// hover effect.
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })

    var AFdiv = document.getElementById("AF"); onclick="location.href='cafe - trial.html';"
})