import {Component, input, signal,} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'fdw-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  readonly title = input.required<string>()

  protected readonly menu = signal<{href:string, name:string}[]>([
    {href:"#", name:"ACCUEIL"},
    {href:"#mes-competences", name:"COMPETENCES"},
    {href:"#mes-projets", name:"PROJETS"},
    {href:"#contact", name:"CONTACT"}
  ])

  // Mobile menu activation
  protected readonly active = signal<boolean>(false);

  protected toggleNavbar(): void {
    this.active.update((previous) => previous = !previous)
  }

  protected closeNavbar() {
   this.active.set(false);
  }
}
