//const sum = require('../functions/functions');
// import {Lodash} from '../functions/functions'

const {Lodash, sum, groupBy} = require('../functions/functions');

describe("testing sum", () => {
    test("testing 1 + 2", ()=> {
        expect(sum(1, 2)).toBe(3);
    });
    test("testing equality of 2 objects", () => {
        const user = {
            name: "fsfs",
            posts: {
                first: "dfsfds",
                second: "dsasfa",
            },
        };
        const user2 = {
            name: "fsfs",
            posts: {
                first: "dfsfds",
                second: "dsasfa",
            },
        };
        expect(user).toEqual(user2);
    });
});

describe("Lodash", () => {
    let arr;
    beforeEach(()=> {
        arr = [true, 0, "", "hello", false, undefined]
    });
    test("should contain values", () => {
        expect(Lodash(arr)).toContain(true);
        expect(Lodash(arr)).not.toContain(undefined);
        expect(Lodash(arr)).not.toContain(4);
    });
    test("should contain 2", () => {
        arr.push(...[2, 4]);
        expect(Lodash(arr)).toContain(2);
    });
});

describe("GroupBy function", () => {
    test("should be defined", () => {
        expect(groupBy).toBeDefined();
    });
    test("should return grouped by math.floor object", () => {
        const arr = [1.1, 1.2, 3.9, 4.0, 4.1];
        const result = {
            1: [1.1, 1.2],
            3: [3.9],
            4: [4.0, 4.1],
        }
        expect(groupBy(arr, Math.floor)).toEqual(result);
    });
    test("should return grouped by length strings", () => {
        const arr = ["one", "two", "five"];
        const result = {
            3: ["one", "two"],
            4: ["five"],
        }
        expect(groupBy(arr, 'length')).toEqual(result);
    });

    test("should not return array", () => {
        const arr = [1.1, 1.2, 3.9, 4.0, 4.1];
        expect(groupBy(arr, Math.trunc)).not.toBeInstanceOf(Array);
    });
});