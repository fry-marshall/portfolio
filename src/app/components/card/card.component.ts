import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-container',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title: string = ''
}
