export class User {
  id: number;
  name: string;
  password: string;
  email: string;
  enabled: boolean;

  constructor(email: string, name: string, password: string, enabled: boolean = true, id?: number) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.email = email;
    this.enabled = enabled;
  }
}
