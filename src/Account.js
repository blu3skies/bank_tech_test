function Account () {
  this.balance = 0
  this.transactions = []
}

Account.prototype.deposit = function(figure, date) {
  this.balance += figure
  var transaction = [`\ ${date} || ${figure.toFixed(2)} || || ${this.balance.toFixed(2)}`]
  this.transactions.push(transaction)
}

Account.prototype.withdrawal = function(figure, date) {
  if(figure > this.balance) {
    throw new Error("insufficient funds");
  } else {
  this.balance -= figure
  var transaction = [`\ ${date} || || ${figure.toFixed(2)} || ${this.balance.toFixed(2)}`]
  this.transactions.push(transaction)
  }
}
