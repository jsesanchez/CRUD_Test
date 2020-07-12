import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../Service/service.service';
import {Location} from 'src/app/Model/Location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  location:Location[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
   
    this.service.getLocation()
    .subscribe(data=>{
      this.location=data;
    })
  }
  

  EditarLocation(location:Location){
    localStorage.setItem("id",location.id.toString());
    this.router.navigate(["editar"]);
  }

  DeleteLocation(location:Location){
    localStorage.setItem("id",location.id.toString());
    this.service.deleteLocation(location)
    .subscribe(data=>{
      this.location=this.location.filter(p=>p==location);
      alert("Terreno Eliminado");
      localStorage.clear;
      window.location.reload();
    })
    
  }
  
}
