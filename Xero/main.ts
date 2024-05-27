const modules = require('modules');
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
for (const moduleName of Object.keys(modules as unknown as Modules)) {
  if ((modules as unknown as Modules)[moduleName].manifest) {
    moduleManifests[moduleName] = {
      name: (modules as unknown as Modules)[moduleName].manifest.name,
      description: (modules as unknown as Modules)[moduleName].manifest.description,
      args: (modules as unknown as Modules)[moduleName].manifest.args,
      worker: (modules as unknown as Modules)[moduleName].manifest.worker
    };
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
         console.log(`> moduleManifests: ${moduleManifests}\n > request: ${request.query}\n > Probable Manifest: ${(modules as unknown as Modules)[request.query].manifest.worker}`)
         console.log(moduleManifests)
          sendResponse({ type: 'response', data: (modules as unknown as Modules)[request.query].manifest });
      }
    default:
      console.log(`Unknown request type: ${request.type}`)
  }

});
