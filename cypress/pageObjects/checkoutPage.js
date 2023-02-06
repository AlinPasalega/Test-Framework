export const selectors = {
    
    firsNameField:'[data-test="firstName"]',
    lastNameField:'[data-test="lastName"]',
    postalCodeField:'[data-test="postalCode"]',
    continueButton:'[data-test="continue"]',
    errorMessage:'[class="error-message-container error"]',
    cancelButton:'[data-test="cancel"]',
    checkoutOverview:'[class="header_secondary_container"]',
    checkoutSummary:'[class="checkout_summary_container"]',
    finishButton:'[data-test="finish"]',
    checkoutImage:'[class="pony_express"]',
    backHomeBtn:'[data-test="back-to-products"]',
    thankYouHeader:'[class="complete-header"]',
    cartList:'[class="cart_list"]',
    errorText:'[data-test="error"]'    
}

export const page ={
    url:'/checkout-step-one.html',
    elements: [selectors.firsNameField, selectors.lastNameField, selectors.postalCodeField, selectors.continueButton],
    selectors,
}
