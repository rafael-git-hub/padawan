import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  calcular = [];

  constructor() { }

  divsao(a, b) {
    
    return a / b;
  }

  multiplicacao(a, b) {
    
    return a * b;
  }

  adicao(a, b) {
    
    return a - b;
  }

  soma(a, b) {
    
    return a + b;
  }




}
