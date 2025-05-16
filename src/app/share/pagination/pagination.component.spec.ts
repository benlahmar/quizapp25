import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

//test case de la fonction goto
  it('should emit the correct page number when goto is called', () => {
    spyOn(component.notif, 'emit');
    const pageNumber = 2;
    component.goto(pageNumber);
    expect(component.p).toBe(pageNumber);
    expect(component.notif.emit).toHaveBeenCalledWith(pageNumber);
  });
 
  it('abcd', () => {
  
    spyOn (component, 'goto');
    const x = 2;
    component.goto(x);
    expect(component.p).toEqual(x);
    
  });
  it('should update the page number when goto is called', () => {
    const pageNumber = 3;
    component.goto(pageNumber);
    expect(component.p).toBe(pageNumber);
  });

  it('should emit the page number when goto is called', () => {
    spyOn(component.notif, 'emit');
    const pageNumber = 1;
    component.goto(pageNumber);
    expect(component.notif.emit).toHaveBeenCalledWith(pageNumber);
  });
   
});
