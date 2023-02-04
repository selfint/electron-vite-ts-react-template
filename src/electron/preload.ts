import { contextBridge, ipcRenderer } from "electron";

export const backend = {
  nodeVersion: async (): Promise<string> =>
    await ipcRenderer.invoke("node-version"),
};

contextBridge.exposeInMainWorld("backend", backend);
