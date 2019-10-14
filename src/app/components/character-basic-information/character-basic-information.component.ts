import {Component, Input, OnInit} from '@angular/core';
import {Tools} from '../../utils/tools';
import {CharactersService} from '../../services/characters/characters.service';
import {Character} from '../../models/character';


@Component({
  selector: 'app-character-basic-information',
  templateUrl: './character-basic-information.component.html',
  styleUrls: ['./character-basic-information.component.css']
})
export class CharacterBasicInformationComponent implements OnInit {

  @Input() charId: number;
  private _currentChar: Character;

  constructor(private _charactersService: CharactersService) {
    // Default
  }

  ngOnInit() {
    Tools.CHARACTER = this.charId;
    this.loadBasicInformation();
  }

  private loadBasicInformation() {
    this._charactersService.getCharacterById(this.charId)
      .subscribe((res: Character) => {
        this._currentChar = res;
      });
  }

  get currentChar(): Character {
    return this._currentChar;
  }
}
