function getLetterNumber() {

    var chr = document.getElementById('input-character').value;

    var text = document.getElementById('input-text').value;

    var result = getNumber(chr, text);

    document.getElementById('text-result').innerHTML = result;

}

function getNumber(chr, text){

    var newText = text.toLowerCase();

    var number = null;

    for (let i = 0; i < newText.length; i++) {
        
        if(newText[i] === chr){

            number ++;

        }
        
    }

    return number;

}