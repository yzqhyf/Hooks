import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import { fetchAPI } from "../redux/fetchAPI";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState(() => ({
      input: input
    }));
  };

  handleAddTodo = () => {
    if (this.state.input === "") return;
    this.props.addTodo(this.state.input);
    this.props.fetchAPI();
    this.setState({ input: "" });
  };

  render() {
    const userInfo = this.props.userInfo;
    const loading = this.props.pending ? (
      <span>Loading</span>
    ) : (
      <span>{userInfo.login}</span>
    );

    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
        {loading}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    userInfo: state.fetchData.data,
    pending: state.fetchData.pending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: value => {
      dispatch(addTodo(value));
    },
    fetchAPI: () => dispatch(fetchAPI())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
// export default AddTodo;
