import './Header.scss';
import HeaderLogo from '../../assets/Logo.png';

const Header = () => {
    return (
      <header className='site-header'>
        <div className='header-details'>
          <div className='header-details-logo'>
            <img src={HeaderLogo} alt="Header Logo" />
          </div>
          <div className='header-details-text'>
            <h1>RainFocus Summit</h1>
            <p>December 15th</p>
            <p>Lehi, Utah</p>
          </div>
        </div>
        <button onClick={() => {}} className="header-edit-event-button">Edit event</button>
      </header>
  );
}

export default Header