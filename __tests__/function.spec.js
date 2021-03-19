//const sum = require('../functions/functions');
//import {Lodash, groupBy, sum} from '../functions/functions'
let { JSDOM } = require("jsdom");

//let document = new JSDOM().window.document;
JSDOM.env({
    html: "<html><body></body></html>",
    documentRoot: __dirname + '/js',
    scripts: [
        'functions.js'
    ]
}, function (err, window) {
    console.log(window.loadFromJSDOM);
});
let window = document.defaultView;


const {Lodash, sum, groupBy, renderP} = require('../functions/functions');

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

describe("Click test", ()=> {
    test("should be clicked", (object, method) => {
        //document.body.addEventListener('click', renderP);
        //let render = jest.fn().mockImplementation(() => renderP);
        console.log('--- document', document.body);
        document.body.addEventListener('click', renderP);
        let render = jest.spyOn(document.body, 'renderP', 'set');
        //const doc =
        // let event = document.createEvent("HTMLEvents");
        // event.initEvent('click', false, true);
        document.body.dispatchEvent(new Event('click', {bubbles: true}));

        //events.click();
        expect(render).toHaveBeenCalled();
        render.mockClear();
    });
});