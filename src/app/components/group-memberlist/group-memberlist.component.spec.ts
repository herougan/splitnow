import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupMemberlistComponent } from './group-memberlist.component';

describe('GroupMemberlistComponent', () => {
  let component: GroupMemberlistComponent;
  let fixture: ComponentFixture<GroupMemberlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupMemberlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupMemberlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
