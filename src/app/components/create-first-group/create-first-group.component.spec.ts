import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFirstGroupComponent } from './create-first-group.component';

describe('CreateFirstGroupComponent', () => {
  let component: CreateFirstGroupComponent;
  let fixture: ComponentFixture<CreateFirstGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateFirstGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateFirstGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
