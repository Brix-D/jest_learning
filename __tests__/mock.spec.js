const {map} = require('../functions/mock');

describe("map testing", () => {
    let array;
    let fn;
    beforeEach(() => {
        array = [1, 2, 3, 4, 5];
        fn = jest.fn((item) => item ** 3);
        map(array, fn);
    });
    test("should call callback", () => {
        expect(fn).toBeCalled();
        expect(fn).toBeCalledTimes(5);
        expect(fn.mock.calls.length).toBe(5);
    });

    test("should fn work", () => {
        fn.mockReturnValueOnce(1000);
        fn.mockReturnValueOnce(27);
        fn.mockReturnValue(100);
        expect(fn()).toBe(1000);
        expect(fn()).toBe(27);
        expect(fn()).toBe(100);
    });
});