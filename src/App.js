import React, {
    Component
} from 'react';
import { hot } from 'react-hot-loader/root'
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="content container">
                <h1>OMZG React is happening for realz</h1>
                <p>
                    Super stoked
                </p>
                <p>
                    Haven't been stokeder in my life
                </p>
                <ul>
                    <li>Stoked</li>
                    <li>OMG</li>
                    <li>Is this l33t? Is that what that means?</li>
                </ul>
            </div>
        );
    }
}

export default hot(App);
