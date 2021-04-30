import { Component, OnInit } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formTitle: string;
  public formDescription: string;
  public nomeDigitado: string;
  public emailsLocal = [];


  constructor(private emailService: EmailService) {
    this.emailsLocal = emailService.emails;
  }

  ngOnInit(): void {
    this.formTitle = "Pagina de contato";
    this.formDescription = "Descricão depois de iniciar o componente";
  }

  public AdicionarEmail() {
    if (this.nomeDigitado) {
      this.emailService.emails.push(this.nomeDigitado + '@hotmail.com');
    }
  }
   



}
