import * as React from 'react'; 
import { Component } from 'react';

class FourOFour extends Component {
    static fetchData() {
        return new Promise((resolve, reject) => resolve());
    }
    render() {
        return (
            <div>
                404; page not found
            </div>
        );
    }
}
export default FourOFour;