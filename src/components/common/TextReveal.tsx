import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import React, { useRef, useEffect } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  stagger?: number;
  splitType?: "chars" | "words" | "lines" | "chars, lines" | "words, lines";
  asChild?: boolean;
  triggerStart?: string;
  triggerEnd?: string;
}

export const TextReveal = React.forwardRef<HTMLDivElement, TextRevealProps>(
  (
    {
      children,
      className,
      delay = 0,
      duration = 1.3,
      stagger = 0.2,
      splitType = "lines",
      asChild = false,
      triggerStart = "top 65%",
      triggerEnd = "top 50%",
      ...props
    },
    ref,
  ) => {
    const textRef = useRef<HTMLDivElement>(null);
    const Comp = asChild ? Slot : "div";

    useEffect(() => {
      ScrollTrigger.refresh();

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useGSAP(() => {
      if (!textRef.current) return;

      const split = new SplitText(textRef.current, {
        type: splitType,
        mask: "lines",
        linesClass: "line++",
      });

      gsap.from(split.lines || split.words || split.chars, {
        yPercent: 100,
        duration,
        ease: "expo.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: textRef.current,
          start: triggerStart,
          end: triggerEnd,
          once: true,
        },
      });

      return () => {
        split.revert();
      };
    }, [delay, duration, stagger, splitType, triggerStart, triggerEnd]);

    return (
      <Comp ref={ref || textRef} className={cn(className)} {...props}>
        {children}
      </Comp>
    );
  },
);

TextReveal.displayName = "TextReveal";
