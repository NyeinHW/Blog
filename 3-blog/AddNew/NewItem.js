import React from 'react'
export default class NewItem extends React.Component{
    render(){
        return(
<React.Fragment>
    <form >
        <label>
            Title    : <input></input>
          </label>
          <br/>
          <label>
              Author :<input></input>
          </label>
          <label>
            Date   :<input></input>
          </label>
          <br/>
          <label>
            Description   :<input></input>
          </label>
          <br/>
          <button type='submit'>Add</button>
    </form>
</React.Fragment>

        )
    }
}