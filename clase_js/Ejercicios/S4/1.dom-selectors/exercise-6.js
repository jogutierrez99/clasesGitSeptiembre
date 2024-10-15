let $dataSets = document.querySelectorAll("[data-function]");

let count = 0;
for (const $dataSet of $dataSets) {
    
    if(count == 2){
        console.log($dataSet.textContent);
    }
    count++;
}
