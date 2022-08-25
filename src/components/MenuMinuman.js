import React, { Component } from "react";

class MenuMinuman extends Component {
    render(){   
    return (
        <>
        <div style={{ border: "1px solid black", width: "300px", margin:"auto"}}>
            <p>Nama Menu: {this.props.menuMinuman}</p>
            <p>Harga: Rp.{this.props.hargaMenu}</p>
        </div>
        </>
    )
}
}

export default MenuMinuman