import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItemLocalStorage<K, T>(key: K, value: T): void {
    localStorage.setItem(String(key), JSON.stringify(value));
  }

  getItemLocalStorage<K, T>(key: K): T | null {
    const data: string | null = localStorage.getItem(String(key));
    if (data !== null) return JSON.parse(data)
    else return null;
  }

  removeItemLocalStorage<T>(key: T): void {
    localStorage.removeItem(String(key));
  }

  clearLocalStorage(): void {
    localStorage.clear();
  }
}
