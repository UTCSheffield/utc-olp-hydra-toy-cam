// import choo
import choo from "choo";
import html from "choo/html";

// initialize choo
const app = choo({ hash: true });

import machine from "./stores/machine";

app.use(machine);

// import a template
import main from "./views/main";

app.route("/utc-olp-hydra-toy-cam/", main);
app.route("/", main);
app.route("#*", main);

function notFound() {
  return html`
    <div>
      <a href="/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

// start app
app.mount("#choomount");



