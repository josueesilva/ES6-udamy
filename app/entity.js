class Entity{
  constructor(name, height){
    this.name = name;
    this.height = height;
  }

  greet() {
    console.log(`'Oi eu sou ${this.name} da Terra Média'`);
  }
}

export default Entity;