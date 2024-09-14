import { ReactNode } from "react"
import {  FieldValues, SubmitHandler } from "react-hook-form"

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

export type TInputProps = {
    type : string;
    name : string;
    label ?: string;
}

export type TFormProps = {
    onSubmit : SubmitHandler<FieldValues>;
    children ?: ReactNode;
    defaultValues?: Record<string,any>
} 

export type TFormConfig = {
    defaultValues ?: Record<string, any>;
}