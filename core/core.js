class Core {
  addNamespacePrefix(mutation, prefix) {
    for (const i in mutation) {
      mutation[i] = prefix + '/' + mutation[i]
    }
    return mutation
  }
}
export default new Core()
