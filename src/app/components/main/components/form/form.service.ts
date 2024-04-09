import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private readonly http: HttpClient) {}

  postForm(body: any) {
    return this.http.post(
      'https://sheet.best/api/sheets/2e3b8fb8-0651-4f44-a789-2092d7d1e3ff',
      body
    );
  }
}
