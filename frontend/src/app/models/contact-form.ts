import { FormControl } from "@angular/forms"

export interface ContactModel {
  lastName: FormControl <string | null>;
  firstName: FormControl <string | null>;
  email:  FormControl <string | null>;
  message: FormControl <string | null>;
}
