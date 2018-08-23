import React, { Component } from 'react';

class Update extends Component{
    constructor(props){
        super(props);
        if(this.props.location.state != undefined){
          this.state = {
              data: this.props.location.state.detail
          };
        } else {
          this.state = {
              data: ''
          };
          this.props.history.push('/');
        }

        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onList = this.onList.bind(this);
    }

    onChange(event) {
      event.preventDefault();

      this.setState({
        data: {
          id: this.state.data.id,
          title: this.inputTitle.value,
          body: this.inputBody.value,
          userId: this.state.data.userId
        }
      });
    }

    onUpdate() {
      fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.data.id, {
          method: 'PUT',
          body: JSON.stringify({
            id: this.state.data.id,
            title: this.state.data.title,
            body: this.state.data.body,
            userId: this.state.data.userId
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
      .then(response => response.json())
      .then(json => console.log('Update: ',json))
    }

    onDelete() {
      fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.data.id, {
        method: 'DELETE'
      })
    }

    onList(){
      this.props.history.push('/');
    }

    render() {
        return(
            <div>
              <button onClick={this.onList}>Back</button>
              <button onClick={this.onUpdate}>Update</button>
              <div>
                <label>
                  Title:
                </label>
                <input type="text" onChange={this.onChange} value={this.state.data.title} ref={inputTitle => this.inputTitle = inputTitle}/>
              </div>
              <div>
                <label>
                  Body:
                </label>
                <input type="text" onChange={this.onChange} value={this.state.data.body} ref={inputBody => this.inputBody = inputBody}/>
              </div>
              <button onClick={this.onDelete}>Delete</button>
            </div>
        )
    }
};

export default Update;
