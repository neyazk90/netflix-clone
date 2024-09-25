import { useDispatch, useSelector } from 'react-redux';
import { lang } from '../../locale/language';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../../store/slices/appSlice';
import { appState } from '../../shared/app.modal';
type LanguageKey = 'en' | 'hindi' | 'ur';
const Auth = () => {
   
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const langKey:LanguageKey = useSelector((store:appState) => store?.app.lang  as LanguageKey);

    const authHandler = () => {
        dispatch(addUser(true));
        navigate(`/browse`);
    }

  return (
      <div className='px-12'>
          <h1 className='text-3xl pt-4'>{lang[langKey].login}</h1>
          <div className='form-group mb-6 mt-12 text-left'>
              <label className='mb-2 inline-block'>{ lang[langKey].authForm.email}</label>
              <input className='w-full px-3 py-3 bg-transparent border border-gray-500 mr-3 flex-1'  type="email" placeholder={lang[langKey].authForm.email } />
          </div>
          <div className='form-group mb-6 mt-6 text-left'>
            <label className='mb-2 inline-block'>{ lang[langKey].authForm.password}</label>
            <input className='w-full px-3 py-3 bg-transparent border border-gray-500 mr-3 flex-1' type="password" placeholder={lang[langKey].authForm.passwordPlaceholder}/>
          </div>
          <div className='form-group mb-6 mt-6 text-left'>
              <Button size='block' btnWasClicked={authHandler} btnText={lang[langKey].login } />
          </div>
      </div>
  )
}

export default Auth