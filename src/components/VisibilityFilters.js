import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters = props => {
  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === props.activeFilter && "filter--active"
            )}
            onClick={() => {
              // props.dispatch(setFilter(currentFilter));
              props.setFilter(currentFilter);
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};

const mapDispatchToProps = dispatch => {
  return {
    setFilter: filter => dispatch(setFilter(filter))
  };
};
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);
