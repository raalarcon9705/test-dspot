/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppStoreModule } from 'src/app/store';
import { CoreModule } from 'src/app/core';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a anchor element when routerLink truthy', () => {
    component.routerLink = '/link';
    fixture.detectChanges();
    const button: HTMLElement = fixture.elementRef.nativeElement.querySelector('.button');
    expect(button.tagName).toBe('A')
  })

  it('should be a button element when routerLink falsy', () => {
    const button: HTMLElement = fixture.elementRef.nativeElement.querySelector('.button');
    expect(button.tagName).toBe('BUTTON')
  })
});
