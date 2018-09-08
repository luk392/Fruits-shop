const table = document.getElementsByTagName('table')[0];

powersGrid = {
    rows: 9,
    column: 6
}

const add_columns = document.getElementById('add-columns');
const add_rows = document.getElementById('add-rows');

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
        
        //
        let rows = powersGrid.rows;
        
        for (i2 = 0; i2 < rows; i2++) {
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

window.onload = function () {
    create_top_headers()
    create_rows()
//    calculate_top_headers()
//    calculate_data()
};