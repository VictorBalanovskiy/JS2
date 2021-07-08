import idGenerator from "../utils/idGenerator.js";

export default class Good {
    constructor({
        title,
        description,
        image,
        price,
        discount,
        quantity
    }) {
        this.id = idGenerator();
        this.title = title;
        this.description = description;
        this.image = image;
        this._price = price;
        this._discount = discount;
        this._quantity = quantity;
    }

    getPrice() {
        return this._price - this._discount;
    }
}