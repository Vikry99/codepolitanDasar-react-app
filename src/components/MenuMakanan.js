import React from "react";

const  MenuMakanan = (props) => {
    return (
        <>
        <div style={{border: "1px solid black", width:"300px", margin:"auto"}}>
            <p>Nama Menu: {props.menuMakanan}</p>
            <p>Harga: Rp.{props.hargaMenu}</p>
        </div>
        </>
    )
}


export default MenuMakanan