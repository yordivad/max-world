export class Renderer {
    private gl: WebGLRenderingContext;

    constructor(private canvas: HTMLCanvasElement) {
        this.gl = canvas.getContext('webgl')!;
        this.initGL();
    }

    private initGL() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    }

    render() {
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        // Here you can add code to draw your sprites
    }
}