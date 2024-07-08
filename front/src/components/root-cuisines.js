import React, {useEffect, useMemo, useCallback, useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { setCuisines, setCurrentCuisine } from '../redux/actions/cuisines-actions';
import {useSelector, useDispatch } from 'react-redux';
import {FIRST_LEVEL} from '../helpers/constants';
import {getFormattedData} from '../helpers/functions';
import CuisineItem from './cuisine-item/cuisine-item';
import SearchCuisine from './search-cuisine/search-cuisine';
import Filters from './filters/filters';
import {FILTERS_DATA} from '../mocks/filters-mocks';

const fetchCuisines = async dispatch => {
    try {
        const response = await fetch('http://192.168.1.187:3000');
        const cuisines = await response.json();
        dispatch(setCuisines(cuisines));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
}

function RootCuisines() {
    const dispatch = useDispatch();
    const {cuisines, currentCuisine} = useSelector(state => state.cuisines);
	const [displayedCuisines, setDisplayedCuisines] = useState([]);
	const [filtersData, setFiltersData] = useState(FILTERS_DATA);

    useEffect(() => {
        fetchCuisines(dispatch);
    }, [dispatch]);

	useEffect(() => {
		if (currentCuisine) {
			const selectedCuisineChildren = cuisines.filter(cuisine => parseInt(currentCuisine.id) === parseInt(cuisine.parentId) && cuisine.level === currentCuisine.level + 1);
			const selectedCuisineChildrenSorted = getFormattedData(selectedCuisineChildren.sort((item1, item2) => item1.position - item2.position));
			setDisplayedCuisines(selectedCuisineChildrenSorted);
		} else {
			const firstLevelCuisines = cuisines.filter(cuisine => parseInt(cuisine.level) === FIRST_LEVEL);
			setDisplayedCuisines(getFormattedData(firstLevelCuisines));
		}
	}, [currentCuisine, cuisines]);

	const handleCuisinePressed = useCallback(cuisine => {
		dispatch(setCurrentCuisine(cuisine));
	}, []);
	
	const handleGoBack = useCallback(() => {
		if (currentCuisine.level === FIRST_LEVEL) {
			dispatch(setCurrentCuisine(null));
		} else {
			const newCurrentCuisine = cuisines.filter(cuisine => cuisine.id === currentCuisine.parentId)[0];
			dispatch(setCurrentCuisine(newCurrentCuisine));
		}
	}, [currentCuisine]);

	const handleGoHome = useCallback(() => {
		dispatch(setCurrentCuisine(null));
	}, []);

	const handleFilterPressed = id => {
		setFiltersData(prevFilters => prevFilters.map(filter => ({...filter, isEnabled: id === filter.id ? !filter.isEnabled : filter.isEnabled})))
	}

    const renderColumn = useCallback(({item}) => {
		return (
			<View style={{flexDirection: displayedCuisines?.length === 1 ? 'row' : 'column'}}>
				{item.map((columnItem, indexColumn) => (
					<CuisineItem key={columnItem.id} item={columnItem} isFirst={indexColumn === 0} handlePress={handleCuisinePressed} />
				))}
			</View>
		)
	}, [displayedCuisines[0]]);

	const cuisineName = currentCuisine ? currentCuisine.name : 'Cuisines';
	const cuisineImage = currentCuisine ? ({uri: currentCuisine.imagePath}) : require('../assets/app-assets/browse-cuisines.png');

    return (
        <View style={styles.container}>
			<SearchCuisine 
				isHigherLevel={Boolean(currentCuisine)}
				cuisineName={cuisineName}
				cuisineImage={cuisineImage}
				handleGoBack={handleGoBack}
				handleGoHome={handleGoHome} />
			<Filters data={filtersData} handleFilterPressed={handleFilterPressed} />
			{/* <View>
				<SVGImg style={{zIndex: 999}} width={50} height={50} />
			</View> */}
            <FlatList
				contentContainerStyle={styles.cuisinesList}
                horizontal
                data={displayedCuisines}
                renderItem={renderColumn}
                keyExtractor={(item, index) => `column-${index}`}
            />
        </View>
    );
}
const styles = StyleSheet.create({
	container: {
		borderRadius: 9,
		backgroundColor: 'rgb(255, 255, 255)',
		paddingVertical: 20,
	},
	cuisinesList: {
		paddingLeft: 10,
	}

  });

export default RootCuisines;
