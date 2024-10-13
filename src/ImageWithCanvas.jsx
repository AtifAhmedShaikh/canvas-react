    import { useRef } from "react";
    import html2canvas from "html2canvas";

    const ImageWithCanvas = () => {
      const captureRef = useRef(null);

      const handleCapture = () => {
        if (captureRef.current) {
          html2canvas(captureRef.current).then((canvas) => {
            const img = canvas.toDataURL("image/png");
          
            console.log(img);
          });
        }
      };

      return (
        <div>
          <div ref={captureRef} style={{ position: "relative", width: "500px", height: "300px" }}>
            <img src="path_to_your_image.jpg" alt="Your Image" style={{ width: "100%", height: "100%" }} />
            <div
              style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                color: "white",
                fontSize: "24px",
                fontFamily: "Arial, sans-serif",
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "10px",
              }}
            >
              Your Unicode Text: こんにちは
            </div>
          </div>
          <button onClick={handleCapture}>Generate Image</button>
        </div>
      );
    };

    export default ImageWithCanvas;