import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';

import {
  IonContent,
  IonTabs,
  IonHeader,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonTitle,
  IonButtons,
  IonButton,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonImg,
  IonSkeletonText,
  IonInput,
  IonTextarea,
  IonBackButton,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonModal,
  IonNavLink,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRouterOutlet
} from '@ionic/angular/standalone';
import { TranslateDirective, TranslateModule, TranslatePipe } from '@ngx-translate/core';

const sharable: Type<any>[] = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  RouterLink,

  IonContent,
  IonTabs,
  IonHeader,
  IonToolbar,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonTitle,
  IonButtons,
  IonButton,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonImg,
  IonSkeletonText,
  IonInput,
  IonTextarea,
  IonBackButton,
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonModal,
  IonNavLink,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRouterOutlet,

  TranslateModule,
  TranslatePipe,
  TranslateDirective

];

@NgModule({
  imports: [...sharable],
  exports: [...sharable],
})
export class SharedModule {}
