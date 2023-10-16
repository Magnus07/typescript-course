import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserShow extends View<User, UserProps> {
  template(): string {
    return `
        <div>
        <h1>UserForm</h1>
        <h2>${this.model.get("name")}</h2>
        <h2>${this.model.get("age")}</h2>
        </div>
        `;
  }
}
