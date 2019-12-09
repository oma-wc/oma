'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

class StyleSheet {
  constructor(id) {
    if (document.getElementById(id)) {
      this.sheet = document.getElementById(id).sheet;
    } else {
      this.sheet = this.create_sheet(id);
    }
    this.written_rules = {};
    this.pending_rules = {};
  }

  create_sheet(id) {
    var style_element = document.createElement('style');
    if (id) {
      style_element.id = id;
    }
    // WebKit hack :(
    style_element.appendChild(document.createTextNode(''));

    document.head.appendChild(style_element);

    return style_element.sheet
  }

  add_rule( input ){
    const matches = input.match(/^([^{]*)\{([^}]*)\}/);
    const selector = matches[1].trim();
    const rules = matches[2].trim();

    if( !this.pending_rules[ selector ]){
      this.pending_rules[ selector ] = `${rules}`;
    } else {
      this.pending_rules[ selector ] += `\n${rules}`;
    }
  }

  write() {
    for( let [ selector, rules ] of Object.entries( this.pending_rules )){
      this.write_rule(selector, rules);

      if( !this.written_rules[ selector ]){
        this.written_rules[ selector ] = `${rules}`;
      } else {
        this.written_rules[ selector ] += `\n${rules}`;
      }

      delete this.pending_rules[selector];
    }
  }

  write_rule(selector, rules) {
    if ('insertRule' in this.sheet) {
      this.sheet.insertRule(selector + '{' + rules + '}');
    } else if ('addRule' in this.sheet) {
      this.sheet.addRule(selector, rules);
    }
  }
}

Object.defineProperty(StyleSheet, 'pending_rules', {
  value: {},
  writable: true,
});

/* Global */
const PREFIX = '--oma';

/* Page */
const PAGE_PREFIX = `${PREFIX}-page`;

const PAGE_FONT_SIZE = `${PAGE_PREFIX}__font-size`;
const PAGE_LINE_HEIGHT = `${PAGE_PREFIX}__line-height`;
const PAGE_SPACE_EXTRA_LARGE = `${PAGE_PREFIX}__space--extra-large`;
const PAGE_SPACE_EXTRA_SMALL = `${PAGE_PREFIX}__space--extra-small`;
const PAGE_SPACE_LARGE = `${PAGE_PREFIX}__space--large`;
const PAGE_SPACE_MEDIUM = `${PAGE_PREFIX}__space--medium`;
const PAGE_SPACE_SMALL = `${PAGE_PREFIX}__space--small`;

/* Grid */
const GRID_PREFIX = `${PREFIX}-grid`;

const GRID_BACKGROUND_COLOR = `${GRID_PREFIX}__background-color`;
const GRID_COLUMNS = `${GRID_PREFIX}__columns`;
const GRID_COLUMN_GAP = `${GRID_PREFIX}__column-gap`;
const GRID_COLUMN_WIDTH = `${GRID_PREFIX}__column-width`;
const GRID_ROW_GAP = `${GRID_PREFIX}__row-gap`;
const GRID_WIDTH = `${GRID_PREFIX}__width`;

class Singleton {
  constructor() {
    this._stylesheet = new StyleSheet( 'oma-styles' );
    Object.freeze( this._stylesheet );
  }

  get stylesheet() {
    return this._stylesheet;
  }
}

const State = Singleton();

exports.GRID_BACKGROUND_COLOR = GRID_BACKGROUND_COLOR;
exports.GRID_COLUMNS = GRID_COLUMNS;
exports.GRID_COLUMN_GAP = GRID_COLUMN_GAP;
exports.GRID_COLUMN_WIDTH = GRID_COLUMN_WIDTH;
exports.GRID_ROW_GAP = GRID_ROW_GAP;
exports.GRID_WIDTH = GRID_WIDTH;
exports.PAGE_FONT_SIZE = PAGE_FONT_SIZE;
exports.PAGE_LINE_HEIGHT = PAGE_LINE_HEIGHT;
exports.PAGE_SPACE_EXTRA_LARGE = PAGE_SPACE_EXTRA_LARGE;
exports.PAGE_SPACE_EXTRA_SMALL = PAGE_SPACE_EXTRA_SMALL;
exports.PAGE_SPACE_LARGE = PAGE_SPACE_LARGE;
exports.PAGE_SPACE_MEDIUM = PAGE_SPACE_MEDIUM;
exports.PAGE_SPACE_SMALL = PAGE_SPACE_SMALL;
exports.State = State;
