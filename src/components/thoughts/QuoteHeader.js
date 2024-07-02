import { Link } from 'react-router-dom';
import logo from '../../images/LOGO.png';

const QuoteHeader = ({ toggle }) => {
  
    return (
    <nav style={styles.outerContainer}>
        <div style={styles.container}>
            <Link style={styles.link}to='/home'>
              <img width="75px" height="75px" syle={styles.logo} src={logo} alt="Trapstar logo"/>
            </Link>                               
        </div>
    </nav>
  );
};

export default QuoteHeader;

const styles = {
  outerContainer: {
    background: '#010606',
    height: '80px',
    marginTop: '-80px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 10,
  },
  
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '80px',
    zIndex: 1,
    width: '100%',
    padding: '0 24px',
    maxWidth: '1100px', 
    },

    link: {
      justifySelf: 'flex-start',
      cursor: 'pointer',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '24px',
      fontWeight: 'bold',
      textDecoration: 'none',
    },

    logo: {
      width: '75px',
      height: '75px',
    },
}