module.exports = {
    out: './docs/',
    readme: 'none',
    includes: './projects/cq-angular-editable-components/src/lib',
    mode: 'file',
    exclude: [
        '**/test/**/*',
        '**/cq-angular-editable-components.module.ts'
    ],
    excludeExternals: true,
    excludeNotExported: true,
    excludePrivate: true,
    target: 'ES6'
};
