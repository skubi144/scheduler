import {contextBridge} from "electron";
import * as agent from '../../../agent/agent'

contextBridge.exposeInMainWorld('agent', {agent})


