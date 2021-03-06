import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Character} from '../../models/character';
import {Tools} from '../../utils/tools';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getCharactersByPlayerId(): Observable<Array<Character>> {
    return this.http.get<Array<Character>>(Tools.SERVER + '/characters')
      .pipe(res => {
        return res;
      });
  }

  public getCharacterById(charId: number): Observable<Character> {
    return this.http.get<Character>(Tools.SERVER + '/characters?charId=' + charId)
      .pipe(res => {
        return res;
      });
  }

  public createNewCharacter(character: Character): Observable<Character> {
    console.log(character);
    return this.http.post<Character>(Tools.SERVER + '/newCharacter', character)
      .pipe(res => {
        return res;
      });
  }
}
