require("./root.js");

describe("shout(string)", () => {
  it("receives one argument and returns it in all caps", function () {
    expect(shout("hello")).toEqual("HELLO");
  });
});

describe("whisper(string)", () => {
  it("receives one argument and returns it in all lowercase", function () {
    expect(whisper("HELLO")).toEqual("hello");
  });
});

describe("logShout(string)", () => {
  it("takes a string argument and logs it in all caps using console.log()", function () {
    const spy = expect.spyOn(console, "log").andCallThrough();
    logShout("hello");
    expect(spy).toHaveBeenCalledWith("HELLO");
    console.log.restore();
  });
});

describe("logWhisper(string)", () => {
  it("takes a string argument and logs it in all lowercase using console.log()", function () {
    const spy = expect.spyOn(console, "log").andCallThrough();
    logWhisper("HELLO");
    expect(spy).toHaveBeenCalledWith("hello");
    console.log.restore();
  });
});

describe("sayHiToHeadphonedRoommate(string)", () => {
  it('returns "I can\'t hear you!" if `string` is lowercase', function () {
    expect(sayHiToHeadphonedRoommate("hello")).toEqual("I can't hear you!");
  });

  it('returns "YES INDEED!" if `string` is uppercase', () => {
    expect(sayHiToHeadphonedRoommate("HELLO")).toEqual("YES INDEED!");
  });

  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', () => {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
});
