import React from 'react'

class AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            productname:"",
            productprice:"",
        }
    }
    render() { 
        return (
            <form className="row d-flex justify-content-center" onSubmit={(e) => { e.preventDefault(); this.props.addItem(this.state.productname, Number(this.state.productprice))}}>
                <div className="mb-3 col-4">
                    <label htmlFor="name" className="form-label">Product Name</label>
                    <input type="text" className="form-control" name="productname" onChange={(e)=>{this.setState({productname: e.currentTarget.value})}} value={this.state.productname} aria-describedby="name" id="name" />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" name="productprice" onChange={(e)=>{this.setState({productprice: Number(e.currentTarget.value)})}} value={this.state.productprice} id="price" />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="price" className="form-label invisible">Add new items</label>
                    <button type="submit" className="form-control btn btn-primary" >Add</button>
                </div>
            </form>
        )
    }
}
 
export default AddItem;