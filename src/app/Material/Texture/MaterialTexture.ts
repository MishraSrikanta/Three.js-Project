import * as THREE from "three";
import { Loader } from "three";

export class addTexture {
    constructor() { }

    static imageTexture() {
        // load the image
        const loader = new THREE.TextureLoader();
        const image = loader.load('../assets/Images/Texture/Woodpic3.jpg')

        //Wrap Only one Simple Image
        image.wrapS = image.wrapT = THREE.RepeatWrapping;
        image.repeat.set(0.1, 0.1);
        image.anisotropy = 10;
        image.offset.set(0, 0.9);
        //These values can be change according to the size of the extrude;
        return image;
    }

    static bumpTexture() {
        const loader = new THREE.TextureLoader();
        const texture = loader.load('../assets/Images/Texture/Bumptexturepic.jpg');

        //Wrap the bump image for texture over the surface
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 1);
        texture.anisotropy = 10;
        texture.needsUpdate = true;
        return texture;
    }

    static normaltexture() {
        const loader = new THREE.TextureLoader();
        const texture = loader.load('../assets/Images/Texture/WoodNormalTexture.jpg');

        //Wrap the Normal image for texture over the surface(Better than Bump texture)

        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 1);
        texture.anisotropy = 2;
        texture.needsUpdate = true;

        return texture;
    }
}