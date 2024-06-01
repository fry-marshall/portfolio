import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent {

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const elements = document.getElementsByClassName('animate')
    console.log(elements)
    for(let i = 0; i < elements.length;i++){

      if(elements[i] !== null){
        const element = elements[i] as HTMLElement

        const isInViewport = (
          element.getBoundingClientRect().top >= 0 &&
          element.getBoundingClientRect().left >= 0 &&
          element.getBoundingClientRect().bottom <= document.documentElement.clientHeight &&
          element.getBoundingClientRect().right <= document.documentElement.clientWidth
        );
        if(isInViewport){
          element.style.animation = "spanFadeIn 1s ease forwards"
        }
      }

    }
  }
}
