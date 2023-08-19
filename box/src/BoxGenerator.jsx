import React, { Component } from 'react';
import './BoxGenerator.css'; 

class BoxGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      size: 100,
      boxes: [],
    };
  }

  handleColorChange = (event) => {
    this.setState({ color: event.target.value });
  };

  handleSizeChange = (event) => {
    this.setState({ size: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { color, size, boxes } = this.state;
    const newBox = {
      color,
      size: `${size}px`,
    };
    this.setState({
      boxes: [...boxes, newBox],
      color: '',
    });
  };

  render() {
    const { color, size, boxes } = this.state;

    return (
      <div className="box-generator">
        <form onSubmit={this.handleSubmit}>
          <label>
            Color:
            <input
              type="text"
              value={color}
              onChange={this.handleColorChange}
            />
          </label>
          <label>
            Size (px):
            <input
              type="number"
              value={size}
              onChange={this.handleSizeChange}
            />
          </label>
          <button type="submit">Add Box</button>
        </form>
        <div className="box-container">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundColor: box.color, width: box.size, height: box.size }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

export default BoxGenerator;


