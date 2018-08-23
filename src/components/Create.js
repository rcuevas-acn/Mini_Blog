import React, { Component } from 'react';

class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ''
        };

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {

    }

    onClick() {

    }

    render() {
        return(
            <div>
                CREATE PAGE
            </div>
        )
    }
};

export default Create;
