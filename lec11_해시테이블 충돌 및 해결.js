// 해시 함수 (Hash Function)
// - 임의의 길이의 데이터를 고정된 길이의 데이터로 매핑하는 함수
// - 압축성 (다양한 가변 길이의 입력에 대해 고정된 크기의 결과값을 반환하는 성질)
// - 효율성 (어떤 입력 값에 대해서도 많은 자원과 시간이 소요되지 않고 처리되는 성질)
// - 저항성 (결과값을 바탕으로 입력값을 찾는 것이 불가능한 성질)


// 해시 테이블 (Hash Talbe)
// - Hash 함수를 사용하여 평균 O(1) 시간 복잡도로 특정 값을 신속하세 찾는 자료구조

// 충돌 해결 방법
// - 해시 함수 변경 : 더 큰 숫자의 공간과 Modular 산술 값을 이용해 충돌 최소화
// - 자료 구조 확장 : Open Addressing Method (선형 조사법, 이중해시), Close Addressing Method(체이닝)

const HASH_SIZE = 37;

/* 해시 테이블 구현하기 (1) */
// Element() : Key, Value 저장을 위한 생성자
function Element(key, value) {
    this.key = key;
    this.value = value;
}

// HashTable() : 생성자
function HashTable() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// hashCode() : 해시함수
HashTable.prototype.hashCode = function(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % HASH_SIZE;
}

let ht1 = new HashTable();
console.log(ht1);

console.log(ht1.hashCode("Ana"));
console.log(ht1.hashCode("Sue"));
console.log(ht1.hashCode("Paul"));

// OUTPUT
// HashTable { table: [ <37 empty items> ], length: 0 }
// 13
// 5
// 32


/* 해시 테이블 구현하기 (2) */
// put() : 데이터 추가
HashTable.prototype.put = function (key, value) {
    let index = this.hashCode(key);
    console.log(`key: ${key} -> index: ${index}`);

    if (this.table[index] !== undefined) {
        return false;
    }

    this.table[index] = new Element(key, value);
    this.length++;

    return true;
}


// get() :데이터 조회
HashTable.prototype.get = function (key) {
    return this.table[this.hashCode(key)];
}

// remove() : 데이터 삭제
HashTable.prototype.remove = function (key) {
    let element = this.table[this.hashCode(key)];

    if (element !== undefined) {
        delete this.table[this.hashCode(key)];
        this.length--;
    }
    return element;
}

let ht2 = new HashTable();

ht2.put("Yohan", 181);
ht2.put("Eunji", 162);
ht2.put("Paul", 190);
console.log(ht2);

console.log(ht2.remove("Paul"));
console.log(ht2.remove("Paul"));
console.log(ht2);

// OUTPUT
// key: Yohan -> index: 30
// key: Eunji -> index: 26
// key: Paul -> index: 32
// HashTable {
//   table: [
//     <26 empty items>,
//     Element { key: 'Eunji', value: 162 },
//     <3 empty items>,
//     Element { key: 'Yohan', value: 181 },
//     <1 empty item>,
//     Element { key: 'Paul', value: 190 },
//     <4 empty items>
//   ],
//   length: 3
// }
// Element { key: 'Paul', value: 190 }
// undefined
// HashTable {
//   table: [
//     <26 empty items>,
//     Element { key: 'Eunji', value: 162 },
//     <3 empty items>,
//     Element { key: 'Yohan', value: 181 },
//     <6 empty items>
//   ],
//   length: 2
// }



/* 해시 테이블 구현하기 (3) */

// clear() : 초기화
HashTable.prototype.clear = function() {
    this.table = new Array(HASH_SIZE);
    this.length = 0;
}

// size() : 크기 반환
HashTable.prototype.size = function () {
    return this.length;
}

// getBuffer() : 데이터 셋 반환
HashTable.prototype.getBuffer = function () {
    let array = [];
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
            array.push(this.table[i]);
        }
    }
    return array;
}

// print() : 데이터 셋 출력
HashTable.prototype.print = function () {
    for (let i = 0; i < this.table.length; i++) {
        if (this.table[i]) {
            console.log(i + " -> " + this.table[i].key + ": " + this.table[i].value);
        }
    }
}

let ht3 = new HashTable();

ht3.put("Yohan", 181);
ht3.put("Eunji", 162);
ht3.put("Paul", 190);

ht3.print();
console.log(ht3.getBuffer());

console.log(ht3.size());
ht3.clear();
console.log(ht3);

// OUTPUT
// 26 -> Eunji: 162
// 30 -> Yohan: 181
// 32 -> Paul: 190
// [
//   Element { key: 'Eunji', value: 162 },
//   Element { key: 'Yohan', value: 181 },
//   Element { key: 'Paul', value: 190 }
// ]
// 3
// HashTable { table: [ <37 empty items> ], length: 0 }