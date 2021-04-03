# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0]
### Added
- New `oma-google-map` component.

## [0.6.0]
### Added
- `oma-grid-row` now has new padding attributes: `paddingOnSelf` and
  `paddingOnChildren`. We have found that you often want to have a
  fullwidth row with a background and then align children to the grid.
  These new attributes makes that super easy!

## Deprecated
- `oma-grid-row`'s attribute `contentAlignedWithGrid` is replaced in favor of
  `paddingOnSlef`.

## [0.5.3]
### Fixes
- Actually fixes the problem with `oma-grid-subgrid` that [0.5.2] was supposed
  to fix. The change was not build correctly due to a problem in the build script,
  which is not fixed as well.

## [0.5.2]
### Fixes
- `oma-grid-subgrid` now renders its children.

[0.7.0]: https://github.com/oma-wc/oma/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/oma-wc/oma/compare/v0.5.3...v0.6.0
[0.5.3]: https://github.com/oma-wc/oma/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/oma-wc/oma/compare/v0.5.1...v0.5.2
