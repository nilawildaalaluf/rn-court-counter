import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Button, Header, Body, Title } from 'native-base'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      teamAScore: 0,
      teamBScore: 0
    }
  }

  teamA3Point() {
    this.setState({teamAScore: this.state.teamAScore + 3})
  }

  teamA2Point() {
    this.setState({teamAScore: this.state.teamAScore + 2})
  }

  teamAFreeThrow() {
    this.setState({teamAScore: this.state.teamAScore + 1})
  }

  teamB3Point() {
    this.setState({teamBScore: this.state.teamBScore + 3})
  }

  teamB2Point() {
    this.setState({teamBScore: this.state.teamBScore + 2})
  }

  teamBFreeThrow() {
    this.setState({teamBScore: this.state.teamBScore + 1})
  }

  resetButton() {
    this.setState({teamAScore: 0, teamBScore: 0})
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Court Counter</Title>
          </Body>
        </Header>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: '50%'}}>
            <Text style={styles.label}>Team A</Text>
            <Text style={styles.score}>{this.state.teamAScore}</Text>
            <Button block style={styles.button} onPress={() => this.teamA3Point()}>
              <Text style={styles.text}>+3 POINTS</Text>
            </Button>
            <Button block style={styles.button} onPress={() => this.teamA2Point()}>
              <Text style={styles.text}>+2 POINTS</Text>
            </Button>
            <Button block style={styles.button} onPress={() => this.teamAFreeThrow()}>
              <Text style={styles.text}>FREE THROW</Text>
            </Button>
          </View>
          <View style={{width: 1, backgroundColor: '#BDBDBD', height: '50%'}}></View>
          <View style={{width: '50%'}}>
            <Text style={styles.label}>Team B</Text>
            <Text style={styles.score}>{this.state.teamBScore}</Text>
            <Button block style={styles.button} onPress={() => this.teamB3Point()}>
              <Text style={styles.text}>+3 POINTS</Text>
            </Button>
            <Button block style={styles.button} onPress={() => this.teamB2Point()}>
              <Text style={styles.text}>+2 POINTS</Text>
            </Button>
            <Button block style={styles.button} onPress={() => this.teamBFreeThrow()}>
              <Text style={styles.text}>FREE THROW</Text>
            </Button>
          </View> 
        </View> 
        <Button block style={styles.button} onPress={() => this.resetButton()}>
          <Text style={styles.text}>RESET</Text>
        </Button>
      </Container>
    )
  }
}
const styles = {
  button: {
    margin: 8
  },
  text: {
    color: '#FFF'
  },
  label: {
    textAlign: 'center'
  },
  score: {
    fontSize: 50,
    textAlign: 'center'
  }
}

export default App
