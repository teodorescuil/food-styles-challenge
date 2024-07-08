import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    columnItem: {
		width: 138,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 10
	},
	itemName: {
		flex: 1,
		marginLeft: 8,
		flexWrap: 'wrap',
		fontFamily: 'ProximaNovaAlt-SemiBold',
		fontSize: 13,
		lineHeight: 14
	},
    itemImage: {
		height: 40,
		width: 40
	},
});

export default styles;