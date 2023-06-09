export interface ISite {
  id: number;
  name: string;
  location: string;
}

export class Site implements ISite {
  public id: number;
  public name: string;
  public location: string;

  constructor(id: number, name: string, location: string) {
    this.name = name;
    this.id = id;
    this.location = location;
  }

  public toString(): string {
    return this.name;
  }
}
