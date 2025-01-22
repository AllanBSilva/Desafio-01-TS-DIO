export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  getAccountNumber = (): number => {
    return this.accountNumber
  }
  
  getBalance = (): number => {
    return this.balance
  }
  setBalance = (value:number): void => {
    this.balance = value
  }

  deposit = (value:number): void => {
    if(this.getValidateStatus()){
      this.setBalance(value)
      console.log(`Você depositou: R$ ${value.toFixed(2).replace('.', ',')}`);
    }
  }

  setWithdraw = (saque:number): void => {
    if(this.getValidateStatus() && (this.getBalance() >= saque) ){
      this.balance = this.balance - saque
      console.log(`Voce sacou: R$ ${saque.toFixed(2).replace('.', ',')}`)
    }
    else{
      console.log('Saldo insuficiente!')
    }
  }

  getValidateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida!')
  }
  setValidateStatus = (): void => {
    this.status = !this.status;
  }
}
