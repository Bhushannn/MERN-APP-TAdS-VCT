import React from 'react'
import classes from './DataLoader.module.css'
import preloader from './wpreloader.gif'
// eslint-disable-next-line
function DataLoader(props) {
    return (
        <div className={classes.DataLoader} style={{backgroundColor:"#eddaac"}}>
            {/* <object  type="image/svg+xml" data="/assets/svgs/dataloader.svg" style={{width:"25em"}}/> */}
            <img src={preloader} alt="loading..." style={{width:"auto"}} className={classes.pre}/>
        </div>
    )
}

export default DataLoader
