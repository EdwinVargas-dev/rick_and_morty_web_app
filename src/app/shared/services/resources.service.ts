import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { ajax } from 'rxjs/ajax'

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor() { }

  getResourceByUrl = (url: string) => { return ajax.get(url) }

}
