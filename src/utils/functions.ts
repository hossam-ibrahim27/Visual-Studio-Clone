import type { IFile } from "../Interfaces";

export const doesFileExit = (files: IFile[], id: string) => {
    return files.some(file => file.id === id);
}