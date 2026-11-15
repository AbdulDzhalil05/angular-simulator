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

let products: string[] = ['apple', 'tomato', 'limone'];
let numbers: number[] = [12, 15, 60];

const collectionProducts: Collection<string> = new Collection(products);
const collectionNumber: Collection<number> = new Collection(numbers);