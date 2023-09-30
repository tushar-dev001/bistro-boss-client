import ChefCard from "../../Shared/ChefCard/ChefCard"

const OrderTab = ({items}) => {
  return (
    <div className="grid md:grid-cols-3">
            {items.map((item) => (
              <ChefCard key={item._id} item={item}></ChefCard>
            ))}
          </div>
  )
}

export default OrderTab