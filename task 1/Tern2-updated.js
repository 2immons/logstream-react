function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);
  
    let res = '';
    
    if (a > 10)
        res = 'a is bigger than 10'
    else
        res = 'a is less than or equal to 10 '
      
        switch (true) {
            case a === 5:
                res += 'an example of a special case'
                break;
            default:
                if (a === 15)
                    res += 'but a is not 15'
                else
                    if (a > 5)
                        res += 'and a is greater than 5'
                    else
                        res += 'and a is less than or equal to 5 '
  
                    switch (true) {
                        case a % 2:
                            res += ' and a is odd'
                            break;
                        default:
                            res += ' and a is even'
                    }      
        }
    return res
}

console.log(manyChecks());
  