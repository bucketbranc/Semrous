/* History Flooder Bookmarklet */
export const manifest: { name: string, description: string, args: string[], worker: { tabQuery: { active?: boolean, currentWindow?: boolean }, tabs: number } } = {
     name: 'brokenscreen',
     description: 'cool prank',
     args: [''],
     worker: { tabQuery: { active: true, currentWindow: true }, tabs: 0 }

}


export function init() {
     document.body.addEventListener("keydown", function () {
          var img = new Image(window.screen.width, window.screen.height); // width, height values are optional params 
          img.src = 'https://i.ytimg.com/vi/uKisdcdVRl8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGDsgUihyMA8=&rs=AOn4CLCxZcXaMlxaY8ltCgPJAfFy3XqUxg';
          img = document.body.appendChild(img);
          img.requestFullscreen()
          document.body.requestPointerLock();
          document.documentElement.style.cursor = 'none';
     });
}