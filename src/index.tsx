import App from "App";
import { render } from "preact";
import "preact/debug";
import "styles/style.scss";

const el = document.createElement("div");
document.body.append(el);
render(<App />, el);
