import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigstoreComponent } from './configstore.component';

describe('ConfigstoreComponent', () => {
  let component: ConfigstoreComponent;
  let fixture: ComponentFixture<ConfigstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigstoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfigstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
