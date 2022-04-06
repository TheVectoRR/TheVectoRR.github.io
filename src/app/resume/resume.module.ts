import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { CvHeaderComponent } from './cv-header/cv-header.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ResumeComponent, CvHeaderComponent, CvSectionComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    ResumeComponent
  ]
})
export class ResumeModule { }
