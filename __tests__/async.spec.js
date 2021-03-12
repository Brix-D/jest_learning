const { echo } = require('../functions/async');

describe("testing echo promise", () => {
    let successData;
    let errorData;
    beforeEach(() => {
        successData = "some value";
        errorData = new Error('was rejected');
    });
    test("should return async promise", async () => {

        let result = await echo(successData);
        expect(result).toEqual(successData);
    });

    test("should return async error", async () => {
        try {
            let result = await echo();
        } catch (error) {
            expect(error.message).toEqual(errorData.message);
        }
    });
    test("should return promise data", () => {
        return echo(successData).then(data => {
            expect(data).toEqual(successData);
        });
    });
    test("should return promise error", () => {
        return echo().catch(err => {
            expect(err.message).toEqual(errorData.message);
        });
    });
});