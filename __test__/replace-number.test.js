const { replaceNumber } = require("../src");

test("converts 1 to '১'", () => {
  expect(replaceNumber(1)).toBe("১");
});

test("converts 1.2 to '১.২'", () => {
  expect(replaceNumber(1.2)).toBe("১.২");
});

test("converts '1.234' to '১.২৩৪'", () => {
  expect(replaceNumber("1.234")).toBe("১.২৩৪");
});

test("converts '-1.2345' to '-১.২৩৪৫'", () => {
  expect(replaceNumber("-1.2345")).toBe("-১.২৩৪৫");
});

test("converts -1.0002 to -১.০০০২", () => {
  expect(replaceNumber(-1.0002)).toBe("-১.০০০২");
});

test("fails to convert '-a.1'", () => {
  expect(replaceNumber("-a.1")).toBe("প্রদানকৃত তথ্যটি সংখ্যা নয়");
});
