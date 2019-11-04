import React from 'react';
import './RandomImage.css';

class RandomImage extends React.Component{
    constructor(props){
        super(props);
        this.images = ['vineyard','vine','wine','grape']
    }
    render(){
    let number1 = Math.floor(Math.random() * Math.floor(this.images.length));
    let number2 = Math.floor(Math.random() * Math.floor(this.images.length));
    let number3 = Math.floor(Math.random() * Math.floor(this.images.length));
    let number4 = Math.floor(Math.random() * Math.floor(this.images.length));
    return (
      <div className="RandomImage">
        <div className="RandomImage-image-wrapper">
          <img className="RandomImage-image"
            src={`https://source.unsplash.com/600x400/?${this.images[number1]},${this.images[number2]},${this.images[number3]},${this.images[number4]}`}
            alt="images random"
          />
        </div>
      </div>
    );
    }
}

export default RandomImage;
