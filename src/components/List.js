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
        const styleCursor = "cursor: pointer"
        return(
            <div className={"Box-body"}>
              <div className={"Box-row"} align="right">
                <button className={"btn btn-large"} onClick={() => this.nextPath('/create','') }>
                    Create
                </button>
              </div>
                {
                    list.map(function(d, idx){
                        return(
                            <div className={"Box-row"} style={{cursor:'pointer'}} key={idx} onClick={() => nextPath('/update',d)}>{d.title}</div>
                        )
                    })
                }
            </div>
        )
    }
};

export default List;
