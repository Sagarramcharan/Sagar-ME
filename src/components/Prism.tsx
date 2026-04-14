import { useRef, useEffect } from 'react';
import { Renderer, Camera, Transform, Program, Mesh, Triangle } from 'ogl';

// A simple WebGL prism-like abstract background using OGL
const vertex = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragment = `
  precision highp float;
  uniform float uTime;
  varying vec2 vUv;

  void main() {
    vec2 p = vUv - 0.5;
    p.x *= 1.5;
    float d = length(p);
    
    vec3 col = vec3(0.0);
    
    for(float i = 0.0; i < 3.0; i++) {
        vec2 q = p;
        q.x += sin(uTime * 0.5 + i * 1.5) * 0.3;
        q.y += cos(uTime * 0.3 + i * 2.0) * 0.3;
        
        float pulse = sin(uTime * 1.5 + d * 10.0) * 0.5 + 0.5;
        float intensity = 0.02 / (length(q) + 0.01) * pulse;
        
        col[int(i)] += intensity;
    }
    
    // Add blue/purple tint
    col.r *= 0.5;
    col.b *= 1.5;
    col.g *= 0.8;
    
    gl_FragColor = vec4(col * 0.6, 1.0);
  }
`;

export default function Prism() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    const renderer = new Renderer({
      dpr: window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio, 2),
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    
    const camera = new Camera(gl);
    const scene = new Transform();
    
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
      },
    });
    
    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);
    
    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', resize, false);
    resize();
    
    let time = 0;
    let req: number;
    
    const update = () => {
      req = requestAnimationFrame(update);
      time += 0.01;
      program.uniforms.uTime.value = time;
      renderer.render({ scene, camera });
    };
    req = requestAnimationFrame(update);
    
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(req);
      const loseContextExt = gl.getExtension('WEBGL_lose_context');
      if (loseContextExt) loseContextExt.loseContext();
      if (gl.canvas && gl.canvas.parentNode) {
        gl.canvas.parentNode.removeChild(gl.canvas);
      }
    };
  }, []);

  return <div ref={containerRef} className="prism-container w-full h-full absolute inset-0 -z-10 pointer-events-none" />;
}
