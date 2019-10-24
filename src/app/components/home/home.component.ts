import {Component, OnInit} from '@angular/core';
import {Character} from '../../models/character';
import {CharactersService} from '../../services/characters/characters.service';
import {Tools} from '../../utils/tools';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private charactersService: CharactersService;
  private _characters: Array<Character>;
  private _newChar: boolean;
  private _newCharacter: Character;

  constructor(charactersService: CharactersService) {
    this.charactersService = charactersService;
  }

  ngOnInit() {
    this._newCharacter = new Character();
    Tools.PLAYER = 1;
    this._newCharacter.playerId = Tools.PLAYER;
    this.charactersService.getCharactersByPlayerId()
      .subscribe(
      (res: Array<Character>) => {
        this.characters = res;
      }
    );
  }

  get characters(): Array<Character> {
    return this._characters;
  }

  set characters(value: Array<Character>) {
    this._characters = value;
  }

  get newChar(): boolean {
    return this._newChar;
  }

  set newChar(value: boolean) {
    this._newChar = value;
  }


  get newCharacter(): Character {
    return this._newCharacter;
  }

  public save(): void {
    this.charactersService.createNewCharacter(this.newCharacter).subscribe(
      res => {
        console.log('Character successfully created');
      }
    );
  }
}
