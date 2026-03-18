import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xamfrnrurcehnbapjonq.supabase.co"
const supabaseKey = "sb_publishable_dK07LqizTmmv3oAAVoN8SQ_0aD9cv0J"

export const supabase = createClient(supabaseUrl, supabaseKey)
