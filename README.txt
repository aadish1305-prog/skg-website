M/s S.K. Gandhi — Website Setup Guide
======================================
Last updated: all changes applied, images wired, FormSubmit integrated

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUICK CHECKLIST — WHAT YOU NEED TO DO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Create  images/  folder inside skg_website/
□ Create  videos/  folder inside skg_website/
□ Add all image files (list below)
□ Add hero video as  videos/hero.mp4
□ Set up FormSubmit (activate your email)
□ Paste Google Maps embed src URL in contact.html
□ Paste Google Sheets CSV URL in careers.html
□ Paste LinkedIn URLs in contact.html
□ Paste Google Drive download links in downloads.html
□ Upload to Cloudflare Pages when ready

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. ALL IMAGES NEEDED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All images go inside the  images/  folder.
Names are EXACT — must match including lowercase letters and .jpg / .png extension.

LOGO & BRANDING
  images/logo.png                 Your company logo (PNG, transparent bg recommended)

CLIENT LOGOS (used on homepage marquee + clients page)
  images/logo-gil.png             Graphite India Limited
  images/logo-mahindra.png        Mahindra & Mahindra
  images/logo-atlascopco.png      Atlas Copco
  images/logo-bosch.png           Bosch
  images/logo-abb.png             ABB
  images/logo-hal.png             HAL
  images/logo-asb.png             ASB International
  images/logo-jbm.png             JBM Group
  images/logo-epiroc.png          Epiroc

GENERAL / HOME & ABOUT
  images/about-facility.jpg       Shop floor / facility (home page)
  images/facility-exterior.jpg    Facility exterior or interior (about page)

PEOPLE (circular crop — square photos work best)
  images/sureshchandra.jpg        Founder photo
  images/gajkumar.jpg             CEO photo
  images/aadish.jpg               COO photo

MACHINES (infrastructure page)
  images/machine-kolb.jpg         KOLB Double Column VMC
  images/machine-hartford.jpg     Hartford VMC
  images/machine-johnfort.jpg     Johnfort VMC
  images/machine-feeler.jpg       Feeler VMC
  images/machine-samson.jpg       Samson VMC
  images/machine-plano.jpg        HEC Plano Milling Machine
  images/machine-horiz-milling.jpg Horizontal Milling Machines
  images/machine-vert-milling.jpg  Vertical Milling Machines
  images/machine-radial-drill.jpg  Radial Drilling Machines
  images/eot-crane.jpg            EOT Crane
  images/specialty-setup.jpg      Graphite/Titanium machining setup

PRODUCTS & SERVICES
  images/dies-main.jpg            Dies overview
  images/dies-automotive.jpg      Automotive die cast component
  images/dies-runner-block.jpg    Precision die / runner blocks
  images/dies-cavity.jpg          Die mould cavity
  images/dies-large-cast.jpg      Large cast component on KOLB
  images/dies-surface-plate.jpg   Surface plate / fixture base
  images/dies-active-vmc.jpg      Active VMC machining
  images/graphite-main.jpg        Graphite components overview
  images/graphite-baffle.jpg      Graphite baffle plate
  images/graphite-trays.jpg       Graphite trays
  images/graphite-fixture.jpg     Segmented graphite fixture
  images/titanium-main.jpg        Titanium overview
  images/titanium-blocks-hal.jpg  Titanium blocks (HAL supply) — ONLY 1 image needed
  images/fabrication-main.jpg     Heavy fabrication overview
  images/fab-die-cooler-1.jpg     Die cooler assembly
  images/fab-die-cooler-2.jpg     Die cooler assembly internal
  images/fab-risers.jpg           Fabricated risers
  images/fab-risers-top.jpg       Machined risers top view
  images/fab-fixture-wip.jpg      Fixture plate in progress
  images/fab-fixture-done.jpg     Completed fixture plate

QUALITY
  images/iso-certificate.jpg      Scan or photo of ISO certificate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
2. HERO VIDEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Save your video as:  videos/hero.mp4

RECOMMENDED SPECS FOR CLOUDFLARE PAGES (free plan):
  Format:     MP4, H.264 codec
  Resolution: 1280×720 (720p) — do NOT use 4K or even 1080p
  Duration:   15–30 seconds (it loops)
  File size:  Under 10 MB  (aim for 5–8 MB)
  Bitrate:    1000–1500 kbps video, no audio needed
  Audio:      Remove audio track (saves ~20% file size, plays muted anyway)

How to compress: use HandBrake (free) — set preset to "Web → Gmail Large 3 Minutes 720p30"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
3. FORMSUBMIT — ENQUIRY FORM SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The form in contact.html already points to:
  https://formsubmit.co/gajkumargandhi@gmail.com

ACTIVATION (one time only, do this after going live):
1. Deploy the website to Cloudflare Pages (or any host)
2. Submit the contact form once from the live URL
3. FormSubmit sends a confirmation email to gajkumargandhi@gmail.com
4. Click the confirmation link in that email
5. Done — all future submissions go directly to your Gmail

WHAT YOU RECEIVE: A formatted email with all form fields including
any attached files (CAD drawings, PDFs) — all completely free.

