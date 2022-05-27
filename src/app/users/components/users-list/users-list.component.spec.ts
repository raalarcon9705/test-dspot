/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UsersListComponent } from './users-list.component';
import { AppStoreModule } from 'src/app/store';
import { CoreModule } from 'src/app/core';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  let users = [
    {
      id: 1,
      img: 'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg',
      first_name: 'Jeremy',
      last_name: 'Davis',
      status: 'At work...',
      available: false,
    },
    {
      id: 2,
      img: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg',
      first_name: 'Vlad',
      last_name: 'Baratovich',
      status: 'Hangout out by the pool',
      available: true,
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent],
      imports: [CoreModule, AppStoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('users list should have one child for each user', () => {
    component.users = users as any;
    fixture.detectChanges();
    const compEl = fixture.elementRef.nativeElement;
    const usersListEl: HTMLUListElement = compEl.querySelector('.users-list');
    expect(usersListEl.childElementCount).toBe(2);
  });

  it('spinner should be visible', () => {
    component.loading = true;
    fixture.detectChanges();
    const compEl = fixture.elementRef.nativeElement;
    const spinnerEl = compEl.querySelector('app-spinner');
    expect(spinnerEl).toBeTruthy();
  })

  it('spinner should be hidden', () => {
    const compEl = fixture.elementRef.nativeElement;
    const spinnerEl = compEl.querySelector('app-spinner');
    expect(spinnerEl).toBeFalsy();
  })
});
