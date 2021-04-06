const responseList:Array<object> = [
    { id: 1, a: 1 },
    { id: 2, a: 2 },
    { id: 3, a: 3 },
    { id: 1, a: 4 },
    { id: 3, a: 5 },
    { id: 3, a: 7 },
];
//对象数组去重
function unique(arr:Array<object>,key):Array<object>{
    let keyList = []
    let list = []
    for (let i = 0; i < arr.length; i++) {
        if (!keyList.includes(arr[i][key])){
            keyList.push(arr[i][key])
            list.push(arr[i])
        }
    }
    return list
}

console.log(unique(responseList, 'id'));