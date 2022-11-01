"use strict";
class Q_node {
    constructor(value) { //=2
        this.value = value; //1
        this.next = null; //1
    }
}
class Queue {
    constructor() {//=3
        this.head = null; //1
        this.tail = null; //1
        this.length = 0; //1
    }
    enqueue(value) {//=11
        const node = new Q_node(value); //1+1+1
        if (this.head) { //1
            if (this.tail != null) { //1+1
                this.tail.next = node; //1
                this.tail = node; //1
            }
            else
                throw ("this.tail == null"); //1
        }
        else {
            this.head = node; //1
            this.tail = node; //1
        }
        this.length++; //1
    }
    get() { //=10
        if (this.head != null && this.tail != null) { //1+1+1+1
            const current = this.head; //1
            this.head = this.head.next; //1
            this.tail.next = current; //1
            this.tail = current; //1
            return current.value; //1
        }
        throw ("this.head and this.tail == null"); //1
    }
    print() { //1+3*n
        let current = this.head; //1
        while (current) { //sum 0 to n (1+1+1)
            console.log(current.value); //1+1
            current = current.next; //1
        }
    }
    generate() {//5+4*n
        for (let i = 0; i < Math.floor(Math.random() * 100 || 2); i++) { //1+1+1+1+1 + summ 0 to n (1+1+1+1)
            this.enqueue(Math.floor(Math.random() * 100));
        }
    }
}
const getMax = (q) => {//3+14*n
    let maxNum = -1; //1
    for (let i = 0; i < q.length; i++) { //1+1+sum 0 to n (1+10+1+1+1)
        let numbersItem = q.get(); //1+get() = 1+10
        if (numbersItem > maxNum) { //1+1
            maxNum = numbersItem; //1
        }
    }
    return maxNum;
};
const getMin = (q) => {//4+4*n
    let minNum = 100 ** 10;  //1+1
    for (let i = 0; i < q.length; i++) { //1+1+sum 0 to n (1+1+1+1)
        let numbersItem = q.get(); //1
        if (numbersItem < minNum) { //1+1
            minNum = numbersItem; //1
        }
    }
    return minNum;
};
const printArr = (arr, minQVal) => {//4+8*k
    let ans = []; //1
    arr.forEach((val, i) => {//1+1+sum 0 to k (1+1+1+1+1+1+1+1)
        if (val !== 0) //1+1
            ans.push(...(new Array(val).fill(i + minQVal))); //1+1+1+1+1+1
    });
    console.log(ans); //1
};
const countingSort = () => { //2+5+4*n+1+3*n+1+1+4+4*n+6+3+14*n+2+14*k+1+4+8*k
    let q = new Queue(); //1+1
    q.generate(); //5+4*n
    q.print(); //1+3*n
    let minQVal = getMin(q);//1+1+(4+4*n)
    let sortDict = new Array((getMax(q) - minQVal) + 1).fill(0); //1+1+1+1+1+(3+14*k)+1
    for (let i = 0; i < q.length; i++) { //1+1+sum 0 to n (14)
        let numbersItem = q.get(); //11
        sortDict[numbersItem - minQVal] += 1; // 1+1+1
    }
    printArr(sortDict, minQVal); //1+4+8*k
};
countingSort(); //1+2+5+4*n+1+3*n+1+1+4+4*n+6+3+14*k+2+14*n+1+4+8*k















