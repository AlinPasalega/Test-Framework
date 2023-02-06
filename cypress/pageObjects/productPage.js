export const selectors = {
    productFilter:'[data-test="product_sort_container"]',
    menuBurger:'[class="bm-burger-button"]',
    inventoryContainer:'[class="inventory_container"]',
    shoppingCart:'[class="shopping_cart_container"]',
    inventoryItem:'[class="inventory_item"]',
    productImage:'[class="inventory_item_img"]',
    backPackItem:'[data-test="add-to-cart-sauce-labs-backpack"]',
    bikeLightItem:'[data-test="add-to-cart-sauce-labs-bike-light"]',
    tshirtItem:'[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
    removeBackPack:'[data-test="remove-sauce-labs-backpack"]',
    removeTShirt:'[data-test="remove-sauce-labs-bolt-t-shirt"]',
    shoppingCartBadge:'[class="shopping_cart_badge"]',
    itemName:'[class="inventory_item_name"]',
    itemDetails:'[class="inventory_details_desc large_size"]',
    priceTag:'[class="inventory_details_price"]',
    oneSieItem:'[data-test="add-to-cart-sauce-labs-onesie"]',
    backToProductBtn:'[data-test="back-to-products"]',
    productImage:'[class="inventory_details_img"]',
    fleeceJacketItem:'[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
    removeFleeceJacket:'[data-test="remove-sauce-labs-fleece-jacket"]',
    itemThumbail:'[class="inventory_item_img"] [class="inventory_item_img"]',
    itemList:'[class="inventory_container"]'
}

export const page ={
    url:'/inventory.html',
    elements: [selectors.shoppingCart, selectors.inventoryContainer, selectors.productFilter, selectors.menuBurger],
    selectors,
}