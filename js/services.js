/* ════════════════════════════════════
   BEEPEC — Services Page Engine
   Data-driven renderer for each service section.
   All reusable templates are functions — never duplicated.
════════════════════════════════════ */

(function () {

  /* ──────────────────────────────────
     IMAGE PATH HELPERS
     All paths verified against f:/web-atu-2/images/
  ────────────────────────────────── */
  const SLF  = 'images/Sample%20Lotus%20Foto/';
  const HDR1 = SLF + 'HDR%20Blending/1/';
  const HDR2 = SLF + 'HDR%20Blending/2/';
  const IR   = SLF + 'Item%20Removal/';
  const VS   = SLF + 'Virtual%20Staging/';
  const DTD  = SLF + 'Day%20To%20Dusk/';
  const VR   = SLF + 'Virtual%20Renovation/';
  const PE   = 'images/PHOTO%20EDITING/';
  const IREM = 'images/ITEM%20REMOVAL/';
  const D2D  = 'images/DAY%20TO%20DUSK/';

  /* ──────────────────────────────────
     SERVICE DATA
  ────────────────────────────────── */
  const SERVICES = {

    /* ── 1. HDR BLENDING / PHOTO EDITING ───────────────────────────
       Confirmed BA pairs  : PE 7X5A7819/7X5A7819_1
                             HDR1 ET6A5197/ET6A5217
                             HDR1 ET6A5230/ET6A5252
       Gallery (edited)    : HDR1 × 6  +  HDR2 × 6 (rich variety)
    ─────────────────────────────────────────────────────────────── */
    hdr: {
      id: 'hdr',
      name: 'Photo Editing',
      subtitle: 'HDR Blending & Color Correction',
      hero: {
        before: PE + '7X5A7819.jpg',
        after:  PE + '7X5A7819_1.jpg',
      },
      whyUs: [
        { icon: 'balance', title: 'Perfectly Balanced Exposure', text: 'HDR blending merges multiple exposures so windows, walls, and floors all look natural at once — no blown-out sky, no dark corners.' },
        { icon: 'sky',     title: 'Blue Sky Guarantee',          text: 'Every exterior receives a clean, vivid sky replacement regardless of what the weather was on shoot day.' },
        { icon: 'clock',   title: '24h Turnaround',              text: 'Standard orders are delivered the next business day. Rush 12-hour delivery is available on the Advanced plan.' },
        { icon: 'mls',     title: 'MLS-Ready Output',            text: 'High-resolution JPEGs sized and colour-profiled for MLS, Zillow, Realtor.com, and print marketing.' },
      ],
      solutions: [
        {
          q:    'What exactly is HDR blending and why does my listing need it?',
          text: 'HDR (High Dynamic Range) blending combines a bright exposure for the interior with a dark exposure for the windows into one perfectly balanced image. Without it, you either get a washed-out window or a dark room — never both looking great at once. Every professional listing today uses it.',
          before: PE + '7X5A7819.jpg',
          after:  PE + '7X5A7819_1.jpg',
        },
        {
          q:    'Can you replace a cloudy or overcast sky?',
          text: 'Yes. Sky replacement is included in Standard and Advanced plans. We select from a curated library of realistic skies matched to the time of day and geography of your listing so it looks completely authentic.',
          before: HDR1 + 'ET6A5197.jpg',
          after:  HDR1 + 'ET6A5217.jpg',
        },
        {
          q:    'How do you handle window views and photographer reflections?',
          text: 'Window pull is the most technically demanding part of real estate editing. We separately process the window zone and composite a natural outdoor view. Photographer reflections in windows and mirrors are also removed as part of the standard workflow.',
          before: HDR1 + 'ET6A5230.jpg',
          after:  HDR1 + 'ET6A5252.jpg',
        },
      ],
      checkOut: [
        // HDR Blending/1 — interiors, natural light
        HDR1 + 'ET6A5121.jpg',
        HDR1 + 'ET6A5129.jpg',
        HDR1 + 'ET6A5164.jpg',
        HDR1 + 'ET6A5192.jpg',
        HDR1 + 'DSC00287.jpg',
        HDR1 + 'ET6A5813.jpg',
        HDR1 + 'ET6A5819.jpg',
        // HDR Blending/2 — large diverse set
        HDR2 + 'DSC05851.jpg',
        HDR2 + 'DSC05860.jpg',
        HDR2 + 'DSC05872.jpg',
        HDR2 + 'DSC05884.jpg',
        HDR2 + 'DSC05895.jpg',
        HDR2 + 'DSC05908.jpg',
        HDR2 + 'DSC05920.jpg',
        HDR2 + 'DSC05935.jpg',
        HDR2 + 'DSC05947.jpg',
        HDR2 + 'DSC05961.jpg',
        HDR2 + 'DSC05976.jpg',
        HDR2 + 'DSC06007.jpg',
        HDR2 + 'DSC06025.jpg',
        HDR2 + 'DSC06043.jpg',
        HDR2 + 'DSC06061.jpg',
        HDR2 + 'DSC06079.jpg',
        HDR2 + 'DSC06097.jpg',
      ],
      projects: [
        { before: PE   + '7X5A7819.jpg',    after: PE   + '7X5A7819_1.jpg' },
        { before: HDR1 + 'ET6A5197.jpg',    after: HDR1 + 'ET6A5217.jpg'  },
        { before: HDR1 + 'ET6A5230.jpg',    after: HDR1 + 'ET6A5252.jpg'  },
      ],
      popular: ['removal', 'staging', 'dusk', 'renovation'],
    },

    /* ── 2. ITEM REMOVAL ────────────────────────────────────────────
       Naming convention in SLF/Item Removal/:
         odd  = before  (1, 3, 5, 7, 9 …)
         even = after   (2, 4, 6, 8, 10 …)
       Total: 9 confirmed pairs (1/2 … 17/18)
    ─────────────────────────────────────────────────────────────── */
    removal: {
      id: 'removal',
      name: 'Item Removal',
      subtitle: 'Clean, Clutter-Free Photographs',
      hero: {
        before: IREM + '1.jpg',
        after:  IREM + '2.jpg',
      },
      whyUs: [
        { icon: 'clean',   title: 'Seamless Results',   text: 'Objects disappear without a trace — no smearing, no cloning artefacts, no repeating patterns.' },
        { icon: 'large',   title: 'Any Size Object',    text: 'From a power cord to an entire sofa set — we rebuild the floor, wall, or ceiling behind every removed item.' },
        { icon: 'reflect', title: 'Reflection Removal', text: 'Photographer reflections in windows, mirrors, and appliances are erased and replaced with a natural view.' },
        { icon: 'clock',   title: 'Rush 12h Available', text: 'Simple single-object removals can be turned around in just 12 hours on the Advanced plan.' },
      ],
      solutions: [
        {
          q:    'Can you remove large furniture or appliances?',
          text: 'Yes. We remove sofas, dining sets, refrigerators, washing machines, and any other large items. The floor, wall, and ceiling behind each removed object are rebuilt from scratch to look completely authentic.',
          before: IR + '1.jpg',
          after:  IR + '2.jpg',
        },
        {
          q:    'What about power lines, wires, and cables?',
          text: 'Power lines crossing an exterior sky are one of the most common issues in real estate photography. We remove them cleanly and rebuild the sky and roofline behind them — no visible seams.',
          before: IR + '7.jpg',
          after:  IR + '8.jpg',
        },
        {
          q:    'Can you remove cars from driveways or street?',
          text: 'Absolutely. Vehicles in front of the property are removed and replaced with a matching driveway or street surface. We also handle bins, garden equipment, and construction materials.',
          before: IR + '11.jpg',
          after:  IR + '12.jpg',
        },
      ],
      checkOut: [
        IR + '2.jpg',
        IR + '4.jpg',
        IR + '6.jpg',
        IR + '8.jpg',
        IR + '10.jpg',
        IR + '12.jpg',
        IR + '14.jpg',
        IR + '16.jpg',
        IR + '18.jpg',
      ],
      projects: [
        { before: IREM + '1.jpg',  after: IREM + '2.jpg'  },
        { before: IR   + '1.jpg',  after: IR   + '2.jpg'  },
        { before: IR   + '3.jpg',  after: IR   + '4.jpg'  },
        { before: IR   + '5.jpg',  after: IR   + '6.jpg'  },
        { before: IR   + '9.jpg',  after: IR   + '10.jpg' },
        { before: IR   + '13.jpg', after: IR   + '14.jpg' },
      ],
      popular: ['hdr', 'staging', 'dusk', 'renovation'],
    },

    /* ── 3. VIRTUAL STAGING ─────────────────────────────────────────
       Pairs with before/after in filename:
         1,2,3,4,8,11  →  both "before" and "after" files exist
       After-only (gallery): 5,6,7,9,10,12,13,14
    ─────────────────────────────────────────────────────────────── */
    staging: {
      id: 'staging',
      name: 'Virtual Staging',
      subtitle: 'Empty to Furnished — Digitally',
      hero: {
        before: VS + '1before.jpg',
        after:  VS + '1after.jpg',
      },
      whyUs: [
        { icon: 'sofa',  title: 'Photorealistic Furniture', text: 'Our 3D library contains thousands of pieces spanning every style — buyers cannot tell it from physical staging.' },
        { icon: 'style', title: 'Multiple Design Styles',   text: 'Modern, Scandinavian, coastal, classic, or industrial. You choose the aesthetic; we deliver it.' },
        { icon: 'cost',  title: '97% Less than Physical',   text: 'Skip the truck, the movers, and the monthly rental fee. Virtual staging delivers the same impact at a fraction of the cost.' },
        { icon: 'clock', title: '48h Delivery',             text: 'Staged images back before your next open house or listing launch.' },
      ],
      solutions: [
        {
          q:    'Which rooms can be virtually staged?',
          text: 'We stage living rooms, dining rooms, bedrooms, home offices, kitchens, bathrooms, and outdoor spaces. Any room that benefits from a furnished context can be staged. We can also stage individual corners or vignettes.',
          before: VS + '2before.jpg',
          after:  VS + '2after.jpg',
        },
        {
          q:    'Can you de-stage a room and re-stage with different furniture?',
          text: "Yes — we first remove all existing furniture (de-staging) and then place our virtual furniture. This is especially useful when physical staging doesn't match the target buyer profile, or when you'd like to show multiple style options.",
          before: VS + '3before.jpg',
          after:  VS + '3after.jpg',
        },
        {
          q:    'How realistic will the result look in online listings?',
          text: 'Our virtual staging is photorealistic — lighting, shadows, perspective, and material textures are all matched to the original photo. Buyers regularly cannot distinguish our virtual staging from physical staging in MLS photos.',
          before: VS + '4before.jpg',
          after:  VS + '4after.jpg',
        },
      ],
      checkOut: [
        VS + '1after.jpg',
        VS + '2after.jpg',
        VS + '3after.jpg',
        VS + '4after.jpg',
        VS + '5after.jpg',
        VS + '6after.jpg',
        VS + '7after.jpg',
        VS + '8after.jpg',
        VS + '9after.jpg',
        VS + '10after.jpg',
        VS + '11after.jpg',
        VS + '12after.jpg',
        VS + '13after.jpg',
        VS + '14after.jpg',
      ],
      projects: [
        { before: VS + '1before.jpg',  after: VS + '1after.jpg'  },
        { before: VS + '2before.jpg',  after: VS + '2after.jpg'  },
        { before: VS + '3before.jpg',  after: VS + '3after.jpg'  },
        { before: VS + '4before.jpg',  after: VS + '4after.jpg'  },
        { before: VS + '8before.jpg',  after: VS + '8after.jpg'  },
        { before: VS + '11before.jpg', after: VS + '11after.jpg' },
      ],
      popular: ['hdr', 'removal', 'dusk', 'renovation'],
    },

    /* ── 4. DAY TO DUSK ─────────────────────────────────────────────
       Confirmed BA pairs:
         D2D truoc / sau
         D2D "anh trk" / "sau lam"  (ảnh trước / sau làm)
         DTD 1 / 11,  2 / 22,  3 / 33
       Standalone afters: DTD 4, 5, 6
    ─────────────────────────────────────────────────────────────── */
    dusk: {
      id: 'dusk',
      name: 'Day to Dusk',
      subtitle: 'Twilight Conversion for Exteriors',
      hero: {
        before: D2D + 'truoc.jpg',
        after:  D2D + 'sau.jpg',
      },
      whyUs: [
        { icon: 'twilight', title: 'Dramatic Twilight Sky',  text: 'Rich sunset gradients give your listing a cinematic feel that stands out in search results and on social media.' },
        { icon: 'glow',     title: 'Window Glow Simulation', text: 'Warm interior light is added to every window — the welcoming "someone is home" effect that attracts buyers.' },
        { icon: 'lawn',     title: 'Landscape Enhancement',  text: 'Lawn greened and brightened, pathways softly lit, and pool water shimmering with added reflections.' },
        { icon: 'clock',    title: '24h Delivery',           text: 'Every day-to-dusk conversion is delivered by the next business day.' },
      ],
      solutions: [
        {
          q:    'Which exterior shots work best for day-to-dusk conversion?',
          text: 'Photos taken in flat overcast daylight or during the golden hour convert best. We need a clear, unobstructed sky zone and visible windows. Tinted or reflective glass works fine — we handle the glow simulation separately.',
          before: DTD + '1.jpg',
          after:  DTD + '11.jpg',
        },
        {
          q:    'Can you add pool, pathway, and garden lighting?',
          text: 'Yes. We add glowing pool water, softly lit pathways, driveway lanterns, and porch light halos. These atmospheric details elevate the result from a simple sky swap to a fully immersive twilight scene.',
          before: DTD + '2.JPG',
          after:  DTD + '22.jpg',
        },
        {
          q:    'Can I request a specific sky colour or mood?',
          text: 'Absolutely. Our sky library ranges from deep purple-blue twilight to warm golden-orange sunset. Describe your preference in the order notes — or send a reference image — and we will match the mood precisely.',
          before: DTD + '3.JPG',
          after:  DTD + '33.jpg',
        },
      ],
      checkOut: [
        D2D + 'sau.jpg',
        D2D + 'sau%20lam.jpg',
        DTD + '11.jpg',
        DTD + '22.jpg',
        DTD + '33.jpg',
        DTD + '4.jpg',
        DTD + '5.jpg',
        DTD + '6.jpg',
      ],
      projects: [
        { before: D2D + 'truoc.jpg',      after: D2D + 'sau.jpg'        },
        { before: D2D + 'anh%20trk.jpg',  after: D2D + 'sau%20lam.jpg'  },
        { before: DTD + '1.jpg',          after: DTD + '11.jpg'         },
        { before: DTD + '2.JPG',          after: DTD + '22.jpg'         },
        { before: DTD + '3.JPG',          after: DTD + '33.jpg'         },
      ],
      popular: ['hdr', 'removal', 'staging', 'renovation'],
    },

    /* ── 5. VIRTUAL RENOVATION ──────────────────────────────────────
       Confirmed BA pairs (suffix _ or _1):
         01122303 / 01122303_
         01122310 / 01122310_
         01122323_Room2 / 01122323_Room2_
         DSC09914 / DSC09914_1
         DSC09920 / DSC09920_1
         DSC09921 / DSC09921_1
       Gallery (after-only): same 6 after shots
    ─────────────────────────────────────────────────────────────── */
    renovation: {
      id: 'renovation',
      name: 'Virtual Renovation',
      subtitle: "Show the Property's Full Potential",
      hero: {
        before: VR + '01122303.jpg',
        after:  VR + '01122303_.jpg',
      },
      whyUs: [
        { icon: 'paint', title: 'Walls & Floors Updated', text: 'New paint colours, wallpaper, hardwood, tile, or luxury vinyl — applied photorealistically with correct lighting and shadow.' },
        { icon: 'cost',  title: 'No Contractor Needed',   text: 'Show renovation potential without spending a single dollar on materials, labour, or staging.' },
        { icon: 'buyer', title: 'Attract More Buyers',    text: 'Help buyers see past dated finishes and envision the updated home — leading to faster, higher offers.' },
        { icon: 'clock', title: '48–72h Turnaround',      text: 'Complex renovation renders completed within 48–72 hours depending on scope.' },
      ],
      solutions: [
        {
          q:    'Can you change wall colours, remove wallpaper, or add texture?',
          text: 'Yes — walls can be repainted to any colour, dated wallpaper removed, and textured finishes (wood panelling, Venetian plaster, brick) applied. We match the ambient light and shadow of the original photo for a completely authentic result.',
          before: VR + '01122310.jpg',
          after:  VR + '01122310_.jpg',
        },
        {
          q:    'Can you swap the flooring material?',
          text: 'Absolutely. We replace carpet with hardwood, old tile with polished concrete, or linoleum with luxury vinyl plank. Perspective, grout lines, skirting boards, and surface reflections are all matched accurately for each room.',
          before: VR + '01122323_Room2.jpg',
          after:  VR + '01122323_Room2_.jpg',
        },
        {
          q:    'What about kitchen cabinets, countertops, and bathroom tiles?',
          text: 'High-impact surface updates — cabinet repainting, stone countertop swaps, tile backsplash replacements, and bathroom vanity updates — are among our most requested renovation edits. These changes significantly increase perceived value per MLS dollar.',
          before: VR + 'DSC09914.jpg',
          after:  VR + 'DSC09914_1.jpg',
        },
      ],
      checkOut: [
        VR + '01122303_.jpg',
        VR + '01122310_.jpg',
        VR + '01122323_Room2_.jpg',
        VR + 'DSC09914_1.jpg',
        VR + 'DSC09920_1.jpg',
        VR + 'DSC09921_1.jpg',
      ],
      projects: [
        { before: VR + '01122303.jpg',       after: VR + '01122303_.jpg'       },
        { before: VR + '01122310.jpg',       after: VR + '01122310_.jpg'       },
        { before: VR + '01122323_Room2.jpg', after: VR + '01122323_Room2_.jpg' },
        { before: VR + 'DSC09914.jpg',       after: VR + 'DSC09914_1.jpg'      },
        { before: VR + 'DSC09920.jpg',       after: VR + 'DSC09920_1.jpg'      },
        { before: VR + 'DSC09921.jpg',       after: VR + 'DSC09921_1.jpg'      },
      ],
      popular: ['hdr', 'removal', 'staging', 'dusk'],
    },
  };

  /* ──────────────────────────────────
     ICON MAP  (SVG strings)
  ────────────────────────────────── */
  const ICONS = {
    balance:  `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 3v16M4 11l7-7 7 7" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    sky:      `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M3 16c0-3.3 2.7-6 6-6 .4 0 .8 0 1.1.1C11.1 8 13.3 6 16 6c2.8 0 5 2.2 5 5 0 2.8-2.2 5-5 5H4.5C3.7 16 3 15.3 3 14.5V16z" stroke="#FF9500" stroke-width="1.8"/></svg>`,
    clock:    `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#FF9500" stroke-width="1.8"/><path d="M11 6v5l3 3" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    mls:      `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="4" width="16" height="14" rx="2" stroke="#FF9500" stroke-width="1.8"/><path d="M7 9h8M7 13h5" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    clean:    `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M6 17l10-10M8 6l8 8" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/><circle cx="16" cy="6" r="2" fill="#FF9500" fill-opacity=".25" stroke="#FF9500" stroke-width="1.4"/></svg>`,
    large:    `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="2" y="8" width="18" height="12" rx="2" stroke="#FF9500" stroke-width="1.8"/><path d="M6 8V5M11 8V4M16 8V5" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    reflect:  `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 3v16M3 11h16" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2 2"/><circle cx="11" cy="11" r="3" stroke="#FF9500" stroke-width="1.8"/></svg>`,
    sofa:     `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="2" y="10" width="18" height="8" rx="2" stroke="#FF9500" stroke-width="1.8"/><path d="M5 10V7a1 1 0 011-1h10a1 1 0 011 1v3" stroke="#FF9500" stroke-width="1.8"/><path d="M5 18v2M17 18v2" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    style:    `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M3 19l5-5 4 2 7-11" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    cost:     `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#FF9500" stroke-width="1.8"/><path d="M11 7v1m0 6v1m-2-4.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2 .9-2 2 .9 2 2 2" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    twilight: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 3v2M4.2 4.2l1.4 1.4M3 11H1M4.2 17.8l1.4-1.4M11 19v-2M17.8 17.8l-1.4-1.4M21 11h-2M17.8 4.2l-1.4 1.4" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/><path d="M11 16a5 5 0 000-10c-.6 0-1.2.1-1.7.3A5 5 0 0016 11h-5z" stroke="#FF9500" stroke-width="1.8"/></svg>`,
    glow:     `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="4" y="5" width="14" height="12" rx="1" stroke="#FF9500" stroke-width="1.8"/><path d="M4 9h14M9 9v8" stroke="#FF9500" stroke-width="1.8"/><circle cx="15" cy="13" r="2" fill="#FF9500" fill-opacity=".3" stroke="#FF9500" stroke-width="1.4"/></svg>`,
    lawn:     `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M2 18s3-4 9-4 9 4 9 4" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/><path d="M11 14V8M8 11l3-3 3 3" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    paint:    `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M4 19h14M7 19V8l4-5 4 5v11" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    buyer:    `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="8" r="3" stroke="#FF9500" stroke-width="1.8"/><path d="M5 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  };

  function icon(name) {
    return ICONS[name] || ICONS.clock;
  }

  /* ──────────────────────────────────
     SHARED TEMPLATE BUILDERS
  ────────────────────────────────── */

  function baCard(before, after, blabel, alabel, heightPx) {
    blabel  = blabel  || 'Before';
    alabel  = alabel  || 'After';
    heightPx = heightPx || 280;
    return `
      <div class="ba-card rounded-2xl overflow-hidden" style="height:${heightPx}px">
        <img src="${before}" alt="${blabel}" class="absolute inset-0 w-full h-full object-cover select-none" draggable="false" />
        <div class="ba-after">
          <img src="${after}" alt="${alabel}" class="absolute inset-0 w-full h-full object-cover select-none" draggable="false" />
        </div>
        <div class="ba-line">
          <div class="ba-handle">
            <svg width="18" height="18" fill="none" stroke="#FF9500" stroke-width="2.2" stroke-linecap="round">
              <path d="M6 4l-4 5 4 5M12 4l4 5-4 5"/>
            </svg>
          </div>
        </div>
        <span class="ba-label ba-label-before">${blabel}</span>
        <span class="ba-label ba-label-after">${alabel}</span>
        <input type="range" min="0" max="100" value="50" class="ba-input" />
      </div>`;
  }

  function whyCard(item) {
    return `
      <div class="why-card border border-gray-100">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style="background:#FFF3E0">
          ${icon(item.icon)}
        </div>
        <h3 class="font-display font-bold text-gray-900 text-lg mb-2">${item.title}</h3>
        <p class="text-gray-500 text-sm leading-relaxed">${item.text}</p>
      </div>`;
  }

  function solutionItem(item, idx) {
    const baHtml = (item.before && item.after)
      ? `<div class="mt-5">${baCard(item.before, item.after, 'Before', 'After', 260)}</div>`
      : '';
    return `
      <div class="solution-item" id="sol-${idx}">
        <button class="solution-toggle" onclick="toggleSolution(${idx})">
          <span class="font-display font-semibold text-gray-900 text-[15px] text-left">${item.q}</span>
          <svg class="solution-chevron" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M5 8l7 7 7-7"/>
          </svg>
        </button>
        <div class="solution-body" id="sol-body-${idx}">
          <div class="solution-body-inner">
            <p class="text-gray-500 text-sm leading-relaxed">${item.text}</p>
            ${baHtml}
          </div>
        </div>
      </div>`;
  }

  const CHECKOUT_INITIAL = 9; // ~2-3 rows visible on first load

  function checkOutGrid(imgs) {
    const thumbs = imgs.map((src, i) => `
      <div class="checkout-thumb${i >= CHECKOUT_INITIAL ? ' co-hidden' : ''}">
        <img src="${src}" alt="Work sample" loading="lazy" />
      </div>`).join('');

    const remaining = imgs.length - CHECKOUT_INITIAL;
    const btn = remaining > 0 ? `
      <div class="co-more-wrap">
        <button class="co-load-more" onclick="loadMoreCheckout(this)">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M8 3v10M3 8l5 5 5-5"/></svg>
          Load More &nbsp;(${remaining} more photos)
        </button>
      </div>` : '';

    return `<div class="checkout-grid">${thumbs}</div>${btn}`;
  }

  function projectBAGrid(pairs) {
    return `
      <div class="grid sm:grid-cols-2 gap-4">
        ${pairs.map(p => baCard(p.before, p.after, 'Before', 'After', 260)).join('')}
      </div>`;
  }

  function popularCard(id) {
    const svc = SERVICES[id];
    if (!svc) return '';
    return `
      <a href="services.html#${id}" class="popular-card" onclick="switchService('${id}');return false;">
        <div class="popular-card-img">
          <img src="${svc.hero.after}" alt="${svc.name}" loading="lazy" />
        </div>
        <div class="px-4 py-3">
          <p class="font-display font-bold text-gray-900 text-sm">${svc.name}</p>
          <p class="text-xs text-gray-400 mt-0.5">${svc.subtitle}</p>
          <p class="text-xs font-semibold mt-2" style="color:var(--orange)">View Details →</p>
        </div>
      </a>`;
  }

  /* ──────────────────────────────────
     SECTION HEADER (reusable)
  ────────────────────────────────── */
  function sectionHeader(eyebrow, title) {
    return `
      <div class="flex items-center gap-2 mb-3">
        <span class="w-2 h-2 rounded-full shrink-0" style="background:var(--orange)"></span>
        <span class="text-xs font-bold text-gray-400 uppercase tracking-[0.18em]">${eyebrow}</span>
      </div>
      <h2 class="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-3">${title}</h2>`;
  }

  /* ──────────────────────────────────
     MAIN RENDER
  ────────────────────────────────── */
  function renderService(id) {
    const svc = SERVICES[id];
    if (!svc) return;

    const html = `
      <!-- ① Service hero + BA slider -->
      <div class="relative" style="height:460px">
        ${baCard(svc.hero.before, svc.hero.after, 'Before', 'After', 460)}
        <div class="service-hero-overlay"></div>
        <div class="service-hero-text">
          <div>
            <span class="inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-3" style="background:var(--orange);color:#fff">${svc.name}</span>
            <h1 class="font-display font-extrabold text-4xl md:text-5xl text-white mb-2 drop-shadow-lg">${svc.subtitle}</h1>
            <p class="text-white/80 text-base max-w-md drop-shadow">Drag the slider to compare before &amp; after.</p>
          </div>
        </div>
      </div>

      <!-- ② Why Choose Us -->
      <section class="py-20 px-6" style="background:#F5F5F5">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12 reveal">
            ${sectionHeader('Why Us', 'Why Choose Us?')}
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            ${svc.whyUs.map(w => `<div class="reveal">${whyCard(w)}</div>`).join('')}
          </div>
        </div>
      </section>

      <!-- ③ Get Right Solutions -->
      <section class="py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div class="mb-10 reveal">
                ${sectionHeader('Solutions', 'Get the Right Solution<br>for Your Business')}
                <p class="text-gray-500 max-w-md">Click any question below to see a detailed explanation with a live before &amp; after example.</p>
              </div>
              <div class="space-y-3">
                ${svc.solutions.map((s, i) => solutionItem(s, i)).join('')}
              </div>
            </div>
            <!-- default BA on desktop when no solution is open -->
            <div class="hidden lg:block sticky top-28 reveal" style="transition-delay:100ms">
              ${baCard(svc.solutions[0].before, svc.solutions[0].after, 'Before', 'After', 380)}
              <p class="text-xs text-center text-gray-400 mt-3">Expand a question to see the matching example</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ④ Check Out What We Do -->
      <section class="py-20 px-6" style="background:#F5F5F5">
        <div class="max-w-7xl mx-auto">
          <div class="mb-10 reveal">
            ${sectionHeader('Gallery', 'Check Out What We Do')}
          </div>
          ${checkOutGrid(svc.checkOut)}
        </div>
      </section>

      <!-- ⑤ Project Before & After -->
      <section class="py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="mb-10 reveal">
            ${sectionHeader('Projects', 'Project Before &amp; After')}
            <p class="text-gray-500">Drag the slider on each image to compare the original shot with the finished edit.</p>
          </div>
          ${projectBAGrid(svc.projects)}
        </div>
      </section>

      <!-- ⑥ CTA -->
      <section class="py-20 px-6" style="background:#1A1A1A">
        <div class="max-w-4xl mx-auto text-center">
          <div class="flex items-center justify-center gap-2 mb-4">
            <span class="w-2 h-2 rounded-full" style="background:var(--orange)"></span>
            <span class="text-xs font-bold text-gray-400 uppercase tracking-[0.18em]">Start Today</span>
            <span class="w-2 h-2 rounded-full" style="background:var(--orange)"></span>
          </div>
          <h2 class="font-display font-extrabold text-3xl md:text-4xl text-white mb-4 leading-tight">
            Order Your Projects &amp;<br>Receive Your Confirmation Immediately
          </h2>
          <p class="text-gray-400 text-lg mb-10 max-w-lg mx-auto">Upload your photos, choose your plan, and our editors start within the hour. Results in 24–48 hours.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="order.html" class="btn-primary font-semibold px-8 py-4 rounded-xl text-sm">Place an Order →</a>
            <a href="portfolio.html" class="border-2 border-gray-600 text-gray-300 font-semibold text-sm px-8 py-4 rounded-xl transition-colors hover:border-white hover:text-white">View Portfolio</a>
          </div>
        </div>
      </section>

      <!-- ⑦ Popular Services -->
      <section class="py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              ${sectionHeader('More Services', 'Popular Services')}
            </div>
            <a href="services.html" class="text-sm font-semibold transition-colors" style="color:var(--orange)">View All →</a>
          </div>
          <div class="popular-scroll">
            ${svc.popular.map(id => popularCard(id)).join('')}
          </div>
        </div>
      </section>
    `;

    const content = document.getElementById('service-content');
    content.innerHTML = html;

    // Re-initialise BA sliders and reveal animations
    window.initBASliders(content);
    window.initReveal(content);
    window.initSolutionToggles();

    // Update active tab
    document.querySelectorAll('.service-tab').forEach(t => {
      t.classList.toggle('active', t.dataset.svc === id);
    });

    // Update URL hash without scrolling
    history.replaceState(null, '', '#' + id);

    // Scroll to top of content
    content.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ──────────────────────────────────
     SOLUTION ACCORDION  (global fn)
  ────────────────────────────────── */
  window.initSolutionToggles = function () {
    // Open first solution by default
    const first = document.getElementById('sol-0');
    if (first) openSolution(0);
  };

  window.toggleSolution = function (idx) {
    const item = document.getElementById('sol-' + idx);
    if (!item) return;
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.solution-item').forEach(el => {
      el.classList.remove('open');
      const body = el.querySelector('.solution-body');
      if (body) body.classList.remove('open');
    });
    // Open clicked if it was closed
    if (!isOpen) {
      item.classList.add('open');
      const body = document.getElementById('sol-body-' + idx);
      if (body) {
        body.classList.add('open');
        window.initBASliders(body);
      }
    }
  };

  function openSolution(idx) {
    const item = document.getElementById('sol-' + idx);
    if (!item) return;
    item.classList.add('open');
    const body = document.getElementById('sol-body-' + idx);
    if (body) { body.classList.add('open'); window.initBASliders(body); }
  }

  /* ──────────────────────────────────
     PUBLIC API
  ────────────────────────────────── */
  window.switchService = function (id) {
    if (!SERVICES[id]) return;
    renderService(id);
  };

  window.loadMoreCheckout = function (btn) {
    const wrap   = btn.closest('.co-more-wrap');
    const grid   = wrap.previousElementSibling; // .checkout-grid
    const hidden = Array.from(grid.querySelectorAll('.co-hidden'));

    hidden.forEach((el, i) => {
      el.style.animationDelay = (i * 35) + 'ms';
      el.classList.remove('co-hidden');
      el.classList.add('co-reveal');
    });

    // Smooth scroll to first newly revealed image
    if (hidden[0]) {
      setTimeout(() => hidden[0].scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 60);
    }

    wrap.remove();
  };

  /* ──────────────────────────────────
     BOOTSTRAP
  ────────────────────────────────── */
  function init() {
    const hash = (location.hash || '').replace('#', '');
    renderService(SERVICES[hash] ? hash : 'hdr');
  }

  // Support browser back/forward and footer hash links on the same page
  window.addEventListener('hashchange', function () {
    const hash = location.hash.replace('#', '');
    if (SERVICES[hash]) renderService(hash);
  });

  // main.js loads first (defer, same order), so initBASliders is already defined
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
