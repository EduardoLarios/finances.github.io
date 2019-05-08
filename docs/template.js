class NewProduct extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }

    setInnerHTML(product) {
        this.root.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./bulma/css/bulma.css">
        <link rel="shortcut icon" href="../images/fav_icon.png" type="image/x-icon">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

        <div class="box cta" style="margin-left:5%">
            <div class="tags has-addons">
                <span class="tag is-dark">${product.name}</span>
                <span class="tag is-primary">Actualizado: ${product.update}</span>
            </div>
        </div>

        <section class="container" style="margin-bottom:5%">
        <div class="columns features">
            <div class="column is-6">
                <div class="card is-shady">
                    <div class="card-content">
                        <div class="content" style="text-align: center">
                            <figure class="image is-300x300">
                                <img src="${product.image}" alt="Smiley face" style="width:400px;height:350px;">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>

            <div class="column is-3" style="margin-top:2%">
                <div class="card is-shady">
                    <div class="card-content">
                        <div class="content" style="text-align: center">
                            <div style="text-align: center;padding: 10px;">
                                <img src="https://upload.wikimedia.org/wikipedia/en/1/14/Walmart_Spark.svg"
                                    alt="Smiley face" height="72" width="72">
                            </div>
                            <div class="content has-text-centered">
                                <div class="control level-item">
                                    <a href="${product.urlwalmart}">
                                        <div class="tags has-addons">
                                            <span class="tag is-dark">Walmart: </span>
                                            <span class="tag is-info">$${product.pricewalmart}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card is-shady" style="margin-top:3%">
                    <div class="card-content">
                        <div class="content" style="text-align: center">
                            <div style="text-align: center;padding: 10px;">
                                <img src="https://ethos.org.mx/wp-content/uploads/2017/09/logo-chedraui.png"
                                    alt="Smiley face" height="180" width="125">
                            </div>
                            <div class="content has-text-centered">
                                <div class="control level-item">
                                    <a href="${product.urlchedraui}">
                                        <div class="tags has-addons">
                                            <span class="tag is-dark">Chedraui: </span>
                                            <span class="tag is-info">$${product.pricechedraui}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="column is-3" style="margin-top:2%">

                <div class="card is-shady">
                    <div class="card-content">
                        <div class="content" style="text-align: center">
                            <div style="text-align: center;padding: 10px;">
                                <img src="http://www.lacomer.com.mx/lacomer/citymarket/images/brand/city.jpg"
                                    alt="Smiley face" height="138" width="138">
                            </div>
                            <div class="content has-text-centered">
                                <div class="control level-item">
                                    <a href="${product.urlcitymarket}">
                                        <div class="tags has-addons">
                                            <span class="tag is-dark">City Market: </span>
                                            <span class="tag is-info">$${product.pricecitymarket}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card is-shady" style="margin-top:3%">
                    <div class="card-content">
                        <div class="content" style="text-align: center">
                            <div style="text-align: center;padding: 10px;margin-bottom: 25px;">
                                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Soriana_logo.svg/1280px-Soriana_logo.svg.png"
                                    alt="Smiley face" height="200" width="200">
                            </div>
                            <div class="content has-text-centered">
                                <div class="control level-item">
                                    <a href="${product.urlsoriana}">
                                        <div class="tags has-addons">
                                            <span class="tag is-dark">Soriana: </span>
                                            <span class="tag is-info">$${product.pricesoriana}</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>`;
    };
}

customElements.define('new-product', NewProduct);
