import { Component, Input } from '@angular/core';
import { Techno } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-card-techno',
  templateUrl: './card-techno.component.html',
  styleUrls: ['./card-techno.component.scss']
})
export class CardTechnoComponent {
  @Input() techno: Techno = {}
}
