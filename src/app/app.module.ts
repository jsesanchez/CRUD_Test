import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditComponent } from './Location/edit/edit.component';
import { AddComponent } from './Location/add/add.component';
import {ServiceService} from '../app/Service/service.service';
import { HttpClientModule} from '@angular/common/http';
import { ListarComponent } from './Location/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    AddComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
