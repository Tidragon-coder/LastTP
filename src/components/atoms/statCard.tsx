import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  number: number;
  title: string;
  description: string;
  add?: string;
};

export default function StatCard({ number, add, title, description }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
          setCount(0); // reset quand on sort de la vue
        }
      },
      { threshold: 0.5 } // déclenche quand 50% du bloc est visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = number;
    const duration = 2000; // durée totale de l’animation
    const incrementTime = 20;
    const step = Math.ceil((end / duration) * incrementTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center text-white max-w-xs"
    >
      <span className="text-5xl font-bold text-[#20a49c]">
        {count}
        {add}
      </span>
      <h2 className="mt-2 text-2xl font-semibold">{title}</h2>
      <p className="mt-1 text-sm opacity-80">{description}</p>
    </div>
  );
}
