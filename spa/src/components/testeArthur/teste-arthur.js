import React, { useState } from 'react';
import Menu from '../landing/menu';


const TesteArthur = (props) => {
    const [dataAtual, setDataAtual] = useState(props.dataAtual);

    const handleRefreshClick = () => {
        //dataAtual = new Date();
        setDataAtual(new Date());
    }

    return (
        <div>
            <Menu></Menu>
            {`Arthur Cattaneo Zavadski. Data atual: ${dataAtual.toLocaleString()}`}
            <button onClick={handleRefreshClick}>Refresh</button>
        </div>
    );
}

export default TesteArthur;
