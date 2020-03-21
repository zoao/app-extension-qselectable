/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendConf = function(conf) {
  // make sure qselectable boot file is registered
  conf.boot.push(
    "~@quasar/quasar-app-extension-qselectable/src/boot/qselectable.js"
  );

  console.log(
    ` App Extension (qselectable) Info: 'Adding qselectable boot reference to your quasar.conf.js'`
  );

  // make sure boot & component files transpile
  conf.build.transpileDependencies.push(
    /quasar-app-extension-qselectable[\\/]src/
  );
};

module.exports = function(api) {
  // quasar compatibility check
  api.compatibleWith("quasar", "^1.5.0");
  api.compatibleWith("@quasar/app", "^1.1.0");

  // extend quasar.conf
  api.extendQuasarConf(extendConf);
};
