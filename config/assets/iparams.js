function checkSignature(sign) {
  return sign.toLowerCase() === 'azmuth' ? '' : 'Wrong signature';
}
