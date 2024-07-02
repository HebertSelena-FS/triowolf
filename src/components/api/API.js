import { BsChatQuoteFill } from 'react-icons/bs';
import {Button1} from './APIElements';

function Post() {
        const myStyle = {
        backgroundImage: `url(${require("../../images/stagelights.png")})`,
        height: '100vh',
        width: '100%',
        marginTop: 0,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    };    

    const url = 'https://api.kanye.rest'
    
    const API = () => {
        fetch(url)
            .then((response) => {
            return response.json()
            })
            .then((data) => {
            console.log(data)
            console.log(data.quote)
            localStorage.setItem('quote', JSON.stringify(data.quote))
            window.location.reload();
            })
    }

    const quote= JSON.parse(localStorage.getItem('quote'))

    return (
        <>  
        <header style={myStyle}>
            <div style={styles.container}>
                <div style={styles.content}>
                <div style={styles.header}>                
                    <h1 style={styles.h1}>Welcome To Kanye West Quotes!!</h1>
                    <h2 style={styles.h2}>Click the button to get your quote.</h2>
                </div>
                <div style={styles.quoteWrap}>
                <div>
                    <p style={styles.quote}>{quote}</p>
                </div>
                    <Button1 onClick={(e) => { API() }}>{<BsChatQuoteFill />}&nbsp;&nbsp;Get Quote</Button1>                     
                </div>
                </div>
            </div>
        </header>  
    </>                
    )            
}

export default Post;

const styles = {
    container: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        height: '800px',
        position: 'relative',
        zIndex: '1',
    },

    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0px,'
    },

    h1:{
        color: '#e1affd',
        fontSize: '3rem',
        letterSpacing: '1.1px',
        marginBottom: '3rem;'
    },

    h2: {
        color: '#fff',
        letterSpacing: '1.1px',
        fontSize: '2rem',
        marginBottom: '3rem',
        marginTop: '3rem',
    },

    quoteWrap: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    quote: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '3rem',
        background: 'rgba(245, 245, 245, 0.5)',
        padding: '50px 40px',
        fontSize: '22px',
        borderRadius: '10px',
        border: '1px solid #e1affd',
        borderBottom: '6px solid #e1affd',
        boxShadow: '0 0 8px 5px rgba(225, 175, 253,0.5) 6px 20px 0 rgba(0, 0, 0, 0.19)',
        clipPath: 'polygon(0% 0%, 120% 0%, 120% 120%, 0% 120%)',

    },

    btnWrapper: {
        display: 'flex',
        padding: '8rem',
        border: '2px solid #e1affd',
        flexDirection: 'column',
        alignItems: 'center',
    },
}