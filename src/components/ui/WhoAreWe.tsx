/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";
import firstPicture from "@/../public/first.png"
import secondPicture from "@/../public/second.png"
import thirdPicture from "@/../public/third.png"
import fourthPicture from "@/../public/fourth.png"
import fifthPicture from "@/../public/fifth.png"
import sixthPicture from "@/../public/sixth.png"
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Why choose us",
      description:
          "We carefully monitor the updating of equipment and machinery, avoiding interruption in production processes,",
      skeleton: <SkeletonOne />,
      className:
          "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Explore Our Workplace",
      description:
          "Discover how our innovative pharmaceutical solutions are transforming healthcare. Watch now to stay informed and inspired!.",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Watch our Video",
      description:
          "Watch our video to see how our cutting-edge technologies and innovative solutions are making a difference in the pharmaceutical industry.",
      skeleton: <SkeletonThree />,
      className:
          "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
    },
    {
      title: "Power",
      description:
          "We produce up to 215mil injectable drugs, 140mil infusion solutions and 20mil units of disinfectants per year.",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  return (
      <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
          <div className="px-8">
              <h2 className="text-4xl font-bold text-gray-900 text-center lg:text-5xl lg:leading-tight max-w-5xl mx-auto  tracking-tight   dark:text-white">
                  Who are we?
              </h2>

              <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                    We are a pharmaceutical company that provides a wide range of pharmaceutical services and products to meet your health needs.
              </p>
          </div>

          <div className="relative ">
              <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
                  {features.map((feature) => (
                      <FeatureCard key={feature.title} className={feature.className}>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                  <div className=" h-full w-full">{feature.skeleton}</div>
                </FeatureCard>
            ))}
          </div>
        </div>
      </div>
  );
}

const FeatureCard = ({
                       children,
                       className,
                     }: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
      <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
        {children}
      </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
      <p className=" max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
        {children}
      </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
      <p
          className={cn(
              "text-sm md:text-base  max-w-4xl text-left mx-auto",
              "text-neutral-500 text-center font-normal dark:text-neutral-300",
              "text-left max-w-sm mx-0 md:text-sm my-2"
          )}
      >
        {children}
      </p>
  );
};

export const SkeletonOne = () => {
  return (
      <div className="relative flex py-8 px-2 gap-10 h-full">
        <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900  group h-full">
          <div className="flex flex-1 justify-center items-center w-full h-full  flex-col space-y-2  ">
            {/* TODO */}
              <Image
                  src={fifthPicture}
                  alt="header"
                  width={500}
                  height={500}
                  quality={100}
                  className="h-500 w-500 shadow-2xl aspect-square object-cover object-left-top rounded-sm"
              />
          </div>
        </div>
        <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
        <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
      </div>
  );
};

export const SkeletonThree = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      playerRef.current = videojs(videoElement, {
        controls: true,
        responsive: true,
        fluid: true,
        aspectRatio: '16:9',
        sources: [{
          src: '/video.mp4',
          type: 'video/mp4'
        }],
        playbackRates: [0.5, 1, 1.5, 2],
        poster: '/video-thumbnail.jpg',
        controlBar: {
          children: [
            'playToggle',
            'volumePanel',
            'currentTimeDisplay',
            'timeDivider',
            'durationDisplay',
            'progressControl',
            'remainingTimeDisplay',
            'playbackRateMenuButton',
            'fullscreenToggle',
          ],
        },
      }, () => {
        // Player ready handler
        const player = playerRef.current;
        if (!player) return;

        // Handle window resize
        const resizeObserver = new ResizeObserver(() => {
          player.width(containerRef.current?.clientWidth || 0);
          player.height(containerRef.current?.clientHeight || 0);
        });

        if (containerRef.current) {
          resizeObserver.observe(containerRef.current);
        }

        // Cleanup observer
        return () => {
          resizeObserver.disconnect();
        };
      });
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative flex h-full w-full">
      <div 
        ref={containerRef}
        className="w-full h-full aspect-video rounded-lg overflow-hidden"
      >
        <div data-vjs-player className="w-full h-full">
          <video
            ref={videoRef}
            className="video-js vjs-big-play-centered vjs-theme-city"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
        firstPicture,
        secondPicture,
        thirdPicture,
        fourthPicture,
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
      <div className="relative flex flex-col items-start p-8 gap-10 h-full overflow-hidden">
        {/* TODO */}
        <div className="flex flex-row -ml-20">
          {images.map((image, idx) => (
              <motion.div
                  variants={imageVariants}
                  key={"images-first" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </motion.div>
          ))}
        </div>
        <div className="flex flex-row">
          {images.map((image, idx) => (
              <motion.div
                  key={"images-second" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  variants={imageVariants}
                  whileHover="whileHover"
                  whileTap="whileTap"
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
              >
                <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                />
              </motion.div>
          ))}
        </div>

        <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-black to-transparent  h-full pointer-events-none" />
        <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-black  to-transparent h-full pointer-events-none" />
      </div>
  );
};

export const SkeletonFour = () => {
  return (
      <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [0, 0.1,0.3], // Updated glow color to blue
      markers: [
        // longitude latitude
        { location: [45.05000000, 41.98333330], size: 0.03 },
        { location: [45.05000000, 41.98333330], size: 0.1 },
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <Link href="https://maps.google.com" target="_blank">
      <canvas
        ref={canvasRef}
        style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
        className={className}
      />
    </Link>
  );
};