// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Boss } from 'src/app/models/monsters/monsters.interface';

@Injectable({
  providedIn: 'root',
})
export class MonstersService {
  private myStateSubject = new BehaviorSubject<any>(null);
  comparisionState$ = this.myStateSubject.asObservable();
  private apiUrl = 'assets/monsters.json'; // Zakładamy, że plik JSON jest w folderze assets

  constructor(private http: HttpClient) {}

  getBosses(): Observable<Boss[]> {
    return this.http.get<Boss[]>(this.apiUrl);
  }

  updateState(newState: any): void {
    this.myStateSubject.next(newState);
  }
  
  removeFromState(keyToRemove: string): void {
    const currentState = this.myStateSubject.value;
    if (currentState) {
      const { [keyToRemove]: removed, ...newState } = currentState;
      this.myStateSubject.next(newState);
    }
  }
}
