'use strict';

module.exports = class MissingParam extends Error {
  constructor(arg) {
    super(`Missing Parameter [${arg}]!`);
    Error.captureStackTrace(this, MissingParam);

    this.code = 'MISSING_PARAM';
  }
};
