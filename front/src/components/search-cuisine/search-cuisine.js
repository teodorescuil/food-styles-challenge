import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import SearchNavigation from '../search-navigation/search-navigation';
import styles from './search-cuisine-styles';

function SearchCuisine({isHigherLevel, cuisineName, cuisineImage, handleGoBack, handleGoHome}) {
    return (
        <View style={StyleSheet.flatten([styles.searchCuisinesWrapper, isHigherLevel ? {backgroundColor: 'rgb(255, 236, 201)'} : {backgroundColor: 'rgb(237, 237, 237)'}])}>
            <View style={styles.searchCuisineLeftComponent}>
                <Image
                    style={styles.searchCuisinesImage}
                    source={cuisineImage}
                />
                <Text style={styles.searchCuisinesText}>{cuisineName}</Text>
            </View>
            {isHigherLevel && <SearchNavigation handleGoBack={handleGoBack} handleGoHome={handleGoHome}/>}
        </View>
    );
}

SearchCuisine.propTypes = {
    isHigherLevel: PropTypes.bool.isRequired,
    handleGoHome: PropTypes.func.isRequired
}

export default SearchCuisine;
