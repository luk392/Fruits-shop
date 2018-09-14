var powersGrid = {
    rows: 9,
    columns: 10,
    table: document.getElementsByTagName('table')[0],
    button_update_columns: document.getElementById('update-columns'),
    button_update_rows: document.getElementById('update-rows'),

    //DOM METHODS
    create_top_headers() {
        for (i = 0; i <= 1; i++) {
            let tr = document.createElement('tr');
            tr.className += 'row-top';
            powersGrid.table.appendChild(tr);
            let rowHandle = document.getElementsByTagName('tr')[0];

            for (i = 0; i <= powersGrid.columns; i++) {
                let td = document.createElement('td');
                if (i === 0) {
                    td.className += 'corner-header';
                    rowHandle.appendChild(td);
                } else {
                    td.className += 'top-header';
                    rowHandle.appendChild(td);
                }
            }
        }
    },
    create_left_headers() {
        for (i = 1; i <= this.rows; i++) {
            let tr = document.createElement('tr');
            tr.className += `row ${i}`;
            powersGrid.table.appendChild(tr);
            let rowHandle = document.getElementsByTagName('tr')[i];

            let columns = powersGrid.rows;

            for (i2 = 0; i2 < 1; i2++) {
                let currIter = i2;
                let td = document.createElement('td');
                td.className += 'left-header'
                rowHandle.appendChild(td);
            }
        }
    },
    create_rows() {
        for (i = 1; i <= this.rows; i++) {
            let tr = document.createElement('tr');
            tr.className += `row ${i}`;
            powersGrid.table.appendChild(tr);
            let rowHandle = document.getElementsByTagName('tr')[i];

            let columns = powersGrid.columns;

            for (i2 = 1; i2 <= columns; i2++) {
                let currIter = i2;
                let td = document.createElement('td');
                td.className += `data ${currIter}`;
                rowHandle.appendChild(td);
            }
        }
    },
    //CALCULATE METHODS
    calculate_top_headers() {
        let topHeader = document.getElementsByClassName('top-header');
        let vall = this.columns ;
        for (let result = 0; result < vall; result++) {
            let headerValue = Math.pow(2, (result));
            topHeader[result].textContent = headerValue;
        };
    },
    calculate_left_headers() {
        let leftHeader = document.getElementsByClassName('left-header');
        let vall = this.rows - 1;
        for (let result = 0; result < vall; result++) {
            let headerValue = Math.pow(2, (result));
            leftHeader[result].textContent = headerValue;
        };
    },
    calculate_data() {
        for (let rowCounter = 0; rowCounter < this.rows; rowCounter++) {
            currentIter = rowCounter + 1;

            for (let result = 0; result < this.columns ; result++) {
                let headerRow = document.getElementsByClassName('row')[currentIter - 1];
                let leftHeader = document.getElementsByClassName('left-header')[currentIter - 1];
                let get = headerRow.getElementsByClassName('data');
                let currentPow = result + rowCounter;
                let currentValue = Math.pow(2, currentPow);
                leftHeader.textContent = Math.pow(2, (currentIter - 1));
                console.log(get[result]);
                get[result].textContent = currentValue;
            }
        }
    },
    create_powers_grid() {
        powersGrid.create_top_headers();
        powersGrid.create_left_headers();
        powersGrid.create_rows();
        powersGrid.calculate_top_headers();
        powersGrid.calculate_left_headers();
        powersGrid.calculate_data();
    },
    update_columns() {
        console.log("heh");
        let input_columns = document.getElementById('columns-input').value;
        console.log(input_columns);
        powersGrid.columns = input_columns;
        powersGrid.table.innerHTML = '';
        powersGrid.create_powers_grid();
    },
    update_rows() {
        console.log("heh");
        let input_rows = document.getElementById('rows-input').value;
        console.log(input_rows);
        powersGrid.rows = input_rows;
        powersGrid.table.innerHTML = '';
        powersGrid.create_powers_grid();
    }
}



window.onload = function () {
    powersGrid.button_update_columns.addEventListener('click', powersGrid.update_columns)
    powersGrid.button_update_rows.addEventListener('click', powersGrid.update_rows)
    powersGrid.create_powers_grid()
};
