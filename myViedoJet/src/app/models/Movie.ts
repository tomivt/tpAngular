import { Actor } from "./Actor";
import { Category } from "./Category";

export interface Movie {
    id: number,
    title: string,
    category: Category,
    actors: Actor[]
}