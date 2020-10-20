import React, { Component } from 'react'

interface PropTypes {
  children: {} | []
}

export const errorMessage = 'Something went wrong!'
class ErrorBoundary extends Component<PropTypes> {
  state = { error: false }

  static getDerivedStateFromError() {
    return { error: true }
  }

  render() {
    const { error } = this.state
    const { children } = this.props

    if(error) {
      return <h1>{errorMessage}</h1>
    }

    return children
  }
}

export default ErrorBoundary
