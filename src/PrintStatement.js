function PrintStatment(accountHistory) {
  this.history = accountHistory
  this.statement
}

PrintStatment.prototype.statement = function() {
  var statement = "date || credit || debit || balance\n"
  var i;
  for (i = this.history.length - 1; i >= 0 ; i--) {
    statement +=  (this.history[i] + "\n")
  };
  return statement
}