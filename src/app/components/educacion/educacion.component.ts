import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/education';
import { EducacionService, EducationService } from 'src/app/service/education.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})


// DATABASE
export class EducationComponent implements OnInit {
  educations: Education[] = [];
  isLoading: boolean = true;
  isLogged = false;

  constructor(private educationService:EducationService, private tokenService: TokenService) {}


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }
    this.loadEducation();
  }

  loadEducation(): void {
    this.isLoading = true;
    this.educationService.list().subscribe(data => {
      this.educations=data;
      this.isLoading = false;
    },
    (error) => {
      console.log(error);
      this.isLoading = false;
    });
  }

  delete(id:number){
    if(id != 0){
      this.educationService.delete(id).subscribe(data => {
        this.loadEducation();
      }, err =>{
        alert("no se pudo eliminar ");
        console.log(err);
        
      })
    }
  }
 
}
