import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formTitle: string;
  public formDescription: string;
  public email: string;
  constructor() { }

  ngOnInit(): void {
    this.formTitle = "Pagina de contato";
    this.formDescription = "Descricão depois de iniciar o componente";
  }

}
