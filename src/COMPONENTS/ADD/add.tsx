import { useEffect, useState } from "react";
import "./add.css";
import axios from "axios";
function ADD() {

  interface MyItems{
    itemName: string;
    quantity: string;
    price: string;
    url:string;
  }
  const [items , setItems] =useState<MyItems[]>([]);

  useEffect(()=>{
    axios
      .get<MyItems[]>("http://localhost:8080/get/prd")
      .then((res)=>{
      setItems(res.data)
      })
      .catch((error)=>console.log(error))
  },[])
  return (
    <div>
      <nav className="navigation">
        <a href="index.html" className="logo">
          <span>e</span>Grocery
        </a>

        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon">
          <span className="nav-icon"></span>
        </label>

        <ul className="menu">
          <li>
            <a href="index.html" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#category">Categories</a>
          </li>
          <li>
            <a href="#popular-bundle-pack">Our Packages</a>
          </li>
        </ul>

        <div className="right-nav">
          <a href="#" className="like">
            <i className="far fa-heart"></i>
            <span>0</span>
          </a>

          <a href="#" className="cart">
            <i className="fas fa-shopping-cart"></i>
            <span>0</span>
          </a>
        </div>
      </nav>

      <section id="search-banner">
        <img alt="bg" className="bg-1" src="images/bg-1.png" />
        <img alt="bg-2" className="bg-2" src="images/bg-2.png" />

        <div className="search-banner-text">
          <h1>Order Your daily Groceries</h1>
          <strong>#Free Delivery</strong>

          <form action="" className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              className="search-input"
              placeholder="Search your daily groceries"
              name="search"
              required
            />
            <input type="submit" className="search-btn" value="Search" />
          </form>
        </div>
      </section>

      <section id="category">
        <div className="category-heading">
          <h2>Category</h2>
          <span>All</span>
        </div>

        <div className="category-container">
          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse1.mm.bing.net/th?id=OIP.fgu0DYf6vJx1WKnw_Iik9gHaD8&pid=Api&P=0&h=180"
            />
            <span>RICE</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse2.mm.bing.net/th?id=OIP.rRP_SuDUv9XGst_CfMyfWgHaHa&pid=Api&P=0&h=180"
              height={100}
              width={100}
            />
            <span>OIL</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse1.mm.bing.net/th?id=OIP.e8EYvMfGjkkZlmyZ7Fh9XwHaHa&pid=Api&P=0&h=180"
            />

            <span>SOAPS</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse3.mm.bing.net/th?id=OIP.WwhQnET9BiODBx196fJUPAHaEA&pid=Api&P=0&h=180"
            />
            <span>PASTE</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse2.mm.bing.net/th?id=OIP.LwE0R8zTDL4gKqLfG3AuZgHaEA&pid=Api&P=0&h=200"
            />
            <span>CHOCOLATES</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse2.mm.bing.net/th?id=OIP.k1aYRxQIdbM_8Iru-7E2sAHaDq&pid=Api&P=0&h=180"
            />
            <span>COOL DRINKS</span>
          </a>

          <a href="#" className="category-box">
            <img
              alt="Fish"
              src="https://tse1.mm.bing.net/th?id=OIP.Ve85CwwF8e9e4F8gXdso7QHaHn&pid=Api&P=0&h=180"
            />
            <span>MILK</span>
          </a>
        </div>
      </section>

      <section id="popular-product">
        <div className="product-heading">
          <h3>Popular Product</h3>
          <span>All</span>
        </div>
      {items.map((it)=>(
          <div className="product-container">
              <div className="product-box">
              {<img src={it.url}></img>}
              <strong>{it.itemName}</strong>
              <span className="quantity">{it.quantity}</span>
              <span className="price">{it.price}</span>
              <a href="#" className="cart-btn">
                <i className="fas fa-shopping-bag"></i> Add Cart
              </a>
              <a href="#" className="like-btn">
                <i className="far fa-heart"></i>
              </a>
            </div>
              </div>
       
      ))}
      </section>
        

      

      <section id="popular-bundle-pack">
        <div className="product-heading">
          <h3>Popular Bundle Pack</h3>
        </div>

        <div className="product-container">
          <div className="product-box">
            <img alt="pack" src="images/pack1.png" />
            <strong>Big Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato,+4</span>
            <span className="price">Rs.599/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img alt="apple" src="images/pack2.jpg" />
            <strong>Large Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato,+2</span>
            <span className="price">Rs.390/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img alt="apple" src="images/pack3.png" />
            <strong>Small Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato</span>
            <span className="price">Rs.159/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img alt="pack" src="images/pack1.png" />
            <strong>Big Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato,+4</span>
            <span className="price">Rs.325/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img alt="apple" src="images/pack2.jpg" />
            <strong>Large Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato,+2</span>
            <span className="price">Rs.260/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>

          <div className="product-box">
            <img alt="apple" src="images/pack3.png" />
            <strong>Small Pack</strong>
            <span className="quantity">Lemone, Tamato, Patato</span>
            <span className="price">Rs.150/-</span>
            <a href="#" className="cart-btn">
              <i className="fas fa-shopping-bag"></i> Add Cart
            </a>
            <a href="#" className="like-btn">
              <i className="far fa-heart"></i>
            </a>
          </div>
        </div>
      </section>

      <section id="clients">
        <div className="client-heading">
          <h3>What Our Client's Say</h3>
        </div>

        <div className="client-box-container">
          <div className="client-box">
            <div className="client-profile">
              <img alt="client" src="images/client-1.jpg" />
              <div className="profile-text">
                <strong>James Mcavoy</strong>
                <span>CEO</span>
              </div>
            </div>

            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              ea id, itaque architecto atque mollitia aperiam voluptatem
              consequatur incidunt sed placeat, harum recusandae quaerat at hic
              labore eius laborum quas!
            </p>
          </div>

          <div className="client-box">
            <div className="client-profile">
              <img alt="client" src="images/client-2.jpg" />
              <div className="profile-text">
                <strong>Adward Mcavoy</strong>
                <span>Software Developer</span>
              </div>
            </div>

            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              ea id, itaque architecto atque mollitia aperiam voluptatem
              consequatur incidunt sed placeat, harum recusandae quaerat at hic
              labore eius laborum quas!
            </p>
          </div>

          <div className="client-box">
            <div className="client-profile">
              <img alt="client" src="images/client-3.jpg" />
              <div className="profile-text">
                <strong>Ava Alex</strong>
                <span>Marketer</span>
              </div>
            </div>

            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              ea id, itaque architecto atque mollitia aperiam voluptatem
              consequatur incidunt sed placeat, harum recusandae quaerat at hic
              labore eius laborum quas!
            </p>
          </div>
        </div>
      </section>

      {/*<section id="partner">

        <div className="partner-heading">
            <h3>Our Trusted Partner</h3>
        </div>


        <div className="logo-container">
            <img alt="logo" src="images/logo-1.png"/>
            <img alt="logo" src="images/logo-2.png"/>
            <img alt="logo" src="images/logo-3.png"/>
            <img alt="logo" src="images/logo-4.png"/>
        </div>
    </section>
     <section id="download-app">

        
        <div className="app-img">
            <img alt="app" src="images/mobile-app.png"/>
        </div>

       
        <div className="download-app-text">
            <strong>Download App</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id officiis, ratione, non doloribus similique nam aliquam doloremque, ipsa neque voluptas at recusandae est cumque ipsum. Vel sint libero odit placeat?</p>
           
            <div className="download-btns">
                <a href="#"><img alt="" src="images/appstore-btn.png"/></a>
                <a href="#"><img alt="" src="images/googleplay-btn.png"/></a>
            </div>
        </div>

    </section> */}

      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <a href="#">
              <span>e</span>Grocery
            </a>

            <div className="footer-social">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <strong>Product</strong>
            <ul>
              <li>
                <a href="#">Clothes</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <strong>Category</strong>
            <ul>
              <li>
                <a href="#">Beauty</a>
              </li>
              <li>
                <a href="#">Meats</a>
              </li>
              <li>
                <a href="#">Kids</a>
              </li>
              <li>
                <a href="#">Clothes</a>
              </li>
            </ul>
          </div>

          <div className="footer-links">
            <strong>Contact</strong>
            <ul>
              <li>
                <a href="#">Phone : +123456789</a>
              </li>
              <li>
                <a href="#">Email : Example@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default ADD;
