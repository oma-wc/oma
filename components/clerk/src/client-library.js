const version="1.1.0";

const obfuscate_string = (string) => {
  const length = string.length;
  let result = '';
  let random_letter;

  for (let i = 0; i < length; i++) {
    random_letter = String.fromCharCode(97 + Math.floor(25 * Math.random()));
    result += string[i] + random_letter;
  }

  return result
};

const create_class_list = (...mixed_array) =>
  mixed_array.filter(Boolean).join(' ');

const create_honeypot_label = ({ for_id, class_name, extra_classes }) => {
  const honeypot_label = document.createElement('label');

  honeypot_label.for = for_id;
  honeypot_label.className = create_class_list(class_name, extra_classes);

  return honeypot_label
};

const create_honeypot_field = ({
  id,
  type,
  name,
  class_name,
  extra_classes,
}) => {
  const honeypot_field = document.createElement('textarea');

  honeypot_field.id = id;
  honeypot_field.name = name;
  honeypot_field.className = create_class_list(class_name, extra_classes);
  honeypot_field.autocomplete = 'false';
  honeypot_field.tabindex = -1;

  return honeypot_field
};

const create_timer_field = ({ class_name, name }) => {
  const timer_field = document.createElement('input');
  timer_field.className = class_name;
  timer_field.name = obfuscate_string(name);
  timer_field.type = 'hidden';
  timer_field.value = 0;

  return timer_field
};

const create_version_field = ({ class_name, name }) => {
  const version_field = document.createElement('input');
  version_field.className = class_name;
  version_field.name = obfuscate_string(name);
  version_field.type = 'hidden';

  return version_field
};

const create_config = (options = {}) => {
  const autobind = options.hasOwnProperty('autobind') ? options.autobind : true;

  const {
    id: sheet_id,
    field_prefix = 'clerk-field',
    label_prefix = 'clerk-label',
  } = options.stylesheet || {};

  const {
    id: field_id = 'comment',
    class: field_class_name,
    extra_classes: field_extra_classes,
  } = options.field || {};

  const { class: label_class_name, extra_classes: label_extra_classes } =
    options.label || {};
  const { class: timer_class_name, name: timer_name = 'timer' } =
    options.timer || {};
  const { class: version_class_name, name: version_name = 'version' } =
    options.version || {};

  const honeypot_field_class_name =
    field_class_name || `${field_prefix}__${field_id}`;
  const honeypot_label_class_name =
    label_class_name || `${label_prefix}__${field_id}`;
  const honeypot_timer_class_name =
    timer_class_name || `${field_prefix}__${timer_name}`;
  const honeypot_version_class_name =
    version_class_name || `${field_prefix}__${version_name}`;

  return {
    autobind,
    style: {
      id: sheet_id,
      field_prefix: field_prefix,
      label_prefix: label_prefix,
      field_class_name: honeypot_field_class_name,
      label_class_name: honeypot_label_class_name,
    },
    honeypot: {
      field: {
        id: field_id,
        name: 'comment',
        class_name: honeypot_field_class_name,
        extra_classes: field_extra_classes,
      },
      label: {
        for_id: field_id,
        class_name: honeypot_label_class_name,
        extra_classes: label_extra_classes,
      },
      timer: {
        class_name: honeypot_timer_class_name,
        name: timer_name,
      },
      version: {
        version,
        class_name: honeypot_version_class_name,
        name: version_name,
      },
    },
  }
};

class StyleSheet {
  constructor(id) {
    this.sheet = id ? document.getElementById(id) : this.create_sheet();
  }

  create_sheet() {
    var style_element = document.createElement('style');
    // WebKit hack :(
    style_element.appendChild(document.createTextNode(''));

    document.head.appendChild(style_element);

    return style_element.sheet
  }

  add_rule(selector, rules) {
    if ('insertRule' in this.sheet) {
      this.sheet.insertRule(selector + '{' + rules + '}');
    } else if ('addRule' in this.sheet) {
      this.sheet.addRule(selector, rules);
    }
  }
}

class Clerk {
  constructor(form, options = {}) {
    this.version = version;
    this.loaded_at = new Date();
    this.form = form;

    this.config = create_config(options);

    this.append_stylesheet();
    this.obfuscate_field_names();
    this.append_honeypot_fields();
    this.append_timer_field();
    this.append_version_field();

    if (this.config.autobind) {
      this.bind();
    } else {
      return this.on_submit.bind(this)
    }
  }

  bind() {
    this.form.addEventListener('submit', this.on_submit.bind(this));
  }

  append_stylesheet() {
    const stylesheet = new StyleSheet(this.config.style.id);

    stylesheet.add_rule(
      `.${this.config.honeypot.field.class_name}`,
      `
        position: absolute;
        right: 200vw;
      `
    );
    stylesheet.add_rule(
      `.${this.config.honeypot.label.class_name}`,
      `
        position: absolute;
        right: 200vw;
      `
    );
  }

  obfuscate_field_names() {
    const form = this.form;
    const fields = Array.from(
      form.querySelectorAll('input:not([type=submit]),select,textarea')
    );
    fields.forEach((field) => {
      const id_or_name = field.id || field.name;
      if (!id_or_name) {
        console.warn('Found field without name:', field);
        return
      }

      const label = this.form.querySelector(`label[for=${id_or_name}]`);
      if (label) {
        label.classList.add(`${this.config.style.label_prefix}__${id_or_name}`);
      }
      field.classList.add(`${this.config.style.field_prefix}__${id_or_name}`);
      field.name = obfuscate_string(field.name);
    });
  }

  append_honeypot_fields() {
    const label = create_honeypot_label(this.config.honeypot.label);
    const field = create_honeypot_field(this.config.honeypot.field);

    this.form.appendChild(label);
    this.form.appendChild(field);
  }

  append_timer_field() {
    this.timer_field = create_timer_field(this.config.honeypot.timer);
    this.form.appendChild(this.timer_field);
  }

  append_version_field() {
    this.version_field = create_version_field(this.config.honeypot.version);
    this.form.appendChild(this.version_field);
  }

  active_for() {
    return new Date() - this.loaded_at
  }

  on_submit(event) {
    this.timer_field.value = this.active_for();
    this.version_field.value = this.version;
  }
}

export { Clerk as default };
