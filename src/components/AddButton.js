import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetch_userInfo } from "../redux/fetchAPI";
import Count from "./Count";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    const { fetchInfo } = this.props;
    fetchInfo();
  };

  render() {
    const { pending, userInfo } = this.props;
    const loading = !pending ? (
      <Fragment>
        <span>{userInfo.id} signed in</span>
      </Fragment>
    ) : (
      <span>Loading</span>
    );
    return (
      <div>
        <button onClick={this.handleClick}>Login</button>
        {loading}
        {/* <Count /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userInfo: state.fetchData.data,
    pending: state.fetchData.pending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchInfo: () => dispatch(fetch_userInfo())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton);
