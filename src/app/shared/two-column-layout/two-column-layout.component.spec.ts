/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  SideNavStubComponent,
  TitleBarStubComponent,
  RouterOutletStubComponent
} from '../../../testing';

import { TwoColumnLayoutComponent } from './two-column-layout.component';

describe('TwoColumnLayoutComponent', () => {
  let component: TwoColumnLayoutComponent;
  let fixture: ComponentFixture<TwoColumnLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TwoColumnLayoutComponent,
        SideNavStubComponent,
        TitleBarStubComponent,
        RouterOutletStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
