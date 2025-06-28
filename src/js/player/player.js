import {Actor, CollisionType, Keys, Vector} from "excalibur";
import {Resources} from "../resources.js";

export class Player extends Actor{
    constructor(x, y) {
        super({
            x, y, collisionType: CollisionType.Active
        });
        this.graphics.use(Resources.Fish.toSprite());

    }

    onInitialize(engine) {

    }

    onPreUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.Left)) {
            xspeed = -1000
        }
        if (engine.input.keyboard.isHeld(Keys.Right)) {
            xspeed = 1000
        }
        if (engine.input.keyboard.isHeld(Keys.Up)) {
            yspeed = -1000
        }
        if (engine.input.keyboard.isHeld(Keys.Down)) {
            yspeed = 1000
        }
        this.vel = new Vector(xspeed, yspeed);


        if (engine.input.keyboard.wasPressed(Keys.Space)) {
            console.log('shoot!')
        }


    }
}