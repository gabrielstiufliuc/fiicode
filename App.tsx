import HybridApp from './src/App';
import { Router } from './src/routing';
import * as React from 'react';
import { AppRegistry, Text } from 'react-native';
(global as any).process.version = '0.1.0';

export default class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <Router>
                <HybridApp />
                {/* <Text>Hello</Text> */}
            </Router>
        );
    }
}

AppRegistry.registerComponent('fiicode', () => App);