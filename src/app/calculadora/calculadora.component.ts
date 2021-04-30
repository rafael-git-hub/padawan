import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title = 'Calculadora';
  valor0: number;
  valor1: number;
  conta: string;
  result: number;

  constructor() { }

  ngOnInit(): void {
  }

  getOperador(conta) {
    this.conta = conta;
    console.log(conta);
  }

  calcular() {
    switch(this.conta) {
      case '/' :
        this.result = this.valor0 / this.valor1;
        break;
      case '*' :
        this.result = this.valor0 * this.valor1;
        break;
      case '-' :
        this.result = this.valor0 - this.valor1;
        break;
      case '+' :
        this.result = this.valor0 + this.valor1;
        break;
    }
    return this.result;
  }
}

