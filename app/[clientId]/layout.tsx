import { PropsWithChildren } from 'react';

import { Footer } from '~/components/ui/footer';
import { SidebarProvider } from '~/components/ui/sidebar';

import { Sidebar } from '../_components/ui/sidebar';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main style={{ width: '100%' }}>
        {children}
        <Footer />
      </main>
    </SidebarProvider>
  );
}
