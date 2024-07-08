import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    searchCuisinesImage: {
		height: 33,
		width: 33
	},
	searchCuisinesWrapper:{
		marginLeft: 17,
		marginRight: 24,
		marginBottom: 11,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		
		borderRadius: 17
	},
	searchCuisineLeftComponent: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	searchCuisinesText: {
		marginLeft: 7,
		fontFamily: 'ProximaNovaAlt-Bold',
		fontSize: 15,
		lineHeight: 18
	}
});

export default styles;