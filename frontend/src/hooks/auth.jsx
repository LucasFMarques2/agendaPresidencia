import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";


export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});


  async function signIn({ email, password }) {
    try {
      const response = await api.post("/login", { email, password });
      const { user, token } = response.data;

      
      localStorage.setItem("@agenda:user", JSON.stringify(user));
      localStorage.setItem("@agenda:token", token);


      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Não foi possível realizar o login.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@agenda:token");
    localStorage.removeItem("@agenda:user");

    setData({});
  }

/*

async function updateProfile({ user }) {
  try {
    await api.put("/**", user); 
    localStorage.setItem("@agenda:user", JSON.stringify(user));
    setData({ user, token: data.token });

    alert("Perfil atualizado com sucesso.");
  } catch (err) {
    if (err.response) {
      alert(err.response.data.message);
    } else {
      alert("Erro ao atualizar o perfil.");
    }
  }
}
*/

  useEffect(() => {
    const token = localStorage.getItem("@agenda:token");
    const user = localStorage.getItem("@agenda:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  return context;
}

export { AuthProvider, useAuth };
