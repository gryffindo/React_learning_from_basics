import React from "react";
import Button from './button'

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = { date: new Date(), locale: "bn-BD" };
	}
	
	componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick = (locale) => {
    this.setState({
      locale: locale,
    });
  }
  render() {
    const { date, locale } = this.state;
    return (
      <div>
        <h1 className="heading">
          <span className="text">
            {date.toLocaleTimeString(locale)}
          </span>
        </h1>
        <Button change={ this.handleClick} locale="en-US">Click Me</Button>
      </div>
    );
  }
}

export default Clock;