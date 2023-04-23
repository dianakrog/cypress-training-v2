class ShoppingCartPage {

  private shoppingCart: string;
  private checkoutYourCart: string;

  constructor() {
    this.shoppingCart = '#shopping_cart_container';
    this.checkoutYourCart = '#checkout';
    }

  public goShoppingCart(): void {
    cy.get(this.shoppingCart).click();
    }

  public checkoutCart(): void {
    cy.get(this.checkoutYourCart).click();
    }
}

export { ShoppingCartPage };
