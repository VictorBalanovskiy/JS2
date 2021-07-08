export default class Card {
    constructor(good) {
        this._data = good;
    }

    getHtml() {
        return `<section>
                    <a class="section_link" href="product.html">
                        <div class="imgWrap">
                            <img src = "img/${this._data.image}" alt = "foto">
                            <div class="cart-hover">
                                <div class="cart-article">
                                    <img class="cart-hover_img" src="img/cart-2.png" alt="cart">
                                    <p class="cart-hover_p">Add to Cart</p>
                                </div>
                            </div>
                        </div>
                        <div class="section_text">
                            <h4 class = "section_h4">${this._data.title}</h4>
                            <p class = "section_p">${this._data.description}</p>
                            <p class = "section_price">${this._data.getPrice()}$</p>
                        </div>
                    </a>
                </section>`;
    }

    render($container, target = 'beforeend') {
        $container.insertAdjacentHTML(target, this.getHtml());
    }
}