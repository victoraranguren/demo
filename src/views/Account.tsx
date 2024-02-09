import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { useStore } from "../store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const supabase = createClient(
  "https://gfiziaotzqkhmjohcafo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmaXppYW90enFraG1qb2hjYWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMzM0MTEsImV4cCI6MjAyMjkwOTQxMX0.RX4M2ylNTBQvDgNrCRdow42bPV3rc6DcMhr7tMP_Ii8"
);

export const Account = () => {
  const navigate = useNavigate();

  const { session } = useStore();
  const setSession = useStore((state) => state.setSession);

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
    if (session == null) {
      console.log(session);
      navigate("/login");
    }
  }, [session]);

  return (
    <>
      {!session ? (
        session
      ) : (
        <div className="container p-6 mx-auto">
          <h1 className="text-3xl font-bold">Perfil</h1>
          <button onClick={handleClick}>Logout</button>
        </div>
      )}
    </>
  );
};
