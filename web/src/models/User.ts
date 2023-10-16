import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Collection } from "./Collection";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const path = "http://localhost:3000";

export class User extends Model<UserProps> {
  static buildUser(attributes: UserProps): User {
    return new User(
      new Attributes<UserProps>(attributes),
      new ApiSync<UserProps>(path),
      new Eventing()
    );
  }

  static buildUserCollection() {
    return new Collection<User, UserProps>(path + "/users", User.buildUser);
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
