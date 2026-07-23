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
  const CHECKOUT = 'images/CHECKOUTS/';
  const BAS = 'images/BAS/';
  const HERO = 'images/HERO/';

  // PHOTO EDITING
  const HR_PE = HERO + 'PE/';
  const CHECK_PE = CHECKOUT + 'PE/';
  const BA_PE = BAS + 'PE/';

  // ITEM REMOVAL
  const HR_IR = HERO + 'ITEM_REMOVAL/';
  const CHECK_IR = CHECKOUT + 'ITEM_REMOVAL/';
  const BA_IR = BAS + 'ITEM_REMOVAL/';

  // VIRTUAL STAGING
  const HR_VS = HERO + 'VIRTUAL_STAGING/';
  const CHECK_VS = CHECKOUT + 'VIRTUAL_STAGING/';
  const BA_VS = BAS + 'VIRTUAL_STAGING/';

  // DAY TO DUSK
  const HR_DTD = HERO + 'DTD/';
  const CHECK_DTD = CHECKOUT + 'DTD/';
  const BA_DTD = BAS + 'DTD/';

  // VIRTUAL RENOVATION
  const BA_RENO = BAS + 'RENOVATION/';

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
        before: HR_PE + '7X5A7819.jpg',
        after: HR_PE + '7X5A7819_1.jpg',
      },
      whyUs: [
        { icon: 'balance', title: 'Perfectly Balanced Exposure', text: 'HDR blending merges multiple exposures so windows, walls, and floors all look natural at once — no blown-out sky, no dark corners.' },
        { icon: 'sky', title: 'Blue Sky Guarantee', text: 'Every exterior receives a clean, vivid sky replacement regardless of what the weather was on shoot day.' },
        { icon: 'clock', title: '24h Turnaround', text: 'Standard orders are delivered the next business day. Rush 12-hour delivery is available on the Advanced plan.' },
        { icon: 'mls', title: 'MLS-Ready Output', text: 'High-resolution JPEGs sized and colour-profiled for MLS, Zillow, Realtor.com, and print marketing.' },
      ],
      solutions: [
        {
          q: 'What exactly is HDR blending and why does my listing need it?',
          text: 'HDR (High Dynamic Range) blending combines a bright exposure for the interior with a dark exposure for the windows into one perfectly balanced image. Without it, you either get a washed-out window or a dark room — never both looking great at once. Every professional listing today uses it.',
          before: BA_PE + 'DSC02007.jpg',
          after: BA_PE + 'DSC02007_1.jpg',
        },
        {
          q: 'Can you replace a cloudy or overcast sky?',
          text: 'Yes. Sky replacement is included in Standard and Advanced plans. We select from a curated library of realistic skies matched to the time of day and geography of your listing so it looks completely authentic.',
          before: BA_PE + 'SKY-A.jpg',
          after: BA_PE + 'SKY-B.jpg',
        },
        {
          q: 'How do you handle window views and photographer reflections?',
          text: 'Window pull is the most technically demanding part of real estate editing. We separately process the window zone and composite a natural outdoor view. Photographer reflections in windows and mirrors are also removed as part of the standard workflow.',
          before: BA_PE + 'IMG_7775.jpg',
          after: BA_PE + 'IMG_7775_1.jpg',
        },
      ],
      checkOut: [
        CHECK_PE + 'DSC06067.jpg',
        CHECK_PE + 'DSC06070.jpg',
        CHECK_PE + 'DSC06073.jpg',
        CHECK_PE + 'ET6A5306.jpg',
        CHECK_PE + 'ET6A5346.jpg',
        CHECK_PE + 'ET6A5352.jpg',
        CHECK_PE + 'ET6A5356.jpg',
        CHECK_PE + 'ET6A5362.jpg',

      ],
      // "View More" on Check Out What We Do — put the full gallery/portfolio
      // link for this service here.
      checkOutMoreLink: 'https://drive.google.com/drive/folders/1-_rnCbR4F_R-iAC1A4VOVW2uXpkqj_mD?usp=drive_link',
      projects: [
        { before: BA_PE + 'DSC_0602_1.jpg', after: BA_PE + 'DSC_0602.jpg' },
        { before: BA_PE + 'DSC_0607_1.jpg', after: BA_PE + 'DSC_0607.jpg' },
        { before: BA_PE + 'DSC_0612_1.jpg', after: BA_PE + 'DSC_0612.jpg' },
        { before: BA_PE + 'DSC_0618_1.jpg', after: BA_PE + 'DSC_0618.jpg' },
        { before: BA_PE + 'DSC_0622_1.jpg', after: BA_PE + 'DSC_0622.jpg' },
        { before: BA_PE + 'DSC02007.jpg', after: BA_PE + 'DSC02007_1.jpg' },
      ],
      tierProjects: [
        {
          level: 'Basic',
          price: '$0.60',
          title: 'Basic Exposure & Color Correction',
          desc: 'Single exposure balancing, white balance tuning, brightness & contrast adjustment, perspective straightening, and basic lens fix.',
          before: BA_PE + 'DSC_0602_1.jpg',
          after: BA_PE + 'DSC_0602.jpg',
          features: ['Single Exposure Editing', 'Color & White Balance Tune', 'Straightening & Lens Fix']
        },
        {
          level: 'Standard',
          price: '$0.80',
          badge: 'Most Popular',
          title: 'Standard HDR & Sky Replacement',
          desc: 'Multi-exposure HDR blending (2-3 bracketed shots), vivid exterior sky replacement, window pull composite, and glare reduction.',
          before: BA_PE + 'DSC02007.jpg',
          after: BA_PE + 'DSC02007_1.jpg',
          features: ['2-3 Bracketed HDR Merge', 'Exterior Blue Sky Swap', 'Window View Pull Composite', 'Photographer Reflection Removal']
        },
        {
          level: 'Advanced',
          price: '$0.90',
          title: 'Advanced Flash & Ambient Retouch',
          desc: 'Complex multi-bracket flash & ambient merge (4+ exposures), custom sky gradient, TV & fireplace replacement, lawn enhancement.',
          before: BA_PE + 'IMG_7775.jpg',
          after: BA_PE + 'IMG_7775_1.jpg',
          features: ['4+ Exposures Ambient Merge', 'TV Screen & Fireplace Insertion', 'Lawn Greening & Detail Polish', 'Rush 12h Turnaround Option']
        }
      ],
      popular: ['removal', 'staging', 'dusk', 'renovation'],
      // "Compare by Plan" step checklist — what THIS service includes at
      // each plan level. Kept consistent with the Basic/Standard/Advanced
      // feature gates on order.html: Basic = corrections only; Standard
      // adds HDR blending/sky/object removal; Advanced adds staging & dusk.
      planWord: 'Editing',
      // EXAMPLE pricing — replace with real per-service rates. Card count
      // can vary too: this service has 3 plans, others can have more/fewer.
      plans: [
        { key: 'basic', label: 'Basic', price: '$0.6/photo' },
        { key: 'standard', label: 'Standard', price: '$0.8/photo', popular: true },
        { key: 'advanced', label: 'Advanced', price: '$0.9/photo' },
      ],
      planSteps: [
        {
          label: 'Exposure Blending', basic: true, standard: true, advanced: true,
          basicNote: '01 exposure editing', standardNote: '02 - 03 exposures editing', advancedNote: '04+ exposures editing'
        },
        {
          label: 'Exposure Blending', basic: false, standard: true, advanced: true,
          basicNote: 'Single exposure only', standardNote: 'HDR blend — day & twilight', advancedNote: 'HDR blend — day & twilight'
        },
        { label: 'Brightness & Contrast Adjustment', basic: true, standard: true, advanced: true },
        { label: 'Color Correction', basic: true, standard: true, advanced: true },
        { label: 'Lens Distortion Correction', basic: true, standard: true, advanced: true },
        { label: 'Straightening', basic: true, standard: true, advanced: true },
        { label: 'Exterior Sky Replacement', basic: false, standard: true, advanced: true },
        { label: 'Photographer & Reflection Removal', basic: false, standard: true, advanced: true },
        { label: 'TV & Fireplace Screen Replacement', basic: false, standard: true, advanced: true },
        { label: 'Interior Window Pull / Replacement', basic: false, standard: true, advanced: true },
        { label: 'Virtual Staging Add-on', basic: false, standard: false, advanced: true },
        { label: 'Day-to-Dusk Twilight Conversion', basic: false, standard: false, advanced: true },
      ],
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
        before: HR_IR + '1.jpg',
        after: HR_IR + '2.jpg',
      },
      whyUs: [
        { icon: 'clean', title: 'Seamless Results', text: 'Objects disappear without a trace — no smearing, no cloning artefacts, no repeating patterns.' },
        { icon: 'large', title: 'Any Size Object', text: 'From a power cord to an entire sofa set — we rebuild the floor, wall, or ceiling behind every removed item.' },
        { icon: 'reflect', title: 'Reflection Removal', text: 'Photographer reflections in windows, mirrors, and appliances are erased and replaced with a natural view.' },
        { icon: 'clock', title: 'Rush 12h Available', text: 'Simple single-object removals can be turned around in just 12 hours on the Advanced plan.' },
      ],
      solutions: [
        {
          q: 'Can you remove large furniture or appliances?',
          text: 'Yes. We remove sofas, dining sets, refrigerators, washing machines, and any other large items. The floor, wall, and ceiling behind each removed object are rebuilt from scratch to look completely authentic.',
          before: BA_IR + 'ITEM0007.jpg',
          after: BA_IR + 'ITEM0007_1.jpg',
        },
        {
          q: 'What about power lines, wires, and cables?',
          text: 'Power lines crossing an exterior sky are one of the most common issues in real estate photography. We remove them cleanly and rebuild the sky and roofline behind them — no visible seams.',
          before: BA_IR + '0O2A8093_1.jpg',
          after: BA_IR + '0O2A8093.jpg',
        },
        {
          q: 'Can you remove cars from driveways or street?',
          text: 'Absolutely. Vehicles in front of the property are removed and replaced with a matching driveway or street surface. We also handle bins, garden equipment, and construction materials.',
          before: BA_IR + 'ITEM0006.jpg',
          after: BA_IR + 'ITEM0006_1.jpg',
        },
      ],
      checkOut: [
        CHECK_IR + '0O2A8680_final.jpg',
        CHECK_IR + '0O2A8685_done.jpg',
        CHECK_IR + '0O2A8690_done.jpg',
        CHECK_IR + '0O2A8695_done.jpg',
        CHECK_IR + '0O2A8700_final.jpg',
        CHECK_IR + '0O2A8705_final.jpg',
        CHECK_IR + '0O2A8710_final.jpg',
        CHECK_IR + '0O2A8715_final.jpg',
      ],
      checkOutMoreLink: 'https://drive.google.com/drive/folders/1z_9XjvwTp7mOeNUg3vdz7SaqFFG6Hhor?usp=sharing',
      projects: [
        // { before: BA_IR + '0O2A8093_1.jpg', after: BA_IR + '0O2A8093.jpg' },
        { before: BA_IR + '0O2A8133_1.jpg', after: BA_IR + '0O2A8133.jpg' },
        { before: BA_IR + '0O2A8763_1.jpg', after: BA_IR + '0O2A8763.jpg' },
        { before: BA_IR + 'ITEM0004.jpg', after: BA_IR + 'ITEM0004_1.jpg' },
        { before: BA_IR + 'ITEM0005.jpg', after: BA_IR + 'ITEM0005_1.jpg' },
        { before: BA_IR + 'ITEM0006.jpg', after: BA_IR + 'ITEM0006_1.jpg' },
        { before: BA_IR + 'ITEM0007.jpg', after: BA_IR + 'ITEM0007_1.jpg' },
      ],
      tierProjects: [
        {
          level: 'Basic',
          price: '$1.30',
          title: 'Basic Clutter & Cord Removal',
          desc: 'Removal of minor power cords, small trash cans, wall outlets, and minor surface distractions.',
          before: BA_IR + 'ITEM0004.jpg',
          after: BA_IR + 'ITEM0004_1.jpg',
          features: ['Power Cords & Outlets', 'Small Trash & Distractions', 'Basic Surface Touch-up']
        },
        {
          level: 'Standard',
          price: '$5.00',
          badge: 'Most Popular',
          title: 'Standard Vehicle & Object Removal',
          desc: 'Removal of cars from driveways or streets, power lines, garden hoses, and up to 10 medium items.',
          before: BA_IR + 'ITEM0006.jpg',
          after: BA_IR + 'ITEM0006_1.jpg',
          features: ['Vehicle & Driveway Clean', 'Power Lines & Sky Obstructions', 'Up to 10 Items Removed']
        },
        {
          level: 'Advanced',
          price: '$12.00',
          title: 'Advanced Room Rebuilding',
          desc: 'Total removal of full furniture sets, complete floor, wall, and ceiling texture reconstruction from scratch.',
          before: BA_IR + 'ITEM0007.jpg',
          after: BA_IR + 'ITEM0007_1.jpg',
          features: ['Unlimited Furniture Removal', 'Full Surface Reconstruction', 'Reflection & Shadow Clean', 'Rush 12h Turnaround Option']
        }
      ],
      popular: ['hdr', 'staging', 'dusk', 'renovation'],
      // "Compare by Plan" step checklist — see note in the hdr service above.
      planWord: 'Removal',
      // EXAMPLE pricing — replace with real per-service rates.
      plans: [
        { key: 'basic', label: 'Basic', price: '$1.30/img' },
        { key: 'standard', label: 'Standard', price: '$5.00/img', popular: true },
        { key: 'advanced', label: 'Advanced', price: '$12.00/img' },
      ],
      planSteps: [
        { label: 'Color & Brightness Correction', basic: true, standard: true, advanced: true },
        { label: 'Lens Distortion Correction', basic: true, standard: true, advanced: true },
        { label: 'Straightening', basic: true, standard: true, advanced: true },
        {
          label: 'Object Removal Scope', basic: false, standard: true, advanced: true,
          basicNote: 'Not included at this plan', standardNote: 'Up to 10 items removed', advancedNote: 'Unlimited items removed'
        },
        { label: 'Small Clutter & Cord Removal', basic: false, standard: true, advanced: true },
        { label: 'Large Furniture & Appliance Removal', basic: false, standard: true, advanced: true },
        { label: 'Vehicle Removal (Driveway / Street)', basic: false, standard: true, advanced: true },
        { label: 'Power Line & Sky Obstruction Removal', basic: false, standard: true, advanced: true },
        { label: 'Photographer & Mirror Reflection Removal', basic: false, standard: true, advanced: true },
        { label: 'Floor / Wall / Ceiling Reconstruction', basic: false, standard: true, advanced: true },
        { label: 'Rush 12h Turnaround', basic: false, standard: false, advanced: true },
      ],
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
        before: HR_VS + '_DSC4391_final.jpg',
        after: HR_VS + '_DSC4391.jpg',
      },
      whyUs: [
        { icon: 'sofa', title: 'Photorealistic Furniture', text: 'Our 3D library contains thousands of pieces spanning every style — buyers cannot tell it from physical staging.' },
        { icon: 'style', title: 'Multiple Design Styles', text: 'Modern, Scandinavian, coastal, classic, or industrial. You choose the aesthetic; we deliver it.' },
        { icon: 'cost', title: '97% Less than Physical', text: 'Skip the truck, the movers, and the monthly rental fee. Virtual staging delivers the same impact at a fraction of the cost.' },
        { icon: 'clock', title: '48h Delivery', text: 'Staged images back before your next open house or listing launch.' },
      ],
      solutions: [
        {
          q: 'Which rooms can be virtually staged?',
          text: 'We stage living rooms, dining rooms, bedrooms, home offices, kitchens, bathrooms, and outdoor spaces. Any room that benefits from a furnished context can be staged. We can also stage individual corners or vignettes.',
          before: BA_VS + '0O2A5572_final.jpg',
          after: BA_VS + '0O2A5572.jpg',
        },
        {
          q: 'Can you de-stage a room and re-stage with different furniture?',
          text: "Yes — we first remove all existing furniture (de-staging) and then place our virtual furniture. This is especially useful when physical staging doesn't match the target buyer profile, or when you'd like to show multiple style options.",
          before: BA_VS + '0O2A5557_final.jpg',
          after: BA_VS + '0O2A5557.jpg',
        },
        {
          q: 'How realistic will the result look in online listings?',
          text: 'Our virtual staging is photorealistic — lighting, shadows, perspective, and material textures are all matched to the original photo. Buyers regularly cannot distinguish our virtual staging from physical staging in MLS photos.',
          before: BA_VS + '0O2A5582_final.jpg',
          after: BA_VS + '0O2A5582.jpg',
        },
      ],
      checkOut: [
        BA_VS + '0O2A9176_final.jpg',
        BA_VS + '0O2A9182_final.jpg',
        BA_VS + '1126BobbieLane-31_final.jpg',
        BA_VS + '0O2A9543_final.jpg',
        BA_VS + 'DSC01861_final.jpg',
        BA_VS + 'DSC01870_final.jpg',
        BA_VS + 'DSC01888_final.jpg',
        BA_VS + 'DSC01889_final.jpg',
        BA_VS + 'DSC02122_final.jpg',
      ],
      checkOutMoreLink: 'https://drive.google.com/drive/folders/1mptk2ZrTFAWgMcUZhYgqZWVc_N9p7z72?usp=drive_link',
      projects: [
        { before: BA_VS + 'DSC02366_final.jpg', after: BA_VS + 'DSC02366.jpg' },
        { before: BA_VS + 'DSC02360_finall.jpg', after: BA_VS + 'DSC02360.jpg' },
        { before: BA_VS + 'DSC02122_final.jpg', after: BA_VS + 'DSC02122.jpg' },
        { before: BA_VS + 'DSC01889_final.jpg', after: BA_VS + 'DSC01889.jpg' },
        { before: BA_VS + 'DSC01888_final.jpg', after: BA_VS + 'DSC01888.jpg' },
        { before: BA_VS + 'DSC01870_final.jpg', after: BA_VS + 'DSC01870.jpg' },
      ],
      tierProjects: [
        {
          level: 'Basic',
          price: '$15.00',
          title: 'Essential Single Room Staging',
          desc: 'High-quality 3D virtual furniture placement from standard catalog matched to room dimensions.',
          before: BA_VS + '0O2A5572_final.jpg',
          after: BA_VS + '0O2A5572.jpg',
          features: ['3D Furniture Catalog', 'Perspective & Scale Alignment', 'Basic Room Staging']
        },
        {
          level: 'Standard',
          price: '$17.00',
          badge: 'Most Popular',
          title: 'Standard Multi-Zone Staging',
          desc: 'Living & dining area staging with realistic lighting, shadows, color palette match, and floor rug integration.',
          before: BA_VS + '0O2A5557_final.jpg',
          after: BA_VS + '0O2A5557.jpg',
          features: ['Multi-Zone Furniture Layout', 'Lighting & Shadow Integration', 'Custom Color Palette Match', 'Rugs, Artwork & Decor']
        },
        {
          level: 'Advanced',
          price: '$24.00',
          title: 'Advanced De-Staging & Restaging',
          desc: 'Removal of existing old physical furniture followed by luxury custom-styled 3D virtual staging.',
          before: BA_VS + '0O2A5582_final.jpg',
          after: BA_VS + '0O2A5582.jpg',
          features: ['Full Furniture Removal First', 'Bespoke Architectural Styles', 'Commercial & Luxury Decor', 'Unlimited Revisions']
        }
      ],
      popular: ['hdr', 'removal', 'dusk', 'renovation'],
      // "Compare by Plan" step checklist — see note in the hdr service above.
      // Virtual staging is an Advanced-only feature per order.html, so the
      // core service itself only lights up on the Advanced column.
      planWord: 'Staging',
      // EXAMPLE pricing — replace with real per-service rates. This service
      // demonstrates a 4-plan lineup (adds a Premium tier) instead of 3.
      plans: [
        { key: 'virtual', label: 'Virtual Staging', price: '$17/photo', popular: true },
        { key: 'additional', label: 'Additional Services', price: '$US per photo' },
      ],
      planSteps: [
        {
          label: 'Exposure Blending', virtual: true, additional: true,
          virtualNote: 'Choose Templated from our Catalog or you provide us', additionalNote: 'Item Removal (Basic Retouching, Standard Retouching, Advanced Retouching, Extreme Retouching) + $1.30~$12.00'
        },
        {
          label: 'Virtual Staging for Any Room Type', virtual: true, additional: true,
          virtualNote: 'Virtual Staging for Any Room Type', additionalNote: 'Image Enhancement (Basic Editing, Standard Editing, Advanced Editing) + $0.60~$0.90'
        },
        {
          label: 'Following ', virtual: true, additional: false,
          virtualNote: "Following Object's Overall Color Palette", additionalNote: '|'
        },
        {
          label: 'Following ', virtual: true, additional: false,
          virtualNote: "Following Client's Style", additionalNote: '|'
        },
        {
          label: 'Virtual ', virtual: true, additional: false,
          virtualNote: "Virtual Staging According to the Sketch", additionalNote: '|'
        },
        {
          label: 'Adding ', virtual: true, additional: false,
          virtualNote: "Adding Certain Furniture and Accessories Upon Request", additionalNote: '|'
        },
      ],
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
        before: HR_DTD + 'sau.jpg',
        after: HR_DTD + 'truoc.jpg',
      },
      whyUs: [
        { icon: 'twilight', title: 'Dramatic Twilight Sky', text: 'Rich sunset gradients give your listing a cinematic feel that stands out in search results and on social media.' },
        { icon: 'glow', title: 'Window Glow Simulation', text: 'Warm interior light is added to every window — the welcoming "someone is home" effect that attracts buyers.' },
        { icon: 'lawn', title: 'Landscape Enhancement', text: 'Lawn greened and brightened, pathways softly lit, and pool water shimmering with added reflections.' },
        { icon: 'clock', title: '24h Delivery', text: 'Every day-to-dusk conversion is delivered by the next business day.' },
      ],
      solutions: [
        {
          q: 'Which exterior shots work best for day-to-dusk conversion?',
          text: 'Photos taken in flat overcast daylight or during the golden hour convert best. We need a clear, unobstructed sky zone and visible windows. Tinted or reflective glass works fine — we handle the glow simulation separately.',
          before: BA_DTD + 'DJI_20260512092645_0002_D_1.jpg',
          after: BA_DTD + 'DJI_20260512092645_0002_D.jpg',
        },
        {
          q: 'Can you add pool, pathway, and garden lighting?',
          text: 'Yes. We add glowing pool water, softly lit pathways, driveway lanterns, and porch light halos. These atmospheric details elevate the result from a simple sky swap to a fully immersive twilight scene.',
          before: BA_DTD + '0O2A3565.DTE_1.jpg',
          after: BA_DTD + '0O2A3565.jpg',
        },
        {
          q: 'Can I request a specific sky colour or mood?',
          text: 'Absolutely. Our sky library ranges from deep purple-blue twilight to warm golden-orange sunset. Describe your preference in the order notes — or send a reference image — and we will match the mood precisely.',
          before: BA_DTD + 'IMG_1134.DTE.JPG',
          after: BA_DTD + 'IMG_1134.jpg',
        },
      ],
      checkOut: [
        CHECK_DTD + '11.jpg',
        CHECK_DTD + '22.jpg',
        CHECK_DTD + '33.jpg',
        CHECK_DTD + '4.jpg',
        CHECK_DTD + '5.jpg',
        CHECK_DTD + '6.jpg',
        CHECK_DTD + '0O2A3565.DTE_1.jpg',
        CHECK_DTD + '0O2A3573.DTE.jpg',
      ],
      checkOutMoreLink: 'https://drive.google.com/drive/folders/1xYok2PwS_JoVxdY6AQBTCHr7s3Jr5hxx?usp=sharing',
      projects: [
        { before: BA_DTD + 'sau lam.jpg', after: BA_DTD + 'truoc.jpg' },
        { before: BA_DTD + 'IMG_1134.DTE.jpg', after: BA_DTD + 'IMG_1134.jpg' },
        { before: BA_DTD + '0O2A3560.DTE.1.jpg', after: BA_DTD + '0O2A3560.jpg' },
        { before: BA_DTD + '0O2A3565.DTE_1.jpg', after: BA_DTD + '0O2A3565.jpg' },
        { before: BA_DTD + '0O2A3573.DTE.jpg', after: BA_DTD + '0O2A3573.jpg' },
        { before: BA_DTD + '0O2A9054dte.jpg', after: BA_DTD + '0O2A9054.jpg' },
      ],
      tierProjects: [
        {
          level: 'Basic',
          price: '$3.50',
          title: 'Basic Dusk Sky Conversion',
          desc: 'Conversion of daytime exterior sky to evening dusk gradient with global twilight tone adjustment.',
          before: BA_DTD + 'DJI_20260512092645_0002_D_1.jpg',
          after: BA_DTD + 'DJI_20260512092645_0002_D.jpg',
          features: ['Twilight Sky Swap', 'Global Dusk Color Tone', 'Exterior Exposure Tuning']
        },
        {
          level: 'Standard',
          price: '$5.00',
          badge: 'Most Popular',
          title: 'Standard Window Glow & Lawn',
          desc: 'Realistic warm interior window lighting simulation, porch lamp halos, and lawn color enrichment.',
          before: BA_DTD + '0O2A3565.DTE_1.jpg',
          after: BA_DTD + '0O2A3565.jpg',
          features: ['Window Glow Simulation', 'Porch Light & Lantern Halos', 'Lawn & Landscape Polish', 'High-Res MLS Output']
        },
        {
          level: 'Advanced',
          price: '$8.00',
          title: 'Advanced Architectural Twilight',
          desc: 'Shimmering pool water lighting, illuminated pathway lanterns, driveway halos, and custom sky gradient mood.',
          before: BA_DTD + 'IMG_1134.DTE.JPG',
          after: BA_DTD + 'IMG_1134.jpg',
          features: ['Pool Water & Pathway Glow', 'Custom Sky Gradient Mood', 'Complex Architectural Glass', '12h Rush Delivery Option']
        }
      ],
      popular: ['hdr', 'removal', 'staging', 'renovation'],
      planWord: 'Conversion',
      plans: [
        { key: 'dtd', label: 'Day To Dusk', price: '$5.00 per photo' },
      ],
      planSteps: [],
    },

    /* ── 5. VIRTUAL RENOVATION ────────────────────────────────────── */
    renovation: {
      id: 'renovation',
      name: 'Virtual Renovation',
      subtitle: "Show the Property's Full Potential",
      hero: {
        before: BA_RENO + '01122303.jpg',
        after: BA_RENO + '01122303_.jpg',
      },
      whyUs: [
        { icon: 'paint', title: 'Walls & Floors Updated', text: 'New paint colours, wallpaper, hardwood, tile, or luxury vinyl — applied photorealistically with correct lighting and shadow.' },
        { icon: 'cost', title: 'No Contractor Needed', text: 'Show renovation potential without spending a single dollar on materials, labour, or staging.' },
        { icon: 'buyer', title: 'Attract More Buyers', text: 'Help buyers see past dated finishes and envision the updated home — leading to faster, higher offers.' },
        { icon: 'clock', title: '48–72h Turnaround', text: 'Complex renovation renders completed within 48–72 hours depending on scope.' },
      ],
      solutions: [
        {
          q: 'Can you change wall colours, remove wallpaper, or add texture?',
          text: 'Yes — walls can be repainted to any colour, dated wallpaper removed, and textured finishes (wood panelling, Venetian plaster, brick) applied. We match the ambient light and shadow of the original photo for a completely authentic result.',
          before: BA_RENO + '01122310.jpg',
          after: BA_RENO + '01122310_.jpg',
        },
        {
          q: 'Can you swap the flooring material?',
          text: 'Absolutely. We replace carpet with hardwood, old tile with polished concrete, or linoleum with luxury vinyl plank. Perspective, grout lines, skirting boards, and surface reflections are all matched accurately for each room.',
          before: BA_RENO + '01122323_Room2.jpg',
          after: BA_RENO + '01122323_Room2_.jpg',
        },
        {
          q: 'What about kitchen cabinets, countertops, and bathroom tiles?',
          text: 'High-impact surface updates — cabinet repainting, stone countertop swaps, tile backsplash replacements, and bathroom vanity updates — are among our most requested renovation edits. These changes significantly increase perceived value per MLS dollar.',
          before: BA_RENO + 'DSC09914.jpg',
          after: BA_RENO + 'DSC09914_1.jpg',
        },
      ],
      checkOut: [
        BA_RENO + '01122303_.jpg',
        BA_RENO + '01122310_.jpg',
        BA_RENO + '01122323_Room2_.jpg',
        BA_RENO + 'DSC09914_1.jpg',
        BA_RENO + 'DSC09920_1.jpg',
        BA_RENO + 'DSC09921_1.jpg',
      ],
      checkOutMoreLink: 'https://drive.google.com/drive/folders/1mnWXqZGylPYr9lxCDZTONqgnSrpsJMgh?usp=sharing',
      projects: [
        { before: BA_RENO + '01122303.jpg', after: BA_RENO + '01122303_.jpg' },
        { before: BA_RENO + '01122310.jpg', after: BA_RENO + '01122310_.jpg' },
        { before: BA_RENO + '01122323_Room2.jpg', after: BA_RENO + '01122323_Room2_.jpg' },
        { before: BA_RENO + 'DSC09914.jpg', after: BA_RENO + 'DSC09914_1.jpg' },
        { before: BA_RENO + 'DSC09920.jpg', after: BA_RENO + 'DSC09920_1.jpg' },
        { before: BA_RENO + 'DSC09921.jpg', after: BA_RENO + 'DSC09921_1.jpg' },
      ],
      tierProjects: [
        {
          level: 'Basic',
          price: '$10.00',
          title: 'Basic Wall & Color Refresh',
          desc: 'Repainting interior/exterior walls, wallpaper removal, and color updating with realistic lighting.',
          before: BA_RENO + '01122310.jpg',
          after: BA_RENO + '01122310_.jpg',
          features: ['Wall Repainting & Color Swap', 'Wallpaper Removal', 'Shadow & Ambient Light Match']
        },
        {
          level: 'Standard',
          price: '$18.00',
          badge: 'Most Popular',
          title: 'Standard Flooring & Surface Swap',
          desc: 'Replacing carpets or old tiles with hardwood/luxury vinyl plank flooring with accurate reflections.',
          before: BA_RENO + '01122323_Room2.jpg',
          after: BA_RENO + '01122323_Room2_.jpg',
          features: ['Hardwood / Vinyl Flooring Swap', 'Skirting Board Replacement', 'Perspective & Reflection Match', 'Multiple Style Options']
        },
        {
          level: 'Advanced',
          price: '$28.00',
          title: 'Full Kitchen & Space Transformation',
          desc: 'Complete cabinet repainting, stone countertop replacement, tile backsplash, and full room overhaul.',
          before: BA_RENO + '01122303.jpg',
          after: BA_RENO + '01122303_.jpg',
          features: ['Kitchen Cabinet & Counter Swap', 'Bathroom Tile & Vanity Update', '3D Architectural Rendering', 'Unlimited Revisions']
        }
      ],
      popular: ['hdr', 'removal', 'staging', 'dusk'],
      // "Compare by Plan" step checklist — see note in the hdr service above.
      // Not explicitly listed on order.html's plan bullets, so it's grouped
      // with the other Advanced-tier specialty transformations.
      planWord: 'Renovation',
      // EXAMPLE pricing — replace with real per-service rates.
      plans: [
        { key: 'basic', label: 'Basic', price: '$10/img' },
        { key: 'standard', label: 'Standard', price: '$18/img', popular: true },
        { key: 'advanced', label: 'Advanced', price: '$28/img' },
      ],
      planSteps: [
        { label: 'Color & Brightness Correction', basic: true, standard: true, advanced: true },
        { label: 'Lens Distortion Correction', basic: true, standard: true, advanced: true },
        { label: 'Straightening', basic: true, standard: true, advanced: true },
        { label: 'HDR Blending & Exposure Merge', basic: false, standard: true, advanced: true },
        { label: 'Sky Replacement', basic: false, standard: true, advanced: true },
        { label: 'Wall Colour / Wallpaper Replacement', basic: false, standard: false, advanced: true },
        { label: 'Flooring Material Swap', basic: false, standard: false, advanced: true },
        { label: 'Kitchen Cabinet & Countertop Update', basic: false, standard: false, advanced: true },
        { label: 'Bathroom Tile & Vanity Update', basic: false, standard: false, advanced: true },
        { label: 'Lighting & Shadow Match for New Finishes', basic: false, standard: false, advanced: true },
        {
          label: 'Revisions Included', basic: true, standard: true, advanced: true,
          basicNote: '1 revision', standardNote: '2 revisions', advancedNote: 'Unlimited revisions'
        },
      ],
    },

  };

  /* ──────────────────────────────────
     ICON MAP  (SVG strings)
  ────────────────────────────────── */
  const ICONS = {
    balance: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 3v16M4 11l7-7 7 7" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    sky: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M3 16c0-3.3 2.7-6 6-6 .4 0 .8 0 1.1.1C11.1 8 13.3 6 16 6c2.8 0 5 2.2 5 5 0 2.8-2.2 5-5 5H4.5C3.7 16 3 15.3 3 14.5V16z" stroke="#FF9500" stroke-width="1.8"/></svg>`,
    clock: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#FF9500" stroke-width="1.8"/><path d="M11 6v5l3 3" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    mls: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="3" y="4" width="16" height="14" rx="2" stroke="#FF9500" stroke-width="1.8"/><path d="M7 9h8M7 13h5" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    clean: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M6 17l10-10M8 6l8 8" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/><circle cx="16" cy="6" r="2" fill="#FF9500" fill-opacity=".25" stroke="#FF9500" stroke-width="1.4"/></svg>`,
    large: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="2" y="8" width="18" height="12" rx="2" stroke="#FF9500" stroke-width="1.8"/><path d="M6 8V5M11 8V4M16 8V5" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    reflect: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 3v16M3 11h16" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2 2"/><circle cx="11" cy="11" r="3" stroke="#FF9500" stroke-width="1.8"/></svg>`,
    sofa: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="2" y="10" width="18" height="8" rx="2" stroke="#FF9500" stroke-width="1.8"/><path d="M5 10V7a1 1 0 011-1h10a1 1 0 011 1v3" stroke="#FF9500" stroke-width="1.8"/><path d="M5 18v2M17 18v2" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    style: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M3 19l5-5 4 2 7-11" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    cost: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="#FF9500" stroke-width="1.8"/><path d="M11 7v1m0 6v1m-2-4.5c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2 .9-2 2 .9 2 2 2" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    twilight: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M11 3v2M4.2 4.2l1.4 1.4M3 11H1M4.2 17.8l1.4-1.4M11 19v-2M17.8 17.8l-1.4-1.4M21 11h-2M17.8 4.2l-1.4 1.4" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/><path d="M11 16a5 5 0 000-10c-.6 0-1.2.1-1.7.3A5 5 0 0016 11h-5z" stroke="#FF9500" stroke-width="1.8"/></svg>`,
    glow: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="4" y="5" width="14" height="12" rx="1" stroke="#FF9500" stroke-width="1.8"/><path d="M4 9h14M9 9v8" stroke="#FF9500" stroke-width="1.8"/><circle cx="15" cy="13" r="2" fill="#FF9500" fill-opacity=".3" stroke="#FF9500" stroke-width="1.4"/></svg>`,
    lawn: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M2 18s3-4 9-4 9 4 9 4" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/><path d="M11 14V8M8 11l3-3 3 3" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    paint: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M4 19h14M7 19V8l4-5 4 5v11" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    buyer: `<svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="8" r="3" stroke="#FF9500" stroke-width="1.8"/><path d="M5 19c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF9500" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  };

  function icon(name) {
    return ICONS[name] || ICONS.clock;
  }

  /* ──────────────────────────────────
     SHARED TEMPLATE BUILDERS
  ────────────────────────────────── */

  function baCard(before, after, blabel, alabel, heightPx) {
    blabel = blabel || 'Before';
    alabel = alabel || 'After';
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
      ? `<div class="mt-5">${baCard(item.before, item.after, 'Before', 'After', 380)}</div>`
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
            <p class="text-gray-500 text-sm leading-relaxed mb-3">${item.text}</p>
            ${baHtml}
          </div>
        </div>
      </div>`;
  }

  // "Compare by Plan" — a per-service step checklist. Both the plan list
  // (svc.plans — key/label/price, 3 or 4 of them, any price) and the
  // checklist rows (svc.planSteps, checked per plan.key) are fully
  // per-service, so price and card count can differ service to service.
  function planStepRow(step, planKey) {
    const ok = !!step[planKey];
    const text = step[planKey + 'Note'] || step.label;
    const stepIcon = ok
      ? `<svg width="16" height="16" fill="none" viewBox="0 0 16 16" class="plan-step-icon"><path d="M3 8.5l3 3 7-7" stroke="var(--orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
      : `<svg width="16" height="16" fill="none" viewBox="0 0 16 16" class="plan-step-icon"><path d="M4 4l8 8M12 4l-8 8" stroke="#C9C9C9" stroke-width="2" stroke-linecap="round"/></svg>`;
    return `<li class="plan-step${ok ? '' : ' plan-step-off'}">${stepIcon}<span>${text}</span></li>`;
  }

  function planStepsCard(svc, plan) {
    const featured = !!plan.popular;
    return `
      <div class="plan-steps-card${featured ? ' plan-steps-featured' : ''}">
        ${featured ? `<span class="plan-steps-badge">Most Popular</span>` : ''}
        <p class="plan-steps-eyebrow">${svc.name}</p>
        <h3 class="plan-steps-title">${plan.label} ${svc.planWord}</h3>
        <div class="plan-steps-price">${plan.price}</div>
        <ul class="plan-steps-list">
          ${svc.planSteps.map(s => planStepRow(s, plan.key)).join('')}
        </ul>
        <a href="order.html" class="plan-steps-cta">Order This Plan</a>
      </div>`;
  }

  const CHECKOUT_INITIAL = 8; // shown on the page; the rest live behind "View More"

  function checkOutGrid(imgs, moreLink) {
    const thumbs = imgs.slice(0, CHECKOUT_INITIAL).map(src => `
      <div class="checkout-thumb">
        <img src="${src}" alt="Work sample" loading="lazy" />
      </div>`).join('');

    const btn = moreLink ? `
      <div class="co-more-wrap">
        <a class="co-load-more" href="${moreLink}" target="_blank" rel="noopener">
          View More
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 3l5 5-5 5"/></svg>
        </a>
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
     TIER COMPARISON & PORTFOLIO BUILDERS
  ────────────────────────────────── */
  function tierProjectCard(tier) {
    const isStandard = tier.level === 'Standard';
    const badgeHtml = tier.badge ? `<span class="tier-card-badge">${tier.badge}</span>` : '';
    const priceHtml = tier.price ? `
      <div class="flex items-baseline gap-1.5 my-3 pb-3 border-b border-gray-100">
        <span class="font-display font-extrabold text-2xl text-gray-900" ${isStandard ? 'style="color:var(--orange)"' : ''}>${tier.price}</span>
        <span class="text-xs text-gray-400 font-medium">/ photo</span>
      </div>` : '';
    const featuresHtml = (tier.features || []).map(f => `
      <li class="flex items-center gap-2 text-xs text-gray-600">
        <svg width="14" height="14" fill="none" viewBox="0 0 14 14" class="shrink-0"><path d="M2.5 7L5.5 10L11.5 4" stroke="var(--orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <span>${f}</span>
      </li>`).join('');

    return `
      <div class="tier-project-card relative bg-white border ${isStandard ? 'border-orange-500 shadow-xl ring-2 ring-orange-500/20' : 'border-gray-200 shadow-sm'} rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300">
        ${badgeHtml}
        <div>
          <div class="flex items-center gap-2 mb-2">
            <span class="text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${isStandard ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-700'}">${tier.level} Tier</span>
          </div>

          <h3 class="font-display font-bold text-gray-900 text-lg mb-1 leading-snug">${tier.title}</h3>
          
          ${priceHtml}

          <p class="text-gray-500 text-xs mb-4 leading-relaxed">${tier.desc}</p>
          
          <!-- Draggable Before/After Slider -->
          <div class="mb-4 shadow-sm rounded-xl overflow-hidden border border-gray-100">
            ${baCard(tier.before, tier.after, 'Before', 'After', 240)}
          </div>

          <ul class="space-y-2 mb-6">
            ${featuresHtml}
          </ul>
        </div>

        <a href="order.html" class="w-full text-center py-3.5 rounded-xl font-bold text-xs transition-all duration-200 block ${isStandard ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg' : 'bg-gray-900 hover:bg-orange-500 text-white'}">
          Order ${tier.level} Package (${tier.price || ''}) →
        </a>
      </div>`;
  }

  function renderSolutionsSection(svc) {
    const tierCardsHtml = (svc.tierProjects || []).map(t => `<div class="reveal">${tierProjectCard(t)}</div>`).join('');
    const faqHtml = (svc.solutions || []).map((s, i) => solutionItem(s, i)).join('');

    return `
      <!-- ③ Solutions & Tier Showcase Section -->
      <section id="solutions" class="py-20 px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <!-- Section Header -->
          <div class="mb-14 reveal text-center max-w-3xl mx-auto">
            <div class="flex items-center justify-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full" style="background:var(--orange)"></span>
              <span class="text-xs font-bold text-gray-400 uppercase tracking-[0.18em]">Solutions &amp; Packages</span>
              <span class="w-2 h-2 rounded-full" style="background:var(--orange)"></span>
            </div>
            <h2 class="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
              Basic, Standard &amp; Advanced Packages
            </h2>
            <p class="text-gray-500 text-sm md:text-base leading-relaxed">
              Explore the exact editing scope delivered at every tier. Drag the Before &amp; After slider on any project below to inspect the transformation.
            </p>
          </div>

          <!-- 3-Tier Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
            ${tierCardsHtml}
          </div>

          <!-- FAQ Accordion -->
          <div class="max-w-3xl mx-auto pt-10 border-t border-gray-100">
            <div class="mb-8 reveal">
              ${sectionHeader('FAQ', 'Frequently Asked Questions')}
              <p class="text-gray-500 text-sm">Click any question to view detailed explanations.</p>
            </div>
            <div class="space-y-3">
              ${faqHtml}
            </div>
          </div>

          <!-- Service Before & After Projects (Right after FAQ) -->
          ${svc.projects && svc.projects.length ? `
            <div class="pt-14 mt-16 border-t border-gray-100">
              <div class="mb-10 reveal text-center max-w-2xl mx-auto">
                <div class="flex items-center justify-center gap-2 mb-2">
                  <span class="w-2 h-2 rounded-full" style="background:var(--orange)"></span>
                  <span class="text-xs font-bold text-gray-400 uppercase tracking-[0.18em]">${svc.name} Showcase</span>
                  <span class="w-2 h-2 rounded-full" style="background:var(--orange)"></span>
                </div>
                <h3 class="font-display font-extrabold text-2xl md:text-3xl text-gray-900 mb-2">
                  ${svc.name} Before &amp; After Projects
                </h3>
                <p class="text-gray-500 text-sm">
                  Drag the slider on any project below to inspect the detailed transformation for ${svc.name}.
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                ${svc.projects.map(p => `
                  <div class="reveal rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                    ${baCard(p.before, p.after, 'Before', 'After', 270)}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </section>`;
  }

  function renderWhatWeDoneSection(svc) {
    const checkoutThumbs = svc.checkOut || [];
    return `
      <!-- ④ What We've Done Section (Full Portfolio Gallery from old portfolio.html) -->
      <section id="portfolio" class="py-24 px-6" style="background:#0F172A">
        <div class="max-w-7xl mx-auto">

          <!-- Section Header -->
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 reveal">
            <div>
              <div class="flex items-center gap-2 mb-3">
                <span class="w-2 h-2 rounded-full shrink-0" style="background:var(--orange)"></span>
                <span class="text-xs font-bold text-gray-400 uppercase tracking-[0.18em]">Our Portfolio</span>
              </div>
              <h2 class="font-display font-extrabold text-3xl md:text-5xl text-white">
                What We've <span style="color:var(--orange)">Done</span>
              </h2>
              <p class="text-gray-400 mt-2 text-sm max-w-xl">
                Browse our full real estate editing portfolio across every service — from HDR blending to virtual staging before &amp; after.
              </p>
            </div>
            ${svc.checkOutMoreLink ? `
              <a href="${svc.checkOutMoreLink}" target="_blank" rel="noopener" class="btn-primary font-semibold px-6 py-3.5 rounded-xl text-sm shrink-0 inline-flex items-center gap-2">
                View Drive Gallery ↗
              </a>
            ` : ''}
          </div>

          <!-- Category Filter Tabs -->
          <div class="flex flex-wrap gap-2.5 mb-10" id="filter-tabs">
            <button class="filter-tab text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:border-orange-500 transition-all duration-200" data-cat="all" onclick="filterWork('all',this)">All Work</button>
            <button class="filter-tab text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:border-orange-500 transition-all duration-200" data-cat="hdr" onclick="filterWork('hdr',this)">Photo Editing</button>
            <button class="filter-tab text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:border-orange-500 transition-all duration-200" data-cat="removal" onclick="filterWork('removal',this)">Item Removal</button>
            <button class="filter-tab text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:border-orange-500 transition-all duration-200" data-cat="staging" onclick="filterWork('staging',this)">Virtual Staging</button>
            <button class="filter-tab text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:border-orange-500 transition-all duration-200" data-cat="dusk" onclick="filterWork('dusk',this)">Day to Dusk</button>
            <button class="filter-tab text-sm font-semibold px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:border-orange-500 transition-all duration-200" data-cat="renovation" onclick="filterWork('renovation',this)">Virtual Renovation</button>
          </div>

          <!-- Portfolio Cards Grid (Full items from old portfolio.html) -->
          <div id="portfolio-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- ── PHOTO EDITING (HDR) ── -->
            <div class="portfolio-card lg:col-span-2 relative overflow-hidden rounded-2xl cursor-pointer group border border-slate-800 h-72" data-cat="hdr">
              <img src="images/BAS/PE/DSC02237_1.jpg" alt="HDR Blending result" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span class="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2" style="background:var(--orange);color:#fff">Photo Editing</span>
                  <p class="text-white font-display font-bold text-xl">Window Pull &amp; Ambient Blend</p>
                </div>
              </div>
            </div>

            <div class="portfolio-card relative overflow-hidden rounded-2xl cursor-pointer group border border-slate-800 h-72" data-cat="hdr">
              <img src="images/BAS/PE/DSC02242_1.jpg" alt="HDR Blending" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span class="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2" style="background:var(--orange);color:#fff">Photo Editing</span>
                  <p class="text-white font-display font-bold text-lg">Living Room — Natural Light</p>
                </div>
              </div>
            </div>

            <div class="portfolio-card relative overflow-hidden rounded-2xl cursor-pointer group border border-slate-800 h-64" data-cat="hdr">
              <img src="images/BAS/PE/DSC02272_1.jpg" alt="HDR Blending" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span class="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2" style="background:var(--orange);color:#fff">Photo Editing</span>
                  <p class="text-white font-display font-bold text-lg">Bedroom Detail Shot</p>
                </div>
              </div>
            </div>

            <div class="portfolio-card relative overflow-hidden rounded-2xl cursor-pointer group border border-slate-800 h-64" data-cat="hdr">
              <img src="images/BAS/PE/IMG_0015_1.jpg" alt="HDR Blending" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span class="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2" style="background:var(--orange);color:#fff">Photo Editing</span>
                  <p class="text-white font-display font-bold text-lg">Kitchen — Warm Tones</p>
                </div>
              </div>
            </div>

            <div class="portfolio-card relative overflow-hidden rounded-2xl cursor-pointer group border border-slate-800 h-64" data-cat="hdr">
              <img src="images/BAS/PE/IMG_0020_1.jpg" alt="HDR Blending" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <span class="inline-block text-xs font-bold px-3 py-1 rounded-full mb-2" style="background:var(--orange);color:#fff">Photo Editing</span>
                  <p class="text-white font-display font-bold text-lg">Dining Room</p>
                </div>
              </div>
            </div>

            <!-- ── ITEM REMOVAL (Before/After Sliders) ── -->
            <div class="rounded-2xl overflow-hidden h-64 border border-slate-800 shadow-xl" data-cat="removal">
              ${baCard('images/CHECKOUTS/ITEM_REMOVAL/0O2A8680.jpg', 'images/CHECKOUTS/ITEM_REMOVAL/0O2A8680_final.jpg', 'Before', 'After', 256)}
            </div>

            <div class="rounded-2xl overflow-hidden h-64 border border-slate-800 shadow-xl" data-cat="removal">
              ${baCard('images/CHECKOUTS/ITEM_REMOVAL/0O2A8685.jpg', 'images/CHECKOUTS/ITEM_REMOVAL/0O2A8685_done.jpg', 'Before', 'After', 256)}
            </div>

            <div class="rounded-2xl overflow-hidden h-64 border border-slate-800 shadow-xl" data-cat="removal">
              ${baCard('images/CHECKOUTS/ITEM_REMOVAL/0O2A8690.jpg', 'images/CHECKOUTS/ITEM_REMOVAL/0O2A8690_done.jpg', 'Before', 'After', 256)}
            </div>

            <div class="rounded-2xl overflow-hidden h-64 border border-slate-800 shadow-xl" data-cat="removal">
              ${baCard('images/CHECKOUTS/ITEM_REMOVAL/0O2A8695.jpg', 'images/CHECKOUTS/ITEM_REMOVAL/0O2A8695_done.jpg', 'Before', 'After', 256)}
            </div>

            <div class="rounded-2xl overflow-hidden h-64 border border-slate-800 shadow-xl" data-cat="removal">
              ${baCard('images/CHECKOUTS/ITEM_REMOVAL/0O2A8700.jpg', 'images/CHECKOUTS/ITEM_REMOVAL/0O2A8700_final.jpg', 'Before', 'After', 256)}
            </div>

            <div class="rounded-2xl overflow-hidden h-64 border border-slate-800 shadow-xl" data-cat="removal">
              ${baCard('images/CHECKOUTS/ITEM_REMOVAL/0O2A8705.jpg', 'images/CHECKOUTS/ITEM_REMOVAL/0O2A8705_final.jpg', 'Before', 'After', 256)}
            </div>

            <!-- ── VIRTUAL STAGING (Before/After Sliders) ── -->
            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="staging">
              ${baCard('images/BAS/VIRTUAL_STAGING/0O2A9176.jpg', 'images/BAS/VIRTUAL_STAGING/0O2A9176_final.jpg', 'Before', 'After', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="staging">
              ${baCard('images/BAS/VIRTUAL_STAGING/0O2A9182.jpg', 'images/BAS/VIRTUAL_STAGING/0O2A9182_final.jpg', 'Before', 'After', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="staging">
              ${baCard('images/BAS/VIRTUAL_STAGING/0O2A9543.jpg', 'images/BAS/VIRTUAL_STAGING/0O2A9543_final.jpg', 'Before', 'After', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="staging">
              ${baCard('images/BAS/VIRTUAL_STAGING/1126BobbieLane-28.jpg', 'images/BAS/VIRTUAL_STAGING/1126BobbieLane-28_final.jpg', 'Before', 'After', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="staging">
              ${baCard('images/BAS/VIRTUAL_STAGING/DSC01838.jpg', 'images/BAS/VIRTUAL_STAGING/DSC01838_final.jpg', 'Before', 'After', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="staging">
              ${baCard('images/BAS/VIRTUAL_STAGING/DSC01861.jpg', 'images/BAS/VIRTUAL_STAGING/DSC01861_final.jpg', 'Before', 'After', 288)}
            </div>

            <!-- ── DAY TO DUSK (Before/After Sliders) ── -->
            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="dusk">
              ${baCard('images/BAS/DTD/f3653632.DTE.jpg', 'images/BAS/DTD/f3653632.jpg', 'Day', 'Dusk', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="dusk">
              ${baCard('images/BAS/DTD/0O2A3573.DTE.jpg', 'images/BAS/DTD/0O2A3573.jpg', 'Day', 'Dusk', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="dusk">
              ${baCard('images/BAS/DTD/0O2A3560.DTE.1.jpg', 'images/BAS/DTD/0O2A3560.jpg', 'Day', 'Dusk', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="dusk">
              ${baCard('images/BAS/DTD/0O2A3565.DTE_1.jpg', 'images/BAS/DTD/0O2A3565.jpg', 'Day', 'Dusk', 288)}
            </div>

            <!-- ── VIRTUAL RENOVATION (Before/After Sliders) ── -->
            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="renovation">
              ${baCard('images/BAS/RENOVATION/01122303.jpg', 'images/BAS/RENOVATION/01122303_.jpg', 'Before', 'After', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="renovation">
              ${baCard('images/BAS/RENOVATION/01122310.jpg', 'images/BAS/RENOVATION/01122310_.jpg', 'Before', 'After', 288)}
            </div>

            <div class="rounded-2xl overflow-hidden h-72 border border-slate-800 shadow-xl" data-cat="renovation">
              ${baCard('images/BAS/RENOVATION/01122323_Room2.jpg', 'images/BAS/RENOVATION/01122323_Room2_.jpg', 'Before', 'After', 288)}
            </div>

          </div>

          <!-- Checkout Completed Works Gallery (Service-Specific) -->
          ${checkoutThumbs.length ? `
            <div class="pt-12 mt-12 border-t border-slate-800">
              <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
                <div>
                  <h3 class="font-display font-bold text-xl text-white flex items-center gap-2">
                    <span class="w-2.5 h-2.5 rounded-full" style="background:var(--orange)"></span>
                    Completed MLS-Ready Results — ${svc.name}
                  </h3>
                  <p class="text-slate-400 text-xs mt-1">High-resolution verified output samples for ${svc.name}</p>
                </div>
                ${svc.checkOutMoreLink ? `
                  <a href="${svc.checkOutMoreLink}" target="_blank" rel="noopener" class="btn-primary font-semibold px-5 py-2.5 rounded-xl text-xs shrink-0 inline-flex items-center gap-2">
                    View Full Drive Gallery ↗
                  </a>
                ` : `<span class="text-xs text-slate-400 font-medium">${checkoutThumbs.length} Samples</span>`}
              </div>
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                ${checkoutThumbs.map(src => `
                  <div class="portfolio-thumb rounded-xl overflow-hidden h-48 group relative cursor-pointer border border-slate-800 bg-slate-950">
                    <img src="${src}" alt="${svc.name} sample" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span class="text-xs font-semibold text-white flex items-center gap-1.5">
                        <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" stroke="#FF9500" stroke-width="1.4"/><path d="M4.5 7l2 2 3.5-3.5" stroke="#FF9500" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        Verified Output
                      </span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </section>`;
  }

  /* ──────────────────────────────────
     MAIN RENDER
  ────────────────────────────────── */
  function renderService(id) {
    const svc = SERVICES[id];
    if (!svc) return;
    // Pick 3 distinct "after" gallery images — prefer checkOut, fall back to projects, then hero
    const g1 = svc.checkOut && svc.checkOut[0] ? svc.checkOut[0] : svc.hero.after;
    const g2 = svc.checkOut && svc.checkOut[1] ? svc.checkOut[1]
              : (svc.projects && svc.projects[0] ? svc.projects[0].after : svc.hero.before);
    const g3 = svc.checkOut && svc.checkOut[2] ? svc.checkOut[2]
              : (svc.projects && svc.projects[1] ? svc.projects[1].after : svc.hero.after);

    const html = `
      <!-- ① Service hero — split layout: info left / gallery right -->
      <div class="svc-hero-split">

        <!-- Left: service info panel -->
        <div class="svc-split-left">
          <div class="svc-split-inner">

            <!-- Eyebrow tag -->
            <div class="svc-split-eyebrow">
              <span class="svc-split-dot"></span>
              <span>${svc.name}</span>
            </div>

            <!-- Headline -->
            <h1 class="svc-split-headline">${svc.subtitle}</h1>

            <!-- Short desc -->
            <p class="svc-split-desc">
              Professional results delivered within 24 hours. Every order includes a free revision guarantee.
            </p>

            <!-- Trust stats -->
            <div class="svc-trust-row">
              <div class="svc-trust-item">
                <span class="svc-trust-num">500<span class="svc-trust-accent">+</span></span>
                <span class="svc-trust-label">Projects Done</span>
              </div>
              <div class="svc-trust-divider"></div>
              <div class="svc-trust-item">
                <span class="svc-trust-num">24<span class="svc-trust-accent">h</span></span>
                <span class="svc-trust-label">Turnaround</span>
              </div>
              <div class="svc-trust-divider"></div>
              <div class="svc-trust-item">
                <span class="svc-trust-num svc-trust-accent">Free</span>
                <span class="svc-trust-label">Revision</span>
              </div>
            </div>

            <!-- CTA buttons -->
            <div class="svc-split-ctas">
              <a href="order.html" class="btn-primary font-semibold px-7 py-3.5 rounded-xl text-sm inline-flex items-center gap-2">
                Place an Order
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
              </a>
              <a href="#solutions" class="svc-split-ghost-btn">
                See Examples
                <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 5l-5 5 5 5"/><path d="M6 10h10" transform="rotate(-90 9 10)"/></svg>
              </a>
            </div>

          </div>
        </div>

        <!-- Right: photo mosaic gallery -->
        <div class="svc-split-right">
          <!-- Main large image -->
          <div class="svc-mosaic-main">
            <img src="${g1}" alt="${svc.name} result" loading="eager" />
            <span class="svc-mosaic-badge">After</span>
          </div>
          <!-- Side stack: 2 smaller images -->
          <div class="svc-mosaic-side">
            <div class="svc-mosaic-sm">
              <img src="${g2}" alt="${svc.name} sample" loading="lazy" />
              <span class="svc-mosaic-badge">After</span>
            </div>
            <div class="svc-mosaic-sm">
              <img src="${g3}" alt="${svc.name} sample" loading="lazy" />
              <span class="svc-mosaic-badge">After</span>
            </div>
          </div>
          <!-- Floating label chip -->
          <div class="svc-mosaic-chip">
            <svg width="13" height="13" fill="none" viewBox="0 0 13 13"><circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.4"/><path d="M4.5 6.5l1.5 1.5 3-3" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
            Verified results — real projects
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

      <!-- ③ Solutions & Tier Showcase Section (Includes Packages, FAQ & Before/After Projects) -->
      ${renderSolutionsSection(svc)}

      <!-- ⑤b Extra section — only renders when THIS service defines extraSection -->
      ${svc.extraSection || ''}

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
          <p class="text-gray-400 text-lg mb-10 max-w-lg mx-auto">Upload your photos, choose your plan, and our editors start within the hour. Results in 12–24 hours.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <a href="order.html" class="btn-primary font-semibold px-8 py-4 rounded-xl text-sm">Place an Order →</a>
            <a href="#solutions" class="border-2 border-gray-600 text-gray-300 font-semibold text-sm px-8 py-4 rounded-xl transition-colors hover:border-white hover:text-white">View Solutions</a>
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
    if (!content) return;
    content.innerHTML = html;

    // Re-initialise BA sliders and reveal animations
    window.initBASliders(content);
    window.initReveal(content);
    window.initSolutionToggles();

    // Auto-highlight active service category tab in What We've Done section
    const activeTab = document.querySelector(`.filter-tab[data-cat="${id}"]`) || document.querySelector('.filter-tab[data-cat="all"]');
    if (activeTab && typeof window.filterWork === 'function') {
      window.filterWork(id, activeTab);
    }

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

  // Exposed so other pages (e.g. order.html) can build UI from the exact
  // same pricing/plan data instead of keeping a second, driftable copy.
  window.SERVICES_DATA = SERVICES;
  window.renderPlanStepRow = planStepRow;

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
