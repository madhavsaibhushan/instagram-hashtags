import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { DataViewModule } from 'primeng/dataview';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { DisplayHashtagsComponent } from '../display-hashtags/display-hashtags.component';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ButtonModule } from 'primeng/button';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    DataViewModule,
    InputTextModule,
    RippleModule,
    ToggleButtonModule,
    ButtonModule


  ],
  declarations: [FolderPage, DisplayHashtagsComponent]
})
export class FolderPageModule { }
