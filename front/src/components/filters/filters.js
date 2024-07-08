import React from 'react';
import {TouchableOpacity, StyleSheet, View, Text, Button, FlatList} from 'react-native';
import PropTypes from 'prop-types';
import styles from './filters-styles';

function Filters({data, handleFilterPressed}) {
    const renderFilter = ({item}) => {
        return (
            <View style={styles.buttonWrapper}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => handleFilterPressed(item.id)}
                >
                    <Text style={StyleSheet.flatten([styles.buttonLabel, {color: item.isEnabled ? 'rgb(67, 67, 67)' : 'rgb(136, 136, 136)'}])}>{item.label}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                contentContainerStyle={styles.list}
                horizontal
                data={data}
                renderItem={renderFilter}
                keyExtractor={({id}) => id}
            />
        </View>
    );
}

Filters.propTypes = {
   data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool.isRequired
   })).isRequired,
   handleFilterPressed: PropTypes.func.isRequired
}

export default Filters;
