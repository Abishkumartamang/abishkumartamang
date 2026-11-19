// Abish Portfolio - Interactive Logic & UI Controller

const fallbackWork = [
  {title:"College Cinematic video",category:"Cinematic",description:"Cinematic campus storytelling with dynamic pacing and color grading.",videoUrl:"https://youtu.be/iYKJ7ss8eSM",thumbnailUrl:"images/uploads/thumb_1794494049077.jpg",aspectRatio:"16:9",featured:true},
  {title:"Wedding highlight",category:"Wedding",description:"Emotional, cinematic wedding highlights and full-length edits.",videoUrl:"",thumbnailUrl:"",aspectRatio:"16:9",featured:true},
  {title:"John Rai concert announcement",category:"Social",description:"High-energy vertical reel with sound design and rapid rhythm.",videoUrl:"https://www.instagram.com/reel/DZno2i1xD_v/",thumbnailUrl:"images/uploads/thumb_1794493915367.jpg",aspectRatio:"9:16",featured:true}
];

const fallbackBlogs = [
  {
    title:"Why your cinematic video still feels boring",
    category:"Editing",
    date:"Draft",
    excerpt:"Beautiful shots can't save a video with no point. Start with a question, a change, or a feeling the viewer can follow.",
    content:"A cinematic video can have beautiful lighting, slow motion, and a film-emulation LUT and still feel empty. The problem is usually not the camera. It is the lack of a story.\n\nBefore you edit, ask: what changes from the beginning to the end? Build the sequence around that change. Keep shots that add information, feeling, rhythm, or contrast. Remove shots that are only there because they look good.\n\nMusic cannot manufacture meaning from unrelated footage. Try a rough cut without music. If the sequence still makes sense, you have a foundation. The goal is not to make every frame impressive; it is to make the whole sequence matter.",
    media: [
      {
        type: "image",
        url: "images/uploads/graded-sample.jpg",
        caption: "Color grading and mood hierarchy in DaVinci Resolve",
        alt: "Cinematic color grading breakdown"
      }
    ]
  },
  {
    title:"Sound design is doing more work than you think",
    category:"Workflow",
    date:"Draft",
    excerpt:"Tiny sounds and well-timed silence can make an ordinary cut feel intentional.",
    content:"Sound gives a scene physical space. Start with clean dialogue and useful ambience. Add specific sounds only when they support the action or feeling. Random whooshes on every cut usually distract.\n\nBuild a hierarchy: dialogue or the main action stays clear, music supports the scene, and effects add detail. Silence is a choice too. Pulling music away for a moment can make the next beat hit harder. Treat sound as part of the edit, not a decoration added at the end.",
    media: []
  },
  {
    title:"Stop copying transitions. Learn to see.",
    category:"Creative process",
    date:"Draft",
    excerpt:"Visual taste comes from observing light, movement, composition, and real life.",
    content:"A transition is useful only if it helps the viewer move through the story. Notice where light comes from, how a person moves through a frame, and how one shot can lead into the next.\n\nTry a straight cut first. Use a match cut, whip pan, speed ramp, or graphic transition only when there is a reason. Restraint is not a lack of skill. Build taste by watching films actively, recreating short sequences for practice, and reviewing your own work honestly.",
    media: []
  }
];

let work = fallbackWork, blogs = fallbackBlogs;

// SVG Icons Dictionary for Social Media & UI
const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.777.978-.953 1.18-.175.2-.351.225-.652.075-1.905-.953-3.149-1.706-4.407-3.864-.332-.572.332-.531.951-1.77.1-.2.05-.376-.025-.526-.075-.15-.677-1.632-.927-2.234-.244-.588-.493-.509-.677-.518-.176-.009-.377-.01-.578-.01-.2 0-.527.075-.802.376-.276.3-1.054 1.03-1.054 2.511 0 1.482 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.146 4.55 2.112.912 2.929.832 3.987.674 1.156-.173 2.508-1.026 2.859-2.016.351-.99.351-1.838.246-2.016-.104-.178-.305-.278-.606-.428zM12 2.146C6.568 2.146 2.146 6.568 2.146 12c0 1.884.53 3.65 1.455 5.16L2 22l4.98-1.564A9.81 9.81 0 0 0 12 21.854c5.432 0 9.854-4.422 9.854-9.854C21.854 6.568 17.432 2.146 12 2.146z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  play: `<svg class="play-svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5.14v14l11-7-11-7z"/></svg>`
};

