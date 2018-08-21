window.onload = function () {
    let leftHeadLength = document.getElementsByClassName('left-header').length;

    for (rowCounter = 0; rowCounter < leftHeadLength; rowCounter++) {
        currentIter = rowCounter + 1;

        for (result = 0; result < 7; result++) {
            let get = document.getElementsByClassName(`data ${currentIter}`);
            let currentPow = result + rowCounter;
            let currentValue = Math.pow(2, currentPow);

            get[result].textContent = currentValue;
        };

    };

};
