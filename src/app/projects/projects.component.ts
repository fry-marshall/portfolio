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
  }

}
