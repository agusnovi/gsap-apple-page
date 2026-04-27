'use client'
import { ReactNode } from 'react';
import { retryDelay } from "@/lib/utils/retry-delay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function QueryProvider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 5,
          retryDelay: (attemptIndex) => retryDelay(attemptIndex),
        },
        mutations: {
          retry: 5,
          retryDelay: (attemptIndex) => retryDelay(attemptIndex),
        },
      },
    });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}