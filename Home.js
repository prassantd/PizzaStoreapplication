import "./Home.css";

function Home() {
    return (
        <>
            <h1 className="heading">Welcome to Pizzeria Delight</h1>
       
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img className="pizza" src="https://images.pexels.com/photos/845811/pexels-photo-845811.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pizza" width="700" height="500" loading="lazy"/>
                </div>
                <div className="col-lg-6">
                    <h1 id="res" className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Discover Deliciousness at Pizzeria Delight!</h1>
                    <p className="lead">Welcome to Pizzeria Delight! We’re dedicated to bringing you the finest pizzas made from the freshest ingredients. Our menu features a wide range of delicious options, from classic Margherita and Pepperoni to gourmet specialties like Truffle Mushroom and BBQ Chicken. We also offer a variety of sides, drinks, and desserts to complement your meal. Whether you're looking for a quick bite or planning a family feast, our easy-to-navigate website ensures a seamless ordering experience with fast delivery and exceptional customer service. Indulge in the best pizza in town and make every meal a memorable one!</p>
                </div>
            </div>


            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h1 className="display-4 fw-bold text-body-emphasis">Indulge in Culinary Excellence at Pizzeria Delight</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Discover the art of pizza-making at its finest with Pizzeria Delight, where every bite tells a story of passion, tradition, and innovation. Our dedication to crafting extraordinary pizzas begins with sourcing the highest-quality ingredients, from vine-ripened tomatoes to artisanal cheeses and premium meats. Each pizza is a masterpiece, meticulously prepared to ensure a perfect balance of flavors and textures that will delight your taste buds. But our commitment to excellence extends beyond our menu. We offer an inviting ambiance that makes every meal a special occasion, whether you're dining with loved ones or enjoying a quiet moment alone. Our online ordering system ensures that you can savor our gourmet creations from the comfort of your home, with prompt delivery that brings the essence of our kitchen straight to your doorstep. At Pizzeria Delight, we're not just serving pizza; we're crafting experiences. Our friendly staff is dedicated to providing impeccable service, making every visit or order memorable. Experience the pinnacle of pizza perfection and join us in celebrating the flavors that make life delicious.</p>
                </div>
                <div className="overflow-hidden">
                    <div className="container px-5">
                        <img src="https://images.pexels.com/photos/3762075/pexels-photo-3762075.jpeg?auto=compress&cs=tinysrgb&w=600" width="700" height="500" loading="lazy"/>
                    </div>
                </div>
            </div>

            <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.pexels.com/photos/1049626/pexels-photo-1049626.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="First slide"/>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1 className="display-4">Deliciously Fresh</h1>
                                <p className="opacity-75">Experience the burst of flavors with our freshly made pizzas, prepared with the finest ingredients to ensure every bite is a taste of perfection.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">Explore Our Menu</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="d-block w-100" alt="Second slide"/>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className="display-4">Crafted with Passion</h1>
                                <p>Each pizza is a masterpiece crafted with passion and dedication, ensuring an unforgettable culinary experience with every slice.</p>
                                <p><a className="btn btn-lg btn-primary" href="#">See Our Specials</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Home;
