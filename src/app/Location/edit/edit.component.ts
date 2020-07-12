import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../../Service/service.service';
import {Location} from 'src/app/Model/Location';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  location:Location = new Location();
  ngOnInit(): void {
    this.EditarLocation();

  }

  
  EditarLocation(){
    let id= localStorage.getItem("id");
    this.service.getIDLocation(+id)
    .subscribe(data =>{
      this.location=data;
    })
  }


  Cancelar(){
    this.router.navigate(["listar"]);
  }  

  ActualizarLocation(location:Location){
    this.service.updateLocation(location)
    .subscribe(data=>{
      this.location=data;
      alert("Se actualizo el terreno");
      this.router.navigate(["listar"])
    })
  }

}
