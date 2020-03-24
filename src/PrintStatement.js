function PrintStatement(accountHistory) {
  this.history = accountHistory
  this.statement
}

PrintStatement.prototype.statement = function() {
  return this.printHeaders() + this.printHistory()
}


PrintStatement.prototype.printHistory = function() {
  var statement = ""
  var i;
  for (i = this.history.length - 1; i >= 0 ; i--) {
    statement +=  (this.history[i] + "\n")
  };
  console.log(statement)
  return statement
}

PrintStatement.prototype.printHeaders = function() {
  const headers = 'date || credit || debit || balance\n';
  console.log(headers);
  return headers;
};
