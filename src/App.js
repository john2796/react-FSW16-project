import React, { Component } from "react";

import "./App.css";
import students from "./students.json";
import Student from "./components/student";
import SearchBar from "./components/navbar/SearchBar";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <header>
          {/* Search bar  */}
          <SearchBar />
          <nav />
          <br />
        </header>
        <main>
          {/* displaying students */}
          <div className="card-wrapper">
            {/* Cards */}
            {students.map(student => (
              <Student student={student} key={student.name} />
            ))}
          </div>
        </main>
        <footer>
          <h1>footer</h1>
        </footer>
      </>
    );
  }
}

export default App;
