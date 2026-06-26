// ============================================================
// StudyHub Storage Layer — Supabase backend
// ------------------------------------------------------------
// This file replaces the Claude-artifact "window.storage" API
// with an equivalent backed by a real Supabase database, using
// the SAME method names/signatures, so app.js needs no changes.
//
// SETUP (one-time):
// 1. Create a free project at https://supabase.com
// 2. In the SQL Editor, run:
//
//    create table studyhub_kv (
//      key text primary key,
//      value text not null,
//      updated_at timestamptz default now()
//    );
//    alter table studyhub_kv enable row level security;
//    create policy "Allow anon read" on studyhub_kv for select using (true);
//    create policy "Allow anon write" on studyhub_kv for insert with check (true);
//    create policy "Allow anon update" on studyhub_kv for update using (true);
//    create policy "Allow anon delete" on studyhub_kv for delete using (true);
//
// 3. In Project Settings → API, copy your Project URL and anon public key.
// 4. Paste them into SUPABASE_URL and SUPABASE_ANON_KEY below.
//
// NOTE ON SECURITY: the anon key is meant to be public (it's safe to ship
// in frontend code) — that's the whole design of Supabase's RLS model.
// Since this is a single-user personal dashboard, the policies above allow
// open read/write. If you ever add real multi-user login, tighten these
// policies to check auth.uid() instead.
// ============================================================

const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL_HERE';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

const _supabaseClient = (typeof supabase !== 'undefined' && SUPABASE_URL.startsWith('http'))
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

window.storage = {
  async get(key, shared) {
    if (!_supabaseClient) throw new Error('Supabase not configured yet — edit storage.js with your project URL and key.');
    const { data, error } = await _supabaseClient
      .from('studyhub_kv')
      .select('key, value')
      .eq('key', key)
      .maybeSingle();
    if (error) throw error;
    if (!data) throw new Error('Key not found: ' + key);
    return { key: data.key, value: data.value, shared: !!shared };
  },

  async set(key, value, shared) {
    if (!_supabaseClient) throw new Error('Supabase not configured yet — edit storage.js with your project URL and key.');
    const { error } = await _supabaseClient
      .from('studyhub_kv')
      .upsert({ key, value }, { onConflict: 'key' });
    if (error) throw error;
    return { key, value, shared: !!shared };
  },

  async delete(key, shared) {
    if (!_supabaseClient) throw new Error('Supabase not configured yet — edit storage.js with your project URL and key.');
    const { error } = await _supabaseClient
      .from('studyhub_kv')
      .delete()
      .eq('key', key);
    if (error) throw error;
    return { key, deleted: true, shared: !!shared };
  },

  async list(prefix, shared) {
    if (!_supabaseClient) throw new Error('Supabase not configured yet — edit storage.js with your project URL and key.');
    let query = _supabaseClient.from('studyhub_kv').select('key');
    if (prefix) query = query.like('key', prefix + '%');
    const { data, error } = await query;
    if (error) throw error;
    return { keys: (data||[]).map(r=>r.key), prefix, shared: !!shared };
  },
};
