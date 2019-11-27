import StyleSheet from './StyleSheet'

const stylesheet = new StyleSheet('oma-styles')

Object.freeze(stylesheet)

export * from './constants/custom_property_names';

export { stylesheet }
