import {Actor, Keys, Scene, Vector} from "excalibur";
import * as Input from "excalibur";
import {Resources} from "../resources.js";


export class mainMenu extends Scene {

    constructor() {
        super();
    }

    onInitialize(engine) {


        const bg = new Actor()
        bg.graphics.use(Resources.MenuBg.toSprite())
        bg.pos = new Vector(0, 0)
        bg.anchor = Vector.Zero
        this.add(bg)
    }

    onPreUpdate(engine, elapsed) {

        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            engine.loadIntro();


        }
    }

}