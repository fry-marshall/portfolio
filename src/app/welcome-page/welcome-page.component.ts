import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.introduction', {
      y: 0,
      stagger: .15,
      delay: .2,
      duration: .1
    })

    gsap.to('.tips app-text', {
      y: 0,
      delay: .4,
      duration: .1
    })

    gsap.to('.anim div', {
      y: 0,
      delay: .5,
      stagger: .05,
      duration: .1
    })
  }

  downloadCV(){
    window.open('/assets/CV-FRY.pdf', '_blank');
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

  scrollTo(id: string){
    document.getElementById(id)!.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
