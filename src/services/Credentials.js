export default class Credentials {
  static generateRandom() {
    let username = '';
    let password = '';
    let counterUsername = 1;
    let counterPassword = 1;
    let tempChar;

    for (let i = 0; i < 15; i++) {

      if (counterUsername === i) {
        let temp = Math.floor(Math.random() * (90 - 65) + 65);
        tempChar = String.fromCharCode(temp);
        counterUsername += 3;
      } else {
        let temp = Math.floor(Math.random() * (122 - 97) + 97);
        tempChar = String.fromCharCode(temp);
      }

      username += tempChar;
    }

    for (let i = 0; i < 12; i++) {
      if (counterPassword === i && i < 8) {
        let temp = Math.floor(Math.random() * (90 - 65) + 65);
        tempChar = String.fromCharCode(temp);
        counterPassword += 3;

      } else if (i < 8) {

        let temp = Math.floor(Math.random() * (122 - 97) + 97);
        tempChar = String.fromCharCode(temp);

      } else if (i > 8 && i < 11) {

        let temp = Math.floor(Math.random() * (57 - 48) + 48);
        tempChar = String.fromCharCode(temp);

      } else if (i === 11) {

        let temp = Math.floor(Math.random() * (64 - 58) + 58);
        tempChar = String.fromCharCode(temp);

      }

      password += tempChar;
    }

    return {
      password,
      username
    }
  }
}
