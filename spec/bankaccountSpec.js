describe('BankAccount', function() {
  var bankaccount;

  it ('is initialized with a balance of 2000', function(){
    bankaccount = new BankAccount
    expect(bankaccount.balance).toEqual(2000)

  });
});