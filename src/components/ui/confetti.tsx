import React, {
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import ReactDOMServer from 'react-dom/server';

type SvgParticle = {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  svgImage: HTMLImageElement;
  opacity: number;      // Added for depth effect
  jitter: number;       // Added for jitter effect
  delay: number;        // Added for staggered start
};

type Api = {
  fire: () => void;
};

type Props = React.ComponentPropsWithRef<"canvas"> & {
  svgComponents: React.FC[]; // Array of SVG components to use as particles
  manualstart?: boolean;
  children?: React.ReactNode;
};

export type ConfettiRef = Api | null;

const Confetti = React.forwardRef<Api, Props>(({ svgComponents, manualstart = false, ...rest }, ref) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<SvgParticle[]>([]);

  const loadSvgImages = useCallback(async () => {
    return await Promise.all(
      svgComponents.map((SvgComponent) => {
        return new Promise<HTMLImageElement>((resolve) => {
          const svgString = ReactDOMServer.renderToStaticMarkup(<SvgComponent />);
          const img = new Image();
          img.src = `data:image/svg+xml;base64,${btoa(svgString)}`;
          img.onload = () => resolve(img);
        });
      })
    );
  }, [svgComponents]);


  const createParticles = useCallback(
    (svgImages: HTMLImageElement[]) => {
      if (!canvasRef.current) return;
      const canvasWidth = canvasRef.current.width;
      const canvasHeight = canvasRef.current.height;

      particlesRef.current = svgImages.map((image) => ({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        size: Math.random() * 80 + 60,
        speedX: Math.random() * 3 - 1.5, // Slightly higher range for more variation
        speedY: Math.random() * -3 - 1.5,
        rotation: Math.random() * 360,
        rotationSpeed: Math.random() * 6 - 3,
        opacity: Math.random() * 0.5 + 0.5, // Random opacity for depth effect
        jitter: Math.random() * 2 - 1, // Small jitter effect
        delay: Math.random() * 1000, // Delay in milliseconds for staggered start
        svgImage: image,
      }));
    },
    []
  );


  const animateParticles = useCallback(() => {
    if (!canvasRef.current) return;
    const context = canvasRef.current.getContext("2d");
    if (!context) return;

    const canvasWidth = canvasRef.current.width;
    const canvasHeight = canvasRef.current.height;
    context.clearRect(0, 0, canvasWidth, canvasHeight);

    particlesRef.current.forEach((particle) => {
      if (Date.now() - particle.delay < 0) return; // Apply delay before animation

      // Add jitter
      particle.x += particle.speedX + Math.random() * particle.jitter;
      particle.y += particle.speedY + Math.random() * particle.jitter;
      particle.rotation += particle.rotationSpeed;

      context.save();
      context.globalAlpha = particle.opacity; // Set opacity for depth effect
      context.translate(particle.x, particle.y);
      context.rotate((particle.rotation * Math.PI) / 180);
      context.drawImage(
        particle.svgImage,
        -particle.size / 2,
        -particle.size / 2,
        particle.size,
        particle.size
      );
      context.restore();

      if (particle.y < 0 || particle.x < 0 || particle.x > canvasWidth) {
        particle.x = Math.random() * canvasWidth;
        particle.y = canvasHeight;
        particle.speedY = Math.random() * -3 - 1.5;
      }
    });

    requestAnimationFrame(animateParticles);
  }, []);

  const fire = useCallback(async () => {
    const svgImages = await loadSvgImages();
    createParticles(svgImages);
    animateParticles();
  }, [loadSvgImages, createParticles, animateParticles]);

  useImperativeHandle(ref, () => ({
    fire,
  }));

  useEffect(() => {
    if (!manualstart) {
      fire();
    }
  }, [manualstart, fire]);

  return <canvas ref={canvasRef} {...rest} />;
});

Confetti.displayName = 'Confetti';

export default Confetti;


