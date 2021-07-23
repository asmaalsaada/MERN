import React,{useState} from 'react'

const Tabs = (props) => {
    const {tabItems} = props;
    const [selected,setSelected] = useState(1);
    //selected index
    //in case we are recieving an empty array from the db
    // if (tabItems.length === 0)
    //     return "No tabs";
    return (
        <div style={{marginTop:40}}>
            <header>
            {
            tabItems.map( (item, i) => 
            <span 
            key={i}
            onClick={(event)=>{
                setSelected(i);
            }}
            style={{border:"1px solid black"
            ,padding:10
            ,marginRight:20}}>
            { item.header }</span>
            )}
        </header>
        <main >
            
            <h3 
            style={{border:"1px solid black",marginLeft:400,width:700}}>
                {tabItems[selected].content} </h3>
        </main>
        </div>
    )
}

export default Tabs;
