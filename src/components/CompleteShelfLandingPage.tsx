import { useEffect, useRef } from "react";

/**
 * Hosts the complete authored Three.js page as a same-project document.
 * Keeping it in an iframe preserves its document-level styles, import map,
 * renderer lifecycle, pointer handling, and keyboard interactions.
 */
export function CompleteShelfLandingPage() {
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const handleLoad = () => {
      frame.dataset.ready = "true";
    };

    frame.addEventListener("load", handleLoad);
    return () => {
      frame.removeEventListener("load", handleLoad);
      delete frame.dataset.ready;
    };
  }, []);

  return (
    <main className="shelf-host" aria-label="Network Layer interactive field library">
      <iframe
        ref={frameRef}
        className="shelf-document"
        src="/landing-pages/complete-shelf-v2.html"
        title="Network Layer — Interactive Field Library"
        loading="eager"
        allow="fullscreen; autoplay"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-downloads allow-popups allow-pointer-lock"
      />
    </main>
  );
}
