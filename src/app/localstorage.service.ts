import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private serviceKey: string = 'app';

  constructor() {}

  public get(key: string): any {
    let storage: any = localStorage.getItem(this.serviceKey);
    if (storage) {
      return JSON.parse(storage)[key];
    }
  }

  public set(key: string, value: any) {
    let storageString = localStorage.getItem(this.serviceKey);
    let storage: any;
    if (!storageString) {
      storage = {};
    } else {
      storage = JSON.parse(storageString);
    }
    storage[key] = value;
    localStorage.setItem(this.serviceKey, JSON.stringify(storage));
  }

  public resetApp() {
    localStorage.clear();
  }
}
