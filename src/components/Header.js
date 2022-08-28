import PropTypes from 'prop-types'
import Button from './Button'
 
const Header = ({title}) => {
  
  const onClick = () => {
    console.log('clicked from Header component')
  }

  return (
    <header className='header'>
      <h1>{ title }</h1>
      <Button text='Add item' onClick={onClick}/>      
    
    </header>
  ) 
}

Header.defaultProps = {
  title: 'Default header value'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

const headingStyle = {
  color: 'green',
  backgroundColor: 'pink'
}

export default Header