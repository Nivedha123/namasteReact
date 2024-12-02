//Nested element createion in react
/* <div id="parent">
    <div id="child1">
        <h1 id="h1">This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
    <div id="child2">
        <h1 id="h1">This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
</div> */

const parentElement = React.createElement("div", {id: "parent"}, [
  React.createElement("div", {id: "child1"}, [
    React.createElement("h1", {id: "h1"}, "This is h1 tag"),
    React.createElement("h2", {id: "h2"}, "This is h2 tag"),
  ]),
  React.createElement("div", {id: "child2"}, [
    React.createElement("h1", {id: "h1"}, "This is h1 tag"),
    React.createElement("h2", {id: "h2"}, "This is h2 tag"),
  ]),
]);
//The above react code is not readable looks complex not simple, so jsx is introduced
//The above code is core React . JSX makes life simpler

console.log(parentElement); //This is React element which is js object
const element = React.createElement(
  "h1",
  {
    id: "heading",
  },
  "Hello World from React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentElement); //React element/obj gets converted to html and puts to dom
