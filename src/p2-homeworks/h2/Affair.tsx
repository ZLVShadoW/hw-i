import React from 'react'
import {AffairType} from './HW2';

import cl from './Affair.module.css';

type AffairPropsType = {
    deleteAffairCallback: () => void
}

// const Affair: React.FC<AffairPropsType & AffairType> = ({name, deleteAffairCallback}) => {
//     const deleteCallback = () => {
//         deleteAffairCallback()
//     }
//     return (
//         <div className={cl.task}>
//             {name} - <button className={cl.del} onClick={deleteCallback}>del</button>
//         </div>
//     )
// }

function Affair({name, deleteAffairCallback}: AffairPropsType & AffairType)  {

    const deleteCallback = () => {
        deleteAffairCallback()
    }

    return (
        <div className={cl.task}>
            {name} - <button className={cl.del} onClick={deleteCallback}>del</button>
        </div>
    )
}

export default Affair;
