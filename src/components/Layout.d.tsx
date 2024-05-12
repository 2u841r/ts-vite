// Layout.d.ts

import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

declare module './components/Layout.tsx' {
  const Layout: React.FC<LayoutProps>;
  export default Layout;
}
