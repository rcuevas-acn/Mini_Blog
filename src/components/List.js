import React, { Component } from 'react';

class List extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: ''
        };

        this.nextPath = this.nextPath.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => this.setState({
            data: json,
            selectedData: ''
        }))
    }

    nextPath(path, data){
      this.props.history.push({
        pathname: path,
        state: { detail: data }
      });
    }

    render() {
        const list = [];
        for(var i = 0; i < this.state.data.length; i++){
          list.push(this.state.data[i])
        }
        const nextPath = this.nextPath;
        return(
            <div>
                {
                    list.map(function(d, idx){
                        return(
                            <div key={idx} onClick={() => nextPath('/update',d)}>{d.title}</div>
                        )
                    })
                }
                <button onClick={() => this.nextPath('/create','') }>
                    change path
                </button>
            </div>
        )
    }
};

export default List;
