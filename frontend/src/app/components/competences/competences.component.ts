import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'fdw-competences',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './competences.component.html',
  styleUrl: './competences.component.css'
})
export class CompetencesComponent {
  protected readonly competencesFront = signal<{src:string, alt:string}[]>([
    {src:"assets/Images/html.svg", alt:"logo-html5"},
    {src:"assets/Images/css.svg", alt:"logo-css3"},
    {src:"assets/Images/bootstrap.svg", alt:"logo-bootstrap"},
    {src:"assets/Images/js.svg", alt:"logo-javascript"},
    {src:"assets/Images/angular.svg", alt:"logo-angular"},
    {src:"assets/Images/Nextjs.webp", alt:"logo-nextjs"}
])
}
