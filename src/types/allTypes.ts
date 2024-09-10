import { ReactNode } from "react"

export type TAdminSidebarItem = {
    key : string,
    label : ReactNode,
    children ?: TAdminSidebarItem[]
}

export type TItem = {
    name : string,
    path ?: string,
    element ?: ReactNode,
    children? : TItem[]
}

export type TRoute = {
    path: string;
    element : ReactNode
}