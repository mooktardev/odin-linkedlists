/**
 * class / factory, containing a value property and a link to the nextNode, set both as null by default.
 */
class Node {
    constructor(value) {
        this.value = value || null;
        this.nextNode = null;
    }
}

/**
 * class / factory, which will represent the full list.
 */
export default class LinkedList {
    constructor() {
        this.HEAD = null;
    }

    /**
     * dds a new node containing value to the end of the list
     * @param {string} value 
     */
    prepend(value) {
        let currentrent = null;
        if (this.HEAD != null) currentrent = this.HEAD;
        this.HEAD = new Node(value);
        this.HEAD.nextNode = currentrent;
    }

    /**
     * adds a new node containing value to the start of the list
     * @param {string} value 
     */
    append(value) {
        if (this.HEAD == null) this.prepend(value);
        else {
            let currentrent = this.HEAD;
            while (currentrent.nextNode != null) currentrent = currentrent.nextNode;
            currentrent.nextNode = new Node(value);
        }
    }

    /**
     * returns the total number of nodes in the list
     * @returns array
     */
    size() {
        let currentrent = this.HEAD;
        let counter = 0;
        while (currentrent != null) {
            counter++;
            currentrent = currentrent.nextNode;
        }
        return counter;
    }

    /**
     * returns the first node in the list
     * @returns node
     */
    head() {
        return this.HEAD;
    }

    /**
     * returns the last node in the list
     * @returns node
     */
    tail() {
        let currentrent = this.HEAD;
        while (currentrent.nextNode != null) currentrent = currentrent.nextNode;
        return currentrent;
    }

    /**
     * returns the node at the given index
     * @param {number} index 
     * @returns node of list
     */
    at(index) {
        let currentrent = this.HEAD;
        for (let i = 0; i < index; i++) {
            currentrent = currentrent.nextNode;
            if (currentrent == null) return "There is no item for this index";
        }
        return currentrent;
    }

    /**
     * removes the last element from the list
     */
    pop() {
        let currentrent = this.HEAD;
        let previous = null;
        while (currentrent.nextNode != null) {
            previous = currentrent;
            currentrent = currentrent.nextNode;
        }
        previous.nextNode = null;
    }

    /**
     * returns true if the passed in value is in the list and otherwise returns false.
     * @param {string} value 
     * @returns boolean
     */
    contains(value) {
        let currentrent = this.HEAD;
        while (currentrent != null) {
            if (currentrent.value === value) return true;
            currentrent = currentrent.nextNode;
        }
        return false;
    }

    /**
     * returns the index of the node containing value, or null if not found.
     * @param {string} value 
     * @returns index
     */
    find(value) {
        let currentrent = this.HEAD;
        let index = 0;
        while (currentrent != null) {
            if (currentrent.value === value) return index;
            currentrent = currentrent.nextNode;
            index++;
        }
        return null;
    }

    /**
     * represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
     * @returns string
     */
    toString() {
        let currentrent = this.HEAD;
        let stringList = "";
        while (currentrent != null) {
            stringList += `(${currentrent.value}) -> `;
            currentrent = currentrent.nextNode;
        }
        return (stringList += "null");
    }

    /**
     * inserts a new node with the provided value at the given index.
     * @param {string} value 
     * @param {number} index 
     */
    insertAt(value, index) {
        if (this.HEAD == null) this.prepend(value);
        else {
            let current = this.HEAD;
            let previous = null;
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.nextNode;
                if (current == null) break; // if index is bigger than end of list, add node at end of list
            }
            const currentrent = new Node(value);
            previous.nextNode = currentrent;
            currentrent.nextNode = current;
        }
    }

    /**
     * removes the node at the given index.
     * @param {number} index 
     * @returns node
     */
    removeAt(index) {
        if (this.HEAD == null) return "List is already empty";

        let current = this.HEAD;
        let previous = null;
        for (let i = 0; i < index; i++) {
            previous = current;
            current = current.nextNode;
            if (current == null) return "There is no item for this index";
        }
        previous.nextNode = current.nextNode;
    }
}
