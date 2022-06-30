import React from "react";

class FetchingCC extends React.Component {
  constructor(props) {
    super();
    this.state = {
      users: [],
      input: "",
    };

    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }));
  }

  componentWillUnmount() {
    console.log("FetchingCC Unmounted");
  }

  handleAdd = function () {
    this.setState({
      users: [
        ...this.state.users,
        { id: Math.floor(Math.random() * 1000), name: this.state.input },
      ],
    });
  };

  render() {
    const { input, users } = this.state;

    return (
      <div>
        <h2>Class Component</h2>

        <div>
          <input
            value={input}
            onChange={(e) => this.setState({ input: e.target.value })}
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>

        <br />

        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}

export default FetchingCC;
