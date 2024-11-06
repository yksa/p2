import { QueryClient } from "@tanstack/react-query";

// Create QueryClient with global error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3, // 3 minutes
    },
    mutations: {
      onError: (error) => {
        console.error("Global Mutation Error:", error.message);
      },
    },
  },
});

export default queryClient;
