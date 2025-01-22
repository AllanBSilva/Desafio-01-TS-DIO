import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  setLoan = (value:number): void => {
    if(this.getValidateStatus()){
      this.deposit(value)
      this.getLoan(value)
    }
  }
  getLoan = (value:number): void => {
    console.log(`Você pegou um empréstimo de R$ ${value.toFixed(2).replace('.', ',')}`);
  }
}
