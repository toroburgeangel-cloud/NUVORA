// NUVORA Supabase public browser configuration.
// This key is intentionally the Publishable key. Never put a Secret/service_role key here.
const SUPABASE_URL = 'https://comgopncawoafdjfhmmq.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_MoWxcsAFuJrnvQnIP9UMGw_iW57ZByM';

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
