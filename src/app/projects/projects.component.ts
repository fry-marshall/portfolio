import { AfterViewInit, Component } from '@angular/core';
import { Project } from '../interfaces/interfaces';
import { GlobalServiceService } from '../global-service.service';
import SplitType from 'split-type';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit {

  projects: Project[] = this.globalService.projects;

  constructor(private globalService: GlobalServiceService){}
  
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.title-project', {
      scrollTrigger: {
        trigger: '.text',
        start: "top 50%",
        markers: false
      },
      y: 0,
      stagger: .06,
      delay: .2,
      duration: .1
    })

    const content = document.querySelector(".content-project");

    const tween = gsap.to(content, {
      x: this.getScrollAmount,
      duration: 3,
      ease: "none",
      onStart: () => {
        console.log("yeah")
        /* document.body.style.position = 'fixed'
        document.body.style.width = '100%' */
      }
    });
    
    
    ScrollTrigger.create({
      trigger:".container-project",
      start:"top 20%",
      end: () => `+=${this.getScrollAmount() * -1}`,
      animation:tween,
      scrub:1,
      invalidateOnRefresh:true,
      markers:false
    })

  }

  getScrollAmount() {
    const content = document.querySelector(".content-project");
    let contentWidth = content!.scrollWidth;
    return -(contentWidth - window.innerWidth);
  }

}
