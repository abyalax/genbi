import { ReactNode } from 'react';

import { Footer } from '~/components/ui/footer';
import { SidebarProvider } from '~/components/ui/sidebar';

import { Sidebar } from '../_components/ui/sidebar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main style={{ width: '100%' }}>
        <section className="min-h-[90vh]">{children}</section>
        <Footer />
      </main>
    </SidebarProvider>
  );
}
