import React from "react"; 

import './bootstrap';
import '../css/app.css';
import 'aos/dist/aos.css';
import 'react-quill/dist/quill.snow.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ToasterProvider } from './context/toaster';
import { WindowProvider } from './context/window';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <WindowProvider>
                <ToasterProvider>
                    <App {...props} />
                </ToasterProvider>
            </WindowProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
