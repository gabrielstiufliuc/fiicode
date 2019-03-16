import { Example } from './Example';
import { Route, Switch } from './routing';
import * as React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { withRouter } from 'react-router';

EStyleSheet.build({});

interface Props {
    history: any;
    location: any;
}

interface State {
    isAuth: boolean;
}

class App extends React.Component<Props, State> {
    constructor(props: any, context: any) {
        super(props, context);

        this.state = {
            isAuth: false,
        } as State;
    }

    public render() {
        return (
            <View nativeID={'app'}>
                <SafeAreaView nativeID={'safeAreaView'} style={{ flex: 1 }}>
                    <Switch>
                        <Route component={Example} path='/' />
                    </Switch>
                </SafeAreaView>
            </View>
        );
    }
}

// in order to access history from props, use withRouter HOC
export default withRouter<any>(App);