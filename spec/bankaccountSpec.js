describe('BankAccount', function() {
  var bankaccount;

  it ('is initialized with a balance of 2000', function(){
    bankaccount = new BankAccount
    expect(bankaccount.balance).toEqual(2000)
  });

  it('the account holder can withdraw money', function() {
    bankaccount = new BankAccount
    bankaccount.withdraw(20)
    expect(bankaccount.balance).toEqual(1980)
  });
});