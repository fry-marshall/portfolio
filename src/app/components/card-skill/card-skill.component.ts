import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.scss']
})
export class CardSkillComponent {
  @Input() skill: Skill = {}
}
