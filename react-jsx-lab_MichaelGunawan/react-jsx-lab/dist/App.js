"use strict";

// src/App.js

function App() {
  var name = "John Doe";
  var items = ['Item 1', 'Item 2', 'Item 3'];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, ", name, "!"), /*#__PURE__*/React.createElement("p", null, "Welcome to React with JSX."), /*#__PURE__*/React.createElement("h2", null, "My Items:"), /*#__PURE__*/React.createElement("ul", null, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement(Item, {
      key: index,
      name: item
    });
  })));
}