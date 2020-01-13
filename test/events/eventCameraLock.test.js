import { compile } from "../../src/lib/events/eventCameraLock";

test("Should be able to lock camera to player position", () => {
  const mockCameraLock = jest.fn();

  compile(
    {
      speed: 1
    },
    {
      cameraLock: mockCameraLock
    }
  );
  expect(mockCameraLock).toBeCalledWith(1);
});
