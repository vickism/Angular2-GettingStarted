import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';
import {CamelCasePipe} from "./camelcase.pipe"

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    StarComponent,
    CamelCasePipe
  ],
  declarations: [ StarComponent , CamelCasePipe],
})
export class SharedModule { }
