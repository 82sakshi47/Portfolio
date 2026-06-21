'use client';

import { Suspense, lazy, useEffect } from 'react';
const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  useEffect(() => {
    const removeLogo = () => {
      const container = document.getElementById('spline-container');
      
      const hideAnchorsAndLogos = (root: DocumentFragment | Element) => {
        // 1. Hide all anchor tags (Spline watermarks are always nested under <a> tags)
        const anchors = root.querySelectorAll('a');
        anchors.forEach((a) => {
          a.style.display = 'none';
          a.style.opacity = '0';
          a.style.visibility = 'hidden';
          a.style.pointerEvents = 'none';
        });

        // 2. Hide any element with id containing 'logo' or class containing 'logo'
        const logoElements = root.querySelectorAll('[id*="logo" i], [class*="logo" i], [id*="watermark" i], [class*="watermark" i]');
        logoElements.forEach((el) => {
          const htmlEl = el as HTMLElement;
          htmlEl.style.display = 'none';
          htmlEl.style.opacity = '0';
          htmlEl.style.visibility = 'hidden';
          htmlEl.style.pointerEvents = 'none';
        });

        // 3. Recursively check all children for nested shadow roots
        const children = root.querySelectorAll('*');
        children.forEach((child) => {
          if (child.shadowRoot) {
            hideAnchorsAndLogos(child.shadowRoot);
          }
        });
      };

      // Scan starting from our local spline container
      if (container) {
        hideAnchorsAndLogos(container);
      }

      // Scan globally in case the element is rendered outside or portal'd
      const viewers = document.querySelectorAll('spline-viewer');
      viewers.forEach((viewer) => {
        if (viewer.shadowRoot) {
          hideAnchorsAndLogos(viewer.shadowRoot);
        }
      });

      // Also scan standard document light DOM anchors targeting spline
      const lightLogos = document.querySelectorAll('a[href*="spline.design"]');
      lightLogos.forEach((el) => {
        (el as HTMLElement).style.display = 'none';
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.pointerEvents = 'none';
      });
    };

    // Run immediately and set up an interval
    removeLogo();
    const interval = setInterval(removeLogo, 200);

    // Stop polling after 10 seconds to save resources
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center bg-slate-950/20 text-white ${className}`}>
          <svg className="animate-spin h-5 w-5 text-indigo-500 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
          </svg>
        </div>
      }
    >
      <Spline
        scene={scene}
        className={className} 
      />
    </Suspense>
  );
}
