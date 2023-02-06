export const selectors = {
    userNameField:'[data-test="username"]',
    passwordField:'[data-test="password"]',
    loginButton:'[data-test="login-button"]',
    errorMessage:'[data-test="error"]',
}

export const page ={
    url:'/',
    elements: [selectors.userNameField, selectors.passwordField, selectors.userNameField],
    selectors,
}
