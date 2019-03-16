import * as React from 'react';
import { Text } from 'react-native';

export class Example extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);

        this.state = {};
    }

    public render() {
        return (
            <Text>Hello</Text>
        );
    }
}