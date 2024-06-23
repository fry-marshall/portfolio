import { AfterViewInit, Component } from '@angular/core';
import { Book, Experience, Skill } from '../interfaces/interfaces';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements AfterViewInit {

  experiences: Experience[] = [
    {
      date_from: '2022',
      date_to: 'Now',
      role: 'Frontend Developer',
      institution: 'Netatmo',
      place: 'Boulogne-Billancourt, France',
      jobs_step: [
        {
          start: '09/2022',
          end: 'Now',
          position: 'Permanent'
        },
        {
          start: '01/2022',
          end: '07/2022',
          position: 'Intern'
        },
      ],
      skills: [
        {
          type: '',
          technos: [
            {
              img: 'angular.svg',
              name: 'Angular'
            },
            {
              img: 'rxjs.png',
              name: 'Rxjs'
            },
            {
              img: 'ngrx.svg',
              name: 'Ngrx'
            },
            {
              img: 'ts-logo.png',
              name: 'Typescript'
            }
          ]
        },
        {
          type: '',
          technos: [
            {
              img: 'docker.png',
              name: 'Docker'
            },
            {
              img: 'jest-logo.png',
              name: 'Jest'
            },
            {
              img: 'gitlab-ci.png',
              name: 'Gitlab ci'
            },
            {
              img: 'azure.webp',
              name: 'Azure'
            }
          ]
        }
      ],
      description: "Netatmo is a french iOT company that build smart home devices, and its a part of Legrand group. As part of Frontend product team, i work in several projects that we call settings. Those are webapp made in Angular but called in Mobile app as webviews. Netatmo build range of product in BTB and BTC in differents field:- Security- Weather- Energy etc....Each range of product has its own settings apps.I\’m responsible for BTB settings apps.We mainly work with agile methodoly with a sprint of 2 weeks."
    },
    {
      date_from: '2021',
      date_to: '2021',
      role: 'Frontend Developer',
      institution: 'Ophelia Sensors',
      place: 'Paris, France',
      jobs_step: [
        {
          start: '05/2021',
          end: '08/2021',
          position: 'Intern'
        },
      ],
      skills: [
        {
          type: '',
          technos: [
            {
              img: 'laravel.png',
              name: 'Laravel'
            },
            {
              img: 'js.png',
              name: 'Javascript'
            },
            {
              img: 'openlayers.png',
              name: 'Open Layers'
            },
            {
              img: 'threejs.png',
              name: 'Three JS'
            }
          ]
        },
      ],
      description: "Ophelia Sensors is a french iOT start up company that geocube device in order to monitor ground movements. There is a web application that allows users to watch in real time geocubes, and differents values that are retrieved. During my internship, i was responsible to create differents features into the webapp: Integrate Openlayers instead of Mapper to show a map with Geocube Download a report in pdf of values of geocubes. I’ve also collaborate to the redesign of the showcase website: https://ophelia-sensors.com"
    }
  ]

  skills: Skill[] = [
    {
      type: 'Frontend',
      technos: [
        {
          img: 'angular.svg',
          name: 'Angular'
        },
        {
          img: 'rxjs.png',
          name: 'Rxjs'
        },
        {
          img: 'ngrx.svg',
          name: 'Ngrx'
        },
        {
          img: 'ts-logo.png',
          name: 'Typescript'
        }
      ]
    },
    {
      type: 'Backend',
      technos: [
        {
          img: 'nodejs.png',
          name: 'Node JS'
        },
        {
          is_asset_text: true,
          name: 'Express JS'
        },
        {
          img: 'socket.svg',
          name: 'Socket io'
        }
      ]
    },
    {
      type: 'Others',
      technos: [
        {
          img: 'docker.png',
          name: 'Docker'
        },
        {
          img: 'jest-logo.png',
          name: 'Jest'
        },
        {
          img: 'github-actions.png',
          name: 'Github actions'
        },
        {
          img: 'figma.svg',
          name: 'Figma'
        }
      ]
    }
  ]

  educations: Experience[] = [
    {
      date_from: '2020',
      date_to: '2022',
      role: 'Master degree ( MIAGE )',
      institution: 'University of Haute Alsace'
    },
    {
      date_from: '2019',
      date_to: '2020',
      role: 'Bachelor degree ( MIAGE )',
      institution: 'University of Haute Alsace'
    },
    {
      date_from: '2016',
      date_to: '2019',
      role: 'Bachelor degree ( MIAGE )',
      institution: 'FHB University'
    }
  ]

  books: Book[] = [
    {
      title: 'Peau noire masque blanc',
      img: 'pnmb.jpeg'
    },
    {
      title: 'On se reverra',
      img: 'osr.jpeg'
    },
    {
      title: 'Les blessures du silence',
      img: 'lbds.jpeg'
    },
    {
      title: 'L\'ombre des disparus',
      img: 'ldd.jpeg'
    },
  ]

  openPopUp: boolean = false
  experienceToShow: Experience = {}

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.title-about', {
      scrollTrigger: {
        trigger: '.text-about',
        start: "top 50%",
        markers: false
      },
      y: 0,
      delay: .2,
      stagger: .06,
      duration: .1
    })
  }

  openExperiencePopUp(experience: Experience){
    this.experienceToShow = experience
    this.openPopUp = true
  }
}
