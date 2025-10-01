import { Actor } from "./Actor";
import { Category } from "./Category";

export interface Movie {
    id: number,
    name: string,
    category: Category,
    actors: Actor[]
}
