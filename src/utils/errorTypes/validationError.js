class ValidationError extends Error {
  name;
  status;

  constructor(message, status = 400) {
    super(message);
    this.name = "ValidationError";
    this.status = status;
  }
}

export default ValidationError;
