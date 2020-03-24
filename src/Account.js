function Account () {
  this.balance = 0
  this.transactions = []
}

Account.prototype.deposit = function(figure, date) {
  this.balance += figure
  var transaction = [`\ ${date} || ${figure.toFixed(2)} || || ${this.balance.toFixed(2)}`]
  this.transactions.push(transaction)
}

Account.prototype.withdrawl = function(figure, date) {
  this.balance -= figure
  var transaction = [`\ ${date} || || ${figure.toFixed(2)} || ${this.balance.toFixed(2)}`]
  this.transactions.push(transaction)
}

Account.prototype.printStatment = function() {
  var statement = "date || credit || debit || balance\n"
  var i;
  for (i = this.transactions.length - 1; i >= 0 ; i--) {
    statement +=  (this.transactions[i] + "\n")
  };
  return statement
}
