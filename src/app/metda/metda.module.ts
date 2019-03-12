import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule } from '@angular/flex-layout';

import { MetdaRoutes } from './metda.routing';
import { HomeComponent } from './home/home.component';
import { ProjectBasedComponent } from './project-based/project-based.component';
import { InAndOutComponent } from './in-and-out/in-and-out.component';
import { AutoAnalysisComponent } from './auto-analysis/auto-analysis.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MetdaRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    ProjectBasedComponent,
    InAndOutComponent,
    AutoAnalysisComponent
  ]
})

export class MetdaModule { }
