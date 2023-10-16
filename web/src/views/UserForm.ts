import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.age-button": this.onButtonClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-button": this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onButtonClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
            <div>
            <input placeholder="${this.model.get("name")}"/>
            <button class="set-name">Set name</button>
            <button class="age-button">Randomize age</button>
            <button class="save-button">Save</button>
            </div>`;
  }
}
