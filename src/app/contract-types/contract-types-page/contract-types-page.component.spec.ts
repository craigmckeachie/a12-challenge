import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractTypesPageComponent } from './contract-types-page.component';

describe('ContractTypesPageComponent', () => {
  let component: ContractTypesPageComponent;
  let fixture: ComponentFixture<ContractTypesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractTypesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractTypesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
