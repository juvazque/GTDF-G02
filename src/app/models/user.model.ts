import { Category } from "./category.model";
import { Group } from "./group.model";
import { Task } from "./task.model";
import { UserStatus } from "./user-status.model";

export class User {
    id?: number;
    email?: string;
    admin?: boolean;
    login?: string;
    password?: string;
    status?: UserStatus;
    tasks?: Array<Task>;
    groups?: Array<Group>;
    categories?: Array<Category>;

    constructor(id?: number, email?: string, admin?: boolean, login?: string, password?: string, status?: UserStatus, tasks?: Array<Task>, groups?: Array<Group>, categories?: Array<Category>) {
        {
            if (id) {
                this.id = id;
            }
            if (email) {
                this.email = email;
            }
            if (admin) {
                this.admin = admin;
            }
            if (login) {
                this.login = login;
            }
            if (password) {
                this.password = password;
            }
            if (status) {
                this.status = status;
            }
            if (tasks) {
                this.tasks = tasks;
            }
            if (groups) {
                this.groups = groups;
            }
            if (categories) {
                this.categories = categories;
            }
        }
    }
}
