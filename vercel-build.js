const { execSync } = require('child_process');

console.log('Running vercel-build script...');

try {
  // Устанавливаем зависимости
  console.log('Installing dependencies...');
  execSync('npm install --production=false', { stdio: 'inherit' });

  // Запускаем сборку
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
