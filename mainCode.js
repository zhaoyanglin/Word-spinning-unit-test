exports.spinWordsss = (words) => {
    let nArr = words.split(" ");
    for(let i=0; i<nArr.length; i++){
     if(nArr[i].length>4){
      let newW = nArr[i]
      nArr[i] = reverse(newW);
     }
    }
    return nArr.join(" ")
  };

reverse = (word) => {
    word.split("")
    let a = []
    for(let i=0; i<word.length; i++) {
      a[i] = word[word.length - (1+i)]
    }
    return a.join("")
  }