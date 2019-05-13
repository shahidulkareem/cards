import React from 'react';
import './styles.css';

class Card extends React.Component {
    render() {
      return (
        <div className="card-body">
          <h3>{this.props.title}</h3>
          <p className="body-content">{this.props.text}</p>
        </div>
      )
    }
  }

  export default Card;