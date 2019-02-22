'use strict';

module.exports = class MissingParam extends Error {
  constructor(param) {
    super(`Missing parameter: ${param}`);
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.code = 'MISSING_PARAM';
    this.param = param;
  }
};
