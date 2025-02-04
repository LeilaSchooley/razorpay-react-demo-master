import dotenv from "dotenv";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Load environment variables from .env file
dotenv.config();

const supabaseUrl: string | undefined = process.env.SUPABASE_URL;
const supabaseKey: string | undefined = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Please define SUPABASE_URL and SUPABASE_SERVICE_KEY in your environment"
  );
}

// Create the Supabase client with proper typing
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

// Export using ES module syntax
export default supabase;
