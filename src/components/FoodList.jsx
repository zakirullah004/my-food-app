function FoodList({FoodData}) {
  return (
    <div id="foodList">
      {
        FoodData.map(function (item) {
          return (
            <div id="foodItem">
              <div id="foodImg">
                <img src={item.img} alt="" />
              </div>
              <div id="foodDetails">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                <p>{item.quantity}</p>
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default FoodList