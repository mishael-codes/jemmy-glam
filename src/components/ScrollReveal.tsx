import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-in" | "fade-up" | "slide-in-left" | "slide-in-right";
  delay?: number;
  className?: string;
  duration?: number;
}

export function ScrollReveal({ 
  children, 
  animation = "fade-up", 
  delay = 0, 
  duration = 700,
  className = "" 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  let initialClasses = "";
  switch (animation) {
    case "fade-in": initialClasses = "opacity-0"; break;
    case "fade-up": initialClasses = "opacity-0 translate-y-12"; break;
    case "slide-in-left": initialClasses = "opacity-0 -translate-x-12"; break;
    case "slide-in-right": initialClasses = "opacity-0 translate-x-12"; break;
  }

  const finalClasses = "opacity-100 translate-y-0 translate-x-0";

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? finalClasses : initialClasses} ${className}`}
      style={{ 
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms` 
      }}
    >
      {children}
    </div>
  );
}
