import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: '#333',
      padding: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      zIndex: 1000, 
    },
    ul: {
      listStyleType: 'none',
      display: 'flex',
      justifyContent: 'center',
      padding: '0',
      margin: '0',
    },
    li: {
      margin: '0 15px',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1.2rem',
      padding: '10px 15px',
      borderRadius: '5px',
      transition: 'background-color 0.3s ease',
    },
    linkHover: {
      backgroundColor: '#555',
    },
    activeLink: {
      backgroundColor: '#ffcc00', 
      color: '#333',
    },
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        {['fire', 'water', 'ground', 'flying', 'grass'].map((type) => (
          <li key={type} style={styles.li}>
            <NavLink
              to={`/category/${type}`}
              style={({ isActive }) => 
                isActive 
                  ? { ...styles.link, ...styles.activeLink } 
                  : styles.link
              }
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.linkHover.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalise first letter */}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
