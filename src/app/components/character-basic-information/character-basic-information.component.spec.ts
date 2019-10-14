import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterBasicInformationComponent } from './character-basic-information.component';
import {HttpClientModule} from '@angular/common/http';

describe('CharacterBasicInformationComponent', () => {
  let component: CharacterBasicInformationComponent;
  let fixture: ComponentFixture<CharacterBasicInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterBasicInformationComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterBasicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
