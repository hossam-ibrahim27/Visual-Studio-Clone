import { configureStore } from '@reduxjs/toolkit';
import fileTreeSlice from "./features/fileTree/fileTreeSlice";

const store = configureStore({
    reducer: {
        fileTree: fileTreeSlice,
    },
})
export type RootState = ReturnType<typeof store.getState>
export const fileTreeSelector = (state: RootState) => state.fileTree;

export default store;