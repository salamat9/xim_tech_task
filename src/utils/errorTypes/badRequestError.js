class BadRequestError extends Error {
  name;
  status;

  constructor(message, status = 400) {
    super(message);
    this.name = "BadRequestError";
    this.status = status;
  }
}

export default BadRequestError;
