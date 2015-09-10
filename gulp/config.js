global.SRC_FOLDER = 'client';
global.APP_FOLDER = SRC_FOLDER + '/app';
global.COMPONENTS_FOLDER = SRC_FOLDER + '/components';
global.VENDOR_STYLES_FOLDER = SRC_FOLDER + '/styles/vendor';

global.BUILD_FOLDER = '.tmp';
global.RELEASE_BASE = 'dist';
global.RELEASE_FOLDER = RELEASE_BASE + '/public';
global.SERVER_FOLDER = 'server';

global.config = {
  paths: {
    src: {
      index: SRC_FOLDER + '/index.html',
      app: APP_FOLDER,
      components: COMPONENTS_FOLDER,
      assets: [SRC_FOLDER + '/assets/**/*', '!' + SRC_FOLDER + '/assets/images/**/*'],
      images: SRC_FOLDER + '/assets/images/*',
      scripts: [SRC_FOLDER + '/**/*.js'],
      tests: ['test/**/*.js'],
      styles: APP_FOLDER + '/app.scss',
      stylesGlob: [APP_FOLDER + '/**/*.scss', COMPONENTS_FOLDER + '/**/*.scss', SRC_FOLDER + '/styles/**/*.scss'],
      stylesVendor: [VENDOR_STYLES_FOLDER + '/*.css', VENDOR_STYLES_FOLDER + '/**/*.css'],
      injectScss: [APP_FOLDER + '/**/*.scss', COMPONENTS_FOLDER + '/**/*.scss', '!' + APP_FOLDER + '/app.scss'],
      templates: [APP_FOLDER + '/**/*.html', COMPONENTS_FOLDER + '/**/*.html'],
      livereload: [BUILD_FOLDER + '/*', BUILD_FOLDER + '/**/*', '!' + BUILD_FOLDER + '/assets/**/*'],
      clientFiles: [SRC_FOLDER + '/favicon.ico', SRC_FOLDER + '/robots.txt'],
      server: ['./package.json', SERVER_FOLDER + '/**/*'],
      modules: './' + SRC_FOLDER + '/index.js'
    },
    dest: {
      build: {
        styles: BUILD_FOLDER,
        scripts: BUILD_FOLDER,
        images: BUILD_FOLDER + '/assets/images',
        assets: BUILD_FOLDER + '/assets',
        index: BUILD_FOLDER,
        server: BUILD_FOLDER
      },
      release: {
        styles: RELEASE_FOLDER,
        scripts: RELEASE_FOLDER,
        images: RELEASE_FOLDER + '/assets/images',
        assets: RELEASE_FOLDER + '/assets',
        index: RELEASE_FOLDER,
        server: RELEASE_BASE + '/server'
      }
    },
    server: 'server/app.js'
  },
  filenames: {
    build: {
      styles: 'bundle.css',
      stylesVendor: 'vendor.css',
      scripts: 'bundle.js'
    },
    release: {
      styles: 'bundle.min.css',
      stylesVendor: 'vendor.min.css',
      scripts: 'bundle.min.js'
    }
  },
  ports: {
    staticServer: 9090,
    livereloadServer: 35729
  }
};
