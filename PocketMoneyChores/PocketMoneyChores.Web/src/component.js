export default (text = "Hello, Smithy!") => {
    const element = document.createElement("h1");

    element.innerHTML = text;

    return element;
}