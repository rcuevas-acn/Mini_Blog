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
      .then(json => {
        console.log('Update: ',json);
        alert("Title: "+json.title+"\nhas successfully updated");
      })
    }

    onDelete() {
      fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.data.id, {
        method: 'DELETE'
      }).then(response => {
        alert("Title: "+this.state.data.title+"\nhas successfully deleted");
      })
    }

    onList(){
      this.props.history.push('/');
    }

    render() {
        return(
          <div className={"Box-body"}>
            <div className={"Box-row"}>
              <div style={{width: "50%", display: "inline-block"}} align="left">
                <button className={"btn btn-large"} onClick={this.onList}>Back</button>
              </div>
              <div style={{width: "50%", display: "inline-block"}} align="right">
                <button className={"btn btn-large"} onClick={this.onUpdate}>Update</button>
              </div>
            </div>
            <div>
              <div className={"Box-row"}>
                <label>
                  Title:&nbsp;
                  <input className={"form-control input-block"} value={this.state.data.title} type="text" onChange={this.onChange} ref={inputTitle => this.inputTitle = inputTitle}/>
                </label>
              </div>
              <div className={"Box-row"}>
                <label>
                  Body:&nbsp;
                  <textarea className={"form-control input-block"} value={this.state.data.body}  onChange={this.onChange} ref={inputBody => this.inputBody = inputBody}/>
                </label>
              </div>
            </div>
            <div className={"Box-row"}>
              <div style={{display: "inline-block"}}>
                <center>
                  <button className={"btn btn-large"} onClick={this.onDelete}>Delete</button>
                </center>
              </div>
            </div>
          </div>
        )
    }
};

export default Update;
