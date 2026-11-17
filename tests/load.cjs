const ts = require('typescript');
const path = require('node:path');
const Module = require('node:module');
const original = Module._resolveFilename;
Module._resolveFilename = function (name, parent, ...args) {
  return original.call(
    this,
    name.startsWith('@/') ? path.join(__dirname, '../src', name.slice(2)) : name,
    parent,
    ...args,
  );
};
for (const extension of ['.ts', '.tsx'])
  require.extensions[extension] = (mod, filename) => {
    const source = require('node:fs').readFileSync(filename, 'utf8');
    mod._compile(
      ts.transpileModule(source, {
        compilerOptions: {
          module: ts.ModuleKind.CommonJS,
          jsx: ts.JsxEmit.ReactJSX,
          esModuleInterop: true,
        },
      }).outputText,
      filename,
    );
  };
