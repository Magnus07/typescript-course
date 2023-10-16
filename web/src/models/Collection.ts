import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private rootURL: string, private deserizalize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch() {
    axios.get(this.rootURL).then((res: AxiosResponse) => {
      let data = res.data;
      data.forEach((item: K) => {
        this.models.push(this.deserizalize(item));
      });
      this.trigger("change");
    });
  }
}
