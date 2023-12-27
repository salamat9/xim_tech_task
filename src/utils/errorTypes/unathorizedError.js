class UnauthorizedError extends Error {
  name;
  status;

  constructor(message, status = 401) {
    super(message);
    this.name = "UnauthorizedError";
    this.status = status;
  }
}

export default UnauthorizedError;
