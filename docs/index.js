import './template.js';
var products;

window.addEventListener('load', () => {
    loadProducts("Store/products.json")
    getProducts();
});

async function getProducts() {
    const json = products;
    const main = document.querySelector('main');

    json.products.forEach(product => {
        const el = document.createElement('new-product');
        el.setInnerHTML(product);
        main.appendChild(el);
    });
}

function loadProducts(filepath) {
    products = loadJSON(filepath);
}

//loads the json contents of a file as a JS Object
function loadJSON(filename) {
    var obj;
    $.ajax({
        async: false,
        url: filename,
        dataType: 'json',
        success: function (data) { obj = data; }
    });
    return obj;
};