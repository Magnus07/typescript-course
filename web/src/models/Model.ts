import { AxiosPromise, AxiosResponse } from "axios";

interface Attributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Eventing {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasID {
  id?: number;
}

export class Model<T extends HasID> {
  constructor(
    private attributes: Attributes<T>,
    private sync: Sync<T>,
    private events: Eventing
  ) {}

  get = this.attributes.get;
  trigger = this.events.trigger;
  on = this.events.on;

  set(update: T): void {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (typeof id !== "number") throw new Error("Cannot fetch without an id");

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse) => this.trigger("save"));
  }
}
