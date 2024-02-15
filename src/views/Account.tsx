import { useStore } from "../store/authStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabase.config";
import { UserAuth } from "../context/AuthContext";

export const Account = () => { 
  const navigate = useNavigate();

  const { session } = UserAuth();

  const handleClick = async () => {
    async function signOut() {
      const { error } = await supabase.auth.signOut();
    }
    signOut();
  };

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
