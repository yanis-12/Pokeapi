import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate(); 

  const handleStartAdventure = () => {
    navigate('/categories'); 
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', 
      width: '100vw',  
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      textAlign: 'center',
    },
    heroSection: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '3rem',
      fontFamily: "'Poppins', sans-serif",
      color: '#ff6347', 
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.5rem',
      fontFamily: "'Roboto', sans-serif",
      color: '#555',
      marginBottom: '30px',
    },
    button: {
      fontSize: '1.2rem',
      padding: '10px 20px',
      backgroundColor: '#ffcc00', 
      color: '#fff', 
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#ffb700',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.title}>Bienvenue sur l application Pokémon</h1>
        <p style={styles.subtitle}>
          Explorez les différents types de Pokémon et apprenez-en plus sur vos créatures préférées !
        </p>
        <button
          style={styles.button}
          onClick={handleStartAdventure} 
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
        >
          Commencer votre aventure
        </button>
      </div>
    </div>
  );
};

export default HomePage;
