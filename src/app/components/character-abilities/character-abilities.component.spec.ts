import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAbilitiesComponent } from './character-abilities.component';
import {HttpClientModule} from '@angular/common/http';

describe('CharacterAbilitiesComponent', () => {
  let component: CharacterAbilitiesComponent;
  let fixture: ComponentFixture<CharacterAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterAbilitiesComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
