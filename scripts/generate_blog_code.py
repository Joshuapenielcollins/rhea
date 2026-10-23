import re, json, os

with open("scratch_v3.txt") as f:
    v3 = f.read()

with open("scratch_website.txt") as f:
    web = f.read()

def clean_text(text):
    if not text:
        return ""
    t = text
    # Clean known arrows and special glyphs
    t = t.replace("State → Story → Strategy", "State, Story, Strategy")
    t = t.replace("State -> Story -> Strategy", "State, Story, Strategy")
    t = t.replace("Recognize → Exit → Shift → Test", "Recognize, Exit, Shift, Test")
    t = t.replace("Recognize -> Exit -> Shift -> Test", "Recognize, Exit, Shift, Test")
    
    # Range of numbers e.g. 2024—2026 -> 2024 to 2026
    t = re.sub(r"(\d+)\s*[—–]\s*(\d+)", r"\1 to \2", t)
    
    # Convert title/clause dashes
    t = re.sub(r"\s+[—–]\s+", ": ", t) if " — " in t and any(w in t.lower() for w in ["resilience", "uno", "trap"]) else t
    t = re.sub(r"\s+[—–]\s+", ", ", t)
    t = re.sub(r"\s+--\s+", ", ", t)
    t = re.sub(r"\s+-\s+", ", ", t)
    
    # Word-to-word em dash e.g. problem—it -> problem, it
    t = re.sub(r"([a-zA-Z0-9])—([a-zA-Z0-9])", r"\1, \2", t)
    t = re.sub(r"([a-zA-Z0-9])–([a-zA-Z0-9])", r"\1, \2", t)
    t = re.sub(r"([a-zA-Z0-9])--([a-zA-Z0-9])", r"\1, \2", t)
    
    # Standalone em/en dash
    t = t.replace("—", ", ").replace("–", ", ")
    
    # Strip leading/trailing bullet or dash
    t = re.sub(r"^[-*]\s*", "", t)
    t = re.sub(r"\s*[-*]$", "", t)
    
    # Clean up punctuation collisions
    t = re.sub(r",\s*,+", ", ", t)
    t = re.sub(r",\s*:", ": ", t)
    t = re.sub(r":\s*,", ": ", t)
    t = re.sub(r"\s*;\s*,", "; ", t)
    t = re.sub(r",\s*;", "; ", t)
    t = re.sub(r"\s+", " ", t).strip()
    return t

image_import_names = [
    ("thumbPermission", "insight-permission.jpg"),
    ("thumbGreatWork", "insight-great-work.jpg"),
    ("thumbDoubtProfile", "insight-doubt-profile.jpg"),
    ("thumbOpportunityMagnet", "insight-opportunity-magnet.jpg"),
    ("thumbMessyMiddle", "insight-messy-middle.jpg"),
    ("thumbAnxietyAction", "insight-anxiety-action.jpg"),
    ("thumbFriendsMindset", "insight-friends-mindset.jpg"),
    ("thumbTitleIdentity", "insight-title-identity.jpg"),
    ("thumbBurnoutReset", "insight-burnout-reset.jpg"),
    ("thumbStrategyLast", "insight-strategy-last.jpg"),
    ("thumbStrategicSelfishness", "insight-strategic-selfishness.jpg"),
    ("thumbInvisibleVariables", "insight-invisible-variables.jpg"),
    ("thumbTeamDynamics", "insight-team-dynamics.jpg"),
    ("thumbUnoResilience", "insight-uno-resilience.jpg"),
    ("thumbComfortZone", "insight-comfort-zone.jpg"),
    ("thumbDiversityResilience", "insight-diversity-resilience.jpg"),
]

dates = [
    ("Oct 20, 2026", "2026-10-20"),
    ("Oct 17, 2026", "2026-10-17"),
    ("Oct 14, 2026", "2026-10-14"),
    ("Oct 11, 2026", "2026-10-11"),
    ("Oct 08, 2026", "2026-10-08"),
    ("Oct 05, 2026", "2026-10-05"),
    ("Oct 02, 2026", "2026-10-02"),
    ("Sep 29, 2026", "2026-09-29"),
    ("Sep 26, 2026", "2026-09-26"),
    ("Sep 23, 2026", "2026-09-23"),
    ("Sep 20, 2026", "2026-09-20"),
    ("Sep 17, 2026", "2026-09-17"),
    ("Sep 14, 2026", "2026-09-14"),
    ("Sep 11, 2026", "2026-09-11"),
    ("Sep 08, 2026", "2026-09-08"),
    ("Sep 05, 2026", "2026-09-05"),
]

chunks = re.split(r"###\s*POST\s+(\d+)[:\s–—\-]+", v3)
posts = []

