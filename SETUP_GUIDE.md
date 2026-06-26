# Getting StudyHub Live on Your Own Website

This turns your dashboard into a real website at a free URL like `sohum-studyhub.netlify.app` — works on any device, any wifi, no Claude needed.

Three free accounts, in this order: **Supabase** (stores your data) → **GitHub** (stores your code) → **Netlify** (makes it a live website).

Total time: ~20 minutes. No coding required, just careful copy-pasting.

---

## Step 1 — Create your database (Supabase)

1. Go to **[supabase.com](https://supabase.com)** → click **Start your project** → sign up with email or GitHub.
2. Click **New Project**. Pick any name (e.g. "studyhub"), set a database password (save it somewhere, you likely won't need it again), pick the region closest to India, click **Create new project**. Wait ~2 minutes while it sets up.
3. Once it's ready, click **SQL Editor** in the left sidebar → **New query**.
4. Paste this in and click **Run**:

```sql
create table studyhub_kv (
  key text primary key,
  value text not null,
  updated_at timestamptz default now()
);
alter table studyhub_kv enable row level security;
create policy "Allow anon read" on studyhub_kv for select using (true);
create policy "Allow anon write" on studyhub_kv for insert with check (true);
create policy "Allow anon update" on studyhub_kv for update using (true);
create policy "Allow anon delete" on studyhub_kv for delete using (true);
```

This creates one table that stores your whole app's data (same idea as before — one big save file).

5. Click **Project Settings** (gear icon, bottom left) → **API**. You'll see two things you need:
   - **Project URL** (looks like `https://abcdefgh.supabase.co`)
   - **anon public** key (a long string starting with `eyJ...`)

6. Open `storage.js` (one of the files I gave you) in any text editor (Notepad is fine) and replace:
   ```
   const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL_HERE';
   const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';
   ```
   with your actual URL and key, in quotes, exactly as copied. Save the file.

**Heads up:** Supabase pauses free projects after 7 days with zero activity. Since you'll be using this daily, that won't happen — but if you ever take a long break, just log into Supabase once to wake it back up.

---

## Step 2 — Put your code on GitHub

GitHub is just a place to store your code online — think of it as Google Drive, but for code, and it's what Netlify reads from.

1. Go to **[github.com](https://github.com)** → **Sign up** → make a free account (any username, your email, a password).
2. Once logged in, click the **+** icon top-right → **New repository**.
3. Name it `studyhub` (or anything). Leave everything else default. Click **Create repository**.
4. On the next page, look for **uploading an existing file** (a link in the quick-setup instructions) and click it.
5. Drag in all 4 files: `index.html`, `style.css`, `app.js`, `storage.js` (make sure it's the one you just edited with your real Supabase keys).
6. Scroll down, click **Commit changes**.

That's it — your code now lives on GitHub.

---

## Step 3 — Make it a live website (Netlify)

1. Go to **[netlify.com](https://netlify.com)** → **Sign up** → choose **Sign up with GitHub** (easiest, links the two accounts automatically).
2. Once in, click **Add new site** → **Import an existing project** → **Deploy with GitHub**.
3. Authorize Netlify to see your repos if asked, then pick your `studyhub` repository from the list.
4. It'll show build settings — you don't need to change anything (no build command needed, this is a plain HTML site). Click **Deploy**.
5. Wait ~30 seconds. Netlify gives you a live URL like `https://random-name-123.netlify.app` — that's your site, live, right now.

(Optional) Click **Site settings** → **Change site name** to pick something memorable like `sohum-studyhub.netlify.app`.

---

## You're done — now test it

Open your new `.netlify.app` URL. You should see StudyHub load normally. Do something small (log a study session, check a box), then close the tab completely and reopen the URL — your progress should still be there. That confirms Supabase is saving correctly.

If you see a red banner saying Supabase isn't configured, double check Step 1.6 — the keys in `storage.js` need to be your real ones, not the placeholder text, and you need to re-upload that corrected file to GitHub (Step 2.4–2.6) for Netlify to pick up the fix. Netlify automatically redeploys within a minute or two whenever you update files on GitHub.

---

## Making changes later

Anytime you want to update the site (new features, fixes), the cycle is always:
**Edit files → re-upload to GitHub → Netlify auto-redeploys.**
I can keep handing you updated files exactly like before — you'll just upload them to GitHub instead of opening them in Claude.

---

## What's not included yet

AI features (AI Tutor, Daily Check grading) aren't wired up on this version — that needs a separate small backend piece plus your own Anthropic API key, which we'll do as a follow-up once this base site is confirmed working.
