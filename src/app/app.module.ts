import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AtomesModule } from 'library_v2/src/app/components/atomes/atomes.module';
import { DescriptionComponent } from './description/description.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CardComponent } from './components/card/card.component';
import { CardExperienceComponent } from './components/card-experience/card-experience.component';
import { CardSkillComponent } from './components/card-skill/card-skill.component';
import { CardTechnoComponent } from './components/card-techno/card-techno.component';
import { ContactComponent } from './contact/contact.component';
import { MoleculesModule } from 'library_v2/src/app/components/molecules/molecules.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    DescriptionComponent,
    ProjectsComponent,
    ProjectCardComponent,
    AboutMeComponent,
    CardComponent,
    CardExperienceComponent,
    CardSkillComponent,
    CardTechnoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomesModule,
    MoleculesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
