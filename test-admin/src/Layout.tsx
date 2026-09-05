import type { ReactNode } from 'react';

import {
    Layout as RALayout,
    CheckForApplicationUpdate,
    AppBar,
    LoadingIndicator,
} from 'react-admin';

import { Identity } from './Identity';
import { ThemeToggler } from './theme';

const MyToolbar = () => (
    <>
        <ThemeToggler />
        <LoadingIndicator />
        <Identity />
    </>
);

const MyAppBar = () => (
    <AppBar
        toolbar={<MyToolbar />}
        userMenu={false}
    />
);

export const Layout = ({ children }: { children: ReactNode }) => (
    <RALayout appBar={MyAppBar}>
        {children}
        <CheckForApplicationUpdate />
    </RALayout>
);