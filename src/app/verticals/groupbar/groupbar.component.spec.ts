import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupbarComponent } from './groupbar.component';

describe('GroupbarComponent', () => {
  let component: GroupbarComponent;
  let fixture: ComponentFixture<GroupbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
