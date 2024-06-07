import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements AfterViewInit {


  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.title-description', {
      scrollTrigger: {
        trigger: '.text-description',
        start: "top 50%",
        markers: false
      },
      y: 0,
      stagger: .05,
      duration: .5,
      ease: "expo.inOut",
    })
  }

}
