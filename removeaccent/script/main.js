function changeString(){

    var text = document.getElementById('input-text').value;

    var result = RemoveAccents(text);
    
    document.getElementById('result').innerHTML = result;
}

function RemoveAccents(s) {

    var i = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖŐòóôõöőÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜŰùúûüűÑñŠšŸÿýŽž'.split('');
    var o = 'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUUuuuuuNnSsYyyZz'.split('');
    
    var map = {};

    i.forEach((i, idx) => map[i] = o[idx]);

    return s.replace(/[^A-Za-z0-9]/g, function(ch) { return map[ch] || ch; })
  }