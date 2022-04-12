function compareTrue (value1, value2){
    let resultComparation = 0;
    if (value1 == true && value2 == true) {
        let resultComparation = true;
        return resultComparation;
    } else {
        resultComparation = false;
        return resultComparation;
    }
}
console.log(compareTrue(true, true));