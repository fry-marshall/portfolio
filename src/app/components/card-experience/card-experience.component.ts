import { Component, Input } from '@angular/core';
import { Experience } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-card-experience',
  templateUrl: './card-experience.component.html',
  styleUrls: ['./card-experience.component.scss']
})
export class CardExperienceComponent {
  
  @Input() experience: Experience = {}
}
