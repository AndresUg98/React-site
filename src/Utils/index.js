export const totalPrice = (products) =>{
    /**
     * This function calculates the total price of an order
     * 
     * @param {Array} products cartProducts: Array of objects
     * @returns {number} Total price 
     */
    let sum = 0;
    products.forEach(product => sum += product.price);
    return sum;
};