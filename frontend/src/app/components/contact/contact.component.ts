import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactModel } from '../../models/contact-form';
import { ContactFormService } from '../../services/contact-form.service';

@Component({
  selector: 'fdw-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {

  protected formContactService = inject(ContactFormService)

  protected contactForm: FormGroup<ContactModel> = new FormGroup<ContactModel>({
    lastName: new FormControl <string | null>(null, [Validators.required, Validators.minLength(1)]),
    firstName: new FormControl <string | null>(null, [Validators.required, Validators.minLength(1)]),
    email: new FormControl <string | null>(null, [Validators.required, Validators.email]),
    message: new FormControl <string | null>(null)
  })

  onSubmit() {
    if(this.contactForm.valid){
      const formData = this.contactForm.getRawValue()
      if(formData.message == null){
        formData.message = "Aucun message envoyer"
      } else {
        formData.message = formData.message
      }
      this.formContactService.formContact(formData)
      this.contactForm.reset()
    }
  }
}
