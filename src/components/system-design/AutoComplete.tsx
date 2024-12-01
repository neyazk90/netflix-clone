import React, { useState } from "react"
import { iAutocomplete } from "../../shared/app.modal"


const AutoComplete:React.FC<iAutocomplete> = ({
    placeholder = '',
    staticData = [],
    fetchSuggestions,
    dataKey = "",
    customLoading = <>Loading...</>,
    onSelect = () => { },
    onChange = () => { },
    onBlur = () => { },
    onFocus = () => { },
    customStyles = {}
}) => {

    const [inputValue, setInputValue] = useState('');
    const [suggestion, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => { 
        // console.log("handleChangeInput", event);
        setInputValue(event.target.value);
        onChange(event.target.value)
    }

    const getSuggestion = async () => {
        setError(null);
        setLoading(true);

        try {
            const res = (await fetch('https://jsonplaceholder.typicode.com/users')).json().then((data) => {data })
            console.log('res', res);   
        } catch (e) { 

        }

    }


  return (
      <div>
          <input type="text" style={customStyles} className='border border-gray-300 rounded-md p-3 w-96'
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placeholder}
              value={inputValue}
              onChange={handleChangeInput}
          />
    </div>
  )
}

export default AutoComplete