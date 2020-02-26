describe('BankAccount', function() {
  var bankaccount;

  beforeEach(function() {
    bankaccount = new BankAccount();
  });
  
  it ('is initialized with a balance of 2000', function(){
    expect(bankaccount.balance).toEqual(2000)
  });

  it('the account holder can withdraw money', function() {
    bankaccount.withdraw(20)
    expect(bankaccount.balance).toEqual(1980)
  });

  it('the account holder cannot withdraw money they dont have', function() {
    bankaccount.withdraw(2000)
    expect(function() { bankaccount.withdraw(20); }).toThrowError("Error: insufficient funds to withdraw");
     
  });

  it('the account holder can deposit money', function() {
    bankaccount.deposit(50)
    expect(bankaccount.balance).toEqual(2050)
  });
});