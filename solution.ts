
const formatValue = (
  value: string | number | boolean,
): string | number | boolean => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
};


type Input = string | number[];

const getLength = (input: Input): number => {
  if (typeof input === "string") {
    return input.length;
  } else if (Array.isArray(input)) {
    return input.length;
  }
  return 0;
};


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}



type Item = {
  title: string;
  rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
  return items.filter((item) => item.rating >= 4);
};



type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user) => user.isActive === true);
};


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book) => {
  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? "Yes" : "No"}`;
}


function getUniqueValues(array1: (string | number)[], array2: (string | number)[]) : (string | number)[] {
  const result: (string | number)[] = [];

  for(let i = 0; i < array1.length; i++ ){
    let exists = false;

    for(let x = 0; x < result.length; x++ ){
      if(result[x] === array1[i]){
        exists = true;
        break;
      }
    }

    if(!exists){
      result[result.length] = array1[i];
    }
  }

  for(let i = 0; i < array2.length; i++){
    let exists = false;
    for(let x = 0; x < result.length; x++){
      if(result[x] === array2[i]){
        exists = true;
        break;
      }
    }

    if(!exists){
      result[result.length] = array2[i];
    }
  }

  return result;
}


