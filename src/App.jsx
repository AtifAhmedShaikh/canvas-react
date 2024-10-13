import ImageWithText from "./ImageText";
import ImageWithCanvas from "./ImageWithCanvas";

const App = () => (
  <div style={{ margin: "auto", display: "flex", flexDirection: "column" }}>
    <ImageWithText imageUrl="/image-1.jpeg" text="Hello, Unicode!" />
    {/* <ImageWithCanvas imageUrl="/image-2.jpeg" text="Hello, Unicode!" /> */}
  </div>
);

export default App;
