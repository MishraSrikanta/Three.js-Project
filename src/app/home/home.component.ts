import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Azure, Black } from 'src/assets/Constants/ColorConstants';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { addWindow } from '../Material/Window/WindowPart';
import { addLights } from '../Lights/Lights';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  @ViewChild('canvas')
  private canvasRef!: ElementRef;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  //#region Inputs  
  // @Input() public cameray: number = 500; // Use If Requires
  @Input() public fieldOfView: number = 6;
  @Input('nearClipping') public nearClippingPlane: number = 0.1;
  @Input('farClipping') public farClippingPlane: number = 100000;


  private CreateScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(Azure); //Background Color set

    //#region Lights
    const amblight = addLights.ambientlight();
    this.scene.add(amblight);

    //Add point  to show the Bump-Texture or Normal-Texture accurately
    const pointLight = addLights.pointLight();
    this.scene.add(pointLight);
    //#endregion

    //#region Adding Window(For Testing)
    const windowbot = addWindow.addWindowBot()
    this.scene.add(windowbot)

    const windowRight = addWindow.addWindowRight();
    this.scene.add(windowRight);

    const windowleft = addWindow.addWindowLeft();
    this.scene.add(windowleft)

    const windowTop = addWindow.addWindowTop();
    this.scene.add(windowTop)
    //#endregion

    //#region Aspect ratio
    let aspectRatio = this.getAspectRatio()
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    //#endregion
  
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
    // return window.innerWidth / window.innerHeight;
  }

  private orbitcontrol() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.camera.position.set(0, 50, 300);
    controls.enableDamping = true;
    return controls;
  }

  private startRenderingLoop() {

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    let component: HomeComponent = this;
    let control = this.orbitcontrol();
    this.camera.updateProjectionMatrix();

    (function render(this: any) {

      requestAnimationFrame(render);
      control.update();
      component.renderer.render(component.scene, component.camera);

    }());

  }

  constructor() { }

  ngAfterViewInit(): void {
    this.CreateScene();
    this.startRenderingLoop();
  }

  ngOnInit(): void {
  }

}
