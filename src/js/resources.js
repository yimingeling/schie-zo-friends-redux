import {ImageSource, Sound, Resource, Loader} from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {

//bgs
    Intro: new ImageSource('images/level/introScene.png'),
    MenuBg: new ImageSource('images/level/mainmenu.png'),
    //levels
    Level1: new ImageSource('images/level/level1.png'),
    Level2: new ImageSource('images/level/level2.png'),
    Level3: new ImageSource('images/level/level3.png'),
    Elevator: new ImageSource('images/level/elevator.png'),
    Room: new ImageSource('images/level/room.png'),
    Level4: new ImageSource('images/level/level4.png'),

//player



//misc
    Fish: new ImageSource('images/fish.png'),
    Ball: new ImageSource('images/props/ball.png'),
    Kid: new ImageSource('images/props/Kid1Stand.png'),
    KidBall: new ImageSource('images/props/Kid1.png'),
}


const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export {Resources, ResourceLoader}