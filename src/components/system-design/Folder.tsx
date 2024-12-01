import React, { useState } from 'react'

const Folder: React.FC<any> = ({ explorer }) => {
    const [expand, setExpand] = useState(false);

    const [showInput, setShowInput] = useState<any>({
        visible: false,
        isFolder: null
    });
    
    const handlefolderItem = (e:Event,isFolder:boolean) => { 
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder
        });
    }

    const onAddFolder = (e: React.KeyboardEvent<HTMLInputElement>) => { 
        if (e.key === 'Enter' && e.currentTarget.value) {
            setExpand(false);
            setShowInput({...showInput, visible:false })
        }
    }

    if (explorer.isFolder) {
        return (
            <>
                <div className='folder flex justify-between bg-gray-300 rounded-sm p-2 w-[250px] cursor-pointer' onClick={() => setExpand(!expand)}>
                    🗂️{explorer.name}

                    <div className='flex'>
                        <span onClick={(e)=>handlefolderItem(e,true)}>🗂️ +</span>
                        <span onClick={(e)=>handlefolderItem(e,false)}>📝</span>
                    </div>
                </div>

                <div style={{ display: expand ? 'block' : 'none', paddingLeft: '10px' }}>
                    { 
                        showInput.visible && (
                            <div className='inputContainer flex gap-3 align-middle'>
                                <span>{showInput.isFolder ? '🗂️' : '📝'}</span>
                                <input
                                    className="p-1"
                                    type="text"
                                    onKeyDown={onAddFolder}
                                    autoFocus
                                    onBlur={() => { setShowInput({ ...showInput, visible: false })}}
                                />
                            </div>
                        )
                    }

                    {
                        explorer.items.map((item: any) => {
                            return (
                                <Folder explorer={item} key={item.id} />
                                // <div key={index}>{item.isFolder ? '🗂️' : '📄'} {item.name}</div>
                            )
                        })
                    }
                </div>
            </>
        )
    } else {
        return (
            <span className='file flex'>📄 {explorer.name}</span>
        )
    }
}

export default Folder