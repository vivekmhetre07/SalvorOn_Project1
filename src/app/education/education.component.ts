import { Component,OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit{
educationList:Education[]=[
{
  institute:"MESCOE",
  course:'BE',
  duration:'2020-2024',
  score:'8.5cgpa'
},
{
  institute:"Nowrosjee Wadia College",
  course:'12th',
  duration:'2018-2020',
  score:'70%'
},
{
  institute:"Amar Education Institute",
  course:'10th',
  duration:'2017-2018',
  score:'90%'
},
];
constructor(){}
ngOnInit(): void {
  
}

}
