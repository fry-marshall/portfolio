import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements AfterViewInit, OnInit {

  currentProject = this.globalService.projects.find(pr => pr.id === parseInt(this.activatedRoute.snapshot.paramMap.get('id')!))

  constructor(
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalServiceService
  ){}

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  ngAfterViewInit(): void {
    const lenis = new Lenis()

    lenis.on('scroll', (e: any) => {
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }

  goTo(link?: string){
    window.open(
      link ?? '',
      '_blank'
    );
  }
}
