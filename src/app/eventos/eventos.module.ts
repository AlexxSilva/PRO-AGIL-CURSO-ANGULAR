import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosComponent } from './eventos.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    EventosComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    EventosComponent
  ],
})

export class EventosModule { }
