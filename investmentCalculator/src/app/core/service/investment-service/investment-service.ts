import { Component, signal } from '@angular/core';
import { IResult } from '../../../models/result';

@Component({
  selector: 'app-investment-service',
  imports: [],
  templateUrl: './investment-service.html',
  styleUrl: './investment-service.css'
})
export class InvestmentService {
private result = signal<IResult[]|undefined>(undefined)

getResult(){
  return this.result();
}
addResult(result: IResult){
this.result.apply(result);
}
calculateResult(){
  
}

}
