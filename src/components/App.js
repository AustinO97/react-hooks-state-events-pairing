import video from "../data/video.js";
import Header from "./Header.js";
import Body from "./Body.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Body video={video} />
    </div>
  );
}

export default App;
