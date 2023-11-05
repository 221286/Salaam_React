const head= React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Hi this is h1" ),
React.createElement("h2",{},"This is h2")]),
React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Hi this is h1" ),
React.createElement("h2",{},"This is h2")])
]);
console.log(head);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(head);