export default function Navbar({filterItems,menuList})
{
    return(
        <>       
    <nav className="navbar">
      <div className="btn-group">
          {menuList.map((curr_val)=>{
              return(<button className="btn-group__item" onClick={()=>filterItems(curr_val)}>{curr_val}</button>);
          })}       
      </div>
    </nav>       
        </>
    );
}