const table = document.getElementsByTagName('table')[0];

//create top headers
function create_top_headers (){
    for (i = 0; i <= 1; i++) {
        let tr = document.createElement('tr');
        tr.className += 'row-top';
        table.appendChild(tr);
        let rowHandle = document.getElementsByTagName('tr')[0];

        for (i = 0; i < 7; i++) {
            let td = document.createElement('td');
            td.className += 'top-header';
            rowHandle.appendChild(td);
        }
    }
}
//create rows
function create_rows (){
    for (i = 1; i <= 6; i++) {
        let tr = document.createElement('tr');
        tr.className += `row ${i}`;
        table.appendChild(tr);
        let rowHandle = document.getElementsByTagName('tr')[i];

        for (i2 = 0; i2 < 7; i2++) {
            let currIter = i2;
            let td = document.createElement('td');
            if (currIter === 0) {
                td.className += 'left-header'
            } else {
                td.className += `data ${currIter}`;
            }
            rowHandle.appendChild(td);
        }
    }
}


//CALCULATE METHODS
//    let leftHeadLength = document.getElementsByClassName('left-header').length;

function calculate_top_headers () {
    for (let result = 0; result < 6; result++) {
        let headerValue = Math.pow(2,(result));
        let topHeader = document.getElementsByClassName('top-header');
        topHeader[result +1].textContent = headerValue;
    }
}

function calculate_data () {
    for (let rowCounter = 0; rowCounter < 16; rowCounter++) {
        currentIter = rowCounter + 1;

        for (let result = 0; result < 6; result++) {
            let headerRow = document.getElementsByClassName('row')[currentIter - 1];
            let leftHeader = document.getElementsByClassName('left-header')[currentIter - 1];
            let get = headerRow.getElementsByClassName('data');
            let currentPow = result + rowCounter;
            let currentValue = Math.pow(2, currentPow);
            leftHeader.textContent = Math.pow(2, (currentIter - 1));
            get[result].textContent = currentValue;
        }

    }
}

window.onload = function () {
    create_top_headers()
    create_rows()
    calculate_top_headers()
    calculate_data()
};
