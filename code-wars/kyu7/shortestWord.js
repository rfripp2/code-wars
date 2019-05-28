function findShort(s){
    let words = s.split(" ");
    let shortword = words[0];
    for (let word of words){
      if(word.length < shortword.length){
      shortword = word;
    }
    }
    return shortword.length;
}