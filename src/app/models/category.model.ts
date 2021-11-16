import { User } from "./user.model";
import { Task } from "./task.model";

export class Category {
    id?: number;
    name?: string;
    user?: User;
    tasks?: Array<Task>;

    constructor(id?: number, name?: string, user?: User, tasks?: Array<Task>) {
        {
            if (id) {
                this.id = id;
            }
            if (name) {
                this.name = name;
            }
            if (user) {
                this.user = user;
            }
            if (tasks) {
                this.tasks = tasks;
            }

        }
    }
}
