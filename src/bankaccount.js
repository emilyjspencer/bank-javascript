function BankAccount(){
  this.balance = 2000;
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount
};

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount
};