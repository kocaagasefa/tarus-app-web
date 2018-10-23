import React, {Component} from 'react';
import './style.css';

class Layout extends Component {
    render(){
        return (
            <>
                <div>Navbar goes here...</div>
                <main className=".Main">
                    {this.props.children}
                </main>
            </>
        );
    }
}

export default Layout;