import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <h1>About this site</h1>
                <h2>Parameter is: {this.props.params.pm}</h2>
                I am stupid. So you, who just visited this site, is also stupid.
            </div>
        );
    }
}

export default About;