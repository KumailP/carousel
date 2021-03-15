import Carousel from "./components/organisms/Carousel";

const data = [
  <img
    src="https://www.essentiallysports.com/wp-content/uploads/images-38-3-1200x843.jpg"
    alt="red bull"
  />,
  <img
    src="https://www.formula1.com/content/dam/fom-website/manual/Misc/2021preseason/Aston/Aston%20Martin%20Cognizant%20Formula%20One%C2%AE%20Team_AMR21_04.jpg"
    alt="aston martin"
  />,
  <div>
    <h1>An HTML based carousel element</h1>
  </div>,
];

function App() {
  return (
    <div className="App">
      <Carousel slides={data} />
    </div>
  );
}

export default App;
