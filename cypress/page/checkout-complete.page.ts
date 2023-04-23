class CheckoutCompletePage {
  private completeContainer: string;
 
  constructor() {
    this.completeContainer='#checkout_complete_container > h2';
    }

  public checkoutOrdenComplete(messageComplete: string): void {
    cy.get(this.completeContainer)
      .should('have.text', messageComplete)     
    }
}

export { CheckoutCompletePage };
