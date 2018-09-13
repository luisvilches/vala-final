import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ContactForm } from './contact-form';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {
  private urlMail:string = "https://sevicemailervaladigital.herokuapp.com/send";
  
  constructor(private http:HttpClient) { }

  sendMail(data){
    let form = new FormData();
    form.append("mail",data.mail);
    form.append("name",data.name);
    form.append("telefono",data.telefono);
    form.append("asunto",data.asunto);
    form.append("mensaje",data.mensaje);
    return this.http.post<ContactForm>(this.urlMail,form);
  }

}
