import '../css/style.css'
import {Actor, Engine, Vector, DisplayMode, SolverStrategy, Color} from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import {mainMenu} from "./scenes/mainMenu.js";
import {Intro} from "./scenes/intro.js";
import {Level1} from "./scenes/level1.js";


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

        this.level1 = new Level1(this)
        this.add('level1', this.level1)

        // this.level2 = new Level2(this)
        // this.add('level2', this.level2)


    }

    startGame() {
        this.goToScene('menu');

    }

    loadIntro(){
        this.goToScene('intro').then(r => this.remove('menu'));
    }
    loadLevel1(){
        this.goToScene('level1').then(r => this.remove('intro'));
    }
    loadLevel2(){
        this.goToScene('level2').then(r => this.remove('level1'));
    }


}

new Game()
