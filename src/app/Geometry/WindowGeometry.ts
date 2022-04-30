import { PathPoints } from "src/app/Points/PathPoints";
import { ExtrudeShapePoints } from "src/app/Points/Shapepoints";
import * as THREE from "three";

import { ExtrudeSetting } from "./ExtrudeSetting";

export class addGeometry {
    constructor() { }
    static extrudeBufferGeometry() {
        const points = ExtrudeShapePoints;
        //Points form ShapePoints
        const shape = new THREE.Shape();
        shape.moveTo(points[0].point1.x, points[0].point1.y);
        shape.lineTo(points[0].point2.x, points[0].point2.y);
        shape.lineTo(points[0].point3.x, points[0].point3.y);
        shape.lineTo(points[0].point4.x, points[0].point4.y);
        shape.lineTo(points[0].point5.x, points[0].point5.y)
        shape.lineTo(points[0].point6.x, points[0].point6.y);
        shape.lineTo(points[0].point7.x, points[0].point7.y);
        shape.lineTo(points[0].point8.x, points[0].point8.y);
        shape.lineTo(points[0].point9.x, points[0].point9.y);
        shape.lineTo(points[0].point10.x, points[0].point10.y)

        const pathpoints = PathPoints;
        //Points from PathPoints
        var point1 = new THREE.Vector3(pathpoints[0].point1.x, pathpoints[0].point1.y, pathpoints[0].point1.z);
        var point2 = new THREE.Vector3(pathpoints[0].point2.x, pathpoints[0].point2.y, pathpoints[0].point2.z);
        var path = new THREE.LineCurve3(point1, point2)
        var extrudeSetting = ExtrudeSetting.extrudeSettingOuter(path)

        const geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSetting);
        return geometry;

    }

}