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