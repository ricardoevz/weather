import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// export default defineConfig({
//   base: '/weather',
//   plugins: [react()],
// });

export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), 'VITE_');
  const envWithProcessPrefix = {
    'process.env': `${JSON.stringify(env)}`,
  };

  return {
    base: '/weather',
    plugins: [react()],
    define: envWithProcessPrefix,
  };
});
