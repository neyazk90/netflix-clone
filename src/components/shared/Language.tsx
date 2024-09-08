import { LANGUAGES } from '../../utils/constants'
import { iLanguage } from '../../interfaces/app'
import { useDispatch } from 'react-redux'
import { language } from '../../store/slices/appSlice'

const Language = () => {
  const dispatch = useDispatch()

  const languageChangeHanler = (e:React.ChangeEvent<HTMLSelectElement>) => { 
    dispatch(language(e.target.value));
  }
  return (
      <>
          <select name="language" id="language-select" onChange={languageChangeHanler} className='px-6 py-2 mr-2 text-black rounded-md border border-gray-300'>
              { 
                 LANGUAGES.map((language:iLanguage,index:number) => <option key={index} value={language.code}>{language.name}</option>)
              }
          </select>  
    </>
  )
}

export default Language