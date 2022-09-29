import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhoto } from '../interfaces/IPhoto';

@Injectable({
  providedIn: 'root'
})
export class DataPhotoService {

  constructor(private httpClient : HttpClient) { }

  getPhotos():Observable<IPhoto[]> {
    return this.httpClient.get<IPhoto[]>(`https://jsonplaceholder.typicode.com/photos`);
  }

  getPhotosId(id: number):Observable<IPhoto> {
    return this.httpClient.get<IPhoto>(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }
}
