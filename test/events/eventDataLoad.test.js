import { compile } from "../../src/lib/events/eventDataLoad";

test("Should be able to load data", () => {
  const mockDataLoad = jest.fn();
  compile(
    {},
    {
      dataLoad: mockDataLoad
    }
  );
  expect(mockDataLoad).toBeCalled();
});
