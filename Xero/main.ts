import {modules} from "./modules";
import { config } from './config';

interface ModuleManifest {
  name: string;
  description: string;
  args: string[];
  worker?: { tabQuery: { active?: boolean, currentWindow?: boolean }, tabs: number };
}
interface Modules {
  [key: string]: {
    manifest: ModuleManifest;
    init: Function;
  };
}

const moduleManifests: { [key: string]: ModuleManifest } = {};

// Loop through the modules and extract the manifest information
for (let module in modules) {
  let manifest = (modules as unknown as Modules)[module].manifest
  moduleManifests[manifest.name] = {
    name: manifest.name,
    description: manifest.description,
    args: manifest.args,
    worker: manifest.worker
  }

}
// Establish a connection with the service worker
const port = chrome.runtime.connect({ name: 'xero' });

// Listen for messages from the service worker
port.onMessage.addListener(function (message) {
  console.log('Received message from service worker:', message);
  port.postMessage({ data: 'Licence Validated' });
});

/* Licence Checeker */

console.log(`${config.name} V${config.version} Loaded Sucesfully`)
/* Xero v1 by SYCTXA */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  /* Mssage Handler */
  switch (request.type) {
    case 'action':
      if (request.action in moduleManifests) {
        (modules as unknown as Modules)[request.action].init();
      }
    case 'request':
      if (request.query in moduleManifests) {
          sendResponse({ type: 'response', data: (modules as unknown as Modules)[request.query].manifest });
      }
      break
    default:
      console.log(`Unknown request type: ${request.type}`)
  }

});
