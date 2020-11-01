import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CualquieraComponent } from './cualquiera.component';

describe('CualquieraComponent', () => {
  let component: CualquieraComponent;
  let fixture: ComponentFixture<CualquieraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CualquieraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CualquieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
