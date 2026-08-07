"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Our Solutions", href: "#solutions" },
  { label: "Expertise", href: "#expertise" },
  { label: "Framework", href: "#framework" },
  { label: "How It Works", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

type MobileNavigationProps = {
  ctaLabel?: string;
};

export function MobileNavigation({ ctaLabel = "Enquire Now" }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const hadFocusRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      if (hadFocusRef.current) {
        triggerRef.current?.focus();
        hadFocusRef.current = false;
      }

      return;
    }

    hadFocusRef.current = true;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusDrawer = () => drawerRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    const frameId = window.requestAnimationFrame(focusDrawer);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusableElements = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(frameId);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
      >
        <span className="sr-only">Toggle menu</span>
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </button>

      <button
        type="button"
        data-mobile-backdrop
        aria-label="Close navigation menu"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-slate-950/35 backdrop-blur-[1px] transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        ref={drawerRef}
        data-mobile-drawer
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        aria-hidden={!isOpen}
        className={`fixed right-3 top-3 z-50 flex h-auto max-h-[calc(100dvh-24px)] min-w-[240px] w-[60vw] max-w-[320px] flex-col overflow-y-auto rounded-2xl border border-slate-200 bg-white px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-5 shadow-xl shadow-slate-950/20 transition-transform duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-semibold text-white">
              A
            </span>
            <p id="mobile-navigation-title" className="text-sm font-semibold tracking-tight text-slate-950">
              Accredian <span className="text-slate-500">Enterprise</span>
            </p>
          </div>
          <button
            type="button"
            aria-label="Close navigation menu"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-2xl font-light leading-none text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 pt-5">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
              className="rounded-xl px-3 py-2.5 text-base font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            tabIndex={isOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2"
          >
            {ctaLabel}
          </a>
        </nav>
      </aside>
    </div>
  );
}
