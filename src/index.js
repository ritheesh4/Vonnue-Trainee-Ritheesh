import React from "react"
import ReactDOM from "react-dom"
import './index.css'

const FancyBorder = (props) => {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

const Dialog = (props) => {
  return (
    <div>
      <div className="Top-bar">
        <h1>Practice</h1> 
        </div>
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </FancyBorder>
    </div>

  );
}

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.state = { login: '' };
  }

  render() {
    return (
      <Dialog title="Composition practice"
        message="How this works?">
        <input value={this.state.login}
          onChange={this.handleChange} />
        <button onClick={this.handleSave}>
          save
          </button>
      </Dialog>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSave() {
    alert(`Saved message, ${this.state.login}!`);
  }
}

ReactDOM.render(
  <Save />,
  document.getElementById('root')
);
