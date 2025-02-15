import {Component} from '@angular/core';
import {HeaderComponent} from "./components/header/header.component";
import {HerosSectionComponent} from "./components/heros-section/heros-section.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";
import {CompetencesComponent} from "./components/competences/competences.component";
import {ProjetsComponent} from "./components/projets/projets.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FooterComponent} from "./components/footer/footer.component";

@Component({
  selector: 'fdw-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HerosSectionComponent,
    AboutUsComponent,
    CompetencesComponent,
    ProjetsComponent,
    ContactComponent,
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Forge Digital Web';
}
