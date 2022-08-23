const { sqlForPartialUpdate } = require("./sql");

describe("sqlForPartialUpdate", function () {
    test("adding first_name", function () {
        const res = sqlForPartialUpdate(
            {first_name: "Mattie"},
            {first_name: "first_name"}
        );
        expect(res).toEqual({setCols: '"first_name"=$1', values:["Mattie"]});
    });
});