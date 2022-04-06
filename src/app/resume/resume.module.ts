import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { CvSectionComponent } from './cv-section/cv-section.component';

@NgModule({
  declarations: [ResumeComponent, CvHeaderComponent, CvSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule { }
