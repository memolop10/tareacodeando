import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCartaComponent } from './nueva-carta.component';

describe('NuevaCartaComponent', () => {
  let component: NuevaCartaComponent;
  let fixture: ComponentFixture<NuevaCartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
