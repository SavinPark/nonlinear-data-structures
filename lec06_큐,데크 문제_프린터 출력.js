// [문제 03] 프린터 출력

// 새로 구매한 프린터는 우선 순위를 고려하여 프린트 결과물을 출력해주기 때문에 다음과 같은 규칙으로 동작한다. 
// 현재 등록된 프린트 문서들의 우선순위를 확인하고, 가장 높은 우선순위 문서가 먼저 출력되며 현대 선택된 문서가 가장 높은 우선순위 문서가 아니라면, 취소되고 다시 뒤쪽 순서로 설정돼 추가된다.
// 만약 3개의 문서 A, B, C가 대시 상태이고, 중요도가 1, 2, 3이라면
// "ABC -> BCA -> CAB -> C 출력 -> AB -> BA -> B출력 -> A -> A출력 "으로 동작한다.
// 현재 등록된 문서 우선순위를 보고 내가 등록한 문서가 언체 출력될 지 계산하는 프로그램을 작성하시오.
// 입력은 우선순위와 0번부터 시작하는 문서 번호가 주어지고, ㅈ어진 문서번호가 출력될 순서를 반환한다.

/* user code */
function Queue() {
    this.array = [];
}
Queue.prototype.enqueue = function(element) {
    this.array.push(element);
}
Queue.prototype.front = function () {
    return this.array[0];
}
Queue.prototype.dequeue = function () {
    return this.array.shift();
}
Queue.prototype.max = function () {
    return Math.max(...this.array);
}

function answer(priorities, select) {
    let result = -1;

    let vq = new Queue(); // value
    let pq = new Queue(); // priority

    for (let i = 0; i < priorities.length; i++) {
        vq.enqueue(i);
        pq.enqueue(priorities[i]);
    }
    // console.log(vq.array)
    // console.log(pq.array)

    let count = 0;
    while (true) {
        if (pq.front() === pq.max()) {
            if (vq.front() === select) {
                count++;
                result = count;
                break;
            } else {
                vq.dequeue();
                pq.dequeue();
                count++;
            }
        } else {
            vq.enqueue(vq.dequeue());
            pq.enqueue(pq.dequeue());
        }
        // console.log(vq.array)
        // console.log(pq.array)

    }
    return result;
}

/* main code */
let input = [
    // TC 1
    [[3], 0],
    // TC 2
    [[3, 4, 5, 6], 2],
    // TC 3
    [[1, 1, 5, 1, 1, 1], 0]
];
for (let i = 0; i < input.length; i++) {
    process.stdout.write(`#${i + 1} `);
    console.log(answer(input[i][0], input[i][1]));
}

// OUPUT
// #1 1
// #2 2
// #3 5