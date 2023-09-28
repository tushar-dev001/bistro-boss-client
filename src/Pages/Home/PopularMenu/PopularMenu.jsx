import { useEffect, useState } from "react"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import MenuItem from "../Home/Shared/MenuItem/MenuItem"

const PopularMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item => item.category === 'popular')
            setMenu(popularItems)
        })
    },[])

  return (
    <section>
        <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
        ></SectionTitle>

        <div className="grid md:grid-cols-2 gap-10">
            {
                menu.map(item => <MenuItem
                    key={item._id}
                    item={item}
                ></MenuItem>)
            }
        </div>
        
    </section>
  )
}

export default PopularMenu