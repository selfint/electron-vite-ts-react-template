import { ipcMain, IpcMainInvokeEvent } from "electron";

ipcMain.handle(
  "node-version",
  (event: IpcMainInvokeEvent, logMsg: string): string => {
    console.log(event);
    console.log(logMsg);

    return process.versions.node;
  }
);
