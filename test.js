const { waitForElement } = require("dom-testing-library");

it("shouldn't hang after succeeding", async () => {
    let didMakeMutation = false;
    const createElement = () => document.createElement("div");
    const container = createElement();
    const myCallback = () => {
        return didMakeMutation;
    };
    const result = waitForElement(myCallback, { container });
    container.appendChild(createElement());
    didMakeMutation = true;
    await new Promise((resolve) => setTimeout(resolve, 50));
});
