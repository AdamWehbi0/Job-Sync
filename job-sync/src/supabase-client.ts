// Import the createClient function from Supabase
import { createClient } from "@supabase/supabase-js";

// Get the Supabase URL from the environment variables
const supabaseURL = import.meta.env.VITE_SUPABASE_URL;

// Get the Supabase API key from the environment variables
const supabaseKEY = import.meta.env.VITE_SUPABASE_KEY;

// Create a new Supabase client using the URL and API key
const supabase = createClient(supabaseURL, supabaseKEY);

// Export the Supabase client for use in other files
export default supabase;
