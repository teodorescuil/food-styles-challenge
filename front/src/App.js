import React from 'react';
import { Provider} from 'react-redux';
import RootCuisines from './components/root-cuisines'
import store from './redux/store';
import { StyleSheet, View } from 'react-native';

function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <RootCuisines />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(236, 236, 236)',
        paddingHorizontal: 18,
        paddingVertical: 20,
        flex: 1
    }
})

export default App;