IMPORTANT: The form does NOT work when opening HTML files locally
(file:// protocol). This is normal — it works once hosted.

TO CHANGE THE EMAIL ADDRESS: Open contact.html in a text editor,
find  formsubmit.co/gajkumargandhi@gmail.com  and replace the email.

AFTER GOING LIVE: Update the _next redirect URL in contact.html
(find  YOURWEBSITE.com  and replace with your actual domain).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4. GOOGLE MAPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Go to https://maps.google.com
2. Search: "Plot D 21/22 MIDC Satpur Nashik"
3. Click Share → Embed a map → Copy HTML
4. From the copied HTML, extract ONLY the src="..." URL
   It starts with: https://www.google.com/maps/embed?pb=...
5. Open contact.html in a text editor (Notepad / TextEdit)
6. Find:  PASTE-GOOGLE-MAPS-EMBED-SRC-URL-HERE
7. Replace it with the URL you copied (keep the quote marks)
8. Save

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
5. CAREERS — GOOGLE SHEETS SETUP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NOTE: Jobs load correctly when the site is hosted online.
When testing locally (opening file from desktop), placeholder
cards will show — this is expected and normal.

SETUP (one time, ~10 minutes):
1. Go to sheets.google.com → New spreadsheet
2. Name it: SKG Careers
3. Row 1 headers — type EXACTLY (case matters):
   A: Title   B: Department   C: Type   D: Status   E: Description   F: ApplyLink
4. Add jobs as rows. Example:
   VMC Operator | Shop Floor | Full-time | Open | Operate VMC machines to drawing specification... | https://forms.gle/your-form-link
5. File → Share → Publish to web → Sheet1 → CSV format → Publish → Copy URL
6. Open careers.html in text editor
7. Find:  PASTE-YOUR-GOOGLE-SHEET-CSV-URL-HERE
8. Replace with your CSV URL
9. Save

MANAGING JOBS (no coding ever):
  Add a job:    Add a row in the sheet (Status = Open)
  Remove job:   Delete row OR change Status to Closed
  Edit job:     Edit the cell and save

For the Apply button: create a Google Form (forms.google.com)
and paste the form URL in column F of your sheet.

Open Application link in careers.html:
Find:  PASTE-YOUR-OPEN-APPLICATION-FORM-LINK-HERE
Replace with your open-application Google Form URL.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
6. DOWNLOADS — BROCHURE & CERTIFICATE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Upload your PDF to Google Drive
2. Share → Anyone with the link → Copy link
   Example: https://drive.google.com/file/d/FILEID/view?usp=sharing
3. Convert to direct download:
   https://drive.google.com/uc?export=download&id=FILEID
4. Open downloads.html in text editor
5. Find:  PASTE-YOUR-BROCHURE-GOOGLE-DRIVE-LINK-HERE
6. Replace with your download URL
7. Do the same for: PASTE-YOUR-ISO-CERTIFICATE-GOOGLE-DRIVE-LINK-HERE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
7. LINKEDIN LINKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Open contact.html and find+replace these three placeholders:
  PASTE-GAJKUMAR-LINKEDIN-URL-HERE   → Gajkumar's LinkedIn URL
  PASTE-AADISH-LINKEDIN-URL-HERE     → Aadish's LinkedIn URL
  PASTE-SKG-LINKEDIN-URL-HERE        → Company LinkedIn page URL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
8. CLOUDFLARE PAGES HOSTING (free)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Cloudflare Pages is fully compatible with this website (static HTML).

DEPLOYMENT:
Option A — Direct upload (easiest):
1. Go to pages.cloudflare.com → Create application → Pages
2. Upload → drag the entire skg_website/ folder
3. Deploy → your site gets a free URL like skg-website.pages.dev

Option B — GitHub (better for updates):
1. Create a free GitHub account
2. Create a repository, upload your files
3. In Cloudflare Pages, connect to GitHub repo
4. Any file you update in GitHub auto-deploys to live site

CUSTOM DOMAIN: If you buy a domain (e.g. skg-engineering.com),
you can connect it in Cloudflare Pages settings for free.

BANDWIDTH: Cloudflare Pages free plan includes unlimited bandwidth.
The only limit is 500 deployments/month — far more than you need.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMPLETE LIST OF PLACEHOLDERS TO REPLACE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
In contact.html:
  PASTE-GOOGLE-MAPS-EMBED-SRC-URL-HERE
  PASTE-GAJKUMAR-LINKEDIN-URL-HERE
  PASTE-AADISH-LINKEDIN-URL-HERE
  PASTE-SKG-LINKEDIN-URL-HERE
  YOURWEBSITE.com  (in the _next redirect hidden field)

In careers.html:
  PASTE-YOUR-GOOGLE-SHEET-CSV-URL-HERE
  PASTE-YOUR-OPEN-APPLICATION-FORM-LINK-HERE

In downloads.html:
  PASTE-YOUR-BROCHURE-GOOGLE-DRIVE-LINK-HERE
  PASTE-YOUR-ISO-CERTIFICATE-GOOGLE-DRIVE-LINK-HERE

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHY SOME THINGS DON'T WORK LOCALLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When you open HTML files directly from your desktop (file:// URLs):
  ✗ Contact form won't submit  — works once hosted
  ✗ Career jobs won't load     — works once hosted (CORS restriction)
  ✗ Google Maps may not show   — works once hosted
  ✓ All images/video work fine if files are in the right folders
  ✓ All navigation between pages works fine
  ✓ All styling and layout looks correct

Everything works correctly on Cloudflare Pages or any web host.
