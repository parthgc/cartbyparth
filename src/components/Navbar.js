import React from 'react';
import './styles.css'

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">Cart by parth</a>
                    <i id="bottom" className="bi bi-cart"></i>
                    <a id="top">{this.props.count}</a>
                </div>
            </nav>
        );
    }
}

export default Navbar;
