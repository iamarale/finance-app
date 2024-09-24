import { createClient } from "@supabase/supabase-js";

// private stuff 🔏
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// export client api
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getSupabaseData = async (table: string) => {
  const { data, error } = await supabase.from(table).select();

  // Throws error message
  if (error) throw new Error(error.message);
  // Returns data from table
  return data;
};
