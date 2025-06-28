import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode, SolverStrategy, Color} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {mainMenu} from "./scenes/mainMenu.js";
import {Intro} from "./scenes/intro.js";


const options = {
    width: 1440,
    height: 900,
    backgroundColor: Color.White,
    physics: {
        solver: SolverStrategy.Realistic,
        gravity: new Vector(0, 1800),
    },
    maxFps: 60,
    displayMode: DisplayMode.FitScreen,
    suppressPlayButton: true
}


export class Game extends Engine {







    constructor() {``
        super({
            options
         })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    onInitialize(engine) {
        this.menu = new mainMenu(this)
        this.add('menu', this.menu)

        this.intro = new Intro(this)
        this.add('intro', this.intro)
    }

    startGame() {
        this.goToScene('menu');

    }

    loadIntro(){
        this.goToScene('intro');

    }


}

new Game()
