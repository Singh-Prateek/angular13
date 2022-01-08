import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePickerDemoComponent } from './app-material/date-picker-demo/date-picker-demo.component';
import { DAppComponent } from './change-detect/d-app/d-app.component';
import { AttrDemoComponent } from './custom-attr/attr-demo/attr-demo.component';

const routes: Routes = [
  {
    path:"changedetect",
    component: DAppComponent
  },
  {
    path:"attrdemo",
    component: AttrDemoComponent
  },
  {
    path:"materialdemo",
    component: DatePickerDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
