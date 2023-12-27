class AccessDeniedError extends Error {
  name;
  status;

  constructor(message, status = 403) {
    super(message);
    this.name = "AccessDeniedError";
    this.status = status;
  }
}

export default AccessDeniedError;
