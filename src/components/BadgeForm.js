import React from 'react';

class BadgeForm extends React.Component {
    state = {};

    handleClick = e => {
        console.log("button was click")
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('Form was Submit')
        console.log(this.state)
    }
    render () {
        return (
            <div>
                <h1>New Attendant</h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.state.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value= {this.state.lastName}></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value= {this.state.email}></input>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value= {this.state.jobTitle}></input>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" value= {this.state.twitter}></input>
                    </div>

                    <button type="button" onClick={this.handleSubmit} className= "btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}
export default BadgeForm;