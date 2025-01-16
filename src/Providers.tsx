'use client';
import React, {PropsWithChildren} from "react";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Sidebar from "@/components/Navbar/Sidebar";
import styles from '@/application.module.scss';

export default function Providers({ children }: PropsWithChildren) {
    const [queryClient] = React.useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <div className={styles['application-wrapper']}>
                <Sidebar />
                {children}
            </div>
        </QueryClientProvider>
    );
};