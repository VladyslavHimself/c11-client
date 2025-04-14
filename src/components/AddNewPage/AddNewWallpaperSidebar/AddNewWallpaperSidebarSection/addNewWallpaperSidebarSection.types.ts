import {InputReturnValues} from "@/hooks/useInput";

export type NativeProps<T> = {
    itemList: T[],
    selectedItems: T[]
    onClick: (item: T) => void
    isLoading: boolean
}

export interface AddNewWallpaperSidebarSectionTypes<T> extends NativeProps<T> {
    title: string;
    searchPlaceholder: string;
    searchProperties: InputReturnValues
    isCompact: boolean
}
