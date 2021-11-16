import { Category } from "./category.model";
import { Group } from "./group.model";
import { User } from "./user.model";

export class Task {
    id: number;
    title?: string;
    comments?: string;
    created?: Date;
    planned?: Date;
    finished?: Date;
    user?: User;
    category?: Category;
    group?: Group;

    constructor(id: number, title?: string, comments?: string, created?: Date, planned?: Date, finished?: Date, user?: User, category?: Category, group?: Group) {
        {
                this.id = id;
            if (title) {
                this.title = title;
            }
            if (comments) {
                this.comments = comments;
            }
            if (created) {
                this.created = created;
            }
            if (planned) {
                this.planned = planned;
            }
            if (finished) {
                this.finished = finished;
            }
            if (user) {
                this.user = user;
            }
            if (category) {
                this.category = category;
            }
            if (group) {
                this.group = group;
            }






        }
    }
}
