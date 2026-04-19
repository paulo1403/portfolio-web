"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // Con SSR, normalmente queremos configurar un tiempo de cache más largo
            // para evitar re-fetching inmediato en el cliente
            staleTime: 60 * 1000, // 1 minuto
            gcTime: 10 * 60 * 1000, // 10 minutos (antes era cacheTime)
            retry: (failureCount, error) => {
              // No reintentar en errores 404
              if (
                error &&
                typeof error === "object" &&
                "status" in error &&
                error.status === 404
              ) {
                return false;
              }
              // Reintentar hasta 2 veces para otros errores
              return failureCount < 2;
            },
            refetchOnWindowFocus: false,
            refetchOnReconnect: "always",
          },
          mutations: {
            retry: 1,
          },
        },
      }),
  );

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
