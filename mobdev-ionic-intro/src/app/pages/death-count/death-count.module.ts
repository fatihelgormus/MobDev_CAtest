import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeathCountPageRoutingModule } from './death-count-routing.module';

import { DeathCountPage } from './death-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeathCountPageRoutingModule
  ],
  declarations: [DeathCountPage]
})
export class DeathCountPageModule {}