for i in range(1, len(chunks), 2):
    num = int(chunks[i])
    raw_content = chunks[i+1].strip()
    
    slug_m = re.search(r"\*\*URL Slug:\*\*\s*`?([^\n`]+)`?", raw_content)
    meta_m = re.search(r"\*\*Meta Description:\*\*\s*([^\n]+)", raw_content)
    cat_m = re.search(r"\*\*Category:\*\*\s*([^\n]+)", raw_content)
    pil_m = re.search(r"\*\*Pillar:\*\*\s*([^\n]+)", raw_content)
    read_m = re.search(r"\*\*Reading Time:\*\*\s*([^\n]+)", raw_content)
    lead_m = re.search(r"\*\*Lead Magnet Variation:\*\*\s*\"?([^\n\"]+)\"?", raw_content)
    
    slug = slug_m.group(1).replace("/blog/", "").strip() if slug_m else f"post-{num}"
    raw_title = raw_content.splitlines()[0].strip()
    title = clean_text(raw_title).replace(" — ", ": ").replace(" - ", ": ")
    
    cat = cat_m.group(1).strip() if cat_m else "Method"
    pil = pil_m.group(1).strip() if pil_m else "Pattern Recognition"
    if "proof" in pil.lower():
        display_cat = "Proof"
    elif "pattern" in pil.lower():
        display_cat = "Pattern Recognition"
    elif "point of view" in cat.lower():
        display_cat = "Point of View"
    else:
        display_cat = "Method"
        
    read_time = read_m.group(1).replace("~", "").strip() if read_m else "6 min read"
    if not read_time.endswith("read"):
        read_time += " read"
        
    excerpt = clean_text(meta_m.group(1).strip()) if meta_m else ""
    
    # Body extraction
    parts = re.split(r"\n---\n", raw_content, maxsplit=1)
    body_part = parts[1] if len(parts) > 1 else raw_content
    
    # Cut internal developer appendix
    body_part = re.split(r"\*\*\[AUTHOR BIO", body_part)[0]
    body_part = re.split(r"\[Link to LinkedIn Post\]", body_part)[0]
    body_part = re.split(r"\| Category \| Posts \|", body_part)[0]
    body_part = re.split(r"\| Post \| Related Posts \|", body_part)[0]
    body_part = re.sub(r"#[A-Za-z0-9_]+\s*", "", body_part)
    
    # Normalize headers
    body_part = re.sub(r"\*\*\[H[1-6]\]\s*([^\*]+)\*\*", r"## \1", body_part)
    body_part = re.sub(r"\[H[1-6]\]\s*", r"## ", body_part)
    
    lines = body_part.splitlines()
    sections = []
    curr_heading = None
    curr_paras = []
    
    for line in lines:
        l = line.strip()
        if not l or l == "---":
            continue
        # Skip table divider lines like |---|---|
        if re.match(r"^\|[-: |]+\|$", l):
            continue
        # Format table row to sentence
        if l.startswith("|") and l.endswith("|"):
            cells = [clean_text(c) for c in l.split("|")[1:-1] if clean_text(c)]
            if cells:
                l = " : ".join(cells)
        if "lead magnet" in l.lower() and (l.startswith(">") or l.startswith("**")):
            continue
        if l.startswith("## ") or l.startswith("### "):
            if curr_paras:
                sections.append({"heading": curr_heading, "paragraphs": curr_paras})
                curr_paras = []
            h_text = clean_text(re.sub(r"^#+\s*", "", l).strip())
            if h_text.lower() == title.lower() or title.lower() in h_text.lower() or h_text.lower() in title.lower():
                curr_heading = None
            else:
                curr_heading = h_text
        else:
            if l.startswith("- ") or l.startswith("* "):
                l = l[2:].strip()
            clean_para = clean_text(l)
            if clean_para and len(clean_para) > 3:
                curr_paras.append(clean_para)
                
    if curr_paras:
        sections.append({"heading": curr_heading, "paragraphs": curr_paras})
        
    pull_quote = None
    if lead_m:
        lead_clean = clean_text(lead_m.group(1))
        q_m = re.search(r"([^?]+\?)", lead_clean)
        if q_m:
            pull_quote = q_m.group(1).strip()
            
    if not pull_quote and sections:
        for s in sections:
            for p in s["paragraphs"]:
                if len(p) > 40 and len(p) < 140 and ("?" in p or "!" in p or "not" in p):
                    pull_quote = p
                    break
            if pull_quote:
                break
    if not pull_quote:
        pull_quote = "Clarity in leadership begins when we stop waiting and start creating."
        
    key_takeaway = None
    if len(sections) > 1 and sections[-1]["paragraphs"]:
        last_para = sections[-1]["paragraphs"][-1]
        if len(last_para) < 220:
            key_takeaway = last_para
    if not key_takeaway:
        key_takeaway = excerpt
        
    date_str, iso_date = dates[num - 1]
    
    posts.append({
        "num": num,
        "id": slug,
        "slug": slug,
        "title": title,
        "category": display_cat,
        "pillar": clean_text(pil),
        "readTime": read_time,
        "date": date_str,
        "isoDate": iso_date,
        "featured": (num == 1),
        "imageVar": image_import_names[num - 1][0],
        "imageFile": image_import_names[num - 1][1],
        "excerpt": excerpt,
        "pullQuote": pull_quote,
        "keyTakeaway": key_takeaway,
        "sections": sections,
    })

