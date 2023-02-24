import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';

const routes: Routes = [
  {
    component: PersonalInformationComponent,
    path: 'personal-information'
  },
  {
    component: EducationComponent,
    path: 'education'
  },
  {
    component: WorkExperienceComponent,
    path: 'work-experience'
  },
  {
    component: ContactComponent,
    path: 'contact'
  },
  {
    component:SkillsComponent,
    path:'skills'
  },
  {
    component:ProjectsComponent,
    path:'project'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
