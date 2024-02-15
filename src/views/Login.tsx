import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../supabase/supabase.config";
import { UserAuth } from "../context/AuthContext";

export const Login = () => {
  const { session } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (session !== null) {
      console.log(session);
      navigate("/");
    }
  }, [session]);

  const handleClick = async () => {
    async function signOut() {
      const { error } = await supabase.auth.signOut();
    }
    signOut();
  };

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
