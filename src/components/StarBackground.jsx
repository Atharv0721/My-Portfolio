import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    generateShootingStars();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    // Regenerate shooting stars periodically
    const interval = setInterval(generateShootingStars, 30000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: `star-${i}`,
        size: Math.random() * 4 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.7 + 0.3,
        animationDuration: Math.random() * 4 + 3,
        delay: Math.random() * 2,
        color: `hsl(${Math.random() * 60 + 200}, 70%, ${Math.random() * 30 + 60}%)`,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: `meteor-${i}`,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 30,
        delay: Math.random() * 20,
        animationDuration: Math.random() * 4 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  const generateShootingStars = () => {
    const numberOfShootingStars = 3;
    const newShootingStars = [];

    for (let i = 0; i < numberOfShootingStars; i++) {
      newShootingStars.push({
        id: `shooting-${Date.now()}-${i}`,
        size: Math.random() * 3 + 1,
        startX: Math.random() * 100,
        startY: Math.random() * 50,
        delay: Math.random() * 5,
        duration: Math.random() * 2 + 1,
      });
    }

    setShootingStars(newShootingStars);

    // Remove shooting stars after animation
    setTimeout(() => {
      setShootingStars([]);
    }, 8000);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static stars with twinkling effect */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: star.delay + "s",
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            width: meteor.size * 60 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}

      {/* Shooting stars */}
      {shootingStars.map((shootingStar) => (
        <div
          key={shootingStar.id}
          className="absolute animate-shooting-star"
          style={{
            left: shootingStar.startX + "%",
            top: shootingStar.startY + "%",
            animationDelay: shootingStar.delay + "s",
            animationDuration: shootingStar.duration + "s",
          }}
        >
          <div className="relative">
            <div className="w-[100px] h-[2px] bg-gradient-to-r from-white via-primary to-transparent rounded-full transform -rotate-45" />
            <div className="absolute top-0 right-0 w-[4px] h-[4px] rounded-full bg-white shadow-lg shadow-primary" />
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(200px) translateY(200px) rotate(45deg);
            opacity: 0;
          }
        }
        .animate-shooting-star {
          animation: shooting-star linear forwards;
        }
      `}</style>
    </div>
  );
};