import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 11
    },
    buttonWrapper: {
        marginRight: 8
    },
    button: {
        backgroundColor: 'rgb(236, 236, 236)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 7,
        paddingVertical: 6,
        borderRadius: 5
    },
    buttonLabel: {
        textTransform: 'uppercase',
        fontFamily: 'ProximaNovaAlt-Bold',
        fontSize: 11.5
    },
    list: {
        paddingLeft: 20
    }
});

export default styles;