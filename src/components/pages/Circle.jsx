import React, { useState, useEffect, useRef } from "react";

const FloatingCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const animate = () => {
      // LERP (Linear Interpolation) for smooth movement
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      setPosition({ x: currentX, y: currentY });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      if (!containerRef.current || !circleRef.current) return;

      const container = containerRef.current.getBoundingClientRect();
      const circle = circleRef.current.getBoundingClientRect();

      const mouseX = e.clientX - container.left;
      const mouseY = e.clientY - container.top;

      const circleX = circle.left - container.left + circle.width / 2;
      const circleY = circle.top - container.top + circle.height / 2;

      const distanceX = mouseX - circleX;
      const distanceY = mouseY - circleY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      const radius = circle.width / 2;
      const maxDistance = radius + 50;

      if (distance < maxDistance) {
        const strength = 1 - distance / maxDistance;
        targetX = distanceX * strength * -0.5;
        targetY = distanceY * strength * -0.5;
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "300px",
        height: "300px",
        overflow: "hidden",
      }}
    >
      <div
        ref={circleRef}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          width: "100px",
          height: "100px",
          border: "1px solid #eeff04",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default FloatingCircle;
