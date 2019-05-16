function arrayPlusArray(arr1,arr2){
    let sumarr1 = 0;
    let sumarr2 = 0;

    arr1.forEach(function(element1){
        sumarr1 += element1;
    })

    arr2.forEach(function(element2){
        sumarr2 += element2;
    })


    return sumarr1 + sumarr2;
}
