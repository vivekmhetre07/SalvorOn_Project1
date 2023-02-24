import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Automatic water irrigation system',
      technologies: 'Arduino, sensor',
      description: [
        'Worked on Arduino Uno for water irrigation project',
        'Moisture sensor was used'
      ],
    },
    {
      title: 'Portfolio',
      technologies: 'Angular,HTML,CSS,Typescript',
      description: [
        'Worked on Angular for making portfolio',
        'Learned Html,css,typescript to build it',
        ],
    },
    {
      title: 'Login page',
      technologies: 'HTML, CSS, JS, ',
      description: [
        'Worked on Html,css,javascript to build Login page',
        'It is hosted on github',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}