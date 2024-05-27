/* History Flooder Bookmarklet */
export class manifest {
     public name: string = 'history-flooder';
     public description: string = 'Flood the history in case of emergency.';
     public args: Array<string> = ['times']
     public worker: { tabQuery: { active?: boolean, currentWindow?: boolean }, tabs: number } = {tabQuery: {}, tabs: 0 };

     constructor() {
          // Initialization logic goes here
     }

}

export function init() {
     var num = 100
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