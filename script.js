document.addEventListener("DOMContentLoaded", function () {
    const orbits = document.querySelectorAll(".orbit");
    const sun = document.querySelector(".sun");

    function animatePlanets() {
      const time = Date.now() / 1000;

      orbits.forEach((orbit, index) => {
        const planets = orbit.querySelectorAll(".planet");
        const orbitWidth = orbit.offsetWidth / 2;
        const orbitHeight = orbit.offsetHeight / 2;

        const centerX = orbitWidth;
        const centerY = orbitHeight;

        planets.forEach((planet, planetIndex) => {
          const speed = 0.2 + (index + planetIndex) * 0.05;
          const angle = time * speed;

          const x =
            centerX + orbitWidth * Math.cos(angle) - planet.offsetWidth / 2;
          const y =
            centerY +
            orbitHeight * Math.sin(angle) -
            planet.offsetHeight / 2;

          planet.style.transform = `translate(${x - centerX}px, ${
            y - centerY
          }px)`;
        });
      });

      requestAnimationFrame(animatePlanets);
    }

    animatePlanets();
  });