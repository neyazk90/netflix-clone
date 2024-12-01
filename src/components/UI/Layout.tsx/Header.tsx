import { Link } from "react-router-dom"
import Language from "../../shared/Language"
import Button from "../Button"
import { lang } from "../../../locale/language"
import { useDispatch, useSelector } from "react-redux"
import { addUser, isAuthForm } from "../../../store/slices/appSlice"
import { appState, LanguageKey } from "../../../shared/app.modal"


const Header = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store:appState) => store?.app.lang as LanguageKey);
  const auth = useSelector((store:appState) => store?.app.user);

  const clickHandler = () => {
    if (auth) {
      dispatch(addUser(false));
      dispatch(isAuthForm(false));
    } else {
      dispatch(isAuthForm(true));
    }
    
  }


  return (
    <header className="w-full fixed bg-gradient-to-b z-30 from-black via-transparent to-transparent flex flex-col sm:flex-col-reverse md:flex-row justify-between items-center px-6 py-2 text-white">
      <div className="w-1/12">
        <Link to="/">
          <img className="w-full" src="/logo_icon.svg" alt="" />
        </Link>
      </div>
      <div>
      <Link className="mr-2 btn bg-slate-200 px-2 py-2 rounded-md text-black" to="explorer">Explorer</Link>
        <Link className="mr-2 btn bg-slate-200 px-2 py-2 rounded-md text-black" to="type-ahead">Search</Link>
      {/* <Button btnText="Type A head" btnWasClicked={ clickHandler} /> */}
        <Language />
        <Button btnText={auth ? lang[langKey].logout : lang[langKey].login} btnWasClicked={ clickHandler} />
      </div>
    </header>
  )
}

export default Header