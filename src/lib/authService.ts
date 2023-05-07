import { supabase } from '$lib/supabaseClient';

async function signupWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });
  if (data) {
    console.log(data);
  } else if (error) {
    console.log(error);
  }
}

async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });
  if (data) {
    console.log(data);
  } else if (error) {
    console.log(error);
  }
}

async function signInWithGoogle() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:5173/profile/'
    }

  });

  if (data) {
    console.log(data);
  } else if (error) {
    console.log(error);
  }
}

async function signOut() {
  const { error } = await supabase.auth.signOut();
}

export { signupWithEmail, signInWithEmail, signInWithGoogle, signOut };
