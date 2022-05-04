import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractTypesPageComponent } from './contract-types-page/contract-types-page.component';
import { ContractTypesListComponent } from './contract-types-list/contract-types-list.component';

@NgModule({
  declarations: [ContractTypesPageComponent, ContractTypesListComponent],
  imports: [CommonModule],
  exports: [ContractTypesPageComponent],
})
export class ContractTypesModule {}
