import "./global.css";
import ImagePreview from "./components/ImagePreview";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <Button innerText={"Get Random Picture"} className={"primaryButton"} />
      <ImagePreview
        src={
          "https://images.unsplash.com/photo-1603621165585-55ea76cc37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
        }
        alt={"Newspaper reading"}
        author={"Matti"}
      />
    </main>
  );
}

export default App;
