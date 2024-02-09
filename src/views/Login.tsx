import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useStore } from "../store/authStore";
import { redirect } from "react-router-dom";

const supabase = createClient(
  "https://gfiziaotzqkhmjohcafo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXppYW90enFraG1qb2hjYWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzM0MTEsImV4cCI6MjAyMjkwOTQxMX0.RX4M2ylNTBQvDgNrCRdow42bPV3rc6DcMhr7tMP_Ii8"
);

export const Login = () => {
  const { session } = useStore();
  const setSession = useStore((state) => state.setSession);

  const navigate = useNavigate();

  const handleClick = async () => {
    async function signOut() {
      const { error } = await supabase.auth.signOut();
    }
    signOut();
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session !== null) {
      console.log(session);
      navigate("/");
    }
  }, [session]);

  return (
    <div className="container w-auto m-12 p-8 my-12 sm:w-96 sm:mx-auto  rounded-xl bg-white ">
      {!session ? (
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
            style: {
              container: {
                width: "100%",
                margin: "auto",
              },
            },
          }}
          providers={["google"]}
        />
      ) : (
        <div>
          Logged in!
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </div>
  );
};
