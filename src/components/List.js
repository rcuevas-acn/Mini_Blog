import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ''
        };

        this.onClick = this.onClick.bind(this);
        this.nextPath = this.nextPath.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({
            data: json
        }))
    }

    onClick() {
        console.log(this.state.data);
        console.log(this.state.data[0]['title']);
    }

    nextPath(path){
      this.props.history.push(path);
    }

    render() {
        const list = [];
        for(var i = 0; i < this.state.data.length; i++){
          console.log(this.state.data[i]);
          list.push(this.state.data[i])
        }
        const onClickRender = this.onClick
        return(
            <div>
                {
                    list.map(function(d, idx){
                        return(
                            <div key={idx} onClick={onClickRender}>{d.title}</div>
                        )
                    })
                }
                <button onClick={() => this.nextPath('/create') }>
                    change path
                </button>
            </div>
        )
    }
};

export default List;
