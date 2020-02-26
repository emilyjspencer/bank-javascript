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
});