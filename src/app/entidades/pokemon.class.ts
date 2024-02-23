export class Pokemon {
  idPokemon: string;
    name: string;
    abilities: string[];
    types: string[];
    weight: number;
    image: string;
    moves: string[];
    description: any;
    height: number;
  
    constructor(
      idPokemon: string,
      name: string,
      abilities: string[],
      types: string[],
      weight: number,
      image: string,
      moves: string[],
      description: any,
      height: number
    ) {
      this.idPokemon = idPokemon;
      this.name = name;
      this.abilities = abilities;
      this.types = types;
      this.weight = weight;
      this.image = image;
      this.moves = moves;
      this.description = description;
      this.height = height;
    }
  }