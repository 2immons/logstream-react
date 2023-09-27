let a = Math.floor(Math.random() * 100);
let res;

if (a > 10)
    res = a;
else
    res = a * 2;

switch (true) {
    case res > 5:
        res = (2 * a) + 1;
        break;
    default:
        if (a < 3)
            res = 1;
        else {
            let temp = 2 * (a - 2);
            switch (true) {
                case temp > 4:
                    res = 5;
                    break;
                default:
                    if (a % 2 == 0)
                        res = 6;
                    else
                        res = 7;
            }
        }
}

console.log(res);