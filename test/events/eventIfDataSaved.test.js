import { compile } from "../../src/lib/events/eventIfDataSaved";

test("Should be able to conditionally execute if data has been saved", () => {
  const mockIfDataSaved = jest.fn();
  const truePath = [{ command: "EVENT_END", id: "abc" }];
  const falsePath = [{ command: "EVENT_END", id: "def" }];
  compile(
    {
      true: truePath,
      false: falsePath
    },
    {
      ifDataSaved: mockIfDataSaved
    }
  );
  expect(mockIfDataSaved).toBeCalledWith(truePath, falsePath);
});
