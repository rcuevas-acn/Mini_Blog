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
      .then(json => {
        console.log(json);
        alert("Title: "+json.title+"\nhas successfully created");
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
                  <button className={"btn btn-large"} onClick={this.onCreate}>Save</button>
                </div>
              </div>
              <div>
                <div className={"Box-row"}>
                  <label>
                    Title:&nbsp;
                    <input className={"form-control input-block"} type="text" onChange={this.onChange} ref={inputTitle => this.inputTitle = inputTitle}/>
                  </label>
                </div>
                <div className={"Box-row"}>
                  <label>
                    Body:&nbsp;
                    <textarea className={"form-control input-block"} onChange={this.onChange} ref={inputBody => this.inputBody = inputBody}/>
                  </label>
                </div>
                <div className={"Box-row"}>
                  <label>
                    User ID:&nbsp;
                    <input className={"form-control"} type="text" onChange={this.onChange} ref={inputUserId => this.inputUserId = inputUserId}/>
                  </label>
                </div>
              </div>
            </div>
        )
    }
};

export default Create;
