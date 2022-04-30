import { addGeometry } from "src/app/Geometry/WindowGeometry";
import * as THREE from "three";

import { addMaterial } from "../../Material/WindowMaterial";

export class Windowpart{
    constructor(){}

    static createWindow(){
      
        const material = addMaterial.meshStandardMaterial();
        const geometry = addGeometry.extrudeBufferGeometry();
        const mesh1 = new THREE.Mesh(geometry, material);
        return mesh1;
    }
}