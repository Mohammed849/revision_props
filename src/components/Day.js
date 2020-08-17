import React from 'react';
import PropTypes from 'prop-types';
class Day extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.dayName}</p>
        <p>{this.props.dayNumber}</p>
        <p>{this.props.monthName}</p>
      </div>
    );
  }
}
Day.propTypes = {
  DayName: PropTypes.string,
  DayNumber: PropTypes.number,
  MonthName: PropTypes.string,
};

Day.defaultProps = {
  dayName: 'Some day',
  dayNumber: -1,
  monthName: 'Some month',
};
export default Day;
