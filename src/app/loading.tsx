import React from 'react';

const Loading: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <p>Carregando...</p>
        </div>
    );
};

export default Loading;