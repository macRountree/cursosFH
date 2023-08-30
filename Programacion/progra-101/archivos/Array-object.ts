
interface Person{
  name: string;
  age: number;
  isActive: boolean;

}


export let mac: Person ={
  name: 'Mac',
  age: 31,
  isActive: false
}

export let melissa:Person = {
  name: 'Melissa',
  age: 30,
  isActive: true
}

export let juan:Person = {
  name: 'Juan',
  age: 45,
  isActive: false
}

export let people:Person[] = [mac, melissa ,juan];

for (let persona = 0; persona <= people.length - 1; persona++){
  let person = people[persona];
  console.log( `La persona ${person.name} tiene ${person.age} años`);
}


