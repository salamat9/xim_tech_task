class DatabaseError extends Error {
  name;
  status;

  constructor(message = "Database error!", status = 500) {
    super(message);
    this.name = "DatabaseError";
    this.status = status;
  }
}

export default DatabaseError;
