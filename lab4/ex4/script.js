const base = document.querySelector('.worda')
const find = document.querySelector('.wordB')
const but = document.querySelector('.but')
const result = document.querySelector('.result')



but.onclick = function(){
    var basecontent =base.value;
    var findcontent = find.value;
    result.insertAdjacentText("beforeend",`${countText(basecontent,findcontent)} lần`)

}
function countText(basecon,findcon){
    var count = 0;
    var word = basecon.split(" ");
    for(let i =0; i<word.length ; i++){
        if(word[i] == findcon){
            count++;
        }
    }
    return count;
}