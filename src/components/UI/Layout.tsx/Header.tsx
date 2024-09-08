import { Link } from "react-router-dom"
import Language from "../../shared/Language"
import Button from "../Button"


const Header = () => {
  return (
      <header className="bg-gradient-to-b from-black via-transparent to-transparent flex justify-between items-center px-6 py-2 text-white">
      <div className="w-1/12">
        <Link to="/">
            <img className="w-full" src="/logo_icon.svg" alt="" />
        </Link>
          </div>
          <div>
              <Language/>
              <Button btnText="Login" />
          </div>
      </header>
  )
}

export default Header