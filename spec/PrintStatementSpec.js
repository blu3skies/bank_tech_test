describe("PrintStatement", function() {

  beforeEach(function() {
    account = jasmine.createSpyObj('account', ['transactions']);
  });

  it("Should print the correct balance for in deposit", function() {
    account.transactions = [[" 01/03/2020 || 500.00 || || 500.00"]]
    printStatement = new PrintStatement(account.transactions)
    expect(printStatement.statement()).toEqual("date || credit || debit || balance\n 01/03/2020 || 500.00 || || 500.00\n")
  })

  it("Should print the correct statement from after and deposit and withdrawl", function() {
    account.transactions = [[" 01/03/2020 || 1000.00 || || 1000.00"],[" 02/03/2020 || || 500.00 || 500.00"]]
    printStatement = new PrintStatement(account.transactions)
    expect(printStatement.statement()).toEqual("date || credit || debit || balance\n 02/03/2020 || || 500.00 || 500.00\n 01/03/2020 || 1000.00 || || 1000.00\n")
  })

})
