const wrap = (line, maxLen) =>{
    let newStr = '';
    let remaining = maxLen;

    if(line === ''){
        return line;
    }
    else{
        let wordArr = line.split(" ");
        //console.log(wordArr);
        for(let i = 0; i<wordArr.length;i++){
            if(wordArr[i].length<maxLen){
                if(wordArr[i].length<=remaining){
                    newStr = newStr+wordArr[i];
                    remaining-=wordArr[i].length;
                    if(remaining>0 && i!==wordArr.length-1){
                        newStr +=' ';
                        remaining-=1;
                    }
                }
                else{
                    remaining = maxLen;
                    newStr= newStr + '\n' + wordArr[i];
                    remaining -= wordArr[i].length;
                    if(remaining>0 && i!==wordArr.length-1){
                        newStr +=' ';
                        remaining-=1;
                    }
                }
            }
            else{
                newStr+='';
            }
        }
    }
    return newStr;
};
module.exports = wrap;

// if(wordArr[i+1].length<remaining && i!==wordArr.length-1)
//                         newStr +=' ';
//                         remaining-=1;
//                     }
//                     else{
//                         remaining = maxLen;
//                         newStr +='\n'
//                     }


//ACTUAL SOLUTION

// function wrap(line, maxLen){
//      if(line.length<=maxLen){
//          return line;
//      }

// const indexOfBlank = line.lastIndexOf(' ', maxLen);
// let split;
// let offset;
// if (indexOfBlank > -1){
//     split = indexOfBlank;
//     offset = 1;
// }
// else{
//     split = maxLen;
//     offset = 0;
// }

// return line.substring(0, split) + "\n" + wrap(line.substring(split + offset), maxLen);
// }
// module.exports = wrap;