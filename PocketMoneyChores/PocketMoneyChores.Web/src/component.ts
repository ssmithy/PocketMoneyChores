export default (text = "Hello, TS!") => {
    const element = document.createElement("h1");

    element.innerHTML = text;

    return element;
}