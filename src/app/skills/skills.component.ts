import { Component,OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 75,
    },
    
    {
      name: 'HTML, CSS, JS',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C++',
      level: 'Intermediate',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
