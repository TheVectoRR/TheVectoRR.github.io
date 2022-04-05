import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { CvHeaderComponent } from './cv-header/cv-header.component';

@NgModule({
  declarations: [ResumeComponent, CvHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule { }
