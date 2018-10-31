import React, { Component } from "react";

import "./App.css";
import students from "./students.json";
import Student from "./components/student";
import SearchBar from "./components/navbar/SearchBar";

// hoc
function searchingFor(term) {
  return function(x) {
    return x.name.toLowerCase().includes(term.toLowerCase() || !term);
  };
}

class App extends Component {
  state = {
    students,
    term: ""
  };

  searchHandler = e => {
    this.setState({ term: e.target.value });
  };

  render() {
    const { students, term } = this.state;

    return (
      <>
        <header>
          {/* Search bar  */}
          <SearchBar searchHandler={this.searchHandler} term={term} />
          <nav />
          <br />
        </header>
        <main>
          {/* displaying students */}
          <div className="card-wrapper">
            {/* Cards */}
            {term !== ""
              ? students
                  .filter(searchingFor(term))
                  .map(student => (
                    <Student
                      student={student}
                      key={student.name}
                      onChange={this.filteredStudents}
                    />
                  ))
              : students.map(student => (
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
