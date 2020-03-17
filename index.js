import {AppRegistry} from 'react-native';
import App from './components/App';
import {name as appName} from './app.json';
import React, { Component } from 'react';

export default class AntTech extends Component {
    render() {
        return <App/>;
    }
}

AppRegistry.registerComponent(appName, () => App);