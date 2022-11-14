import React from 'react'
import { logout } from '../../../actions/auth'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '../../layout/Container'

const Home = ({auth: {user}}) => {

  console.log(user)
  return (
    <Container>
            <div className="container-fluid">
                
            </div>
            
    </Container>
  )
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
}) 

export default connect(mapStateToProps)(Home)