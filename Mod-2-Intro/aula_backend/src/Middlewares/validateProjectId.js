const { isUuid } = require("uuidv4");

const validateProjectId = (request, response, next) => {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: "Invalid id" });
  }

  return next();
}

module.exports = validateProjectId;