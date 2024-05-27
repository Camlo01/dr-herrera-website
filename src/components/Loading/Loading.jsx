function Loading() {
    return (
        <div
            style={{
                height: '100vh',
                background: "rgb(24, 77, 152)",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <h1 style={{
                color: "white",
                fontFamily: 'Nunito',
                fontSize: '3.8rem',
                height: 'fit-content',
                width: 'fit-content',
                margin: 0
            }}>Cargando...</h1>
        </div>
    );
}

export default Loading;