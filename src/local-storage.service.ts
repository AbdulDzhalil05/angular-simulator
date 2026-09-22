import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItemLocalStorage<K, T>(key: K, value: T): void {
    localStorage.setItem(String(key), JSON.stringify(value));
  }

  getItemLocalStorage<K, T>(key: K): T {
    const data = localStorage.getItem(String(key));
    return JSON.parse(data!);
  }

  removeItemLocalStorage<T>(key: T): void {
    localStorage.removeItem(String(key));
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
