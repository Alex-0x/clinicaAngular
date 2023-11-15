import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PazienteService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  AddPaziente(pazienteData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/paziente`, pazienteData);
  }

  UpdatePaziente(pazienteId: number, pazienteData: any): Observable<any> {
    return this.http.patch(
      `${this.apiUrl}/paziente/${pazienteId}`,
      pazienteData
    );
  }

  DeletePaziente(pazienteId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/paziente/${pazienteId}`);
  }

  GetPazienti(): Observable<any> {
    return this.http.get(`${this.apiUrl}/paziente`);
  }
}
