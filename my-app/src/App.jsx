import React from 'react';
import Btns from './components/Btns';
import photo1 from './assets/photo1.png';
import photo2 from './assets/photo2.png';
import photo3 from './assets/bed.png';
import photo4 from './assets/bath.png';
import photo5 from './assets/door.png';
import photo6 from './assets/cube.png';
import photo7 from './assets/tree.png';
import photo8 from './assets/coffee.png';
import photo9 from './assets/mouuntains.png';
import photo10 from './assets/ircond.png';
import photo11 from './assets/bag.png';
import photo12 from './assets/glass.png';
import photo13 from './assets/pizza.png';
import photo14 from './assets/fivestar.png';
import photo15 from './assets/fourstars.png';
import photo16 from './assets/photo3.png';
import photo17 from './assets/wifi.png';
import photo18 from './assets/bread.png';
import photo19 from './assets/brush.png';
import photo20 from './assets/spoon.png';
import photo21 from './assets/l1.png';
import photo22 from './assets/facebook.png';
import photo23 from './assets/instagram.png';


function App() {
    return (
      <div>
              <header className='w-[100%]'>
                  <nav className='py-[3vh] bg-[#52503B] text-white grid md:grid-cols-3'>
                      <section className='flex justify-center py-3 items-center'>
                        <img src={photo1} alt="" />
                      </section>
                      <section className='flex justify-evenly items-center py-3' >
                         <a href="">Start</a>
                         <a href="">Contact</a>
                         <a href="">Our history</a>
                      </section>
                      <section className='flex justify-center py-3'>
                            <Btns title='Book Now' />
                      </section>
                  </nav>
                  <section style={{ backgroundImage: `url(${photo2})` }} className='text-white text-center bg-cover flex flex-col justify-evenly items-center py-[20vh]'>
                          <img src={photo1} className='py-5' />
                        <h1 className='py-5 text-[3em]'>Experience the perfect combination of modern <br /> housing & natural scenery.</h1>
                        <p className='py-5'>Located in Lofoten, norway</p>
                  </section>
              </header>
              <main className='w-[100%]'>
                    <section className='bg-[#FAF8F0] md:flex justify-evenly py-[15vh] text-center '>
                        <section className='py-[2vh]'>
                              <p>
                                The Guest House is the perfect weekend get-away <br />
                              housing. Located in the Norwegian archipelago, <br />
                              Lofoten, it's a great escape from the hustle and <br />
                              bustle of the city. Lorem ipsum dolor sit amet, <br />
                              consectetur adipiscing elit. Nullam scelerisque <br />
                              aliquam odio et faucibus. Nulla rhoncus feugiat <br />
                              eros quis consectetur. Morbi neque ex, <br /> 
                              condimentum dapibus congue et, vulputate ut ligula.
                              </p>
                        </section>
                        <section className='space-y-[10vh]  justify-center items-center'>
                          <p className='flex flex-col justify-center items-center space-y-5'>
                          Below you'll find information about the <br /> 
                          accommodation and what's included in the price. <br />
                          Don't hesitate to reach out to us vi the contact page <br />
                          if you have any questions around your stay.
                            <Btns title='Book now'/>
                          </p>
                        </section>
                    </section>
                    <section className='py-[20vh] text-center text-[5em] text-[#52503B] font-bold '>
                        <p>
                        The Guest House is the <br /> perfect weekend <br /> getaway cabin.
                        </p>
                    </section>
                    <section className='bg-[#FAF8F0]'>
                        <section className='text-[#52503B] text-center py-[10vh]'>
                          <p className='text-[25px]'>Sleeping arrangements.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br />
                           scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis <br /> consectetur.</p>
                        </section>
                        <section className='grid lg:grid-cols-3 py-[10vh]'>
                              <section className='flex flex-col justify-evenly py-[2vh] items-center'>
                                   <img src={photo3} /> 
                                  <p>
                                  The cabin is equipped with 12 beds, 4 of which <br /> are in bunk. The rent includes linens for all beds.  
                                  </p>  
                              </section>
                              <section className='flex flex-col justify-evenly py-[2vh] items-center'>
                                   <img src={photo4} /> 
                                  <p>
                                  The cabin is equipped with 12 beds, 4 of which <br /> are in bunk. The rent includes linens for all beds.  
                                  </p>  
                              </section>
                              <section className='flex flex-col justify-evenly py-[2vh] items-center'>
                                   <img src={photo5} /> 
                                  <p>
                                  The cabin is equipped with 12 beds, 4 of which <br /> are in bunk. The rent includes linens for all beds.  
                                  </p>  
                              </section>
                        </section>
                    </section>
                    <section className='lg:flex flex-col'>
                        <section className=' text-[#52503B] py-[5vh] text-center'>
                             <p className='text-[25px]'>The perfect escape.</p>
                             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br />
                            scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis <br /> consectetur.</p>
                        </section>
                        <section className='lg:flex justify-evenly'>
                            <section className='flex flex-col'>
                                  <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                     <img src={photo6} alt="" />
                                      <p>
                                           Modern Kitchen Appliances <br />
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      </p>
                                   </section>
                                   <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                     <img src={photo7} alt="" />
                                      <p>
                                           Modern Kitchen Appliances <br />
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      </p>
                                   </section>
                                   <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                     <img src={photo8} alt="" />
                                      <p>
                                           Modern Kitchen Appliances <br />
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      </p>
                                   </section>
                                   <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                     <img src={photo9} alt="" />
                                      <p>
                                           Modern Kitchen Appliances <br />
                                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      </p>
                                   </section>
                            </section>
                            <section className='flex flex-col'>
                                  <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                        <img src={photo10} alt="" />
                                        <p>
                                             Modern Kitchen Appliances <br />
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                  </section>
                                  <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                        <img src={photo11} alt="" />
                                        <p>
                                             Modern Kitchen Appliances <br />
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                  </section>
                                  <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                        <img src={photo12} alt="" />
                                        <p>
                                             Modern Kitchen Appliances <br />
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                  </section>
                                  <section className='flex justify-center space-x-5 py-[5vh] items-center'>
                                        <img src={photo13} alt="" />
                                        <p>
                                             Modern Kitchen Appliances <br />
                                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>
                                  </section>
                            </section>  
                        </section>
                    </section>
                    <section className='bg-[#FAF8F0] py-[10vh]'>
                        <section className='text-center text-[#52503B]'>
                            <p className='text-[25px]'>Past guests.</p>
                            <p>Don't take our word for it! Have a look at what our previous guests say <br />
                            about their stay at the Guest House.</p>
                        </section>
                        <section className='py-[15vh] lg:flex justify-around'>
                            <section className='bg-[#FFFFFF] py-5 lg:flex flex-col p-[3vh]'>
                                <img src={photo14} alt="" />
                                <p>
                                We had an amazing stay at the Guest House!
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br />
                                varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br />
                                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. <br />
                                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc <br />
                                ut sem vitae risus tristique posuere.
                                </p>
                            </section>
                            <section className='bg-[#FFFFFF] py-5 lg:flex flex-col p-[3vh]'>
                                <img src={photo15} alt="" />
                                <p>
                                We had an amazing stay at the Guest House!
                                </p>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br />
                                varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br />
                                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. <br />
                                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc <br />
                                ut sem vitae risus tristique posuere.
                                </p>
                            </section>
                        </section>
                    </section>
                    <section className='w-[100%] flex h-[100vh]'>
                          <img src={photo16}  />
                    </section>
                    <section className='grid lg:grid-cols-2 py-[10vh] justify-around'>
                        <section className='p-[5vh]'>
                          <p className='text-[30px]'>Come together.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br /> scelerisque aliquam odio et faucibus.</p>
                        </section>
                        <section className=''>
                          <section className='lg:flex'> 
                              <section className='flex justify-center space-x-6 py-[3vh] items-center'>
                                   <img src={photo17} /> 
                                  <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  </p>  
                              </section>
                              <section className='flex justify-center space-x-6 py-[3vh] items-center'>
                                   <img src={photo18} /> 
                                  <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                  </p>  
                              </section>
                          </section>
                          <section className='lg:flex'>
                              <section className='flex justify-center space-x-6 py-[3vh] items-center'>
                                   <img src={photo19} /> 
                                  <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                  </p>  
                              </section>
                            <section className='flex justify-center space-x-6 py-[3vh] items-center'>
                                   <img src={photo20} /> 
                                  <p>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  </p>  
                            </section>
                          </section>
                        </section>
                    </section>
                    <section className='text-center text-[#52503B] py-[10vh] bg-[#FAF8F0]'>
                        <p className='text-[25px]'>We're already booked up for the <br /> spring — hurry up & secure your <br /> stay for the summer.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br /> scelerisque aliquam odio et faucibus.</p>
                        <section className='flex justify-center items-center space-x-5'>
                          <Btns title="Contacts"/>
                          <Btns title="Book now"/>
                        </section>
                    </section>
              </main>
              <footer className='bg-[#52503B]'>
                  <section className='grid lg:grid-cols-3 p-[15vh]'>
                        <section className='grid text-white'> 
                            <a href="">Pages</a>
                            <a href="">Start</a>
                            <a href="">Contact</a>
                            <a href="">Our history</a>
                            <a href="">Licenses</a>
                            <a href="">Instructions</a>
                            <a href="">Style guide</a>
                        </section>
                        <section className='flex flex-col text-center text-white'>
                          <p>Social Media</p>
                          <section className='flex justify-center space-x-5'>
                            <img src={photo21} />
                            <img src={photo22} />
                            <img src={photo23} />
                          </section>
                        </section>
                        <section className='text-white'> 
                              <p>Newsletter</p>
                              <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius <br />
                              enim in eros elementum tristique.
                              </p>
                            <section className='flex justify-between p-[2vh] bg-white'>    
                              <input type="text" placeholder='Email' /> <Btns title='Submit'/>
                            </section>
                        </section>
                  </section>
                  <section className='flex justify-center items-center py-[5vh]'>
                        <img src={photo1} alt="" />
                  </section>
                  <section className='h-[50vh] lg:hidden block '>

                  </section>
              </footer>
      </div>
  )
}

export default App