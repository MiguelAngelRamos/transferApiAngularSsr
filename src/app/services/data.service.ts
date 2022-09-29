import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';

import { Observable, of, tap } from 'rxjs';
import { IComment } from '../interfaces/IComment';
import { IPost } from '../interfaces/IPost';
import { IUser } from '../interfaces/IUser';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  POST_KEY = makeStateKey<IPost[]>("postKey"); //* Creando la llave y asignandole un nombre
  COMMENTS_KEY = makeStateKey<IComment[]>("commentKey");

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any,
    private transferState: TransferState
    ) {}

  // *Para traernos todos los Posts

  getPosts():Observable<IPost[]>{
    if(this.transferState.hasKey(this.POST_KEY)) {
      console.log('Existe algo en almacen con esta llave');
      const post = this.transferState.get(this.POST_KEY, null)!;
      this.transferState.remove(this.POST_KEY);
      return of(post);
    } else {
      return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
        .pipe(tap( post => {
          if(isPlatformServer(this.platformId)) {
            this.transferState.set(this.POST_KEY, post);
          }
        }));
    }
  }

  getComments():Observable<IComment[]> {
    if(this.transferState.hasKey(this.COMMENTS_KEY)) {
      const comment = this.transferState.get(this.COMMENTS_KEY, null)!;
      this.transferState.remove(this.COMMENTS_KEY);
      return of(comment);
    } else {
      return this.http.get<IComment[]>('https://jsonplaceholder.typicode.com/comments')
      .pipe(
        tap(comments => {
          if(isPlatformServer(this.platformId)) {
            this.transferState.set(this.COMMENTS_KEY, comments);
          }
        })
      );
    }
  
  }

  getUser(id: number):Observable<IUser> {
    return this.http.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }

  getUsersAll():Observable<IUser[]>{
    return this.http.get<IUser[]>(`https://jsonplaceholder.typicode.com/users`);
  }
}
