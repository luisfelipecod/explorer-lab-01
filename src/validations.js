export function isACardnumberValid(cardNumberField, cardtype) {
  const CardNumberValue = cardNumberField.value.replace(/\s/g, "") //Remove white spaces
  const cardNumberLength = CardNumberValue.length

  if (cardNumberField.validity["valueMissing"]) {
    cardNumberField.setCustomValidity("Preencha este campo.")
    return false
  }

  if (
    cardtype === "default" &&
    cardNumberLength >= 13 &&
    cardNumberLength <= 16
  ) {
    return true
  }

  if (cardtype !== "default" && cardNumberLength === 16) {
    return true
  }

  cardNumberField.setCustomValidity("Número Inválido")
  return false
}

export function isANameValid(nameField) {
  const regexTest = /\D/.test(nameField.value)
  const nameWithoutBlankSpaces = nameField.value.replace(/\s/g, "") //Remove white spaces

  console.log(nameWithoutBlankSpaces.length)
  console.log(nameField.validity["valueMissing"])
  if (
    nameField.validity["valueMissing"] ||
    nameWithoutBlankSpaces.length === 0
  ) {
    nameField.setCustomValidity("Preencha este campo.")
    return false
  }

  if (regexTest) {
    return true
  }

  nameField.setCustomValidity("Nome Inválido")
  return false
}

export function isADateValid(dateField) {
  const regexTest = /(^[0-1])[1-9]\/\d{2}/.test(dateField.value)
  const dateLengthValid = dateField.value.length === 5

  if (dateField.validity["valueMissing"]) {
    dateField.setCustomValidity("Preencha este campo.")
    return false
  }

  if (regexTest && dateLengthValid) {
    return true
  }
  dateField.setCustomValidity("Data Inválida")
  return false
}

export function isASecurityCodeValid(securityCodeField, cardtype) {
  const securityCodeLength = securityCodeField.value.length

  if (securityCodeField.validity["valueMissing"]) {
    securityCodeField.setCustomValidity("Preencha este campo.")
    return false
  }

  if (securityCodeLength === 4 && cardtype === "default") {
    return true
  }

  //test visa e mastercard
  if (securityCodeLength === 3 && cardtype !== "default") {
    return true
  }
  securityCodeField.setCustomValidity("Código Inválido")
  return false
}

//Resets
export function resetErrorMessages(inputs) {
  const inputsNames = Object.keys(inputs)

  for (let i = 0; i < inputsNames.length; i++) {
    inputs[inputsNames[i]].setCustomValidity("")
  }
  return
}
