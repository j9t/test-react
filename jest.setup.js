const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

const customConfig = {
  customSnapshotsDir: './__image_snapshots__',
  customDiffDir: './__image_snapshots__/__diff_output__'
};

const toMatchImageSnapshot = configureToMatchImageSnapshot(customConfig);

expect.extend({ toMatchImageSnapshot });