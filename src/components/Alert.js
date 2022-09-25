import React, { Component } from 'react'

export default class Alert extends Component {
    render() {
        return (
            this.props.alert && <div className="alert alert-dark" role="alert" style={{ textAlign: 'center', color: 'black' }}>
                <strong >{this.props.msg}</strong>
            </div>
        )
    }
}
