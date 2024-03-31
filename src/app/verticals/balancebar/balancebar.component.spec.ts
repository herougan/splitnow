import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancebarComponent } from './balancebar.component';

describe('BalancebarComponent', () => {
  let component: BalancebarComponent;
  let fixture: ComponentFixture<BalancebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalancebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BalancebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
