describe("Account", function() {

  it("can deposit into account", function(){
    var account = new Account();
    account.deposit(5.00)
    expect(account.balance).toEqual(5.00)
  }) 

  it("can withdrawl from account", function(){
    var account = new Account();
    account.deposit(5.00)
    account.withdrawl(2.00)
    expect(account.balance).toEqual(3.00)
  }) 



  it("Should print the correct balance for in deposit", function() {
    var account = new Account();
    account.deposit(500.00, "01/03/2020")
    expect(account.printStatment()).toEqual("date || credit || debit || balance /n 01/03/2020 || 500.00 || || 500.00")
  })

})