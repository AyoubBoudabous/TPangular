import { inject, Service, signal } from '@angular/core';
import { Park } from '../../park';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const URL = 'http://localhost:3000/parks';

@Service()
export class ParkService {
  private readonly _http = inject(HttpClient);
  private readonly _parks = signal<Park[]>([]);
  parks = this._parks.asReadonly();
  getParks(): Observable<Park[]> {
    return this._http.get<Park[]>(URL).pipe(tap((allParks) => this._parks.set(allParks)));
  }
  getParkById(id: string): Observable<Park> {
    return this._http.get<Park>(`${URL}/${id}`);
  }
  deletePark(id: string): Observable<void> {
    return this._http.delete<void>(`${URL}/${id}`).pipe(
      tap(() => {
        this._parks.update((parks) => parks.filter((park) => park.id != id));
      }),
    );
  }
  updatePark(park: Park): Observable<Park> {
    return this._http.put<Park>(`${URL}/${park.id}`, park).pipe(
      tap((updatedPark) => {
        this._parks.update((parks) => parks.map((p) => (p.id == updatedPark.id ? updatedPark : p)));
      }),
    );
  }
}
