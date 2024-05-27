/* Gemi2 Audio Player by SYCTXA */
export class manifest {
     public name: string = 'gemi2';
     public description: string = 'Play some funny audios';
     public args: Array<string> = [''];
     public worker: { tabQuery: { active: boolean, currentWindow: boolean }, tabs: number } = {tabQuery: { active: true, currentWindow: true }, tabs: 0 };
     constructor() {
          // Initialization logic goes here
     }

}

export function init() {
     let t: string | any[] = ['gemidos-zapes.mp3', 'female-startled-scream.mp3'];
     new Audio(`https://www.myinstants.com/media/sounds/${t[Math.floor(Math.random() * t.length)]}`).play()
}