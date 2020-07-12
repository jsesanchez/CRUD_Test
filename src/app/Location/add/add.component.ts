import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../../Service/service.service';
import { Router } from '@angular/router';
import {Location} from 'src/app/Model/Location';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  
  location:Location = new Location();
  

  GuardarLocation(nombre:String, area: number){
    this.location.name=nombre;
    this.location.area_m2=area;
    this.service.createLocation(this.location).subscribe(data=>{
      alert("Se ha agregado con exito a "+this.location.name+" "+this.location.area_m2);
      this.router.navigate(["listar"]);;
    })
  }  

}
