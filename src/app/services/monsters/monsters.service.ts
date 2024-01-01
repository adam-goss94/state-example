// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Boss } from 'src/app/models/monsters/monsters.interface';

@Injectable({
  providedIn: 'root',
})
export class MonstersService {
  private apiUrl = 'assets/monsters.json'; // Zakładamy, że plik JSON jest w folderze assets

  constructor(private http: HttpClient) {}

  getBosses(): Observable<Boss[]> {
    return this.http.get<Boss[]>(this.apiUrl);
  }
}
