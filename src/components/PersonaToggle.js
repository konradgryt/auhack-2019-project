import React, { Component } from "react";
import Switch from "react-switch";
import DashboardButtons from "./DashboardButtons.js"


class PersonaToggle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
      <div className="toggle-container">
      <label>
        <span className="toggle-name">Create a routine</span>
        <Switch width={160} height={25} checkedIcon={false} uncheckedIcon={false} offColor={'#FF7F00'} onColor={'#41E8B6'} onChange={this.handleChange} checked={this.state.checked} id="persona_toggle_input"/>
        <span className="toggle-name">Be in control</span>
      </label>
      </div>
      {
              this.state.checked?

              <DashboardButtons />

              :

              <div></div>
            }
            </div>
    );
  }
}

export default PersonaToggle;
