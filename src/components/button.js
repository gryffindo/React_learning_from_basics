import React from "react";

class Button extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentChange , locale: currentLocale} = this.props;
    const { change: nextChange, locale: NextLocale } = nextProps;
    if (currentChange === nextChange && NextLocale === currentLocale) {
      return false;
    } else {
      return true;
    }
  }
  render() {
    const { change, locale } = this.props;
    return (
      <button type="button" onClick={() => change(locale)}>
        Click Me
      </button>
    );
  }
}

export default Button;
