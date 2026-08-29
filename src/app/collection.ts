export class Collection<T> {

  private items: T[] = [];

  constructor(items: T[]) {
    this.items = items;
  }

  getItems(): T[] {
    return this.items;
  }

  getItem(index: number): T {
    return this.items[index];
  }

  clearItems(): void {
    this.items = [];
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  replaceItem(index: number, item: T): void {
    this.items[index] = item;
  }
}

let products = ['apple', 'tomato', 'limone'];
let numbers = [12, 15, 60];

const collectionProducts = new Collection(products);
const collectionNumber = new Collection(numbers);