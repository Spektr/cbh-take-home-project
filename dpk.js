const crypto = require("crypto");

// 4. move constants to file definition (prevent redefine it, and could export to other parts of code)
const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

// 6. move out get hash function (DRY)
function getHash(data){
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

// 2. change function declaration (also more readable)
// 3. add jdoc comments (all shared features should have readable interfaces)
/**
 * This function generates a deterministic partition key for an event object. If the event already has a partition key, it is used as the candidate partition key. Otherwise, a SHA3-512 hash of the event object as a string is generated and used as the candidate partition key. If the candidate partition key is not a string, it is converted to a string. If the candidate partition key is undefined, a trivial partition key value is used. If the candidate partition key is too long, it is hashed again to generate a shorter partition key.
 * @param {Object} event - The event object for which to generate a partition key.
 * @param {any} event.partitionKey - directly specified partition key
 * @returns {string} - The deterministic partition key for the event.
 */
function deterministicPartitionKey(event) {
  let candidate;

  if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = getHash(data);
    }
  }

  // 5. join if statements
  if (candidate && typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (!candidate) {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = getHash(candidate);
  }

  return candidate;
}

// 1. change export statement (it is more readable and can be extended by additional valuables)
module.exports = {
  deterministicPartitionKey,
}
