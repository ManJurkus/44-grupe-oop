import { Product } from "./Product.js";

class Shop {
    /**
     * 
     * @param {string} name Parduotuves pavadinimas
     * @param {string} currency Valiuta, kuria prekiaujame parduotuveje
     */
    constructor(name, currency) {
        /** @type {string} name */
        this.name = name;
        /** @type {string} currency */
        this.currency = currency;
        /** @type {number} lastProductId */
        this.lastProductId = 0;
        /** @type {Product[]} inventor */
        this.inventor = [];
    }

    intro() {
        return `Sveiki atvyke i ${this.name}!`;
    }

    /**
     * Parduotuves inventoriaus papildymas nauja preke.
     * 
     * @param {string} name Produkto pavadinimas
     * @param {number} buyPrice Produkto isigijimo kaina
     * @param {number} sellPrice Produkto pardavimo kaina
     * @param {number} amount Kiekis vienetais
     * @returns {[boolean, string]} Pranesimas apie produkto pridejima i inventoriu; Boolean - ar kylo klaidu? String - pranesimo tekstas.
     */
    addProduct(name, buyPrice, sellPrice, amount) {
        const product = new Product(++this.lastProductId, name, buyPrice, sellPrice, amount);
        this.inventor.push(product);

        return [false, '✅ Preke prideta'];
    }

    /**
     * 
     * @param {number} productId
     * @returns {[boolean, string | Product]} Pranesimas apie produkta is inventoriaus; Boolean - ar kylo klaidu? String - pranesimo tekstas; Product - produkto objektas.
     */
    findProductById(productId) {
        let foundProduct = null;

        for (const product of this.inventor) {
            if (product.id === productId) {
                foundProduct = product;
                break;
            }
        }

        if (!foundProduct) {
            return [true, `❌ Nepavyko rasti prekes pagal id: ${productId}`];
        }

        return [false, foundProduct];
    }

    /**
     * 
     * @param {number} productId 
     * @param {number} amount 
     * @returns {[boolean, string]} Pranesimas apie produkto pridejima i inventoriu; Boolean - ar kylo klaidu? String - pranesimo tekstas.
     */
    sellProduct(productId, amount) {
        const [err, result] = this.findProductById(productId);
        if (err) {
            return [err, result];
        }

        const foundProduct = result;
        if (foundProduct.amount < amount) {
            return [true, `❌ Nera norimo ${foundProduct.name} kiekio: nori ${amount}; turim ${foundProduct.amount}.`];
        }

        foundProduct.amount -= amount;

        return [false, '✅ Preke parduota'];
    }

    /**
     * 
     * @param {number} productId
     * @returns {[boolean, string]} Pranesimas apie produkto pasalinima is inventoriaus; Boolean - ar kylo klaidu? String - pranesimo tekstas.
     */
    dropProduct(productId) {
        const [err, result] = this.findProductById(productId);
        if (err) {
            return [err, result];
        }

        const foundProduct = result;
        foundProduct.amount = 0;

        return [false, '✅ Atsikratytas prekes likutis'];
    }

    /**
     * 
     * @param {number} productId 
     * @param {number} amount 
     * @returns {[boolean, string]} Pranesimas apie produkto papildyma inventoriuje; Boolean - ar kylo klaidu? String - pranesimo tekstas.
     */
    fillInventor(productId, amount) {
        const [err, result] = this.findProductById(productId);
        if (err) {
            return [err, result];
        }

        const foundProduct = result;
        foundProduct.amount += amount;

        return [false, '✅ Preke papildyta'];
    }

    summary() {
        const listStrings = [];
        const title = `Parduotuves "${this.name}" ataskaita:`;
        let list = 'Nera prekiu.';

        if (this.inventor.length) {
            let i = 0;

            for (const { name, acquisitionPrice, sellingPrice, amount } of this.inventor) {
                listStrings.push(`${++i}) ${name}: ${acquisitionPrice}; ${sellingPrice}; ${amount};`);
            }

            list = listStrings.join('\r\n');
        }

        let longestString = title.length;
        for (const str of listStrings) {
            if (str.length > longestString) {
                longestString = str.length;
            }
        }

        const line = '='.repeat(longestString);

        return `\r\n${line}\r\n${title}\r\n${line}\r\n${list}\r\n${line}\n`;
    }
}

export { Shop };