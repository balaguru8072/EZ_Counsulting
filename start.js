// File: start.js

const { execSync } = require('child_process');
const path = require('path');

// Command to start React development server
const scriptPath = path.resolve('node_modules', '.bin', 'react-scripts');
const command = `"${scriptPath}" start`;

try {
  const result = execSync(command, { stdio: 'inherit', shell: true });
  console.log(result);
} catch (error) {
  console.error('Error starting the server:', error);
  process.exit(1);
}
