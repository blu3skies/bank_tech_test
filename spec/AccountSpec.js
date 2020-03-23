describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  it("can deposit into account", function(){
    account.deposit(5.00)
    expect(account.balance).toEqual(5.00)
  }) 

  it("can withdrawl from account", function(){
    account.deposit(5.00)
    account.withdrawl(2.00)
    expect(account.balance).toEqual(3.00)
  }) 

  it("Should print the correct balance for in deposit", function() {
    account.deposit(500.00, "01/03/2020")
    expect(account.printStatment()).toEqual("date || credit || debit || balance\n 01/03/2020 || 500.00 || || 500.00\n")
  })

  it("Should print the correct statement from after and deposit and withdr", function() {
    account.deposit(1000.00, "01/03/2020")
    account.withdrawl(500.00, "02/03/2020")
    expect(account.printStatment()).toEqual("date || credit || debit || balance\n 02/03/2020 || || 500.00 || 500.00\n 01/03/2020 || 1000.00 || || 1000.00\n")
  })

})