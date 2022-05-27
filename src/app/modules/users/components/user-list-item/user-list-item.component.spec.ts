/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserListItemComponent } from './user-list-item.component';
import { AppStoreModule } from 'src/app/store';
import { CoreModule } from 'src/app/core';

describe('UserListItemComponent', () => {
  let component: UserListItemComponent;
  let fixture: ComponentFixture<UserListItemComponent>;
  let user = {
    id: 1,
    img: 'https://s3.amazonaws.com/uifaces/faces/twitter/csswizardry/128.jpg',
    first_name: 'Jeremy',
    last_name: 'Davis',
    status: 'At work...',
    available: false,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListItemComponent ],
      imports: [CoreModule, AppStoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListItemComponent);
    component = fixture.componentInstance;
    component.user = user as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain user full name', () => {
    const compEl = fixture.elementRef.nativeElement as HTMLElement;
    const nameEl = compEl.querySelector('.full-name');
    expect(nameEl?.textContent?.includes(user.first_name + ' ' + user.last_name)).toBeTrue()
  })
});
