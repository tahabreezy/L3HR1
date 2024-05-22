import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCartComponent } from './client-cart.component';

describe('ClientCartComponent', () => {
  let component: ClientCartComponent;
  let fixture: ComponentFixture<ClientCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
