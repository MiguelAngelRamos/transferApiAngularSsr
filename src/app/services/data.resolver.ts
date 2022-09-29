import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { first, Observable, of, tap } from "rxjs";
import { IUser } from "../interfaces/IUser";
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { DataService } from './data.service';
import { isPlatformServer } from '@angular/common';

@Injectable()

export class UserResolver implements Resolve<IUser> {

  constructor(
    private dataService: DataService,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
    ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {
    const userId = route.params['id'];
    const USER_KEY = makeStateKey<IUser>("userKey-" + userId); //* se crea la llave

    //* Existe algo en el almacen con esa llave
    if(this.transferState.hasKey(USER_KEY)) {
      console.log('Existe algo en el almacen con esta llave');
      const user = this.transferState.get(USER_KEY, null)!;
      this.transferState.remove(USER_KEY);
      return of(user);
    } else {
      //* TODO: estamos en servidor
      return this.dataService.getUser(userId)
        .pipe(
          first(),
          tap(user => {
            if(isPlatformServer(this.platformId)) {
              //* ESTAMOS EN EL SERVIDOR
              console.log('Estamos en el servidor');
              //* tomamos la data y hacemos la transferencia
              this.transferState.set(USER_KEY, user);
            }
          })
        )
    }
  }
  
}