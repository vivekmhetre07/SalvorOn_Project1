import { Component , OnInit} from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit{
  workExpList:WorkExperience[]=[
    {
    role:'Intern',
    company:'Salvor On',
    duration:'Feb 2023-Apr2023'
  
},
{
   role:'Intern',
    company:'LetsGrowMore',
    duration:'Sep 2022-Oct 2022'
},
  ];
  constructor() {}
  ngOnInit(): void {
    
  }
}


