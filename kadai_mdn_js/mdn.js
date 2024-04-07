const today = new Date();
const [year, month, date] = [
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
]

const ymd = year + '年' + month + '月' + date + '日';
console.log(ymd);