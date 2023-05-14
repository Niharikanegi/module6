import React from 'react'
class Lab2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Hello World' };
        this.nameChange = this.nameChange.bind(this);
        console.log("inside constructor")
    }
    componentDidMount(){
        console.log("inside componentDidMount()")
    }
    shouldComponentUpdate(){
        console.log("inside shouldComponentUpdate it should return true")
        return true
    }
    componentDidUpdate(prev,Props, prevState, snapshot){
        console.log("inside componentDidUpdate")
    }
    nameChange() {
        this.setState({ name: 'Hello Niharika' });
        
    }
    render() {
        console.log("Rendering")
        return (
            <div>
                <h1> {this.state.name} </h1>
                <button onClick={() => this.nameChange()}> Click Me </button>
            </div>
        )
    }
}
export default Lab2;