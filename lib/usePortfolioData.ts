'use client';

import { useEffect, useState } from 'react';

export function usePortfolioData<T>(fetcher: () => Promise<{ data: T }>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    fetcher()
      .then((result) => {
        if (mounted) {
          setData(result.data);
          setError(null);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
          setData(null);
        }
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []); // ← Dependencia vacía: solo ejecutar una vez

  return { data, loading, error };
}
