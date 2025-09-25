import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { IFile } from "../../../Interfaces";


interface IFileClicked {
    fileName: string, fileContent: string | undefined;
    activeTab: string | null,
}

interface IFileTreeState {
    openedFiles: IFile[];
    clickedFile: IFileClicked,
    tabIdToRemove: string | null;
}

const initialState: IFileTreeState = {
    openedFiles: [],
    clickedFile: {
        fileName: "", fileContent: "", activeTab: null
    },
    tabIdToRemove: null,
}

const fileTreeSlice = createSlice({
    name: "fileTree",
    initialState,
    reducers: {
        setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
            state.openedFiles = action.payload
        },
        setClickedFile: (state, action: PayloadAction<IFileClicked>) => {
            state.clickedFile = action.payload;
        },
        setTabIdToRemove: (state, action: PayloadAction<string | null>) => {
            state.tabIdToRemove = action.payload;
        },
    }
});

export const { setOpenedFiles, setClickedFile , setTabIdToRemove } = fileTreeSlice.actions;

export default fileTreeSlice.reducer;