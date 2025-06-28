import { Actor, Resource, Scene, DisplayMode, Keys, Vector, Engine, Gamepads } from "excalibur"
import {Resources} from "../resources.js";


export class Intro extends Scene {
    constructor(game) {
        super({
            displayMode: DisplayMode.FillScreen
        })
        this.game = game
    }

    onInitialize(engine) {






        const background = new Actor({
            x: engine.drawWidth / 2, // Center the actor horizontally
            y: engine.drawHeight / 2, // Center the actor vertically
            anchor: new Vector(0.5, 0.5),
            scale: new Vector(0.15, 0.15) // Adjust scale as needed
        });

        background.graphics.use(Resources.Intro.toSprite());
        this.add(background);






    }
    onPreUpdate(engine, elapsed) {

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.loadLevel1();


        }
    }

}
