export class ExtrudeSetting {
    constructor(){}
    static extrudeSettingOuter(path: THREE.LineCurve3){
        const extrudeSettings1 = {
            bevelEnabled: false,
            steps: 20,
            extrudePath: path
        };
        return extrudeSettings1;
    }
}