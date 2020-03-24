describe("Account", function() {

  beforeEach(function() {
    account = new Account();
  });

  it("starting balance should be 0", function(){
    expect(account.balance).toEqual(0.00)
  })

  it("can deposit into account", function(){
    account.deposit(5.00)
    expect(account.balance).toEqual(5.00)
  }) 

  it("can withdrawl from account", function(){
    account.deposit(5.00)
    account.withdrawl(2.00)
    expect(account.balance).toEqual(3.00)
  }) 


})