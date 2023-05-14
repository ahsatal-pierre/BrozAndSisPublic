
const canvas = document.getElementById("Matrix");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

    const images =[
    "images/a.jpg",
    "images/b.jpg",
    "images/c.jpg",
    "images/d.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/5.jpg",
    "images/6.png",
    "images/7.jpg",
    "images/IMG-1999.jpg",
    "images/logo.png",
    "images/logo.jpg"]; 

   // const imageWidth = 80; // size matrix 
   // const imageHeight = 80; // size matrix
    const imageWidth = 180; // size random 
    const imageHeight = 180; // size random
    const columns = canvas.width / imageWidth;
    
    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 0;
    }
    
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = (error) => reject(error);
        image.src = src;
      });
    };
    
    const draw = async () => {
      context.fillStyle = "rgba(0, 0, 0, 0.05)"; // color matrix
       // context.fillStyle = "rgba(255, 255, 255, 1)";  // color random
      context.fillRect(0, 0, canvas.width, canvas.height);
    
      for (let i = 0; i < columns; i++) {
        if (rainDrops[i] === 0 && Math.random() > 0.975) {
          rainDrops[i] = 1; // Set the initial position to 1 for the first line
        }
    
        if (rainDrops[i] > 0) {
          const imageSrc = images[Math.floor(Math.random() * images.length)];
          const image = await loadImage(imageSrc);
          context.drawImage(
            image,
            i * imageWidth,
            (rainDrops[i] - 1) * imageHeight, 
            imageWidth,
            imageHeight
          );
    
          if (rainDrops[i] * imageHeight > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      }
    };
    
    
   // By increasing the interval duration to a higher value, the draw function will be called less frequently, resulting in a slower matrix effect. 
      //  setInterval(draw, 75); // interval matrix 
    //  setInterval(draw, 150); // interval random
     setInterval(draw, 100); // interval random





