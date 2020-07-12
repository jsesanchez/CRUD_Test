import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Location } from '../Model/Location';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}
  URLLoc="http://localhost:8080/location"
  

  getLocation(){
    return this.http.get<Location[]>(this.URLLoc); 
  }
  createLocation(location:Location){
    return this.http.post<Location>(this.URLLoc,location);
  }
  getIDLocation(id:number){
    return this.http.get<Location>(this.URLLoc+"/"+id);
  }
  updateLocation(location:Location){
    return this.http.put<Location>(this.URLLoc+"/"+location.id,location);
  }
  deleteLocation(location:Location){
    return this.http.delete<Location>(this.URLLoc+"/"+location.id);
  }
}
