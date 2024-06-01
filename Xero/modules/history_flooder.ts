/* History Flooder Bookmarklet */
export const manifest: {name:string, description: string, args: string[], worker:{ tabQuery: { active?: boolean, currentWindow?: boolean }, tabs: number }} = {
     name: 'history_flooder',
     description: 'Flood the history in case of emergency.',
     args: ['times'],
     worker: {tabQuery: { active: true, currentWindow: true }, tabs: 0 }

}


export function init() {
     var num = 500
     var done = false;
     var x = window.location.href;
     for (var i = 1; i <= num; i++) {
          history.pushState(0, '', i == num ? x : i.toString());
          if (i == num) {
               done = true
          }
     }
     if (done === true) {
          alert("History flood successful! " + window.location.href + " now appears in your history " + num + (num == 1 ? " time." : " times."))
     }
}