const esc = s => String(s || "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function youtubeEmbed(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    let id = "";
    if (u.hostname.includes("youtu.be")) id = u.pathname.slice(1);
    else if (u.hostname.includes("youtube.com")) {
      if (u.pathname.startsWith("/embed/")) id = u.pathname.split("/")[2];
      else if (u.pathname.startsWith("/shorts/")) id = u.pathname.split("/")[2];
      else id = u.searchParams.get("v") || "";
    }
    if (id) return "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id);
    if (u.hostname.includes("vimeo.com")) {
      const m = u.pathname.match(/(\d+)/);
      if (m) return "https://player.vimeo.com/video/" + m[1];
    }
  } catch(e) {}
  return "";
}

// Robust URL normalizer supporting relative image paths and auto https://
function safeUrl(u) {
  u = String(u || "").trim();
  if (!u) return "";
  if (/^(images\/|media\/|data:image\/|blob:|\/)/.test(u)) return u;
  if (!/^https?:\/\//i.test(u)) u = "https://" + u;
  try {
    const x = new URL(u);
    return /^https?:$/.test(x.protocol) ? x.href.replace(/['"()\\]/g, c => "%" + c.charCodeAt(0).toString(16).toUpperCase()) : "";
  } catch(e) {
    return "";
  }
}

const ytId = e => e.includes("youtube") ? e.split("/").pop() : "";

// Detect platform name and badge for external video links
function getPlatformInfo(url) {
  const u = String(url || "").toLowerCase();
  if (!u) return { name: "Video", badge: "Watch Video", isReel: false };
  if (u.includes("youtube.com/shorts/") || u.includes("youtu.be") && u.includes("shorts")) {
    return { name: "YouTube Shorts", badge: "YouTube Shorts", isReel: true };
  }
  if (u.includes("youtube.com") || u.includes("youtu.be")) {
    return { name: "YouTube", badge: "Watch on YouTube", isReel: false };
  }
  if (u.includes("instagram.com/reel") || u.includes("/reels/")) {
    return { name: "Instagram Reel", badge: "Instagram Reel", isReel: true };
  }
  if (u.includes("instagram.com")) {
    return { name: "Instagram", badge: "Instagram Post", isReel: false };
  }
  if (u.includes("tiktok.com")) {
    return { name: "TikTok", badge: "Watch on TikTok", isReel: true };
  }
  if (u.includes("vimeo.com")) {
    return { name: "Vimeo", badge: "Watch on Vimeo", isReel: false };
  }
  if (u.includes("facebook.com")) {
    return { name: "Facebook", badge: "Watch on Facebook", isReel: false };
  }
  return { name: "Video", badge: "Watch Video", isReel: false };
}

// Format aspect ratio value into valid CSS aspect-ratio string
function formatAspectRatio(ar, defaultFallback = "16 / 9") {
  if (!ar) return defaultFallback;
  const s = String(ar).trim().replace(/\s+/g, "");
  if (s === "16:9" || s === "16/9") return "16 / 9";
  if (s === "9:16" || s === "9/16") return "9 / 16";
  if (s === "1:1" || s === "1/1") return "1 / 1";
  if (s === "4:5" || s === "4/5") return "4 / 5";
  if (s === "21:9" || s === "21/9") return "21 / 9";
  if (s.includes(":")) return s.replace(":", " / ");
  if (s.includes("/")) return s.replace("/", " / ");
  const n = Number(s);
  if (!isNaN(n) && n > 0) return String(n);
  return defaultFallback;
}

// -------------------------------------------------------------
// Work Section with Automatic Aspect Ratio & Click Redirection
// -------------------------------------------------------------
function renderWork(filter = "all") {
  const grid = document.getElementById("workGrid");
  if (!grid) return;

  const list = work.map((w, i) => ({w, i})).filter(o => filter === "all" || o.w.category === filter);
  if (!list.length) {
    grid.innerHTML = '<div class="empty">No projects in this category yet.</div>';
    return;
  }

  grid.innerHTML = list.map(({w, i}) => {
    const targetUrl = safeUrl(w.videoUrl);
    const platform = getPlatformInfo(targetUrl);

    // Initial aspect ratio resolution
    let initialAr = "16 / 9";
    if (w.aspectRatio && w.aspectRatio !== "auto") {
      initialAr = formatAspectRatio(w.aspectRatio);
    } else if (platform.isReel) {
      initialAr = "9 / 16";
    }

    const y = ytId(youtubeEmbed(targetUrl));
    const thumb = safeUrl(w.thumbnailUrl) || (y ? `https://i.ytimg.com/vi/${encodeURIComponent(y)}/hqdefault.jpg` : "");

    const arPillText = initialAr.replace(/\s+/g, "");

    let mediaBoxHtml = "";
    if (targetUrl) {
      // Entire showreel/thumbnail is clickable, opening directly in new tab
      mediaBoxHtml = `
        <a class="vf" href="${esc(targetUrl)}" target="_blank" rel="noopener noreferrer" 
           data-work-idx="${i}" 
           data-thumb-src="${esc(thumb)}"
           style="--ar:${initialAr}" 
           aria-label="Watch ${esc(w.title)} on ${esc(platform.name)} (opens in a new tab)">
          ${thumb ? `<img class="vf-thumb" src="${esc(thumb)}" alt="${esc(w.title)}" loading="lazy" decoding="async">` : `<div class="vf-empty">Open on ${esc(platform.name)}</div>`}
          <span class="vf-overlay" aria-hidden="true"></span>
          <span class="play" aria-hidden="true">${ICONS.play}</span>
          <span class="vf-badge">${esc(platform.badge)} ↗</span>
          <span class="vf-ar-pill">${esc(arPillText)}</span>
          ${w.duration ? `<em class="dur">${esc(w.duration)}</em>` : ""}
        </a>
      `;
    } else {
      mediaBoxHtml = `
        <div class="vf" data-work-idx="${i}" data-thumb-src="${esc(thumb)}" style="--ar:${initialAr}">
          ${thumb ? `<img class="vf-thumb" src="${esc(thumb)}" alt="${esc(w.title)}" loading="lazy" decoding="async">` : `<div class="vf-empty">Video coming soon</div>`}
          <span class="vf-overlay" aria-hidden="true"></span>
          <span class="vf-badge">Coming soon</span>
        </div>
      `;
    }

    return `
      <article class="work-card neu" id="workCard_${i}">
        ${mediaBoxHtml}
        <div class="card-copy">
          <div class="tags">${esc(w.category)}</div>
          <h3>${esc(w.title)}</h3>
          <p>${esc(w.description)}</p>
        </div>
      </article>
    `;
  }).join("");

  // Automatic Aspect Ratio Detection via Image & Video Metadata
  list.forEach(({w, i}) => {
    const card = document.getElementById(`workCard_${i}`);
    if (!card) return;
    const vf = card.querySelector(".vf");
    const thumb = vf ? vf.getAttribute("data-thumb-src") : "";

    // If item has explicit ratio (other than auto), keep it
    if (w.aspectRatio && w.aspectRatio !== "auto") return;

    // If no explicit ratio is locked, measure image or video natural dimensions
    if (thumb) {
      const img = new Image();
      img.onload = () => {
        if (img.naturalWidth && img.naturalHeight) {
          const ratio = img.naturalWidth / img.naturalHeight;
          let detected = `${img.naturalWidth} / ${img.naturalHeight}`;
          let label = `${img.naturalWidth}x${img.naturalHeight}`;

          if (Math.abs(ratio - 9/16) < 0.08) { detected = "9 / 16"; label = "9:16"; }
          else if (Math.abs(ratio - 4/5) < 0.08) { detected = "4 / 5"; label = "4:5"; }
          else if (Math.abs(ratio - 1) < 0.08) { detected = "1 / 1"; label = "1:1"; }
          else if (Math.abs(ratio - 16/9) < 0.08) { detected = "16 / 9"; label = "16:9"; }
          else if (Math.abs(ratio - 21/9) < 0.12) { detected = "21 / 9"; label = "21:9"; }

          vf.style.setProperty("--ar", detected);
          const pill = vf.querySelector(".vf-ar-pill");
          if (pill) pill.textContent = label;
        }
      };
      img.src = thumb;
    }
  });
}

function openModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (!modal) return;
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

const closeModalBtn = document.getElementById("closeModal");
if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);

const modalEl = document.getElementById("modal");
if (modalEl) {
  modalEl.addEventListener("click", e => {
    if (e.target.id === "modal") closeModal();
  });
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

// -------------------------------------------------------------
// Color Grading Comparison Slider (Raw vs Graded)
// -------------------------------------------------------------
function setGrade(beforeImg, afterImg) {
  const rawUrl = safeUrl(beforeImg) || "images/uploads/raw-sample.jpg";
  const gradedUrl = safeUrl(afterImg) || "images/uploads/graded-sample.jpg";

  const elRaw = document.getElementById("baRaw");
  const elGraded = document.getElementById("baGraded");

  if (elRaw && rawUrl) elRaw.style.backgroundImage = `url('${rawUrl}')`;
  if (elGraded && gradedUrl) elGraded.style.backgroundImage = `url('${gradedUrl}')`;

  const note = document.getElementById("baNote");
  if (note && beforeImg && afterImg) {
    note.textContent = "Drag the slider across the frame or use arrow keys to see the color grading transformation.";
  }
}

function initGradeSlider() {
  const ba = document.getElementById("ba");
  const baR = document.getElementById("baR");
  if (!ba) return;

  function setSliderPos(percent) {
    const clamped = Math.max(0, Math.min(100, Number(percent)));
    ba.style.setProperty("--p", clamped + "%");
    if (baR && Number(baR.value) !== clamped) {
      baR.value = clamped;
    }
  }

  let isDragging = false;
  function updateFromPointer(e) {
    const rect = ba.getBoundingClientRect();
    if (!rect.width) return;
    const x = e.clientX - rect.left;
    const pct = (x / rect.width) * 100;
    setSliderPos(pct);
  }

  ba.addEventListener("pointerdown", e => {
    isDragging = true;
    try { ba.setPointerCapture(e.pointerId); } catch(_) {}
    updateFromPointer(e);
  });

  ba.addEventListener("pointermove", e => {
    if (isDragging) updateFromPointer(e);
  });

  const stopDrag = e => {
    if (isDragging) {
      isDragging = false;
      try { ba.releasePointerCapture(e.pointerId); } catch(_) {}
    }
  };

  ba.addEventListener("pointerup", stopDrag);
  ba.addEventListener("pointercancel", stopDrag);

  if (baR) {
    baR.addEventListener("input", () => setSliderPos(baR.value));
    baR.addEventListener("change", () => setSliderPos(baR.value));
  }
}

// -------------------------------------------------------------
// Floating WhatsApp Button Controller
// -------------------------------------------------------------
function setupWhatsAppFloating(waNumber) {
  const cleanNumber = String(waNumber || "").replace(/\D/g, "");
  const waBtn = document.getElementById("waFloatingBtn");
  if (!waBtn) return;

  const greeting = encodeURIComponent("Hi Abish, I came across your video editor portfolio and would like to discuss a project!");
  
  if (cleanNumber) {
    waBtn.href = `https://wa.me/${cleanNumber}?text=${greeting}`;
  } else {
    waBtn.href = `https://wa.me/?text=${greeting}`;
  }
}

// -------------------------------------------------------------
// Social Media Logos & Rendering
// -------------------------------------------------------------
function renderSocialLinks(settings) {
  const container = document.getElementById("socialLinks");
  const footContainer = document.getElementById("footerSocialLinks");
  if (!container && !footContainer) return;

  if (container) container.replaceChildren();
  if (footContainer) footContainer.replaceChildren();

  const waNumber = String(settings.whatsapp || "").replace(/\D/g, "");
  const waUrl = waNumber ? "https://wa.me/" + waNumber : "";

  let fbUrl = settings.facebook || "";
  let inUrl = settings.linkedin || "";
  if (!fbUrl && inUrl && inUrl.includes("facebook.com")) {
    fbUrl = inUrl;
    inUrl = "";
  }

  const socialItems = [
    { name: "Instagram", key: "instagram", url: safeUrl(settings.instagram), icon: ICONS.instagram, cls: "social-instagram" },
    { name: "YouTube", key: "youtube", url: safeUrl(settings.youtube), icon: ICONS.youtube, cls: "social-youtube" },
    { name: "Facebook", key: "facebook", url: safeUrl(fbUrl), icon: ICONS.facebook, cls: "social-facebook" },
    { name: "TikTok", key: "tiktok", url: safeUrl(settings.tiktok), icon: ICONS.tiktok, cls: "social-tiktok" },
    { name: "WhatsApp", key: "whatsapp", url: safeUrl(waUrl), icon: ICONS.whatsapp, cls: "social-whatsapp" },
    { name: "LinkedIn", key: "linkedin", url: safeUrl(inUrl), icon: ICONS.linkedin, cls: "social-linkedin" },
    { name: "X / Twitter", key: "twitter", url: safeUrl(settings.twitter), icon: ICONS.twitter, cls: "social-twitter" }
  ].filter(item => item.url && !/yourusername|yourchannel/.test(item.url));

  if (!socialItems.length) {
    if (container) {
      container.innerHTML = '<p class="hint" style="grid-column:1/-1;margin:0">Add your social media links in the admin studio.</p>';
    }
    return;
  }

  // Render to Contact Section with full logo cards
  if (container) {
    socialItems.forEach(item => {
      const a = document.createElement("a");
      a.className = `social-card-btn ${item.cls}`;
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", `Visit Abish's ${item.name} profile`);
      a.innerHTML = `<span class="soc-icon">${item.icon}</span><span>${item.name}</span><span class="soc-arrow">↗</span>`;
      container.append(a);
    });
  }

  // Render to Footer with round icon buttons
  if (footContainer) {
    socialItems.forEach(item => {
      const a = document.createElement("a");
      a.className = `foot-icon-btn ${item.cls}`;
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.setAttribute("aria-label", `${item.name}`);
      a.setAttribute("title", item.name);
      a.innerHTML = item.icon;
      footContainer.append(a);
    });
  }
}

// -------------------------------------------------------------
// Upgraded Blog Section with Multi-Media Support (Images & Videos)
// -------------------------------------------------------------
function renderBlogs() {
  const grid = document.getElementById("blogGrid");
  if (!grid) return;

  if (!blogs.length) {
    grid.innerHTML = '<div class="empty">No blog posts yet. Add one in data/blogs.json.</div>';
    return;
  }

  grid.innerHTML = blogs.map((b, i) => {
    const mediaCount = Array.isArray(b.media) ? b.media.length : 0;
    const mediaBadge = mediaCount > 0 ? `<div class="blog-card-media-pill"><span>🎬 ${mediaCount} media attached</span></div>` : "";
    return `
      <article class="blog-card neu">
        <div class="meta">${esc(b.category || "Journal")} · ${esc(b.date || "")}</div>
        ${mediaBadge}
        <h3>${esc(b.title)}</h3>
        <p>${esc(b.excerpt || "")}</p>
        <button class="read" data-blog="${i}" aria-label="Read full article: ${esc(b.title)}">Read article ↗</button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-blog]").forEach(btn => btn.addEventListener("click", () => {
    const b = blogs[Number(btn.dataset.blog)];
    const mb = document.getElementById("modalBody");
    mb.replaceChildren();

    document.getElementById("modalMeta").textContent = (b.category || "Journal") + " · " + (b.date || "");
    document.getElementById("modalTitle").textContent = b.title;

    // Render attached media (Images & Videos)
    if (Array.isArray(b.media) && b.media.length > 0) {
      const mediaGallery = document.createElement("div");
      mediaGallery.className = "blog-media-wrap";

      b.media.forEach(m => {
        const itemBox = document.createElement("div");
        itemBox.className = "blog-media-item";

        const url = safeUrl(m.url);
        const embed = youtubeEmbed(url);
        const isVideo = m.type === "video" || embed || /\.(mp4|webm|mov|m4v)(\?.*)?$/i.test(url);

        if (embed) {
          const frame = document.createElement("div");
          frame.className = "blog-video-frame";
          const ifr = document.createElement("iframe");
          ifr.src = embed;
          ifr.title = m.caption || b.title;
          ifr.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share";
          ifr.allowFullscreen = true;
          ifr.referrerPolicy = "strict-origin-when-cross-origin";
          frame.appendChild(ifr);
          itemBox.appendChild(frame);
        } else if (isVideo) {
          const vid = document.createElement("video");
          vid.src = url;
          vid.controls = true;
          vid.playsInline = true;
          vid.preload = "metadata";
          vid.setAttribute("aria-label", m.caption || "Blog video");
          itemBox.appendChild(vid);
        } else {
          const img = document.createElement("img");
          img.src = url;
          img.alt = m.alt || m.caption || b.title;
          img.loading = "lazy";
          img.decoding = "async";
          itemBox.appendChild(img);
        }

        if (m.caption) {
          const cap = document.createElement("div");
          cap.className = "blog-media-caption";
          cap.textContent = m.caption;
          itemBox.appendChild(cap);
        }

        mediaGallery.appendChild(itemBox);
      });

      mb.appendChild(mediaGallery);
    }

    // Render formatted text content
    const textContent = String(b.content || b.excerpt || "").trim();
    if (textContent) {
      const paragraphs = textContent.split(/\n\s*\n/);
      paragraphs.forEach(p => {
        if (p.trim()) {
          const para = document.createElement("p");
          para.className = "blog-para";
          para.textContent = p.trim();
          mb.appendChild(para);
        }
      });
    }

    openModal();
  }));
}

// Filter buttons
const filtersEl = document.getElementById("filters");
if (filtersEl) {
  filtersEl.addEventListener("click", e => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    document.querySelectorAll(".filter").forEach(x => x.classList.toggle("active", x === b));
    renderWork(b.dataset.filter);
  });
}

// Mobile menu & Year
const menuBtn = document.getElementById("menuBtn");
if (menuBtn) menuBtn.onclick = () => document.getElementById("navlinks").classList.toggle("show");
document.querySelectorAll("nav a").forEach(a => a.onclick = () => {
  const nl = document.getElementById("navlinks");
  if (nl) nl.classList.remove("show");
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Init slider
initGradeSlider();

// -------------------------------------------------------------
// Data Fetching & Hydration
// -------------------------------------------------------------
fetch("data/work.json")
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(d => { if (Array.isArray(d)) { work = d.filter(x => !x.hidden); renderWork(); } })
  .catch(() => renderWork());

fetch("data/blogs.json")
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(d => { if (Array.isArray(d)) { blogs = d.filter(x => !x.hidden); renderBlogs(); } })
  .catch(() => renderBlogs());

fetch("data/settings.json")
  .then(r => r.ok ? r.json() : Promise.reject())
  .then(s => {
    setupWhatsAppFloating(s.whatsapp);
    renderSocialLinks(s);
    setGrade(s.beforeImage, s.afterImage);
  })
  .catch(() => {
    setupWhatsAppFloating("");
    setGrade("images/uploads/raw-sample.jpg", "images/uploads/graded-sample.jpg");
  });

// Scroll Reveal Animations
document.querySelectorAll(".section, .hero-art").forEach(e => e.classList.add("rv"));
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(es => es.forEach(x => {
    if (x.isIntersecting) {
      x.target.classList.add("in");
      io.unobserve(x.target);
    }
  }), { threshold: 0.08 });
  document.querySelectorAll(".rv").forEach(e => io.observe(e));
} else {
  document.querySelectorAll(".rv").forEach(e => e.classList.add("in"));
}

// Contact Form Handler
const cf = document.getElementById("cf");
const cm = document.getElementById("cfMsg");
if (cf) {
  cf.addEventListener("submit", async e => {
    e.preventDefault();
    cm.className = "";
    const d = new FormData(cf);
    if (d.get("bot-field")) return;
    if (!cf.checkValidity()) {
      cm.textContent = "Please add your name, a valid email, and project details (10+ characters).";
      cm.className = "err";
      return;
    }
    cm.textContent = "Sending inquiry…";
    try {
      const r = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(d).toString()
      });
      if (!r.ok) throw 0;
      cf.reset();
      cm.textContent = "Thank you — your message was sent! I will reply to your email soon.";
      cm.className = "ok";
    } catch (_) {
      cm.textContent = "Couldn't send right now. Please message me directly on WhatsApp or social media.";
      cm.className = "err";
    }
  });
}
