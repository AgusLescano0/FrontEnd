import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonaService { 

  URL = environment.URL + 'persona/';

  
  constructor(private http:HttpClient) { }

  public list():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL + 'list');
  }

  public getById(id: number):Observable<Persona>{
    return this.http.get<Persona>(this.URL + `view/${id}`);
  }

  public create(person: Persona):Observable<any>{
    return this.http.post<any>(this.URL + 'create', person);
  }

  public update(person: Persona):Observable<any>{
    return this.http.put<any>(this.URL + 'update', person);
  }

  public delete(id: number):Observable<any>{
    return this.http.delete<any>(this.URL + `delete/${id}`);
  }

}