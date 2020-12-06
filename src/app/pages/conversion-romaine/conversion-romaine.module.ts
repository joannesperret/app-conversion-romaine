import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConversionRomainePageRoutingModule } from './conversion-romaine-routing.module';

import { ConversionRomainePage } from './conversion-romaine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConversionRomainePageRoutingModule
  ],
  declarations: [ConversionRomainePage]
})
export class ConversionRomainePageModule {}
