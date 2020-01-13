import { compile } from "../../src/lib/events/eventCameraMoveTo";

test("Should be able to move camera position", () => {
  const mockCameraMoveTo = jest.fn();

  compile(
    {
      x: 5,
      y: 9,
      speed: 1
    },
    {
      cameraMoveTo: mockCameraMoveTo
    }
  );
  expect(mockCameraMoveTo).toBeCalledWith(5, 9, 1);
});
