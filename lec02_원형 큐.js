// 원형 큐 (Circular Queue)
// "원형 형태"를 가지고, 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조

/* 원형 큐 구현 (1) */
// CircularQueue() : 초기 속성값 설정을 위한 생성자 함수
function CircularQueue(array = [], size = 5) {
    this.array = array;
    this.size = array.length > size ? array.length : size;
    this.length = array.length;
    this.head = 0;
    this.tail = array.length;
}

// getBuffer() : 객체 내 데이터 셋 바노한
CircularQueue.prototype.getBuffer = function () {
    return this.array.slice();
}

// isEmpty() : 데이터 비어 있는지 확인
CircularQueue.prototype.isEmpty = function () {
    return this.length == 0;
}

// isFull() : 데이터 꽉 차 있는지 확인
CircularQueue.prototype.isFull = function () {
    return this.length == this.size;
}

let cq1 = new CircularQueue([1, 2, 3]);
console.log(cq1);

console.log(cq1.isEmpty());
console.log(cq1.isFull());
console.log(Object.getOwnPropertyDescriptors(CircularQueue.prototype));

// OUTPUT
// CircularQueue {
//   array: [1, 2, 3],
//   size: 5,
//   length: 3,
//   head: 0,
//   tail: 3
// }
// false
// false {
//   constructor: {
//     value: [Function: CircularQueue],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   },
//   getBuffer: {
//     value: [Function(anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   isEmpty: {
//     value: [Function(anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   },
//   isFull: {
//     value: [Function(anonymous)],
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
// }
  

/* 원형 큐 구현 (2) */
// enqueue() : 데이터 추가
CircularQueue.prototype.enqueue = function (element) {
    if(this.isFull()) return false;
    
    this.array[this.tail % this.size] = element;
    this.tail++;
    this.length++;
    
    return true;
}

// denqueue() : 데이터 삭제
CircularQueue.prototype.denqueue = function () {
    if(this.isEmpty()) return undefined;

    let element = this.array[this.head % this.size];
    delete this.array[this.head % this.size];
    this.head++;
    this.length--;

    return element;
}

let cq2 = new CircularQueue([1, 2, 3, 4]);
console.log(cq2);

cq2.enqueue(5);
cq2.enqueue(6);
console.log(cq2);

console.log(cq2.denqueue());
console.log(cq2.denqueue());
console.log(cq2);

cq2.enqueue(6);
console.log(cq2);

// OUTPUT
// CircularQueue {
//   array: [1, 2, 3, 4],
//   size: 5,
//   length: 4,
//   head: 0,
//   tail: 4
// }
// CircularQueue {
//   array: [1, 2, 3, 4, 5],
//   size: 5,
//   length: 5,
//   head: 0,
//   tail: 5
// }
// 1
// 2
// CircularQueue {
//   array: [ < 2 empty items > , 3, 4, 5],
//   size: 5,
//   length: 3,
//   head: 2,
//   tail: 5
// }
// CircularQueue {
//   array: [6, < 1 empty item > , 3, 4, 5],
//   size: 5,
//   length: 4,
//   head: 2,
//   tail: 6
// }


/* 원형 큐 구현 (3) */
// front() : 가장 첫 데이터 반환
CircularQueue.prototype.front = function () {
    return this.length == 0 ? undefined : this.array[this.head];
}
// dataSize() : 큐 내 데이터 개수 확인
CircularQueue.prototype.dataSize = function () {
    return this.length;
}
// clear() : 큐 초기화
CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
    this.array = [];
    this.size = size;
    this.length = 0;
    this.head = 0;
    this.tail = 0;
}

let cq3 = new CircularQueue([1, 2, 3, 4]);
console.log(cq3);

cq3.enqueue(5);
cq3.enqueue(6);
console.log(cq3.denqueue());
console.log(cq3.denqueue());
console.log(cq3);

cq3.enqueue(6);
console.log(cq3);
console.log(cq3.front());
console.log(cq3.dataSize());

cq3.clear(10);
console.log(cq3);

// OUTPUT
// CircularQueue {
//   array: [1, 2, 3, 4],
//   size: 5,
//   length: 4,
//   head: 0,
//   tail: 4
// }
// 1
// 2
// CircularQueue {
//   array: [ < 2 empty items > , 3, 4, 5],
//   size: 5,
//   length: 3,
//   head: 2,
//   tail: 5
// }
// CircularQueue {
//   array: [6, < 1 empty item > , 3, 4, 5],
//   size: 5,
//   length: 4,
//   head: 2,
//   tail: 6
// }
// 3
// 4
// CircularQueue {
//   array: [],
//   size: 10,
//   length: 0,
//   head: 0,
//   tail: 0
// }