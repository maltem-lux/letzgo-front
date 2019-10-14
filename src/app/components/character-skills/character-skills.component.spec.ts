import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSkillsComponent } from './character-skills.component';
import {HttpClientModule} from '@angular/common/http';

describe('CharacterSkillsComponent', () => {
  let component: CharacterSkillsComponent;
  let fixture: ComponentFixture<CharacterSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSkillsComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
