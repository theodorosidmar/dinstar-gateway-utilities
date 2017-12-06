class Utils {
  static sanitize(message) {
    return message.normalize('NFD')
      .replace(/[ÀÁÂÄÆÃÅĀ]/g, 'A')
      .replace(/[àáâäæãåā]/g, 'a')
      .replace(/[ÈÉÊËĒĖĘ]/g, 'E')
      .replace(/[èéêëēėę]/g, 'e')
      .replace(/[ÎÏÍĪĮÌ]/g, 'I')
      .replace(/[îïíīįì]/g, 'i')
      .replace(/[ÔÖÒÓŒØŌÕ]/g, 'O')
      .replace(/[ôöòóœøōõ]/g, 'o')
      .replace(/[ÛÜÙÚŪ]/g, 'U')
      .replace(/[ûüùúū]/g, 'u')
      .replace(/[ÑŃ]/g, 'N')
      .replace(/[ñń]/g, 'n')
      .replace(/[ÇĆČ]/g, 'C')
      .replace(/[çćč]/g, 'c')
      .replace(/[Ÿ]/g, 'Y')
      .replace(/[ÿ]/g, 'y')
      .replace(/[ŽŹŻ]/g, 'Z')
      .replace(/[žźż]/g, 'z')
      .replace(/[ŚŠ]/g, 'S')
      .replace(/[ßśš]/g, 's')
      .replace(/[Ł]/g, 'L')
      .replace(/[ł]/g, 'l')
      .replace(/[\n\r]/gi, '')
      .replace(/[^\w\s!?,.:;\-\\/@$%#()*&=]/gi, '');
  }

  static isPhoneNumverValid(phoneNumber) {
    let validPhoneNumber = phoneNumber;

    if (validPhoneNumber.startsWith('+')) {
      validPhoneNumber = validPhoneNumber.substring(1);
    }

    if (validPhoneNumber.startsWith('55') && validPhoneNumber.length > 11) {
      validPhoneNumber = validPhoneNumber.substring(2);
    }

    if (validPhoneNumber.startsWith('0')) {
      validPhoneNumber = validPhoneNumber.substring(1);
    }

    if (validPhoneNumber.substring(2).length === 8) {
      validPhoneNumber = `${validPhoneNumber.substring(0, 2)}9${validPhoneNumber.substring(2)}`;
    }

    return (/^[0-9]{2}9?[1-9]{1}[0-9]{7}$/.test(validPhoneNumber));
  }
}

module.exports = Utils;
