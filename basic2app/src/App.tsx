import React, { Component } from 'react';
import { connect } from "react-redux";
import { setName, setAge } from "./actions/userAction";

class App extends Component<Props> {
  clickSetName() {
    this.props.setName("Taro Yamada");
  }

  clickSetAge() {
    this.props.setAge(30);
  }

  render() {
    return (
      <div>
        <button
          onClick={ this.clickSetName.bind(this) }
        >
          set name
        </button>
        { this.props.name }
        <button
          onClick={ this.clickSetAge.bind(this) }
        >
          set age
        </button>
        { this.props.age }
      </div>
    );
  }
}

type Props = {
  name: string
} & {
  age: number,
} & {
  setName: Function,
} & {
  setAge: Function,
}

const mapStateToProps = (state:any) => {
  return {
    name: state.name,
    age: state.age,
  }
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setName: (name:string) => dispatch(setName(name)),
    setAge: (age:number) => dispatch(setAge(age)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
