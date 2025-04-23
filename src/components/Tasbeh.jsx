import { Component } from "react";
import "./Tasbeh.css";
import tasbehImage from "../assets/images/image.png";
export class Tasbeh extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDec = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  handleRestart = () => {
    this.setState({
      count: (this.state.count = 0),
    });
  };

  render() {
    return (
      <div className="tasbeh-container">
        <h1 className="tasbeh-title">  Zikr Counter   </h1>
        <div className="tasbeh-image-wrapper">
          <img src={tasbehImage} alt="Tasbeh" className="tasbeh-image" />
          <p className="tasbeh-count-on-image">{this.state.count}</p>
        </div>

        <div className="tasbeh-buttons">
          <button onClick={this.handleInc}>+</button>
          <button onClick={this.handleDec}>-</button>
          <button onClick={this.handleRestart}>Restart</button>
        </div>
      </div>
    );
  }
}
