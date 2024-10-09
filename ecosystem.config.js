module.exports = {
  apps: [
    {
      name: 'app_mobile_fecor',
      script: 'dist/main.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
