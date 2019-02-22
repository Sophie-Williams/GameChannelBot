'use strict';

module.exports = class MissingImplementation extends Error {
  constructor(context) {
    super('Missing implementation!');
    Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name;
    this.code = 'MISSING_IMPLEMENTATION';
    this.context = context;
  }
};
