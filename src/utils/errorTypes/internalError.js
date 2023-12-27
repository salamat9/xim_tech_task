class InternalError extends Error {
  name;
  status;

  constructor(message = "Internal error!", status = 500) {
    super(message);
    this.name = "InternalError";
    this.status = status;
  }
}

export default InternalError;
