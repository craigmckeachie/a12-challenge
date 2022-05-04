import { Component, Input, OnInit } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';

@Component({
  selector: 'app-contract-types-list',
  templateUrl: './contract-types-list.component.html',
  styleUrls: ['./contract-types-list.component.css'],
})
export class ContractTypesListComponent implements OnInit {
  @Input()
  contractTypes: ContractType[] = [];

  constructor() {}

  ngOnInit(): void {}

  onClick(contractType: ContractType) {
    contractType.editing = true;
  }

  onCancelEdit(contractType: ContractType) {
    contractType.editing = false;
  }
}
