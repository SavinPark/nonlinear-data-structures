// 딕셔너리 (Dictionary)
// - key-value 형태로 다양한 자료형 개체(Entity)를 저장하는 자료구조 ( := Map)


/* 딕셔너리 구현 (1) */
// Dictionary() : 개체(Entity)를 저장할 생성자
function Dictionary(items = {}) {
    this.items = items;
}

// getBuffer() : 모든 개체(Entity) 반환
Dictionary.prototype.getBuffer = function () {
    return { ...this.items};
}

// clear() : 초기화
Dictionary.prototype.clear = function () {
    this.items = {};
}

// size() : 크기 반환
Dictionary.prototype.size = function () {
    return Object.keys(this.items).length;
}

let dict1 = new Dictionary({age : 18, name : "Savin"});
console.log(dict1);

console.log(dict1.getBuffer());
console.log(dict1.size());
dict1.clear();
console.log(dict1);

// OUTPUT
// Dictionary { items: { age: 18, name: 'Savin' } }
// { age: 18, name: 'Savin' }
// 2
// Dictionary { items: {} }


/* 딕셔너리 구현 (2) */
// has() : 개체 존재 여부 확인 (key 정보를 배열로 확인)
Dictionary.prototype.has = function (key) {
    // return value in this.items;
    return this.items.hasOwnProperty(key);
}

// set() : 개체(Entity) 추가
Dictionary.prototype.set = function (key, value) {
    this.items[key] = value;
}

// get() : 개체(Entity)의 value 반환
Dictionary.prototype.get = function (key) {
    return this.has(key) ? this.items[key] : undefined;
}

// remove() : 개체(Entity) 삭제
Dictionary.prototype.remove = function(key) {
    if (this.has(key)) {
        delete this.items[key];
        return true;
    }
    return false;
}

let dict2 = new Dictionary();

dict2.set("age", 22);
dict2.set("mbti", "isfj");
dict2.set("name", "Savin");
console.log(dict2);

dict2.remove("mbti");
console.log(dict2);

console.log(dict2.has("mbti"));
console.log(dict2.has("name"));
console.log(dict2.get("mbti"));
console.log(dict2.get("name"));

// OUTPUT
// Dictionary { items: { age: 18, name: 'Savin' } }
// { age: 18, name: 'Savin' }
// 2
// Dictionary { items: {} }
// Dictionary { items: { age: 22, mbti: 'isfj', name: 'Savin' } }
// Dictionary { items: { age: 22, name: 'Savin' } }
// false
// true
// undefined
// Savin


/* 딕셔너리 구현 (3) */
// keys() : 모든 key 값을 배열 형태로 반환
Dictionary.prototype.keys = function () {
    return Object.keys(this.items);
}

// values() : 모든 value 값을 배열 형태로 반환
Dictionary.prototype.values = function () {
    // let values = [];
    // for (let k in this.items) {
    //     if (this.has(k)) {
    //         values.push(this.items[k])
    //     }
    // }
    // return values;
    return Object.values(this.items);
}

// each() : 모든 개체 요소에 대해 callback 함수 수행 (:= foreach)
Dictionary.prototype.each = function(fn) {
    for (let k in this.items) {
        if (this.has(k)) {
            fn(k, this.items[k]);
        }
    }
}

// printDictionary() : 개체 출력 callback
function printDictionary(key, value) {
    console.log(`key : ${key}`);
    console.log(`value : ${value}`);
}

let dict3 = new Dictionary();
dict3.set("age", 22);
dict3.set("mbti", "isfj");
dict3.set("name", "Savin");
console.log(dict3);

console.log(dict3.keys());
console.log(dict3.values());
dict3.each(printDictionary);

// OUTPUT
// Dictionary { items: { age: 22, mbti: 'isfj', name: 'Savin' } }
// [ 'age', 'mbti', 'name' ]
// [ 22, 'isfj', 'Savin' ]
// key : age
// value : 22
// key : mbti
// value : isfj
// key : name
// value : Savin