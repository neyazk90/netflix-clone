import OpenAI from "openai";
import { useEffect } from "react"
import Button from "../components/UI/Button";
import { useSelector } from "react-redux";
import { lang } from "../locale/language";



const Gpt = () => {
  const langKey = useSelector(store => store?.app.lang);
  useEffect(() => {
    const client = new OpenAI({
      apiKey: import.meta.env.VITE_API_OPENAPI, // This is the default and can be omitted
      dangerouslyAllowBrowser:true
    });

    const fetchGPT = async () => { 
      const chatCompletion = await client.chat.completions.create({
        messages: [{ role: 'user', content: 'tell me five funny indian retro movies' }],
        model: 'gpt-3.5-turbo',
      });
      console.log('chatCompletion',chatCompletion)
    }

    fetchGPT()
  }, [])
  
  const getStartedHandler = () => {
    console.log('getStartedHandler')
  }

  return (
    <>
      <div className='relative'>
        <img className='h-screen w-full' src="/gpt_bg.jpg" alt="" />
        <div className='absolute top-0 mx-auto text-center  text-white h-screen bg-[#1a1a1ad4] w-full'>
        <div className='flex mx-auto w-1/2 align-middle pt-36 mt-20'>
              <input className='w-full px-3 py-3 bg-transparent border border-gray-500 mr-3 flex-1' type="text" placeholder={lang[langKey].searchPlaceholder} />
              <Button btnWasClicked={getStartedHandler} size="small" btnText={lang[langKey].search} />
              </div>
        </div>
      </div>
    </>
  )
}

export default Gpt