import React, { Component } from 'react';

class Create extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: {
              title: '',
              body: '',
              userId: ''
            }
        };

        this.onCreate = this.onCreate.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onList = this.onList.bind(this);
    }

    onChange(event){
      event.preventDefault();

      this.setState({
        data: {
          title: this.inputTitle.value,
          body: this.inputBody.value,
          userId: this.inputUserId.value
        }
      });
    }

    onCreate() {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: this.state.data.title,
          body: this.state.data.body,
          userId: this.state.data.userId
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
    }

    onList(){
      this.props.history.push('/');
    }

    render() {
        return(
            <div>
              <button onClick={this.onList}>Back</button>
              <button onClick={this.onCreate}>Create</button>
              <div>
                <label>
                  Title:
                </label>
                <input type="text" onChange={this.onChange} ref={inputTitle => this.inputTitle = inputTitle}/>
              </div>
              <div>
                <label>
                  Body:
                </label>
                <input type="text" onChange={this.onChange} ref={inputBody => this.inputBody = inputBody}/>
              </div>
              <div>
                <label>
                  User ID:
                </label>
                <input type="text" onChange={this.onChange} ref={inputUserId => this.inputUserId = inputUserId}/>
              </div>
            </div>
        )
    }
};

export default Create;
