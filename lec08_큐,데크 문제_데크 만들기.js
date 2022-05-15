// [문제 05] 데크 만들기

// 자연수를 저장하는 데크를 만들고자 한다. 입력으로 주어진 명령어를 처리할 수 있는 프로그램을 작성하시오.
// 명령어의 종류는 총 8가지며 아래와 같으며, 명령에 따라 반환값을 result 배열에 넣도록 한다.
// - push_front X : 자연수 X를 앞쪽에 넣는다.
// - puch_back X : 자연수 X를 뒤쪽에 넣는다.
// - pop_front : 앞쪽에 있는 값을 제거하고 그 값을 반환한다. 만약 값이 없다면 -1을 반환한다.
// - pop_back : 뒤쪽에 있는 값을 제거하고 그 값을 반환한다. 만약 값이 없다면 -1을 반환한다.
// - empty : 큐가 비어있다면 1, 아니면 0을 반환
// - size : 큐에 들어있는 자연수 개수 반환
// - front : 앞쪽에 값이 있다면 값을, 없다면 -1을 반환
// - back : back : 큐 뒤쪽에 값이 있다면 값을, 없다면 -1을 반환



/* user code */
function Deque(array = []) {
    this.array = array;
}
Deque.prototype.push_front = function (element) {
    return this.array.unshift(element);
}
Deque.prototype.push_back = function (element) {
    return this.array.push(element);
}
Deque.prototype.pop_front = function () {
    let ret = this.array.shift();
    return ret === undefined ? -1 : ret;
}
Deque.prototype.pop_back = function () {
    let ret = this.array.pop();
    return ret === undefined ? -1 : ret;
}
Deque.prototype.front = function () {
    return this.array.length == 0 ? -1 : this.array[0];
}
Deque.prototype.back = function () {
    return this.array.length == 0 ? -1 : this.array[this.array.length - 1];
}
Deque.prototype.empty = function () {
    return this.array.length == 0 ? 1 : 0;
}
Deque.prototype.size = function () {
    return this.array.length;
}

function answer(cmds) {
    let result = [];

    let dq = new Deque();
    for (let i = 0; i < cmds.length; i++) {
        let cmd = cmds[i].split(" ")[0];

        switch (cmd) {
            case "push_front":
                dq.push_front(Number(cmds[i].split(" ")[1]));
                break;
            case "push_back":
                dq.push_back(Number(cmds[i].split(" ")[1]));
                break;
            case "pop_front":
                result.push(dq.pop_front());
                break;
            case "pop_back":
                result.push(dq.pop_back());
                break;
            case "size":
                result.push(dq.size());
                break;
            case "empty":
                result.push(dq.empty());
                break;
            case "front":
                result.push(dq.front());
                break;
            case "back":
                result.push(dq.back());
                break;
        }
    }
    return result;
}

/* main code */
let input = [
    // TC 1
    ["push_back 1", "push_front 2", "pop_front", "pop_back", "pop_front"],
    // TC 2
    ["push_back 3", "push_front 4", "push_back 5", "push_front 6", "front", "back", "pop_front", "size", "empty"],
    // TC 3
    ["push_back 7", "push_front 8", "front", "back", "size", "empty", "pop_front", "pop_back", "pop_front", "size", "empty", "pop_back", "push_front 9", "empty", "front"]
];
for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUPUT
// #1 [ 2, 1, -1 ]
// #2 [ 6, 5, 6, 3, 0 ]
// #3 [
//   8,  7, 2, 0,  8,
//   7, -1, 0, 1, -1,
//   0,  9
// ]