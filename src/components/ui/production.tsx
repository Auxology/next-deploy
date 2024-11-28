"use client"
import { animate, motion } from "framer-motion";
import React, { useEffect} from "react";
import { cn } from "@/lib/utils";
import { GoBeaker } from "react-icons/go";

export default function CardDemo() {
  return (
    <Card>
      <CardSkeletonContainer>
        <Skeleton />
      </CardSkeletonContainer>
      <CardTitle>We Produce</CardTitle>
      <CardDescription>
        Water-based drugs for parental therapy, effective antiseptics and antimicrobials.
      </CardDescription>
    </Card>
  );
}

const Skeleton = () => {
  const scale = [1, 1.1, 1];
  const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
  const sequence = [
    [
      ".circle-1",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-2",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-3",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-4",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
    [
      ".circle-5",
      {
        scale,
        transform,
      },
      { duration: 0.8 },
    ],
  ];

  useEffect(() => {
    animate(sequence, {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      repeat: Infinity,
      repeatDelay: 1,
    });
  }, [sequence]);
  return (
    <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
      <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
        <Container className="h-12 w-12 circle-2">
          <GoBeaker className="h-6 w-6 dark:text-white" />
        </Container>
        <Container className="circle-3">
          <Inject className="h-8 w-8 dark:text-white" />
        </Container>
        <Container className="h-12 w-12 circle-4">
          <Solution className="h-6 w-6 " />
        </Container>

      </div>

      <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
        <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>
      </div>
    </div>
  );
};
const Sparkles = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          initial={{
            top: '50%',
            left: '50%',
            opacity: 0,
            scale: 0,
            rotate: 0
          }}
          animate={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random(),
            scale: [1, 1.2, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: Math.random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
            rotate: {
              duration: Math.random() * 5 + 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          style={{
            position: "absolute",
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl z-40",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const Inject = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M24.16 9.207c0.378 0.377 0.378 0.989 0 1.367s-0.685 0.684-0.685 0.684l0.685 0.684c0.755 0.755 0.755 1.979 0 2.735l-10.255 10.253c-0.756 0.756-1.98 0.756-2.735 0l-0.684-0.684-2.734 2.736 1.367 1.367c0.378 0.377 0.378 0.988 0 1.367-0.378 0.377-0.99 0.377-1.367 0l-5.47-5.471c-0.377-0.377-0.377-0.988 0-1.367 0.378-0.377 0.99-0.377 1.367 0l1.367 1.367 2.735-2.734-0.684-0.684c-0.756-0.754-0.756-1.979 0-2.734l10.256-10.254c0.756-0.756 1.979-0.756 2.734 0l0.684 0.684c0 0 0.307-0.307 0.684-0.684 0.378-0.378 0.99-0.378 1.367 0l0.342 0.342 5.47-5.47v1.367l-4.786 4.786 0.342 0.343zM19.374 8.523c-0.377-0.378-0.989-0.378-1.367 0l-2.051 2.051 1.367 1.367-0.684 0.684-1.367-1.367-2.051 2.051 1.367 1.368-0.684 0.684-1.368-1.368-0.684 0.684 2.735 2.734-0.684 0.684-2.735-2.734-2.049 2.049 2.734 2.734-0.684 0.684-2.734-2.734-0.684 0.684c-0.378 0.377-0.378 0.99 0 1.367l4.102 4.102c0.378 0.379 0.99 0.379 1.368 0l10.254-10.254c0.379-0.377 0.379-0.989 0-1.367l-4.101-4.103zM16.64 9.89l0.684-0.684 2.734 2.734-0.684 0.684-2.734-2.734zM16.64 15.359l-2.734-2.735 0.684-0.684 2.734 2.735-0.684 0.684zM9.803 16.727l0.684-0.684 1.367 1.367-0.684 0.684-1.367-1.367zM29.942 9.386c0 0.725-0.588 1.312-1.312 1.312-0.726 0-1.313-0.588-1.313-1.312 0-0.726 1.313-2.708 1.313-2.708s1.312 1.983 1.312 2.708z"
          fill="currentColor"
      ></path>
    </svg>
  );
};

export const Solution = ({ className }: { className?: string }) => {
  return (
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 32 32"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      version="1.1"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <path d="M19.989,6.001l-0.991,0c-1.657,0 -3,1.343 -3,3c0,3.075 0,8.932 0,12.007c0,1.657 1.343,3 3,3l0.991,-0l0,5.071c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1l0,-5.071l1.011,-0c1.657,-0 3,-1.343 3,-3l-0,-12.007c0,-1.657 -1.343,-3 -3,-3l-1.011,0l0,-1.001c0,-1.657 -1.343,-3 -3,-3l-9.989,0c-1.657,0 -3,1.343 -3,3c0,6.104 0,24.079 0,24.079c-0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,0 0,-17.975 -0,-24.079c-0,-0.552 0.448,-1 1,-1c0,0 9.989,0 9.989,0c0.552,0 1,0.448 1,1l0,1.001Zm-1.991,13.963l0,1.044c0,0.552 0.448,1 1,1c0,-0 4.002,-0 4.002,-0c0.552,-0 1,-0.448 1,-1l-0,-12.007c0,-0.552 -0.448,-1 -1,-1c0,0 -4.002,0 -4.002,0c-0.552,0 -1,0.448 -1,1l0,0.99l2.006,0.009c0.552,0.002 0.998,0.453 0.996,1.004c-0.002,0.552 -0.453,0.998 -1.004,0.996l-1.998,-0.009l0,1.973l2.006,0.009c0.552,0.003 0.998,0.453 0.996,1.005c-0.002,0.552 -0.453,0.998 -1.004,0.995l-1.998,-0.009l0,2l2.006,0.009c0.552,0.003 0.998,0.453 0.996,1.005c-0.002,0.552 -0.453,0.998 -1.004,0.995l-1.998,-0.009Z" />
    </svg>
  );
};