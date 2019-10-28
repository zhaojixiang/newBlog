var cmap = [];
var alphaValue = 255;

export function calcColorScale(colormapLength) {
    cmap = []
    if (colormapLength == 0) {
        colormapLength = 1;
    }
    var cMatrix = new Array();
    // cmap = new Array();
    for (var i = 0; i < colormapLength; ++i) {
        cMatrix[i] = new Array();
        for (var j = 0; j < 3; ++j) {
            cMatrix[i].push(0);
        }
        cmap.push(new Array(4));
        //for (var j = 0; j < 4; ++j) {
        //	cmap[i].push(0);
        //}
    }

    var n = Math.ceil(colormapLength / 4.0);
    var nMod = 0;
    var fArray = new Array(3 * n - 1);
    var red = new Array(fArray.length);
    var green = new Array(fArray.length);
    var blue = new Array(fArray.length);

    if (colormapLength % 4 == 1) {
        nMod = 1;
    }
    for (var i = 0; i < fArray.length; i++) {
        if (i < n)
            fArray[i] = (i + 1) / n;
        else if (i >= n && i < 2 * n - 1)
            fArray[i] = 1.0;
        else if (i >= 2 * n - 1)
            fArray[i] = (3 * n - 1 - i) / n;
        green[i] = Math.ceil(n / 2.0) - nMod + i;
        red[i] = green[i] + n;
        blue[i] = green[i] - n;
    }

    var nb = 0;
    for (var i = 0; i < blue.length; i++) {
        if (blue[i] > 0)
            nb++;
    }

    for (var i = 0; i < colormapLength; i++) {
        for (var j = 0; j < red.length; j++) {
            if (i == red[j] && red[j] < colormapLength) {
                cMatrix[i][0] = fArray[i - red[0]];
            }
        }
        for (var j = 0; j < green.length; j++) {
            if (i == green[j] && green[j] < colormapLength)
                cMatrix[i][1] = fArray[i - green[0]];
        }
        for (var j = 0; j < blue.length; j++) {
            if (i == blue[j] && blue[j] >= 0)
                cMatrix[i][2] = fArray[fArray.length - 1 - nb + i];
        }
    }

    for (var i = 0; i < colormapLength; i++) {
        cmap[i][0] = alphaValue;
        for (var j = 0; j < 3; j++) {
            cmap[i][j + 1] = Math.ceil(cMatrix[i][j] * 255);
        }
    }
}

export function getColor(cmin, cmax, val) {
    var colorLength = cmap.length;
    var cindex;
    if ((cmax - cmin) <= 0) {
        cindex = 1;
    } else {
        cindex = Math.round((colorLength * (val - cmin) + (cmax - val)) / (cmax - cmin));
    }
    if (cindex < 1)
        cindex = 1;
    if (cindex > colorLength)
        cindex = colorLength;

    //if (reverse)
    //	cindex = colorLength - cindex - 1;
    var ARGBArray = new Array(4);
    for (var k = 0; k < 4; k++) {
        ARGBArray[k] = cmap[cindex - 1][k];
    }

    return "rgb(" + ARGBArray[1] + ',' + ARGBArray[2] + ',' + ARGBArray[3] + ')';
}
// export default {calcColorScale, getColor}
