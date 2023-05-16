import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SoftSkill } from '../model/softSkill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  URL = environment.URL + 'hardSkill/';
  

  constructor(private http:HttpClient) { }

  public list():Observable<SoftSkill[]>{
    return this.http.get<SoftSkill[]>(this.URL + 'list');
  }

  public getById(id: number):Observable<SoftSkill>{
    return this.http.get<SoftSkill>(this.URL + `view/${id}`);
  }

  public create(softSkill: SoftSkill):Observable<any>{
    return this.http.post<any>(this.URL + 'create', softSkill);
  }

  public update(softSkill: SoftSkill):Observable<any>{
    return this.http.put<any>(this.URL + 'update', softSkill);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }
}