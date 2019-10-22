import React from 'react';
import DisplayPosition from './DisplayPosition';

class GeoLocation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            latitude : '',
            longitude : ''
        }
    }
    
    getPosition(){
        
    }
      render() {
        return (
          <div>
            <button onClick={this.getPosition} className='positionButton'>Button</button>
          </div>
        );
      }
    }
export default GeoLocation

