/* Metalpipe Virus by SYCTXA */
import * as css from 'csstype';
export class manifest {
    public name: string = 'metalpipe';
    public description: string = 'Execute a funny virus!';
    public args: Array<string> = ['']
    public worker: { tabQuery: { active: boolean, currentWindow: boolean }, tabs: number } = { tabQuery: { active: true, currentWindow: true }, tabs: 0 };
    
    constructor() {
        // Initialization logic goes here
    }

}

export function init() {
    const metulpaip = () => {
        let e = ["https://i.kym-cdn.com/entries/icons/original/000/043/027/metalpipefalling.jpg", "https://www.metalsupermarkets.com/wp-content/uploads/2022/09/mild-steel-pipe-hot-rolled-300x240.webp", "https://metalexponents.com/wp-content/uploads/2020/09/Choosing-Between-Ductile-Iron-or-Steel-Pipes-1024x683.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb8f-gy_4pLHPl8QOof_b0NDK7YsXiWyIvlg&s", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwM0Lor_toeYlMkmQiOxfol8_Hz7PAgDj6w&s", "https://pa1.aminoapps.com/6350/af8e1f25e8609990c7222de8ed9958d3ad26d188_00.gif", "https://media.tenor.com/GCAy9Eq02UEAAAAM/metal-love.gif", "https://www.steelandpipes.com/cdn/shop/files/Pipes_540x540.gif?v=1675360229", "https://media.tenor.com/LYZDmqhWm3UAAAAM/metal-pipe.gif", "https://media.tenor.com/iS8_wMys4GwAAAAM/metal-pipe-gggg.gif", "https://media.tenor.com/PsCqs59VLw0AAAAj/mario-gangnam-style.gif", "https://media.tenor.com/Wix9PDdeOPoAAAAM/sana-girsin.gif", "https://media.tenor.com/AM-CinQbHmkAAAAM/2dat-you.gif", "https://media.tenor.com/32k0x7POPzsAAAAM/metal-pipe.gif"],
            t = ["jixaw-metal-pipe-falling-sound.mp3", "pew_pew-dknight556.mp3", "ay-ay-necesito-pito.mp3", "cash-register-sound-fx.mp3", "sonido-perturbador.mp3", "dry-fart.mp3", "metal04gr-converted.mp3", "bat_hit.mp3", "hitmarker_2.mp3", "combat-sword-swing-hit.mp3", "cartoon-hammer.mp3", "perfect-fart.mp3", "fartmeme.mp3", "punch-gaming-sound-effect-hd_RzlG1GE.mp3", "weak-punch.mp3", "jojo-punch.mp3", "bone-crack-meme.mp3", "gunshot1-connor_p-8650_hifi.mp3", "mc-ride-sees-a-moth.mp3"];

        function a() {
            new Audio(`https://www.myinstants.com/media/sounds/${t[Math.floor(Math.random() * t.length)]}`).play()
        }
        document.body.addEventListener("mousemove", a), document.body.addEventListener("click", a), document.body.addEventListener("keydown", a), document.body.style.backgroundImage = "url(%27https://i.makeagif.com/media/2-19-2023/k3unyo.gif%27)";
        let n = document.body.children;
        var styles = "@keyframes Pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}@keyframes Jello2{0%,100%{transform:scale3d(1,1,1)}30%{transform:scale3d(.75,1.25,1)}40%{transform:scale3d(1.25,.75,1)}50%{transform:scale3d(.85,1.15,1)}65%{transform:scale3d(1.05,.95,1)}75%{transform:scale3d(.95,1.05,1)}}@keyframes Shake{0%,100%{transform:translateX(0)}10%,30%,50%,70%{transform:translateX(-10px)}20%,40%,60%{transform:translateX(10px)}80%{transform:translateX(8px)}90%{transform:translateX(-8px)}}@keyframes Blink{0%,100%,50%{opacity:1}25%,75%{opacity:0}}@keyframes Bounce{0%{animation-timing-function:ease-in;opacity:1;transform:translateY(45px)}24%{opacity:1}40%{animation-timing-function:ease-in;transform:translateY(24px)}65%{animation-timing-function:ease-in;transform:translateY(12px)}82%{animation-timing-function:ease-in;transform:translateY(6px)}93%{animation-timing-function:ease-in;transform:translateY(4px)}25%,55%,75%,87%{animation-timing-function:ease-out;transform:translateY(0)}100%{animation-timing-function:ease-out;opacity:1;transform:translateY(0)}}@keyframes Jello{0%,100%{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,.75,1)}40%{transform:scale3d(.75,1.25,1)}50%{transform:scale3d(1.15,.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}}@keyframes Vibrate{0%,100%{transform:translate(0)}10%,50%,80%{transform:translate(-2px,-2px)}20%,60%,90%{transform:translate(2px,-2px)}30%,70%{transform:translate(-2px,2px)}40%{transform:translate(2px,2px)}}@keyframes Slide{0%{transform:translateX(0)}100%{transform:translateX(-100px)}}";
        var s = document.createElement("style");
        // @ts-ignore
        s.styleSheet ? s.styleSheet.cssText = styles : s.appendChild(document.createTextNode(styles)), document.getElementsByTagName("head")[0].appendChild(s), styles = ["Pulse", "Shake", "Bounce", "Jello", "Jello2", "Slide"];
        // @ts-ignore
        for (var r = document.getElementsByTagName("h1", "span"), o = 0; o < r.length; o++) r[o].style.animation = `${styles[Math.floor(Math.random() * styles.length)]} 5s infinite 5s`;
        // @ts-ignore
        for (var m = 0; m < n.length; m++) n[m].style.backgroundImage = "url(%27https://i.makeagif.com/media/2-19-2023/k3unyo.gif%27)";
        for (var i = document.getElementsByTagName("img"), m = 0; m < i.length; m++) i[m].src = e[Math.floor(Math.random() * e.length)];
        // @ts-ignore
        for (var l = document.getElementsByTagName("div", "span"), p = 0; p < l.length; p++) l[p].style.animation = `${styles[Math.floor(Math.random() * styles.length)]} 2s infinite`, l[p].style.backgroundImage.includes("url") && (l[p].style.backgroundImage = `url(%27${e[Math.floor(Math.random() * e.length)]}%27)`)
    }
    metulpaip();
}