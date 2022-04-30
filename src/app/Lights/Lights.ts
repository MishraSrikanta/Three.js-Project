import { White } from "src/assets/Constants/ColorConstants";
import * as THREE from "three";

export class addLights{
    constructor(){}

    static ambientlight(){
        const color = White;
        const intencity = 0.6;

        const light = new THREE.AmbientLight(color, intencity);
        return light;
    }
    static pointLight(){
        const color = White;
        const intencity = 0.2;

        const light = new THREE.PointLight(color, intencity);
        light.position.set(0, 0, 50) //You can set the position as your requirement
        return light;
    }
}