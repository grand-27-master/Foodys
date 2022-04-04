export default function MenuCard({menu})
{

    // const food_type=props.food_type;
    // const food=props.food;
    // const food_description=props.food_description;
    // const food_image=props.food_image;

    // console.log(menu);
    return(
        <>        
        {/* to change to it to section layout  */}
        <section className="menu-card">
        {menu.map((curr_val)=>{
            const {id,name,description,image}=curr_val;
            return(<>           
            <div className="card-container" key={id}>
            <div className="card">
            <div className="card-body">
                {/* <span className="card-type"> }</span> */}
                <h3 className="card-title">  {name}</h3>
                <span className="card-text"> {description}</span>              
                <img src={image} alt="" className="card-media"/>
            </div>
        </div>
        </div>        
        </>
        )
        })}
        </section>      
        </>
    );
}