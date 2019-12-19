import StyleSheet from './StyleSheet'

export * from './constants/custom_property_names';

class Singleton {
  constructor() {
    this._stylesheet = new StyleSheet( 'oma-styles' )
    Object.freeze( this._stylesheet )
  }

  get stylesheet() {
    return this._stylesheet;
  }
}

const State = new Singleton()

export { State };
