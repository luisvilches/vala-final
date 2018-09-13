import { Component, OnInit } from '@angular/core';
import { ContactFormService } from '../contact-form.service';
import { ContactForm } from '../contact-form';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-modal-contact',
  templateUrl: './modal-contact.component.html',
  styleUrls: ['./modal-contact.component.css']
})
export class ModalContactComponent implements OnInit {
  mail:string;
  name:string;
  tel:string;
  message:string;
  asunto:string;
  body:ContactForm;

  constructor(public mailService:ContactFormService) {}
  ngOnInit() {}

  close(){
    var x = document.querySelector(".modal");
    x.classList.add('hide') 
  }

  alerta(type:boolean,msg:string = ""){
    var alerta = document.querySelector(".alert");
    if(type){
      alerta.classList.remove("hide");
      alerta.classList.add("success");
      alerta.textContent = "Gracias, lo contactaremos a la brevedad";
    } else {
      alerta.classList.remove("hide");
      alerta.textContent = msg;
    }
  }

  send(){
    var space = new RegExp("^\s+$");
    var validEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var validTel = /^(\+?56)?(\s?)(0?9)(\s?)[98765]\d{7}$/;

    if(this.name == null || this.name.length == 0 || space.test(this.name)){
      this.alerta(false, "* Debes completar el campo nombre");
      return false;
    } 

    if(this.mail == null || this.mail.length == 0 || !validEmail.test(this.mail)){
      this.alerta(false, "* Debes completar el campo email con un formato valido");
      return false;
    }

    if(this.tel == null || this.tel.length == 0 || !validTel.test(this.tel)){
      this.alerta(false, "* Debes completar el campo teléfono con un formato valido (+56911112222)");
      return false;
    }

    if(this.message == null || this.message.length == 0 || space.test(this.message)){
      this.alerta(false, "* Debes completar el campo mensaje");
      return false;
    }

    this.sendMails();
  }

  addFormatTel(){
    this.tel = "+569";
  }


  sendMails(){
    this.body = {
      name:this.name,
      mail:this.mail,
      telefono:this.tel,
      mensaje:this.message,
      asunto:this.asunto,
      message:null
    }

    this.mailService.sendMail(this.body).subscribe(response => {
      this.close();
      if(response.message == "Email Send"){
        Swal("Formulario de contacto", "Mensaje enviado correctamente", 'success');
      }
    })
  }

}
