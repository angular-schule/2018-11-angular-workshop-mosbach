export class Test {

    // shorthand syntax:
    // access modifiers in constructor
    constructor(public name: string) {
    }

    methodeTest() {
        console.log('Hallo Mosbach, lieber ' + this.name);
    }
}