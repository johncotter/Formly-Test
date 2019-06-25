module.exports = {
  name: 'formtest',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/formtest',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
