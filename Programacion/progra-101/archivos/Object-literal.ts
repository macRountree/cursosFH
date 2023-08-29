

export let person = {
  name:'Melissa',
  age:45,
  isActive:true,
   hobbies: ['soccer', 'baseball'],
   toString(){
           let objectString = this.name + ' ' + this.age
          console.log(objectString);
  }
  }
  // person.toString()
  
  
  // console.log(person.name.toLocaleUpperCase());


  export let car = {
    name: 'KA',
    brand: 'Ford',
    wheels: 4,
    isActive: false,
    availableColor: ['gray','blue','Black', 'white']
  }
  export let smartTv = {
    name: 'Samsung',
    resolution: '4k',
    availableSizes: ['32"','42"', '55"' ],
    serialNumber: 5545684132,
    isActive: true 
  }
  export let ytVideo = {
    title: 'Curso de Programación',
    duration: 320,
    author: ' FH',
    isActive: true,
    mainTheme: ['Condicionales', 'variables', 'POO', 'Frameworks','Syntaxis']



  }

  console.log(car);