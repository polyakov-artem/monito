import { SvgSprite } from '@/shared/ui/SvgSprite';
import { AppProvider } from './AppProvider';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <AppProvider>
      <SvgSprite />
      <AppRouter />
    </AppProvider>
  );
}

export default App;
