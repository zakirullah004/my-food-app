
import './App.css'

const FoodData = [
  {
    name: "Biryani",
    img: "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?q=80&w=1000&auto=format&fit=crop",
    desc: "Spicy chicken biryani with extra masala",
    quantity: 5
  },
  {
    name: "Burger",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
    desc: "Juicy beef burger with cheese",
    quantity: 8
  },
  {
    name: "Pizza",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
    desc: "Cheesy pepperoni pizza",
    quantity: 6
  },
  {
    name: "Fries",
    img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1000&auto=format&fit=crop",
    desc: "Crispy salted french fries",
    quantity: 10
  },
  {
    name: "Shawarma",
    img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1000&auto=format&fit=crop",
    desc: "Chicken shawarma with garlic sauce",
    quantity: 7
  },
  {
    name: "Karahi",
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1000&auto=format&fit=crop",
    desc: "Traditional chicken karahi",
    quantity: 4
  },
  {
    name: "Nihari",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
    desc: "Slow-cooked spicy nihari",
    quantity: 3
  },
  {
    name: "Pasta",
    img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=1000&auto=format&fit=crop",
    desc: "Creamy white sauce pasta",
    quantity: 9
  },
  {
    name: "Sandwich",
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1000&auto=format&fit=crop",
    desc: "Grilled chicken sandwich",
    quantity: 5
  },
  {
    name: "Ice Cream",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1000&auto=format&fit=crop",
    desc: "Vanilla ice cream with chocolate syrup",
    quantity: 12
  },
  {
    name: "BBQ",
    img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1000&auto=format&fit=crop",
    desc: "Smoky grilled BBQ platter",
    quantity: 4
  },
  {
    name: "Donut",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop",
    desc: "Chocolate glazed donut",
    quantity: 11
  },
  {
    name: "Cake",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000&auto=format&fit=crop",
    desc: "Soft chocolate fudge cake",
    quantity: 2
  },
  {
    name: "Samosa",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
    desc: "Crispy potato samosa",
    quantity: 15
  },
  {
    name: "Roll",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1000&auto=format&fit=crop",
    desc: "Chicken paratha roll",
    quantity: 7
  },
  {
    name: "Pancakes",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=1000&auto=format&fit=crop",
    desc: "Fluffy pancakes with honey",
    quantity: 6
  },
  {
    name: "Momos",
    img: "https://t3.ftcdn.net/jpg/06/16/85/60/360_F_616856040_zCvPMQkPFOWsVb3Hxo7mQUYzlzciFCZs.jpg",
    desc: "Steamed chicken momos",
    quantity: 8
  },
  {
    name: "Salad",
    img: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=1000&auto=format&fit=crop",
    desc: "Fresh healthy vegetable salad",
    quantity: 5
  },
  {
    name: "Steak",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
    desc: "Grilled beef steak with sauce",
    quantity: 3
  },
  {
    name: "Chiken Paratha",
    img: "https://lh3.googleusercontent.com/proxy/ndgtFgbJYp_1L6c2YqLIx2SuuPpYc_MZ6L7clD05YgHzrKnVod2LppmERPyzqz4wZfn1W9kr2z3Wza979ie7bEvw9HbeRy_vDTvA5PgE",
    desc: "Homemade spicy chiken paratha",
    quantity: 3
  }
];

function App() {

  return (

    <div>

      <div id='HeadingArea'>
        <h1 id="Heading">My Food App</h1>
        <p className='ourMenu'>Our Menu</p>

        <p className='para'>Enjoy Karachi’s favorite meals delivered fast to your doorstep. From BBQ and biryani to burgers and desserts, order from top local restaurants with ease. Quick delivery, great taste, and amazing deals — all in one app!
        </p>
      </div>

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

      <div id='Footer'>
        <p>we are open since 2012 all right reserved</p>
        <button>Order Now</button>
      </div>

    </div>

  )
}

export default App
