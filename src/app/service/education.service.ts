import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  URL = 'https://lescanolucashost.onrender.com/education/';


  constructor(private http:HttpClient) { }

  public list():Observable<Education[]>{
    return this.http.get<Education[]>(this.URL + 'list');
  }

  public getById(id: number):Observable<Education>{
    return this.http.get<Education>(this.URL + `view/${id}`);
  }

  public create(education: Education):Observable<any>{
    return this.http.post<any>(this.URL + 'create', education);
  }

  public update(education: Education):Observable<any>{
    return this.http.put<any>(this.URL + 'update', education);
  }

  public updateById(education: Education, id: number):Observable<any>{
    return this.http.put<any>(this.URL + `update/${id}`, education);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }

}