import Auth from '../../components/auth/Auth';
import Button from '../../components/UI/Button';
import { lang } from '../../locale/language'
import { useSelector } from 'react-redux'
import { appState } from '../../shared/app.modal';

type LanguageKey = 'en' | 'hindi' | 'ur';

const Banner = () => {
  const langKey:LanguageKey = useSelector((store:appState) => store?.app.lang as LanguageKey);
  const isAuthFormVisible = useSelector((store:appState) => store?.app.isAuthForm);

  const getStartedHandler = () => {
    console.log('getStartedHandler')
  }
  return (
    <>
      <div className='relative'>
        <img className='h-screen w-full' src="/gpt_bg.jpg" alt="" />
        <div className='absolute top-0 mx-auto text-center  text-white h-screen bg-[#1a1a1ad4] w-full'>
          <div className={`mx-auto w-2/5 ${isAuthFormVisible ? 'bg-black h-[450px] rounded-md mt-52 rounded-md p-2' : 'h-screen pt-40'}`}>
            {!isAuthFormVisible ? <>
              <h1 className='text-heading'>{lang[langKey].homePageTitle}</h1>
              <h3 className='text-subHeading'>{lang[langKey].priceText}</h3>
              <h4 className='text-[1rem] mt-8'>{lang[langKey].subscriptionText}</h4>

              <div className='flex align-middle mt-8'>
                <input className='w-full px-3 py-3 bg-transparent border border-gray-500 mr-3 flex-1' type="text" placeholder={lang[langKey].emailPlaceholder} />
                <Button btnWasClicked={getStartedHandler} size="large" btnText={lang[langKey].getStartedCTAText} />
              </div>
            </> : <Auth />
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default Banner