import React, { useRef, useEffect } from "react";

const ImageWithText = ({ imageUrl, text }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = imageUrl;
    img.onload = () => {
      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Set font properties and draw text
      ctx.font = "30px Arial"; // Set font size and family
      ctx.fillStyle = "black"; // Set text color
      // ctx.fillStyle(text, 50, 50); // Draw text at coordinates (50, 50)
      ctx.fillText(text, 130, 50); // Draw text at coordinates (50, 50)
    };
    
  }, [imageUrl, text]);

  const handleDownloadImage = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");

    link.href = canvas.toDataURL("image/jpeg");
    link.download = "canvas-image.jpg";
    link.click();
  };

 return (
    <>
      <canvas ref={canvasRef} width={800} height={600} style={{ margin: "auto" }} />
      <button style={{ width: "fit-content" }} onClick={handleDownloadImage}>Generate</button>
    </>
  );
};

export default ImageWithText;
