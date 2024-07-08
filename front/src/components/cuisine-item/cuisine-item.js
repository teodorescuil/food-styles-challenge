import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './cuisine-item-styles';

function CuisineItem({item, isFirst, handlePress}) {
    return (
        <TouchableOpacity
            style={StyleSheet.flatten([styles.columnItem, isFirst && {marginBottom: 10}])}
            onPress={() => handlePress(item)}
        >
            <Image
                style={styles.itemImage}
                source={{
                    uri: item.imagePath,
                }}
            />
            <Text style={styles.itemName}>{item?.name}</Text>
        </TouchableOpacity>
    );
}

CuisineItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        imagePath: PropTypes.string
    }).isRequired,
    isFirst: PropTypes.bool.isRequired,
    handlePress: PropTypes.func.isRequired
}

export default CuisineItem;
