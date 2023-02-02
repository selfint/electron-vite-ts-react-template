import { contextBridge, ipcRenderer } from "electron";

export const backend = {
  nodeVersion: async (): Promise<string | undefined> =>
    await ipcRenderer.invoke("node-version"),
};

contextBridge.exposeInMainWorld("backend", backend);
