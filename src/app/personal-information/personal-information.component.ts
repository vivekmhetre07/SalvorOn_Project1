import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit{
  myData:string[][]=[
    ['Name :','Vivek Mhetre'],
    ['DOB:','19/05/2002'],
    ['Education:','B.E.(2024)'],
    ['Interest:','travelling'],
  ];
  aboutMe:string[]=[
   ' Hi,I am Student of TE engineering in MESCOE.',
   'Currently I am looking for opportunity in IT service to test my skills and get experience.'
  ];

  constructor(){}
  ngOnInit(): void {
    
  }

}
