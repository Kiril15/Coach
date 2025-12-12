import { ISubCategory } from "./category.interface"

export interface IGPTRequest {
    id: number
    userId: number
    subCategoryId?: number
    type: string
    prompt: string
    response: string
    tokens?: number
    createdAt: Date
    subCategory: ISubCategory
}

export interface IDayliTip {
    id: number
    type: string
    text: string
    createdAt: Date
}

export interface IDayliTipInitialState extends Omit<IDayliTip, 'id' | 'createdAt'>{
    isLoading: boolean
    error: string | null
}
