module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['epic', 'feature', 'bugfix', 'hotfix', 'chore', 'experiment', 'design']
    ]
  }
}
