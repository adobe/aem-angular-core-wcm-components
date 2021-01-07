import {something} from "./randomCode";

describe('something', () => {

    it('should create placeholder', () => {
        const someNumber:number = something();

        expect(someNumber).toBe(7)
    });


});