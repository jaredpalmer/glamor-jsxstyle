import React from 'react';
import { Column, Row, Block } from 'glamor-jsxstyle';
import TextInput from './TextInput';

export default class App extends React.Component {
  state = {
    myinput: '',
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Row maxWidth="600px">
          <Column flex="1" height="100px">
            <Block flex="1">
              <Block
                hover={{ color: 'blue' }}
                fontSize="1.3rem"
                fontFamily="monospace"
              >
                hover over me
              </Block>
            </Block>
            <TextInput
              boxSizing="border-box"
              value={this.state.myinput}
              width="100%"
              type="text"
              placeholder="Inputs can be styled too"
              name="myinput"
              onChange={this.handleChange}
            />
          </Column>
          <Column flex="1">
            <Block>Some text</Block>
            <Block>Some text</Block>
          </Column>
        </Row>
      </div>
    );
  }
}
