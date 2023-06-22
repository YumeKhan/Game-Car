window.addEventListener("load", function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    let carX = 250;
    let carY = 300;
    const carSpeed = 5;
    
    function drawCar() {
      ctx.fillStyle = "red";
      ctx.fillRect(carX, carY, 50, 100);
    }
    
    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      drawCar();
      
      carY -= carSpeed;
      
      if (carY < -100) {
        carY = 400;
      }
      
      requestAnimationFrame(update);
    }
    
    function handleKeyDown(event) {
      if (event.code === "ArrowLeft") {
        carX -= 10;
      }
      
      if (event.code === "ArrowRight") {
        carX += 10;
      }
    }
    
    document.addEventListener("keydown", handleKeyDown);
    
    update();
  });
  
