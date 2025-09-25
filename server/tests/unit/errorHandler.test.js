const errorHandler = require('../../src/middleware/errorHandler');

describe('errorHandler middleware', () => {
  it('should send 500 and error message', () => {
    const err = new Error('Test error');
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const next = jest.fn();
    errorHandler(err, req, res, next);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Something went wrong!' });
  });
});
