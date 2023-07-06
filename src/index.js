module.exports = function toReadable (number) {
  let res=''
    let numLess20 ={
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: "four",
        5: 'five',
        6: 'six',
        7: "seven",
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        19: 'nineteen',
        18: 'eighteen',
    }
    let num20_100={
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    }
/*меньше 20*/
    if(number<20){
        res=numLess20[number]
        return res
    }
    let stringNumber=number.toString()
    let arrNumber=[...stringNumber]
    /*от 20 до 100*/
    if(number<100){
        arrNumber[0]=arrNumber[0]+'0';
        if(arrNumber[1]=='0'){
            res=num20_100[arrNumber[0]]
        }
        else{
          res=num20_100[arrNumber[0]]+' '+numLess20[arrNumber[1]]  
        }
        return res
    }
    /*от 100 до 1000*/
    if(arrNumber[1]=='1'){
        let a=Number(arrNumber[1]+arrNumber[2])
        res=`${numLess20[arrNumber[0]]} hundred` +' ' +numLess20[a]
    }
    else if(arrNumber[2]=='0'){
        arrNumber[1]=arrNumber[1]+'0';
        res=`${numLess20[arrNumber[0]]} hundred` +' ' +num20_100[arrNumber[1]]
    }
    else{
        arrNumber[1]=arrNumber[1]+'0';
      res=`${numLess20[arrNumber[0]]} hundred` +' ' +num20_100[arrNumber[1]]+' '+numLess20[arrNumber[2]]  
    }
    let arr = res.split(' ')
    arr.forEach((item,index)=>{
        if(item=='undefined'){arr.splice(index,1)}
    })
    res=arr.join(' ')
    return res  
}
