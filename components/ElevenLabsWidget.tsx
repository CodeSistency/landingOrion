"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function ElevenLabsWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9999 }}>
        <elevenlabs-convai
          agent-id="agent_3801kkqa1a1tee6szmdkskgvzxcx"
        ></elevenlabs-convai>
      </div>
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
