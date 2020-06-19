import { greet } from "./greet"

describe('greeet', () => {
    it('should include the name in the message', () => {
      expect(greet('mosh')).toContain('mosh');
    })
})