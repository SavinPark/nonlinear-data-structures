// 데크 (Deque)
// Double-Ended Queue 약자로, 삽입과 삭제가 양쪽 끝에서 모두 발생할 수 있는 선형 자료 구조

/* 데크 구현 (1) */
// Deque() : 초기 속성값 설정을 위한 생성자 함수
function Deque(array = []) {
    this.array = array;
}

// getBuffer() : 객체 내 데이터 셋 반환
Deque.prototype.getBuffer = function () {
    return this.array.slice();
}

// isEmpty() : 데이터 비어있는지 확인
Deque.prototype.isEmpty = function () {
    return this.array.length == 0;
}

let dq1 = new Deque([1, 2, 3]);
console.log(dq1);

let data = dq1.getBuffer();
console.log(data == dq1.array);
console.log(data);

console.log(dq1.isEmpty());

console.log(Object.getOwnPropertyDescriptors(Deque.prototype));

// OUTPUT
// Deque { array: [ 1, 2, 3 ] }
// false
// [ 1, 2, 3 ]
// false
// {
//   constructor: {
//     value: [Function: Deque],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   getBuffer: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   isEmpty: {
//     value: [Function (anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }

/* 데크 구현 (2) */
// pushFront() : 앞쪽 데이터 추가
Deque.prototype.pushFront = function (element) {
    return this.array.unshift(element);
}

// popFront() : 앞쪽 데이터 삭제
Deque.prototype.popFront = function () {
    return this.array.shift();
}

// pushBack() : 뒤쪽 데이터 추가
Deque.prototype.pushBack = function (element) {
    return this.array.push(element);
}

// popBack() : 뒤쪽 데이터 삭제
Deque.prototype.popBack = function () {
    return this.array.pop();
}

let dq2 = new Deque([1, 2, 3]);
console.log(dq2);

dq2.pushFront(0);
dq2.pushBack(4);
console.log(dq2);

console.log(dq2.popFront());
console.log(dq2.popBack());
console.log(dq2);

// OUTPUT
// Deque { array: [ 1, 2, 3 ] }
// Deque { array: [ 0, 1, 2, 3, 4 ] }
// 0
// 4
// Deque { array: [ 1, 2, 3 ] }


/* 데크 구현 (3) */
// front() : 가장 첫 데이터 반환
Deque.prototype.front = function () {
    return this.array.length == 0 ? undefined : this.array[0];
}

// back() : 가장 끝 데이터 반환
Deque.prototype.back = function () {
    return this.array.length == 0 ? undefined : this.array[this.array.length - 1];
}

// size() : 큐 내 데이터 개수 확인
Deque.prototype.size = function () {
    return this.array.length;
}

// clear() : 큐 초기화
Deque.prototype.clear = function () {
    this.array = [];
}

let dq3 = new Deque([1, 2, 3]);
console.log(dq3);

console.log(dq3.front());
console.log(dq3.back());
console.log(dq3.size());

dq3.clear();
console.log(dq3);

// OUTPUT
// Deque { array: [ 1, 2, 3 ] }
// 1
// 3
// 3
// Deque { array: [] }
