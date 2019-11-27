class StyleSheet {
  constructor(id) {
    if (document.getElementById(id)) {
      this.sheet = document.getElementById(id).sheet
    } else {
      this.sheet = this.create_sheet(id)
    }
    this.pending_rules = {}
  }

  create_sheet(id) {
    var style_element = document.createElement('style')
    if (id) {
      style_element.id = id
    }
    // WebKit hack :(
    style_element.appendChild(document.createTextNode(''))

    document.head.appendChild(style_element)

    return style_element.sheet
  }

  add_rule(input) {
    const matches = input.match(/^([^{]*)\{([^}]*)\}/)
    const selector = matches[1].trim()
    const rules = matches[2].trim()

    if (!this.pending_rules[selector]) {
      this.pending_rules[selector] = ''
    }

    this.pending_rules[selector] = `${this.pending_rules[selector]}\n${rules}`
  }

  write() {
    Object.keys(this.pending_rules).forEach((selector) => {
      this.write_rule(selector, this.pending_rules[selector])
      delete this.pending_rules[selector]
    })
  }

  write_rule(selector, rules) {
    if ('insertRule' in this.sheet) {
      this.sheet.insertRule(selector + '{' + rules + '}')
    } else if ('addRule' in this.sheet) {
      this.sheet.addRule(selector, rules)
    }
  }
}

Object.defineProperty(StyleSheet, 'pending_rules', {
  value: {},
  writable: true,
})

export default StyleSheet
