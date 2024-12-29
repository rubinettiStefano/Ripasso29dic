export interface Person {
  id?:number;//? opzionale,può esserci come no
  name: string;
  surname: string;
  age: number | null;
}
