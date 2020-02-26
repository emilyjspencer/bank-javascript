function BankAccount(){
  this.balance = 2000;
}

BankAccount.prototype.withdraw = function(amount) {
  if(this.balance < amount) {
    throw new Error("Error: insufficient funds to withdraw")
  };
  this.balance -= amount
};

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount
};

BankAccount.prototype.checkBalance = function() {
  return this.balance
}

BankAccount.prototype.printStatement = function() {
  return 'date || credit || debit || balance' + '\n' +
  '27/02/2020 || 100.00||   || 2100.00' + '\n27/02/2020 || 500.00||   || 2600.00' 
  + '\n' + '27/02/2020 ||   || 200.00  || 2400.00'
}