import { Component, OnInit } from '@angular/core';
import { ContractType } from '../shared/contract-type.model';
import { CONTRACT_TYPES } from '../shared/mock-contract-types';

@Component({
  selector: 'app-contract-types-page',
  templateUrl: './contract-types-page.component.html',
  styleUrls: ['./contract-types-page.component.css'],
})
export class ContractTypesPageComponent implements OnInit {
  data: ContractType[] = [];
  constructor() {}

  ngOnInit(): void {
    this.data = CONTRACT_TYPES;
  }
}
