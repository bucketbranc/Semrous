/* Gemi2 Audio Player by SYCTXA */
export const manifest: {name:string, description: string, args: string[], worker:{ tabQuery: { active?: boolean, currentWindow?: boolean }, tabs: number }} = {
      name: 'gemi2',
      description: 'Play some funny audios',
      args: [''],
      worker: {tabQuery: { active: true, currentWindow: true }, tabs: 0 }

}

export function init() {
     let t: string | any[] = ['gemidos-zapes.mp3', 'female-startled-scream.mp3'];
     new Audio(`https://www.myinstants.com/media/sounds/${t[Math.floor(Math.random() * t.length)]}`).play()
}