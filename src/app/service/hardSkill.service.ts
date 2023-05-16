import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HardSkill } from '../model/hardSkill';

@Injectable({
  providedIn: 'root'
})
export class HardSkillService {

  URL = 'https://lescanolucashost.onrender.com/hardSkill/';
  

  constructor(private http:HttpClient) { }

  public list():Observable<HardSkill[]>{
    return this.http.get<HardSkill[]>(this.URL + 'list');
  }

  public getById(id: number):Observable<HardSkill>{
    return this.http.get<HardSkill>(this.URL + `view/${id}`);
  }

  public create(hardSkill: HardSkill):Observable<any>{
    return this.http.post<any>(this.URL + 'create', hardSkill);
  }

  public update(hardSkill: HardSkill):Observable<any>{
    return this.http.put<any>(this.URL + 'update', hardSkill);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }

}