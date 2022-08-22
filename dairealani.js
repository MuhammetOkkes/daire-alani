// pi.r^2
const arguments = process.argv.slice(2)
function hesapla(r){
    let alan = (Math.PI * Math.pow(r,2)).toFixed();
console.log(`yaricapi ${r} olan dairenin alani: ${alan}`)
};
hesapla(arguments[0] * 1);
