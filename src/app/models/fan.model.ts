export class Fan {
  constructor(
    private _name: string,
    private _age: number,
    private _country: string,
    private _profilePicture: string = 'http://www.newdesignfile.com/postpic/2009/09/generic-user-profile_354184.png'
  ) {}

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get age(): number {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  get country(): string {
    return this._country;
  }

  set country(country: string) {
    this._country = country;
  }

  get profilePicture(): string {
    return this._profilePicture;
  }

  set profilePicture(profilePicture: string) {
    this._profilePicture = profilePicture;
  }
}
