let ScaleImgToAverageSize;

ScaleImgToAverageSize = (width, height) =>
    height <= 1500 && width <= 1500 ?
        height > 1000 || width > 1000 ?
            0.4 : height > 560 && height < 1000 || width > 560 && width < 1000 ? 0.6 : 0.8 : 0.2;

export default ScaleImgToAverageSize;