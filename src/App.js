import * as React from "react";
import "./App.css";

// A callback function is introduced (A), is used elsewhere (B) but calls back to the place it was introduced (C)
const App = () => {
  console.log("App renders");

  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState("React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStores = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search search={searchTerm} onSearch={handleSearch} />

      <hr />

      <List list={searchedStores} />
    </div>
  );
};

const Search = ({ search, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" value={search} onChange={onSearch} />
  </div>
);

// Variation 2: Spread and Rest Operator
// Rest operator is used to destructure the objectID from the rest of the item object
// Afterwards the item object is spread with its key/value pairs into the Item component
// 1. Step
const List = ({ list }) => {
  console.log("List renders");
  return (
    <ul>
      {/* Final Step: Seperate objectID from item object since it is not passed to the item component (Rest-Operator) */}
      {list.map(({ objectID, ...item }) => (
        // 2. Step: pass all the key-value pairs as attribute/value pairs to the jsx element (Spread-Operator)
        <Item key={objectID} {...item} />
      ))}
    </ul>
  );
};

const Item = ({ title, url, author, num_comments, points }) => {
  console.log("Item renders");

  return (
    <li>
      <span>
        <a href={url}>{title}</a>
      </span>
      <span>{author}</span>
      <span>{num_comments}</span>
      <span>{points}</span>
    </li>
  );
};

export default App;
