import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  //Para los mails
  sending = false;
  emailSent = false;
  errorSending = false;

  constructor(private fb:FormBuilder){
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.pattern('^[0-9]{9,}$')]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]], 
      message: ['', [Validators.required, Validators.minLength(12)]]
      });
  }
  onSubmit() {
    if (this.contactForm.valid) {
      this.sending = true;
      this.emailSent = false;
      this.errorSending = false;

      const templateParams = {
        from_name: this.contactForm.value.name,
        from_email: this.contactForm.value.email,
        phone: this.contactForm.value.phone,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      emailjs.send(
        'service_l544ztc',  // Reemplaza con tu Service ID
        'template_ht1imf8', // Reemplaza con tu Template ID
        templateParams,
        'Jz_Lu9rdJcGiLcT6U'   // Reemplaza con tu Public Key
      )
      .then(() => {
        this.emailSent = true;
        this.contactForm.reset();
      })
      .catch((error) => {
        console.error('Error:', error);
        this.errorSending = true;
      })
      .finally(() => {
        this.sending = false;
      });
    }
  }
}
