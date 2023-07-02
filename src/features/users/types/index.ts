
import { BaseEntity } from "features/global"

export type  User ={
    createdAt: any,
    email: string,
    tickets: number,
    score: number,
    status: "banned" | "active"
} & BaseEntity

