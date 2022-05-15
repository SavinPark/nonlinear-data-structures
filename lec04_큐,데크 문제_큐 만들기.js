// [문제 01] 큐 만들기

// 자연수를 저장하는 큐를 만들고자 한다. 입력으로 주어지는 큐 명령어를 처리하는 프로그램을 작성하시오.
// 명령어의 종류는 6가지, 명령에 따라 반환된 값을 result 배열에 넣도록 한다.
// - enqueue X : 자연수 X를 큐 뒤쪽에 넣는다.
// - dequeue : 큐 앞쪽에 있는 값을 제거하고 그 값을 반환한다. 만약 값이 없다면 -1를 반환한다.
// - empty : 큐가 비어 있다면 1, 아니면 0 반환
// - front : 큐 앞 쪽에 값이 있다면 해당 값을, 없다면 -1 반환
// - back : 큐 뒤 쪽에 값이 있다면 해당 값을, 없다면 -1 반환

/* user code */
function Queue() {
    this.array = [];
}
Queue.prototype.enqueue = function(element) {
    this.array.push(element);
}
Queue.prototype.dequeue = function () {
    let ret = this.array.shift();
    return ret === undefined ? -1 : ret;
}
Queue.prototype.size = function () {
    return this.array.length;
}
Queue.prototype.empty = function () {
    return this.array.length === 0 ? 1 : 0;
}
Queue.prototype.front = function () {
    return this.array.length === 0 ? -1 : this.array[0];
}
Queue.prototype.back = function () {
    return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
}

function answer(cmds) {
    let result = [];
    let queue = new Queue();

    for (let i = 0; i < cmds.length; i++) {
        let cmd = cmds[i].split(" ")[0];

        switch (cmd) {
            case "enqueue" :
                queue.enqueue(Number(cmds[i].split(" ")[1]));
                break;
            case "dequeue" :
                result.push(queue.dequeue());
                break;
            case "size" :
                result.push(queue.size());
                break;
            case "empty" :
                result.push(queue.empty());
                break;
            case "front" :
                result.push(queue.front());
                break;
            case "back" :
                result.push(queue.back());
                break;
        }
    }
    return result;
}

/* main code */
let input = [
    // TC 1
    ["enqueue 1", "enqueue 2", "dequeue", "dequeue", "dequeue"],
    // TC 2
    ["enqueue 3", "enqueue 4", "enqueue 5", "enqueue 6", "front", "back", "dequeue", "size", "empty"],
    // TC 3
    ["enqueue 7", "enqueue 8", "front", "back", "size", 
     "empty", "dequeue", "dequeue", "dequeue", "size",
     "empty", "dequeue", "enqueue 9", "empty", "front"]
];
for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUPUT
// #1 [ 1, 2, -1 ]
// #2 [ 3, 6, 3, 3, 0 ]
// #3 [
//   7,  8, 2, 0,  7,
//   8, -1, 0, 1, -1,
//   0,  9
// ]
