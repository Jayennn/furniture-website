import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import React, { useRef, type ReactElement, type RefAttributes } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger, useGSAP);

interface TextRevealProps {
  children: ReactElement<RefAttributes<HTMLElement>>;
  animateOnScroll?: boolean;
  delay?: number;
  start?: string;
}

export default function TextReveal({
  children,
  animateOnScroll = true,
  delay = 0,
  start = "top 70%",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const linesRef = useRef<HTMLElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Reset refs
      splitRef.current = [];
      elementRef.current = [];
      linesRef.current = [];

      // Get elements to animate
      let elements: HTMLElement[];
      if (containerRef.current.hasAttribute("data-text-reveal")) {
        elements = Array.from(containerRef.current.children) as HTMLElement[];
      } else {
        elements = [containerRef.current];
      }

      // Split text for each element
      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = new SplitText(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        // Handle text-indent
        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0px";
        }

        linesRef.current.push(...(split.lines as HTMLElement[]));
      });

      // Set initial state
      gsap.set(linesRef.current, { yPercent: 100 });

      // Animation properties
      const animationProps: gsap.TweenVars = {
        yPercent: 0,
        ease: "power4.out",
        duration: 1.2,
        delay,
        stagger: 0.15,
      };

      // Animate based on scroll or immediately
      if (animateOnScroll) {
        gsap.to(linesRef.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: start,
            markers: true,
            // pin: true,
            // scrub: 1,
            // end: "top 20%",
            once: true,
          },
        });
      } else {
        gsap.to(linesRef.current, animationProps);
      }

      // Cleanup function
      return () => {
        splitRef.current.forEach((split) => {
          if (split) split.revert();
        });
      };
    },
    {
      scope: containerRef,
      dependencies: [animateOnScroll, delay],
    }
  );

  if (React.Children.count(children) === 1) {
    return React.cloneElement(children, { ref: containerRef });
  }

  return (
    <div ref={containerRef} data-text-reveal="true">
      {children}
    </div>
  );
}
