class Core {
  validateEmail(mail) {
    ;/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      mail
    )
  }

  validateIsNotEmpty(field) {
    return field.length > 0
  }

  validateMin(field, min) {
    return field.length >= min
  }
}
export default new Core()
