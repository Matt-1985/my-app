import "./global.css";
import ImagePreview from "./components/ImagePreview";
import Button from "./components/Button";
import { getRandomImage } from "./api/getRandomImage";
import { useState } from "react";

function App() {
  const [randomImage, setRandomImage] = useState(null);

  async function handleClick() {
    const randomImageResponse = await getRandomImage();
    setRandomImage(randomImageResponse);
  }

  return (
    <main>
      <Button
        innerText={"Get Random Picture"}
        className={"primaryButton"}
        onClick={() => handleClick()}
      />
      <button className="favorite-btn" onClick={() => alert("test")}>
        🤍
      </button>
      {randomImage && (
        <ImagePreview
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
    </main>
  );
}

export default App;
