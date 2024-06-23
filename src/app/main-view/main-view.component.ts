import { AfterViewInit, Component } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements AfterViewInit {


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

}
