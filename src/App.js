import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [
        { name: "jim", alive: true },
        { name: "bob", alive: false },
        { name: "tim", alive: false }
      ],
      hidden: false
    };
  }

  toggleHidden = () => this.setState(state => ({ hidden: !state.hidden }));

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleHidden}> Toggle </button>
        {this.state.hidden === false && (
          <ul>
            {this.state.people.map(person => (
              <li> {person.name} </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;
