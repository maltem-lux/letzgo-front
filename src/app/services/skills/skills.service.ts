import { Injectable } from '@angular/core';
import {Skills} from '../../models/skills';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tools} from '../../utils/tools';
import {CharSkills} from '../../models/charSkills';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  public getSkills(): Observable<Array<Skills>> {
    return this.http.get<Array<Skills>>(Tools.SERVER + '/skills')
      .pipe(res => {
        return res;
      });
  }

  public getCharSkills(): Observable<Array<CharSkills>> {
    return this.http.get<Array<CharSkills>>(Tools.SERVER + '/charSkills');
  }
}
