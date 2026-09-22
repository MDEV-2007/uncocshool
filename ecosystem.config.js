module.exports = {
  apps: [
    {
      name: 'uncoschool',
      script: 'node_modules/serve/build/main.js',
      args: 'out -l 3001 -s',
      cwd: './',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
