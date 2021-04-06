class LinkNode {

    private _val: any;
    private _next: LinkNode;
    private _size: number

    constructor(val: any, next: LinkNode) {
        this.init()
    }

    init(){

    }

    get val(): any {
        return this._val;
    }

    set val(value: any) {
        this._val = value;
    }

    get next(): LinkNode {
        return this._next;
    }

    set next(value: LinkNode) {
        this._next = value;
    }

    get size(): number {
        return this._size;
    }

    set size(value: number) {
        this._size = value;
    }

    insert(linkNode: LinkNode,value: any, index: number) {
        for (let i = 0; i <= index; i++) {

        }
    }
}