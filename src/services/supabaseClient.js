import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xamfrnrurcehnbapjonq.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbWZybnJ1cmNlaG5iYXBqb25xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMxODE3NTUsImV4cCI6MjA4ODc1Nzc1NX0.5O2XYF1CautqTijqmQou5MvSeQIUUtUI1Uj5PNX94uA"

export const supabase = createClient(supabaseUrl, supabaseKey)