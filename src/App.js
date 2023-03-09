import React, { Component } from "react";
import { Container, BoxCounter, Button, Title } from "./App.styled";

export default class App extends Component {
  state = {
    time: 0,
    iniciado: false,
  };

  play = () => {
    const count = setInterval(() => {
      this.setState({
        time: this.state.time + 1,
        iniciado: true,
      });
      if (this.state.time >= 10 || this.state.time < 0) {
        this.setState({
          time: 0,
        });
      }
    }, 1000);

    this.stop = () => {
      this.setState({
        iniciado: false,
      });
      clearInterval(count);
    };
  };

  reset = () => {
    this.setState({
      time: 0,
    });
  };

  render() {
    return (
      <Container>
        <BoxCounter>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8093/8093400.png"
            alt="relogio"
          />

          <Title>{this.state.time}</Title>

          <div className="group-btns">
            <Button onClick={this.stop}>Stop</Button>

            <Button onClick={this.reset}>Reset</Button>

            <Button onClick={this.play} disabled={this.state.iniciado}>
              Play
            </Button>
          </div>
        </BoxCounter>
      </Container>
    );
  }
}
