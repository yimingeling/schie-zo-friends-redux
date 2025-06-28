import { ImageSource, Sound, Resource, Loader } from 'excalibur'

// voeg hier jouw eigen resources toe
const Resources = {
    //bgs
    Intro: new ImageSource('images/backgrounds/introScene.png'),
    MenuBg: new ImageSource('images/backgrounds/mainmenu.png'),
    





    Fish: new ImageSource('images/fish.png'),
}




const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }