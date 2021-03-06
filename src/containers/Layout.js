import React from 'react'
import Counter from '../components/Counter'

const Layout = React.createClass({
  getInitialState() {
    return {
      counter: 0,
    }
  },
  decrement(counter) {
    this.setState({
      counter: counter - 1,
    })
  },
  increment(counter) {
    this.setState({
      counter: counter + 1,
    })
  },
  render() {
    const { counter } = this.state

    return (
      <Counter
        count={ counter }
        decrement={ () => this.decrement(counter) }
        increment={ () => this.increment(counter) } />
    )
  },
})

export default Layout
