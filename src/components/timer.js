import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super()
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: null
        }
    }

    componentDidMount = () => {
        if (this.state.seconds) {
            if (this.state.seconds === 0) {
                this.setState({ seconds: this.state.seconds + 1 })
            }
            else {
                setTimeout(() => {
                    this.setState({ seconds: this.state.seconds + 1 })
                }, 1000)
            }
        }
    }

    componentDidUpdate = () => {
        // if (this.state.seconds) {
        if (this.state.seconds === 60) {
            this.setState({ seconds: 0, minutes: this.state.minutes + 1 })
        }
        if (this.state.minutes === 60) {
            this.setState({ seconds: 0, minutes: 0, hours: this.state.hours + 1 })
        }
        else {
            setTimeout(() => {
                this.setState({ seconds: this.state.seconds + 1 })
            }, 1000)
        }
        // }
    }

    start = () => {
        this.setState({ seconds: 0, minutes: 0, hours: 0 })
    }

    stop = () => {
        this.setState({ seconds: null, minutes: null, hours: null })
    }

    render() {
        return (
            <div>
                <div>timer</div>
                <div>
                    <button type='button' onClick={this.start}>Start</button>
                    <button type='button' onClick={this.stop}>Stop</button>
                </div>
                {this.state.seconds ?
                    <div>
                        <span>{!this.state.hours.toString()[1] ? '0' + this.state.hours : this.state.hours}</span> : <span> </span>
                        <span>{!this.state.minutes.toString()[1] ? '0' + this.state.minutes : this.state.minutes}</span> : <span> </span>
                        <span>{!this.state.seconds.toString()[1] ? '0' + this.state.seconds : this.state.seconds}</span>
                    </div>
                    :
                    <div> 00 : 00 : 00</div>
                }
            </div>
        )
    }
}

export default Timer;