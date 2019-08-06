# Changelog

All notable changes to "Fundamentals of React Native Video” will be documented in this file.

## 1.0.0

### Added

- Created this repository.
- Added this changelog file.
- Added individual lessons as folders to be included under the master branch.
- Add prop-types to lesson 6.
- Added `prop-types#15.7.2`.
- Added JavaScriptCore.Framework to the Linked FrameWorks and Libraries in Xcode for all lessons.
- Installed react-native-video and react-native-vector-icons on lesson 4 as they were missing from the package.json.
- Manually added RCTVideo.xcodeproj and RNVectorIcons.xcodeproj to Libraries in Xcode to lessons 4-8.
- Manually added RCTGeolocation.xcodeproj to Libraries in Xcode to lessons 5-8.
- Manually added all items under the Resources folder again for lessons that Xcode was unable to find their file location.

### Changed

- Update `react#16.0.0-alpha.6->16.8.6`.
- Update `react-native#0.44.2->0.59.9`.
- Update `react-native-video#1.0.0->4.4.2`.
- Update `babel-jest#20.0.3->24.8.0`.
- Update `babel-preset-react-native#1.9.2->4.0.0`.
- Update `jest#20.0.4->24.8.0`.
- Update `react-test-renderer#16.0.0-alpha.6->16.8.6`.
- Note that babel-preset-react-native was unable to be updated past version 4.0.0 as of 7/2/2019 due to a 'Failed to load bundle' issue that arises in the simulator with versions >4.0.0.
- Changed file path in Bundle React Native code and images under the build phases tab from ../node_modules/react-native/packager/react-native-xcode.sh to ../node_modules/react-native/scripts/react-native-xcode.sh to fix build command error in all lessons.
- Lesson 6 scrollView 'this.position.start' and 'this.position.end' modified so the mp4 (LightVideo) would play at the correct position because the previous set of values were invalid.
- Start: `this.position.start = e.nativeEvent.layout.y - height + THRESHOLD;` -> `this.position.start = e.nativeEvent.layout.y + THRESHOLD;`.
- End: `this.position.end = e.nativeEvent.layout.y + e.nativeEvent.layout.height - THRESHOLD;` -> `this.position.end = e.nativeEvent.layout.y + height + e.nativeEvent.layout.height - THRESHOLD;`.
- Modified handleEnd from `this.setState({ paused: true });` -> `this.setState({ paused: true, progress: 1 })` on lessons 7 and 8 in order to allow the progress bar to fully complete (was previously unable to get progress to reach 1; stopped around .97), letting the user then restart the video.

### Removed

- None.
