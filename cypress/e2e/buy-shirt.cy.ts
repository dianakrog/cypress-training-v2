import {
  ItemPage, LoginPage, ProductListPage,
  ShoppingCartPage, CheckoutCompletePage,
  InformationPage, OverViewPage
} from '../page'

const loginPage = new LoginPage()
const productList = new ProductListPage()
const shoppingCart = new ShoppingCartPage()
const itemPage = new ItemPage()
const checkoutComplete = new CheckoutCompletePage()
const informationPage = new InformationPage()
const overViewe = new OverViewPage()
const userName = 'standard_user'
const pass = 'secret_sauce'
const firstName = 'Cypress'
const lastName = 'Workshop'
const postalCode = '00000'
const messageValidateOrderComplete = 'Thank you for your order!'

describe('Buy a black t-shirt', () => {
  it('then the t-shirt should be bought', () => {
    loginPage.visitLoginPage()
    loginPage.signIn(userName, pass)
    productList.selectTShirt()
    itemPage.addTShirtItem()
    shoppingCart.goShoppingCart()
    shoppingCart.checkoutCart()
    informationPage.checkoutUserInformation(firstName, lastName, postalCode)
    overViewe.finishOverview()
    checkoutComplete.checkoutOrdenComplete(messageValidateOrderComplete)
  })
})
