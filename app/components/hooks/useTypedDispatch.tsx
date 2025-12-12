import { useDispatch } from "react-redux"
import { TypeRootDispatch } from "@/store/store"

export const useTypesDispatch = () => {
    return useDispatch<TypeRootDispatch>()
}