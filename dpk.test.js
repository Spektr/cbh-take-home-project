const { deterministicPartitionKey } = require("./dpk");
const {testMocks} = require("./helpers/test-mocks");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  // check different types of input (use prepared test mocks)
  test.each(testMocks)(
      'Check input value (%p) should be equal %p)',
      (inputValue, expected) => {
        expect(deterministicPartitionKey(inputValue)).toBe(expected);
      },
  );
});
