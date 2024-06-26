import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  goToLinkedin(){
    window.open(
      'https://www.linkedin.com/in/kanga-c%C3%A9dric-marshall-fry-099519129',
      '_blank'
    );
  }

  goToGithub(){
    window.open(
      'https://github.com/fry-marshall',
      '_blank'
    );
  }

}
