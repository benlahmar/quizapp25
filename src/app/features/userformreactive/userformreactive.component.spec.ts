import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserformreactiveComponent } from './userformreactive.component';

describe('UserformreactiveComponent', () => {
  let component: UserformreactiveComponent;
  let fixture: ComponentFixture<UserformreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserformreactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserformreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
