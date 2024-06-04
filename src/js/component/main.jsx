import ReactDom from "react-dom/client";
import App from "./App.jsx";
import SeconsCounter from "./SecondsCounter.jsx";


let seconds = 0;

function renderPersonalizado() {
    ReactDom.createRoot(document.getElementById("root")).render(<SecondsCounter seconds={seconds} />);
    seconds++;
}

setInterval(renderPersonalizado, 1000);