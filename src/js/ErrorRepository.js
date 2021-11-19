export class ErrorRepository {
  static addError = function (errorCode, errorText) {
    this.errorList.set(errorCode, errorText);
  };

  static errorList = new Map();

  static translate(code) {
    const codeText = this.errorList.has(code) ? this.errorList.get(code) : 'Unknown error';
    return codeText;
  }
}
