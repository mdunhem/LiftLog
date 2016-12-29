/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableBodyComponent } from './table-body.component';

describe('TableBodyComponent', () => {
  let component: TableBodyComponent;
  let fixture: ComponentFixture<TableBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
