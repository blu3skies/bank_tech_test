describe("Account", function() {

  it("Should print the correct balance for in deposit", function() {
    var account = new Account();
    account.deposit(500.00, "01/03/2020")
    expect(account.printStatment()).toEqual("date || credit || debit || balance /n 01/03/2020 || 500.00 || || 500.00")
  })
  
})