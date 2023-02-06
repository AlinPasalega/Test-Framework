export const selectors = {
    shoppinCartIcon:'[class="shopping_cart_container"]',
    continueShoppingButton:'[data-test="continue-shopping"]',
    checkoutButton:'[data-test="checkout"]',
    quantityLabel:'[class="cart_quantity_label"]',
    descriptionLabel:'[class="cart_desc_label"]',
    yourCartTitle:'[class="header_secondary_container"]',
    itemQuantity:'[class="cart_quantity"]' 
}

export const page ={
    url:'cart.html',
    elements: [selectors.checkoutButton, selectors.continueShoppingButton, selectors.descriptionLabel, selectors.quantityLabel],
    selectors,
}