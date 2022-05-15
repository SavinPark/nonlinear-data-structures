// [문제 02] 카드 뽑기

// 친구와 카드 게임을 하려고 한다. 카드는 총 N장 있으며, 1부터 N까지 번호가 차례대로 붙어 있다.
// 카드의 순서는 1번 카드가 가장 위에 있고 N번 카드가 가장 아래인 상태로 놓여 있다.
// 이때 맨 위에 있는 한 장을 빼서 나누고, 그 다음 맨 위에 있는 한 장을 아래로 집어 넣으면서 모든 카드를 분배할 때까지 카드 한 장씩 빼고 넣는 작업을 반복한다.
// 이러한 규칙으로 분배된 카드의 순서를 알려주는 프로그램을 작성하시오.
// 입력값은 자연수가 주어지며, 규칙에 따라 분배되는 카드의 순서를 기록해 배열 형태로 반환하시오.


/* user code */
function Queue() {
    this.array = [];
}
Queue.prototype.enqueue = function(element) {
    this.array.push(element);
}
Queue.prototype.dequeue = function () {
    return this.array.shift();
}

function answer(n) {
    let result = [];
    let queue = new Queue();

    for (let i = 1; i <= n; i++) {
        queue.enqueue(i);
    }

    while (queue.array.length != 0) {
        result.push(queue.dequeue());
        // console.log('result : ' + result);
        if (queue.array.length != 0) {
            queue.enqueue(queue.dequeue());
            // console.log('Q : ' + queue.array);
        }
    }
    return result;
}

/* main code */
let input = [
    // TC 1
    4,
    // TC 2
    7,
    // TC 3
    10
];
for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i]));
}

// OUPUT
// #1 [ 1, 3, 2, 4 ]
// #2 [
//   1, 3, 5, 7,
//   4, 2, 6
// ]
// #3 [
//   1, 3,  5, 7, 9,
//   2, 6, 10, 8, 4
// ]