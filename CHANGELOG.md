# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.9.0]

### Added

- New web component: <oma-center>
- New web component: <oma-content-switch>

### Changes

- The screen size classes has changed name from size-600, size-900 and size-1200
  to screen-size--small, screen-size--medium and screen-size--large (Backward
  incompatible change)

## [0.8.0]

### Added

- Part attribute to social-media-link, which allows you to style the anchor tag
  from outside the Shadow DOM, with something like
  `social-media-link::part(link)`

## [0.7.4]

### Fixed

- Actually fixes what 0.7.3 attempted to (forgot to build component before
  publishing).

## [0.7.3]

### Fixed

- Renames `oma-google-map` `key` attribute to `apikey` (`key` is a React
  keyword).

## [0.7.2]

### Fixed

- Replaces hard coded Google API Key with a new `key` attribute.

## [0.7.1]

### Fixed

- Removes unused export from `oma-google-map`, which fixes a console warning.

## [0.7.0]

### Added

- New `oma-google-map` component.

## [0.6.0]

### Added

- `oma-grid-row` now has new padding attributes: `paddingOnSelf` and
  `paddingOnChildren`. We have found that you often want to have a fullwidth row
  with a background and then align children to the grid. These new attributes
  makes that super easy!

## Deprecated

- `oma-grid-row`'s attribute `contentAlignedWithGrid` is replaced in favor of
  `paddingOnSlef`.

## [0.5.3]

### Fixes

- Actually fixes the problem with `oma-grid-subgrid` that [0.5.2] was supposed
  to fix. The change was not build correctly due to a problem in the build
  script, which is not fixed as well.

## [0.5.2]

### Fixes

- `oma-grid-subgrid` now renders its children.

[0.8.0]: https://github.com/oma-wc/oma/compare/v0.7.4...v0.8.0
[0.7.4]: https://github.com/oma-wc/oma/compare/v0.7.3...v0.7.4
[0.7.3]: https://github.com/oma-wc/oma/compare/v0.7.2...v0.7.3
[0.7.2]: https://github.com/oma-wc/oma/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/oma-wc/oma/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/oma-wc/oma/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/oma-wc/oma/compare/v0.5.3...v0.6.0
[0.5.3]: https://github.com/oma-wc/oma/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/oma-wc/oma/compare/v0.5.1...v0.5.2
