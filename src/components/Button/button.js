import { useContext } from "react"
// import { NavLink } from "react-router-dom"
import { useUser } from './utils/UserContext';  // import the custom hook

export default function Button() {
  const { user, login, logout } = useUser(); // use the custom hook

  return (
    <>
      <div className="cta">
        {/* Render this button if the user is logged out */}

        {!user && (
          <button
            className="bg-green-500 py-2 px-6 rounded shadow 
            transition-all duration-300 hover:bg-transparent hover:text-green-500 border border-green-500"
            onClick={login}
          >
            Log In
          </button>
        )}

        {/* Render this button if the user is logged in */}
        {user && (
          <button
            className="bg-green-500 py-2 px-6 rounded shadow transition-all duration-300 hover:bg-transparent hover:text-green-500 border border-green-500"
            onClick={logout}
          >
            Log Out
          </button>
        )}
      </div>
    </>
  )
}