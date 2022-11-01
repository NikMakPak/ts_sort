"use strict";
class Q_node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    enqueue(value) {
        const node = new Q_node(value);
        if (this.head) {
            if (this.tail != null) {
                this.tail.next = node;
                this.tail = node;
            }
            else
                throw ("this.tail == null");
        }
        else {
            this.head = node;
            this.tail = node;
        }
        this.length++;
    }
    get() {
        if (this.head != null && this.tail != null) {
            const current = this.head;
            this.head = this.head.next;
            this.tail.next = current;
            this.tail = current;
            return current.value;
        }
        throw ("this.head and this.tail == null");
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
    generate() {
        for (let i = 0; i < Math.floor(Math.random() * 100 || 2); i++) {
            this.enqueue(Math.floor(Math.random() * 100));
        }
    }
}
const getMax = (q) => {
    let maxNum = -1;
    for (let i = 0; i < q.length; i++) {
        let numbersItem = q.get();
        if (numbersItem > maxNum) {
            maxNum = numbersItem;
        }
    }
    return maxNum;
};
const getMin = (q) => {
    let minNum = 100 ** 10;
    for (let i = 0; i < q.length; i++) {
        let numbersItem = q.get();
        if (numbersItem < minNum) {
            minNum = numbersItem;
        }
    }
    return minNum;
};
const printArr = (arr, minQVal) => {
    let ans = [];
    arr.forEach((val, i) => {
        if (val !== 0)
            ans.push(...(new Array(val).fill(i + minQVal)));
    });
    console.log(ans);
};
const countingSort = () => {
    let q = new Queue();
    q.generate();
    q.print();
    let minQVal = getMin(q);
    let sortDict = new Array((getMax(q) - minQVal) + 1).fill(0);
    for (let i = 0; i < q.length; i++) {
        let numbersItem = q.get();
        sortDict[numbersItem - minQVal] += 1;
    }
    printArr(sortDict, minQVal);
};
countingSort();
// можно ли объект юзать?
