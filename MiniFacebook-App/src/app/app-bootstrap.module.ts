import { NgModule } from '@angular/core';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    FormsModule, CollapseModule.forRoot(), BsDropdownModule.forRoot()
  ],
  exports: [ FormsModule, CollapseModule, BsDropdownModule]
})
export class AppBootstrapModule {}

