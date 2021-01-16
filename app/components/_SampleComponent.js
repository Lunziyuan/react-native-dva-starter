import React from 'react'
// import propTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'

import Touchable from './Touchable'

export default class Component extends React.PureComponent {
  // static propTypes = {
  //   text: propTypes.text,
  //   children: propTypes.node,
  //   style: propTypes.object,
  //   textStyle: propTypes.object,
  // }

  // static defaultProps = {
  //   text: '',
  //   children: undefined,
  //   style: {},
  //   textStyle: {},
  // }

  // shouldComponentUpdate(nextProps, nextState) {

  // }

  render() {
    const { text, children, style, textStyle, ...rest } = this.props
    return (
      <Touchable style={[styles.button, style]} {...rest}>
        <Text style={[styles.text, textStyle]}>{text || children}</Text>
      </Touchable>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 3,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#037aff',
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontSize: 16,
    color: '#037aff',
  },
})
