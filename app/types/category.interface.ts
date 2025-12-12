export interface ICategory {
    id: number
    name: string
    description?: string
    icon?: string
    subCategories: ISubCategory[]
}

export interface ISubCategory {
    id: number
    name: string
    description?: string
    difficulty?: string
    categoryId: number
}
