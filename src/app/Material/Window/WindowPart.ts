import { WindowPosition } from "../../Points/WindowPosition";
import { Windowpart } from "../../Window/Model/WindowModel";

export class addWindow {
    constructor() { }

    static addWindowBot() {
        const point = WindowPosition;
        const windowBot = Windowpart.createWindow();
        windowBot.position.set(point[0].Bot.x, point[0].Bot.y, point[0].Bot.z)
        windowBot.rotateY(Math.PI / 2)
        return windowBot;
    }

    static addWindowRight() {
        const point = WindowPosition;
        const windowRight = Windowpart.createWindow();
        windowRight.position.set(point[0].Right.x, point[0].Right.y, point[0].Right.z);
        windowRight.rotateX(-Math.PI / 2);
        return windowRight;
    }

    static addWindowLeft() {
        const point = WindowPosition;
        const windowLeft = Windowpart.createWindow();
        windowLeft.position.set(point[0].left.x, point[0].left.y, point[0].left.z);
        windowLeft.rotateX(-Math.PI / 2);
        return windowLeft;
    }
    static addWindowTop() {
        const point = WindowPosition;
        const windowTop = Windowpart.createWindow();
        windowTop.position.set(point[0].top.x, point[0].top.y, point[0].top.z)
        windowTop.rotateY(Math.PI / 2)
        return windowTop;

    }

}