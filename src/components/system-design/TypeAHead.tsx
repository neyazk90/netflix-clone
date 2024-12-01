import React from 'react'
import AutoComplete from './AutoComplete'

const data = [
    "apple",
    "banana",
    "KitKat",
    "Kiwi",
    "Orange",
    "Plumm"
]

const TypeAHead = () => {

    const fetchSuggestions = async (val:string) => { 
        console.log('inputValue',val)
    }
  return (
      <div className='py-40 text-center'>
          <h3 className='text-2xl mb-2'>Type A Head</h3>
         
          <AutoComplete
              placeholder={"Fruit Name"}
              staticData={data}
              fetchSuggestions={(inputValue: string) => fetchSuggestions(inputValue)}
              dataKey={"name"}
              customLoading={<>Loading ...</>}
              onSelect={(res: any) => console.log(res)}
              onChange={(inputvalue: string) => console.log('Hello',inputvalue)}
  onBlur={(e: React.FocusEvent<HTMLInputElement>) => { console.log('Blur',e); }}
  onFocus={(e: React.FocusEvent<HTMLInputElement>) => { console.log('Focus',e); }}
              customStyles={{}}
        />
    </div>
  )
}

export default TypeAHead