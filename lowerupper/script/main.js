function getString(){

    var text = document.getElementById('input-text').value;

    var result = getChange(text.trim());

    document.getElementById('result').innerHTML = result.join("");
}

function getChange(text){

    var array = text.split("");

    for (let i = 1; i < array.length; i++) {
        
        if(i%2==0){

            array[i] = array[i].toLowerCase();

        } else {
            
            array[i] = array[i].toUpperCase();

        }
        
    }

    array[0] = array[0].toLowerCase();

    return array;
}