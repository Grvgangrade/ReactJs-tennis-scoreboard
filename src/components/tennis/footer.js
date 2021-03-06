import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GithubSVG from '../../styles/github.svg'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p><img src={GithubSVG} alt="Github"/><a target="_blank" href="https://github.com/imakou/ReactJs-tennis-scoreboard">Github</a> | Media resource: <a target="_blank" href="http://www.atpworldtour.com/">ATPworldtour.com</a></p>
            </div>
        );
    }
}

export default Footer;