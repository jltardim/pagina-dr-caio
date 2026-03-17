export function trackWhatsAppClick(source: string, phone: string) {
  try {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: 'whatsapp_click',
      source,
      phone,
      page_path: window.location.pathname,
      page_url: window.location.href,
      timestamp: Date.now()
    });
  } catch (e) {
    // noop
  }
}