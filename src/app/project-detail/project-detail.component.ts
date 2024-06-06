import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent {

  currentProject = this.globalService.projects.find(pr => pr.id === parseInt(this.activatedRoute.snapshot.paramMap.get('id')!))

  constructor(
    private activatedRoute: ActivatedRoute,
    private globalService: GlobalServiceService
  ){}
}
