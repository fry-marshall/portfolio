import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

  downloadCV(){
    window.open('/assets/CV.pdf', '_blank');
  }

  goToLinkedin(){
    window.open(
      'https://www.linkedin.com/in/kanga-c%C3%A9dric-marshall-fry-099519129',
      '_blank'
    );
  }

  goToGithub(){
    window.open(
      'https://github.com/projet-qualite',
      '_blank'
    );
  }
}
