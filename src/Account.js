function Account () {
  this.balance = 0
  this.transactions = []

}

Account.prototype.deposit = function(figure, date) {
  this.balance += figure
  var transaction = [`${date} || ${figure.toFixed(2)} || || ${this.balance.toFixed(2)}`]
  this.transactions.push(transaction)
}

Account.prototype.withdrawl = function(figure, date) {
  this.balance -= figure
  var transaction = [`${date} || || ${figure.toFixed(2)} || ${this.balance.toFixed(2)}`]
  this.transactions.push(transaction)
}


Account.prototype.printStatment = function() {
  var statement = "date || credit || debit || balance"
  var i;
  for (i = 0; i < this.transactions.length; i++) {
    statement += (" /n " + this.transactions[i])
  };
  return statement
}
