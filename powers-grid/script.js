window.onload = function () {
     
    const table = document.getElementsByTagName('table')[0];
    
    //create top headers 
    for(i=0; i<=1; i++){
        let tr = document.createElement('tr');
        tr.className += 'row-top';
        table.appendChild(tr);
        let rowHandle = document.getElementsByTagName('tr')[0];
        
        for(i=0; i<7; i++){
            let td = document.createElement('td');
            td.className += 'top-header';
            rowHandle.appendChild(td);
        };
    };
    
    //create rows
    for(i=1; i<=6; i++){
        let tr = document.createElement('tr');
        tr.className += `row ${i}`;
        table.appendChild(tr);
        let rowHandle = document.getElementsByTagName('tr')[i];
        
        for(i2=0; i2<7; i2++){
            let currIter = i2;
            let td = document.createElement('td');
            if(currIter === 0){
                td.className += 'left-header'
            }else{
                td.className += `data ${currIter}`;
            }
            rowHandle.appendChild(td);
        }
    };
    

    
    //calculate powers
    let leftHeadLength = document.getElementsByClassName('left-header').length;

    for (rowCounter = 0; rowCounter < leftHeadLength; rowCounter++) {
        currentIter = rowCounter + 1;

        for (result = 0; result < 7; result++) {
            let get = document.getElementsByClassName(`data ${currentIter}`);
            let currentPow = result + rowCounter;
            let currentValue = Math.pow(2, currentPow);

//            get[result].textContent = currentValue;
        };

    };

};
