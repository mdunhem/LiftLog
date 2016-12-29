/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableHeadComponent } from './table-head.component';

describe('TableHeadComponent', () => {
  let component: TableHeadComponent;
  let fixture: ComponentFixture<TableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
