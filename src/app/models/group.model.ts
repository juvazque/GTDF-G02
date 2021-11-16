import { User } from "./user.model";
import { Task } from "./task.model";

export class Group {
    id_group: number;
    description?: string;
    userAdmin?: number;
    dateCreated?: Date;
    tasks?: Array<Task>;
    users?: Array<User>;

    constructor(id_group: number, description?: string, userAdmin?: number, dateCreated?: Date, tasks?: Array<Task>, users?: Array<User>) {
        {
            this.id_group = id_group;
            if (description) {
                this.description = description;
            }
            if (userAdmin) {
                this.userAdmin = userAdmin;
            }
            if (dateCreated) {
                this.dateCreated = dateCreated;
            }
            if (tasks) {
                this.tasks = tasks;
            }
            if (users) {
                this.users = users;
            }

        }
    }
}
