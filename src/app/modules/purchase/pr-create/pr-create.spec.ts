import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrCreate } from './pr-create';

describe('PrCreate', () => {
  let component: PrCreate;
  let fixture: ComponentFixture<PrCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrCreate],
    }).compileComponents();

    fixture = TestBed.createComponent(PrCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
