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

  it('the account holder can check their balance', function() {
    bankaccount.deposit(20)
    expect(bankaccount.checkBalance()).toEqual(2020)
  });

  it('the account holder can print their bank statement', function(){
    bankaccount.deposit(100)
    bankaccount.deposit(500)
    bankaccount.withdraw(200)
    expect(bankaccount.printStatement()).toEqual('date || credit || debit || balance' + '\n' + '27/02/2020 || 100.00||   || 2100.00' + '\n' + '27/02/2020 || 500.00||   || 2600.00' + '\n' + '27/02/2020 ||   || 200.00  || 2400.00')   
  });

  
});