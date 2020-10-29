import "./global.css";
import ImagePreview from "./components/ImagePreview";
import Button from "./components/Button";
import { getRandomImage } from "./api/getRandomImage";
import { useState } from "react";
import FavoriteImageList from "./components/FavoriteImageList";

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
      {randomImage && (
        <ImagePreview
          id={randomImage.id}
          src={randomImage.urls.regular}
          alt={randomImage.alt_description}
          author={randomImage.user.name}
        />
      )}
      <FavoriteImageList
        photoIds={JSON.parse(localStorage.getItem("favorites")) || []}
      />
    </main>
  );
}

export default App;
