import React from 'react';

class ImagesRandom extends React.Component{
    constructor(props){
        super(props);
        this.images = ['vineyard','vine','wine','grape']
    }
    render(){
    let number1 = Math.floor(Math.random() * Math.floor(this.images.length));
    let number2 = Math.floor(Math.random() * Math.floor(this.images.length));
    return (
      <div>
          <img src={`https://source.unsplash.com/800x600/?${this.images[number1]},${this.images[number2]}`} alt="images random" />
      </div>
    );
    }

}

export default ImagesRandom;
