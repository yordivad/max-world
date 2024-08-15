
import { Renderer } from './renderer';

export class Game {
    private renderer: Renderer;

    constructor(private canvas: HTMLCanvasElement) {
        this.renderer = new Renderer(canvas);
    }

    start() {
        this.update();
    }

    private update() {
        this.renderer.render();
        requestAnimationFrame(() => this.update());
    }
}