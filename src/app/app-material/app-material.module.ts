import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerDemoComponent } from './date-picker-demo/date-picker-demo.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatIconsDemoComponent } from './mat-icons-demo/mat-icons-demo.component';
import { MatSubNavigationComponent } from './mat-sub-navigation.component';
import { AppMaterialRoutingModule } from './app-material-routing.module';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [
    DatePickerDemoComponent,
    MatIconsDemoComponent,
    MatSubNavigationComponent
  ],
  imports: [
    CommonModule,
    AppMaterialRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class AppMaterialModule { 
  constructor(private iconRegistry: MatIconRegistry) {
    iconRegistry.setDefaultFontSetClass("material-icons-round", "mat-ligature-font", "blue900");
  }
}
