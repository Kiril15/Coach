import { rootAction } from "@/store/root-action"
import { TypeRootDispatch } from "@/store/store"
import { bindActionCreators } from "@reduxjs/toolkit"
import { useMemo } from "react"
import { useDispatch } from "react-redux"

export const useActions = () => {
    const dispatch = useDispatch<TypeRootDispatch>()

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch])
}