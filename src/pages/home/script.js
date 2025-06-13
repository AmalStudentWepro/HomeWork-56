import { render } from "../../utils/render.js";
import { Header } from "../../components/header.js";
import axios from "axios";

const app = document.querySelector("#app2");
app.prepend(Header()); 





axios
  .get("http://localhost:3000/posts")
  .then((res) => render(res.data))
  .catch((err) => console.error(err));
