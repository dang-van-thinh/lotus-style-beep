/* ════════════════════════════════════
   SITE DATA — single source of truth for
   the header (nav) and footer, shared by
   every page. Edit values here; header.js
   renders them everywhere automatically.
════════════════════════════════════ */

window.SITE_DATA = {
  brand: {
    name: 'LOTUS',
    mini_name: 'FOTO',
    logo: 'images/logo/logo.png',
  },

  // Top-level nav items, in display order.
  // "services" carries the dropdown list, which is also reused
  // to build the footer's Services column.
  nav: [
    {
      id: 'services',
      label: 'Services',
      href: 'services.html',
      dropdown: [
        { id: 'hdr', label: 'Photo Editing' },
        { id: 'removal', label: 'Item Removal' },
        { id: 'staging', label: 'Virtual Staging' },
        { id: 'dusk', label: 'Day to Dusk' },
        { id: 'renovation', label: 'Virtual Renovation' },
      ],
    },
    { id: 'contact', label: 'Contact', href: 'contact.html' },
  ],

  cta: { label: 'Place Order', href: 'order.html' },

  footer: {
    tagline: 'Professional real estate photo editing that delivers the perfect balance of lighting, color, and precision to every image.',
    email: 'contact.lotusfoto@gmail.com',
    supportHours: '24/7 Support',
    copyright: '© 2024 LOTUS. All rights reserved.',
    legalLinks: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
    // Social links shown under the brand tagline in the footer.
    // Replace the href placeholders with your real profile/chat links.
    social: [
      { name: 'Facebook',  href: 'https://www.facebook.com/profile.php?id=61579599152434', icon: 'facebook' },
      { name: 'Instagram', href: 'https://www.instagram.com/lotus_foto_editing/', icon: 'instagram' },
      { name: 'WhatsApp',  href: '#', icon: 'whatsapp' },
    ],
  },
};
