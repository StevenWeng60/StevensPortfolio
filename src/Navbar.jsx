import './Navbar.css'

function Navbar() {
  return <>
  <div className='navbarContainer'>
    <h2 className='websiteTitle' >Navbar</h2>
    <ul className='navbarList'>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Blog</li>
      <li>Contact</li>
    </ul>
  </div>
  </>;
}

export default Navbar;