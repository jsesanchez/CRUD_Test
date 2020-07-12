import { Component } from '@angular/core';
import { ServiceService} from './Service/service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDTest2';
  
  constructor(private service:ServiceService, private router:Router){}

  
recargar(){
  this.router.navigate([""]);
}

add(){
  console.log("Entro al boton");
  this.router.navigate(["add"]);
}

listar(){
  this.router.navigate(["listar"]);
  window.location.reload();
}

  ngOnInit() {
    
  }
}
