function Account () {
  this.balance = 0
  this.transactions = []

}

Account.prototype.deposit = function(figure, date) {
  this.balance += figure
  var transaction = `date || credit || debit || balance /n ${date} || ${figure.toFixed(2)} || || ${this.balance.toFixed(2)}`
  this.transactions.push(transaction)
}

Account.prototype.printStatment = function() {
  return this.transactions[0]
}
