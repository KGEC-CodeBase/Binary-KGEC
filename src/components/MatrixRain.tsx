"use client";

import React, { useEffect, useRef,useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
function MatrixRain({ timeout }: { timeout: number }) {
  let canvas = useRef<HTMLCanvasElement | null>(null);
  let canvasCtxRef = React.useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvas.current) {
      canvasCtxRef.current = canvas.current.getContext("2d");
      const context = canvasCtxRef.current;

      const width = document.body.offsetWidth;
      const height = document.body.offsetHeight;
      canvas.current.width = width;
      canvas.current.height = height;

      if (context) {
        context.fillStyle = "#000";
        context.fillRect(0, 0, width, height);

        // calculate how many 'lines' to show and animate
        const columns = Math.floor(width / 20) + 1;
        const yPositions: number[] = Array.from({ length: columns }).fill(
          0
        ) as number[];

        context.fillStyle = "#000";
        context.fillRect(0, 0, width, height);

        const matrixEffect = () => {
          context.fillStyle = "#0001";
          context.fillRect(0, 0, width, height);

          context.fillStyle = "#16783C";
          context.font = "15pt monospace";

          yPositions.forEach((y, index) => {
            // const text = String.fromCharCode(Math.random() * 128);
            const text = Math.floor(Math.random() * 2).toString();
            const x = index * 20;
            context.fillText(text, x, y);

            if (y > 100 + Math.random() * 10000) {
              yPositions[index] = 0;
            } else {
              yPositions[index] = y + 20;
            }
          });
        };

        const interval = setInterval(matrixEffect, timeout);
        return () => {
          clearInterval(interval);
        };
      }
    }
  }, [canvas, timeout]);
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);
  return (
    <div
      style={{
        // custom styles to make it show up in the background
        background: "#000000",
        overflow: "hidden",
        position: "fixed",
        height: "100%",
        width: "100%",
        zIndex: -1,
        left: "0",
        top: "0",
      }}
    >
           <Particles id="tsparticles"  init={particlesInit} loaded={particlesLoaded} options={{
  autoPlay: true,
  background: {
    
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
    opacity: 1
  },
  backgroundMask: {
    composite: "destination-out",
    cover: {
      color: {
        value: "#fff"
      },
      opacity: 1
    },
    enable: false
  },
  defaultThemes: {},
  delay: 0,
  fullScreen: {
    enable: true,
    zIndex: 1
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle"
      },
      onHover: {
        enable: true,
        mode: "repulse",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10
        }
      },
      resize: {
        delay: 0.5,
        enable: true
      }
    },
    modes: {
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1
      },
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1
      },
      bounce: {
        distance: 200
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 1,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: []
        }
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.7
        },
        radius: 60
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1
        }
      },
      push: {
        default: true,
        groups: [],
        quantity: 4
      },
      remove: {
        quantity: 2
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: []
        }
      },
      slow: {
        factor: 1,
        radius: 100
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff"
            },
            stop: {
              value: "#000000"
            }
          },
          radius: 1000
        },
        shadow: {
          color: {
            value: "#000000"
          },
          length: 2000
        }
      }
    }
  },
  manualParticles: [],
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1
        },
        value: 1
      }
    },
    collisions: {
      absorb: {
        speed: 2
      },
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1
          },
          value: 1
        }
      },
      enable: false,
      maxSpeed: 50,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0
      }
    },
    color: {
      value: "#ffffff",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          delay: 0,
          decay: 0,
          sync: true
        }
      }
    },
    groups: {},
    move: {
      angle: {
        offset: 0,
        value: 90
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      center: {
        x: 50,
        y: 50,
        mode: "percent",
        radius: 0
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 0
        },
        enable: false,
        options: {}
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out"
      },
      random: false,
      size: false,
      speed: 2,
      spin: {
        acceleration: 0,
        enable: false
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fill: {}
      },
      vibrate: false,
      warp: false
    },
    number: {
      density: {
        enable: true,
        width: 1920,
        height: 1080
      },
      limit: 0,
      value: 80
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1
      },
      value: {
        min: 0.1,
        max: 0.5
      },
      animation: {
        count: 0,
        enable: true,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
        minimumValue: 0.1
      }
    },
    reduceDuplicates: false,
    shadow: {
      blur: 0,
      color: {
        value: "#000"
      },
      enable: false,
      offset: {
        x: 0,
        y: 0
      }
    },
    shape: {
      close: true,
      fill: true,
      options: {
        character: {
          value: [
            "1",
            "0",
           
          ],
          font: "Verdana",
          style: "",
          weight: "400",
          fill: true
        },
        char: {
          value: [
            "0",
            "1",
            
          ],
          font: "SFPixelate",
          style: "",
          weight: "400",
          fill: true
        }
      },
      type: "char"
    },
    size: {
      random: {
        enable: false,
        minimumValue: 1
      },
      value: 16,
      animation: {
        count: 0,
        enable: false,
        speed: 10,
        decay: 0,
        delay: 0,
        sync: false,
        mode: "auto",
        startValue: "random",
        destroy: "none",
        minimumValue: 10
      }
    },
    stroke: {
      width: 1,
      color: {
        value: "#ffffff",
        animation: {
          h: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true
          },
          s: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true
          },
          l: {
            count: 0,
            enable: false,
            offset: 0,
            speed: 1,
            delay: 0,
            decay: 0,
            sync: true
          }
        }
      }
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1
    },
    destroy: {
      bounds: {},
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: 3
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0
          },
          value: {
            min: 4,
            max: 9
          }
        },
        sizeOffset: true,
        particles: {}
      }
    },
    roll: {
      darken: {
        enable: false,
        value: 0
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0
      },
      mode: "vertical",
      speed: 25
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      enable: false
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1
      }
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: {
        angle: 50,
        move: 10
      }
    },
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 0,
        sync: false
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001
        },
        value: 0,
        sync: false
      }
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        decay: 0,
        sync: false
      },
      direction: "clockwise",
      path: false
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        decay: 0,
        delay: 0,
        sync: false
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0
        },
        value: 45
      },
      width: 1
    },
    links: {
      blink: false,
      color: {
        value: "#ffffff"
      },
      consent: false,
      distance: 150,
      enable: true,
      frequency: 1,
      opacity: 0.4,
      shadow: {
        blur: 5,
        color: {
          value: "#000"
        },
        enable: false
      },
      triangles: {
        enable: false,
        frequency: 1
      },
      width: 1,
      warp: false
    },
    repulse: {
      random: {
        enable: false,
        minimumValue: 0
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1
    }
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  smooth: false,
  style: {},
  themes: [],
  zLayers: 100,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true
    }
  }
}}/> 
      <canvas ref={canvas} className="fixed top-0 left-0 z-[-1] overflow-hidden"/>
    </div>
  );
}

export default MatrixRain;
