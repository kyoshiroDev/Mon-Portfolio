import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  protected readonly http = inject(HttpClient)
  protected readonly apiUrl = "http://localhost:3000/send-email"

  formContact(formData: any) {
    this.http.post(this.apiUrl, formData).subscribe({
      next: response => console.log("Réponse du serveur :", response),
      error: err => console.error("Erreur :", err)
    });
  }
  
}
