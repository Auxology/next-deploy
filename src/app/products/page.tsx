// src/app/products/page.tsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { LoadingSpinner } from '@/components/ui/LoadingSpinner';
export default function ProductsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/products/1');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
