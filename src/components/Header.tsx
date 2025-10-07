import { useApplicationContext } from "../provider/ContextProvider";

function Header() {
  const { isLoggedIn } = useApplicationContext();
  return (
    <div className="windows98-titlebar">
      <div className="flex items-center gap-1">
        <div className="windows98-titlebar-icon">📝</div>
        <span>Meme Board</span>
      </div>
      <button className="windows98-button">
        {isLoggedIn ? "Sign Out" : "Sign In"}
      </button>
    </div>
  );
}

export default Header;
