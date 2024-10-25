import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private url = 'http://localhost:8085/';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(this.url, { responseType: 'text' });
  }
}
