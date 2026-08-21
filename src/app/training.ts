interface IUser {
  name: string;
  surname: string;
  age: number;
  email?: string;
  sex: 'male' | 'female';
  country: string;
  city: string;
}

interface IAdmin extends IUser {
  role: 'admin' | 'superadmin';
}

let uploadStatus: 'loading' | 'success' | 'error';

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';

let users: IAdmin[] = [
  {
    name: 'John',
    surname: 'Doe',
    age: 30,
    sex: 'male',
    email: 'john.doe@example.com',
    country: 'USA',
    city: 'New York',
    role: 'admin'
  },
  {
    name: 'Jane',
    surname: 'Smith',
    age: 25,
    sex: 'female',
    country: 'Canada',
    city: 'Toronto',
    role: 'superadmin'
  },
  {
    name: 'Bob',
    surname: 'Johnson',
    age: 40,
    sex: 'male',
    country: 'UK',
    city: 'London',
    role: 'admin'
  },
  {
    name: 'Alice',
    surname: 'Williams',
    age: 35,
    sex: 'female',
    email: 'alice.williams@example.com',
    country: 'Australia',
    city: 'Sydney',
    role: 'superadmin'
  },
  {
    name: 'Mike',
    surname: 'Brown',
    age: 28,
    sex: 'male',
    email: 'mike.brown@example.com',
    country: 'Germany',
    city: 'Berlin',
    role: 'admin'
  }];

function getSum(a: number, b: number): number {
  return a + b;
}

function changeText(text: string, textFormat: 'uppercase' | 'lowercase' | 'capitalize'): string {
  switch (textFormat) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }
}

function removeChar(text: string, char: string): string {
  return text.replaceAll(char, '');
}

function filterUsers(users: IAdmin[], age: number): IAdmin[] {
  return users.filter(user => user.age > age);
}

console.log(filterUsers(users, 30));