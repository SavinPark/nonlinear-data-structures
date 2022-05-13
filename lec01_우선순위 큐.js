// 우선순위 큐 (Priority Queue)
// "우선순위를 고려하여" 먼저 넣은 데이터가 먼저 나오는 FIFO(First In First Out) 기반의 선형 자료 구조
// 우선순위 정렬 방식 : 배열 기반, 연결리스트 기반, 힙(Heap) 기반 등의 정렬 방식 존재


/* 우선순위 큐 구현 (1) */
// Element() : 데이터와 우선순위를 저장하기 위한 생성자 함수
function Element(data, priority) {
    this.data = data;
    this.priority = priority;
}

// PriorityQueue() : Element 관리를 위한 생성자 함수
function PriorityQueue() {
    this.array = [];
}

// getBuffer() : 객체 내 데이터 셋 반환
PriorityQueue.prototype.getBuffer = function () {
    return this.array.map((element => element.data));
}

// isEmpty() : 객체 내 데이터 존재 여부 파악
PriorityQueue.prototype.isEmpty = function () {
    return this.array.length == 0;
}

console.log(Object.getOwnPropertyDescriptors(Element.prototype));
console.log(Object.getOwnPropertyDescriptors(PriorityQueue.prototype));

// OUTPUT
// {
//   constructor: {
//     value: [Function: Element],
//     writable: true,
//     enumerable: false,
//     configurable: true
//   }
// } {
//   constructor: {
//     value: [Function: PriorityQueue],
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
//   }
// }


/* 우선순위 큐 구현 (2) */
// enqueue() : 데이터 추가
PriorityQueue.prototype.enqueue = function (data, priority) {
    let element = new Element(data, priority);
    let added = false;

    for (let i = 0; i < this.array.length; i++) {
        if (element.priority < this.array[i].priority) {
            this.array.splice(i, 0, element);
            added = true;
            break;
        }
    }

    if (!added) {
        this.array.push(element);
    }

    return this.array.length;
}

// denqueue() : 데이터 삭제
PriorityQueue.prototype.denqueue = function () {
    return this.array.shift();
}

let pq1 = new PriorityQueue();

pq1.enqueue("Alice", 1);
pq1.enqueue("Bob", 2);
console.log(pq1);

pq1.enqueue("Tom", 1);
pq1.enqueue("John", 3);
console.log(pq1);

console.log(pq1.denqueue());
console.log(pq1.denqueue());
console.log(pq1);

// OUTPUT
// PriorityQueue {
//   array: [
//     Element {
//       data: 'Alice',
//       priority: 1
//     },
//     Element {
//       data: 'Bob',
//       priority: 2
//     }
//   ]
// }
// PriorityQueue {
//   array: [
//     Element {
//       data: 'Alice',
//       priority: 1
//     },
//     Element {
//       data: 'Tom',
//       priority: 1
//     },
//     Element {
//       data: 'Bob',
//       priority: 2
//     },
//     Element {
//       data: 'John',
//       priority: 3
//     }
//   ]
// }
// Element {
//   data: 'Alice',
//   priority: 1
// }
// Element {
//   data: 'Tom',
//   priority: 1
// }
// PriorityQueue {
//   array: [
//     Element {
//       data: 'Bob',
//       priority: 2
//     },
//     Element {
//       data: 'John',
//       priority: 3
//     }
//   ]
// }


/* 우선순위 큐 구현 (3) */
// front() : 가장 첫 데이터 반환
PriorityQueue.prototype.front = function() {
    return this.array.length == 0 ? undefined : this.array[0].data;
}

// size() : 큐 내 데이터 개수 확인
PriorityQueue.prototype.size = function() {
    return this.array.length;
}

// clear() : 큐 초기화
PriorityQueue.prototype.clear = function() {
    this.array = [];
}

let pq2 = new PriorityQueue();

pq2.enqueue("Alice", 1);
pq2.enqueue("Bob", 2);
pq2.enqueue("Tom", 1);
pq2.enqueue("John", 3);
console.log(pq2);

console.log(pq2.getBuffer());

console.log(pq2.denqueue());
console.log(pq2.denqueue());
console.log(pq2);

console.log(pq2.front());
console.log(pq2.size());

// OUTPUT
// PriorityQueue {
//   array: [
//     Element {
//       data: 'Alice',
//       priority: 1
//     },
//     Element {
//       data: 'Tom',
//       priority: 1
//     },
//     Element {
//       data: 'Bob',
//       priority: 2
//     },
//     Element {
//       data: 'John',
//       priority: 3
//     }
//   ]
// }
// ['Alice', 'Tom', 'Bob', 'John']
// Element {
//   data: 'Alice',
//   priority: 1
// }
// Element {
//   data: 'Tom',
//   priority: 1
// }
// PriorityQueue {
//   array: [
//     Element {
//       data: 'Bob',
//       priority: 2
//     },
//     Element {
//       data: 'John',
//       priority: 3
//     }
//   ]
// }
// Bob
// 2