print(f"Total posts built: {len(posts)}")

# 1. Generate src/lib/articles.ts
articles_ts = []
for var_name, file_name in image_import_names:
    articles_ts.append(f'import {var_name} from "@/assets/{file_name}";')

articles_ts.append('''
export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  category: "Point of View" | "Method" | "Pattern Recognition" | "Proof" | string;
  pillar?: string;
  readTime: string;
  date: string;
  isoDate: string;
  excerpt: string;
  sections: ArticleSection[];
  keyTakeaway: string;
  pullQuote?: string;
  image: string;
  featured?: boolean;
}

export const articlesData: Article[] = [
''')

for p in posts:
    articles_ts.append("  {")
    articles_ts.append(f'    id: {json.dumps(p["id"])},')
    articles_ts.append(f'    slug: {json.dumps(p["slug"])},')
    articles_ts.append(f'    title: {json.dumps(p["title"])},')
    articles_ts.append(f'    category: {json.dumps(p["category"])},')
    articles_ts.append(f'    pillar: {json.dumps(p["pillar"])},')
    articles_ts.append(f'    readTime: {json.dumps(p["readTime"])},')
    articles_ts.append(f'    date: {json.dumps(p["date"])},')
    articles_ts.append(f'    isoDate: {json.dumps(p["isoDate"])},')
    if p["featured"]:
        articles_ts.append('    featured: true,')
    articles_ts.append(f'    image: {p["imageVar"]},')
    articles_ts.append(f'    excerpt: {json.dumps(p["excerpt"])},')
    articles_ts.append(f'    pullQuote: {json.dumps(p["pullQuote"])},')
    articles_ts.append(f'    keyTakeaway: {json.dumps(p["keyTakeaway"])},')
    articles_ts.append('    sections: [')
    for s in p["sections"]:
        articles_ts.append('      {')
        if s["heading"]:
            articles_ts.append(f'        heading: {json.dumps(s["heading"])},')
        articles_ts.append('        paragraphs: [')
        for para in s["paragraphs"]:
            articles_ts.append(f'          {json.dumps(para)},')
        articles_ts.append('        ],')
        articles_ts.append('      },')
    articles_ts.append('    ],')
    articles_ts.append("  },")

articles_ts.append("];\n")

with open("src/lib/articles.ts", "w") as f:
    f.write("\n".join(articles_ts))

print("Wrote src/lib/articles.ts successfully.")

# 2. Generate sanity/seed-data.ndjson
# Read existing siteSettings and testimonials from sanity/seed-data.ndjson
existing_lines = []
with open("sanity/seed-data.ndjson") as f:
    for line in f:
        line = line.strip()
        if not line:
            continue
        obj = json.loads(line)
        if obj.get("_type") in ["siteSettings", "testimonial"]:
            existing_lines.append(json.dumps(obj))

# Add all 16 posts
for p in posts:
    sec_objs = []
    for s_idx, s in enumerate(p["sections"]):
        sec_obj = {
            "_type": "section",
            "_key": f"sec_{p['num']}_{s_idx}",
            "paragraphs": s["paragraphs"],
        }
        if s["heading"]:
            sec_obj["heading"] = s["heading"]
        sec_objs.append(sec_obj)
        
    sanity_doc = {
        "_id": f"post-{p['slug']}",
        "_type": "post",
        "title": p["title"],
        "slug": {"_type": "slug", "current": p["slug"]},
        "category": p["category"],
        "pillar": p["pillar"],
        "readTime": p["readTime"],
        "date": p["date"],
        "isoDate": p["isoDate"],
        "featured": p["featured"],
        "excerpt": p["excerpt"],
        "pullQuote": p["pullQuote"],
        "keyTakeaway": p["keyTakeaway"],
        "sections": sec_objs,
    }
    existing_lines.append(json.dumps(sanity_doc))

with open("sanity/seed-data.ndjson", "w") as f:
    f.write("\n".join(existing_lines) + "\n")

print(f"Wrote sanity/seed-data.ndjson with {len(existing_lines)} documents.")
