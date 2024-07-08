import React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './search-navigation-styles';

function SearchNavigation({handleGoBack, handleGoHome}) {
    return (
        <View style={styles.searchCuisineRightComponent}>
            <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/app-assets/arrow-left-s-line.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGoHome}>
                <Image
                    style={styles.icon}
                    source={require('../../assets/app-assets/close-line.png')}
                />
            </TouchableOpacity>
        </View>
    );
}

SearchNavigation.propTypes = {
    handleGoBack: PropTypes.func.isRequired,
    handleGoHome: PropTypes.func.isRequired
}

export default SearchNavigation;
