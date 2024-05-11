# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.14.1]

### Added

- Added support for accessibility label to the menu button
- Added keyboard navigation support to the Menu component
- Added aria attributes for better accessibility
- New CSS custom properties to configure the Menu component:
  `--button-size, --label-color, --label-margin-bottom, --line-color`

### Changed

- The Menu component has a slightly new look

### Removed

- CSS custom property `--oma-menu__justify-button` is removed for the menu
  component. The hamburger svg now fills the whole button, so that property is
  no longer needed.

## [0.13.0]

### Added

- `<social-media-link>` now supports `type='youtube'`.

### Changed

**Includes breaking changes for `<oma-google-calendar>`!**

- Changed properties for `<oma-google-calendar>` to facilitate fetching all
  events from a calendar.
  - The default value for `maxResults` is removed. Implicitly, that means the
    default limits from the API is now used instead.
  - The default value for `timeMin` is removed. The default was
    `new Date().toISOString()`.
  - The default value for `timeMax` is removed. The default was
    `new Date(Date.now() + 30_DAYS_IN_MILLILSECONDS).toISOString()`.

## [0.12.0]

### Added

- `locale` property to `oma-google-calendar`. Defaults to `sv-SE`.
- `date-format` property is added to `oma-google-calendar` to format the date
  printed for each event. It takes a stringified JSON object and passes it
  directly to `Date.prototype.toLocaleDateString`. See Changed below for
  information regarding the default value.
- New component: `<oma-menu>`

### Changed

**Includes breaking changes for `<oma-google-calendar>`!**

- Due to the new `date-format` attribute, dates printed by `oma-google-calendar`
  has changed it's default format from 'yyyy-mm-dd' to localized weekday, month
  and date: "ons 26 okt.".

### Fixed

- Bug in `<oma-center>`.
- Styling issues in `<oma-link>` (styles were not applied on "ordinary links",
  compared to email and phone links)

## [0.11.0]

### Added

- `alignment` property to `oma-link`. When the `to` property includes either a
  phone number or an email address, the link component outputs the phone number
  or the email address. If you also pass childrens, they were previously added
  after the phone number / email address. With this new property, you can choose
  the alignment yourself.

## [0.10.1]

### Fixed

- `<oma-google-calendar>` now sorts events on start time. Before, they were
  sorted in an "unspecified" but "stable" order from Google. This change also
  expands recurring events into single events.

## [0.10.0]

### Added

- New web component: `<oma-google-calendar>`

## [0.9.0]

**Includes breaking changes for screen size classes!**

### Added

- New web component: `<oma-center>`
- New web component: `<oma-content-switch>`

### Changed

- The screen size classes has changed name from `size-600`, `size-900` and
  `size-1200` to `screen-size--small`, `screen-size--medium` and
  `screen-size--large` (**breaking change!**)

## [0.8.0]

### Added

- Part attribute to `<social-media-link>`, which allows you to style the anchor
  tag from outside the Shadow DOM, with something like
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

[0.13.0]: https://github.com/oma-wc/oma/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/oma-wc/oma/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/oma-wc/oma/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/oma-wc/oma/compare/v0.10.0...v0.10.1
[0.9.0]: https://github.com/oma-wc/oma/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/oma-wc/oma/compare/v0.7.4...v0.8.0
[0.7.4]: https://github.com/oma-wc/oma/compare/v0.7.3...v0.7.4
[0.7.3]: https://github.com/oma-wc/oma/compare/v0.7.2...v0.7.3
[0.7.2]: https://github.com/oma-wc/oma/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/oma-wc/oma/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/oma-wc/oma/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/oma-wc/oma/compare/v0.5.3...v0.6.0
[0.5.3]: https://github.com/oma-wc/oma/compare/v0.5.2...v0.5.3
[0.5.2]: https://github.com/oma-wc/oma/compare/v0.5.1...v0.5.2
