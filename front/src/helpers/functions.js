const getFormattedData = data => data.reduce((acc, currentItem, index, array) => {
    if (index % 2 === 0) {
        if (array[index + 1]) {
            acc.push([currentItem, array[index + 1]])
        } else {
            acc.push([currentItem])
        }
    }
    return acc;
}, []);

export {getFormattedData};