'use client';
import { useEffect, useState } from 'react';
import Render from './Render';
import Loading from './Component/loading/loading';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000); // 4 seconds
    return () => clearTimeout(timeout);
  }, []);

  return loading ? <Loading /> : <Render />;
}
