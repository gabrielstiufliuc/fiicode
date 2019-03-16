import HybridApp from './src/App';
import { Router } from './src/routing';
import * as React from 'react';
import { AppRegistry } from 'react-native';

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        console.log('I am rendering');
        return (
            <Router>
                <HybridApp />
            </Router>
        );
    }
}

AppRegistry.registerComponent('fiicode', () => App);