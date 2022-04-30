import { Walnut } from "src/assets/Constants/ColorConstants";
import * as THREE from "three";
import { addTexture } from "./Texture/MaterialTexture";

export class addMaterial{
    constructor(){}

    static meshStandardMaterial(){
        const matColor = Walnut;
        const matRoughness = 0.8;
        const texture = addTexture.imageTexture();
        
        //Adding Bump Texture to the Image
        const bumptexture = addTexture.bumpTexture();

        //Adding Normal Texture to the Image
        const normalTexture = addTexture.normaltexture();

        const material = new THREE.MeshStandardMaterial({color: matColor, roughness: matRoughness });
        
        material.map = texture; // IF you want only the Image texture(Image Wrap)
        material.bumpMap = bumptexture; //If you want to add bump texture
        material.normalMap = normalTexture; // If you want to add Normal Texture

        return material;

    }
}