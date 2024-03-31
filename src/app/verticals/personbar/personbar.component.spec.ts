import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonbarComponent } from './personbar.component';

describe('PersonbarComponent', () => {
  let component: PersonbarComponent;
  let fixture: ComponentFixture<PersonbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
