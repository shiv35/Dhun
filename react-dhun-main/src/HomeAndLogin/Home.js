import React from 'react'
import './Home.css'
import logo from './Images/Logof.png'
import img1 from './Images/img1.jpg'
import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpeg'
import img4 from './Images/img4.jpg'
import img5 from './Images/img5.jpg'
import img6 from './Images/img6.jpg'
import img7 from './Images/img7.jpg'
import img8 from './Images/img8.jpg'
import img9 from './Images/img9.jpg'
import img11 from './Images/img11.jpg'
import img12 from './Images/img12.jpg'
import readMore from './Images/read-more.png'

export default function Home() {
  return (
    <div className='home'>

      <header className='header  '>

        {/* First container  */}
        <div className="container container_solid ">
          <div className="title_wrapper">
            <h1>Dhun</h1>
          </div>
        </div>

        {/* Second container */}
        <div className="container container_image w-screen" aria-hidden="true">
          <div className="title_wrapper w-screen ">
            <h1>Dhun</h1>
          </div>
        </div>
      </header>



      <section id="Aboutus">

        <img className="logo" src={logo} alt="Logo" />
        <h2>Where the Music Aficionados hang out</h2>
        <p className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias doloribus placeat eius magni
          repudiandae sunt incidunt, tenetur ratione voluptas, in voluptatem vero quos non soluta harum eligendi aspernatur
          explicabo sint consequatur, ab accusantium! Culpa repellat necessitatibus placeat sapiente minima optio nobis
          mollitia illo quam dolor explicabo dolorem officia et accusamus nulla cum, adipisci expedita, pariatur vel saepe
          possimus deserunt ad. Expedita quod excepturi obcaecati, laudantium in autem sint illum a eius minima iure,
          voluptatum debitis saepe adipisci quae repellendus necessitatibus! Facere enim amet aperiam dignissimos voluptatem
          porro unde rem earum voluptas nulla reiciendis doloribus vitae quis sed deserunt sapiente, repudiandae ipsum
          molestias quos modi tenetur voluptatum pariatur hic! Nihil, fuga voluptatem! Quisquam aut rerum similique
          aspernatur nisi excepturi sed omnis facilis itaque ut ducimus odit cum iusto assumenda, velit quaerat ipsam sit
          eveniet at deleniti, ab aliquid dolore facere. Maxime eaque animi itaque odio esse, sunt officiis architecto cum
          quam et neque, corporis libero, reiciendis distinctio voluptatum minima minus dolor nobis perferendis illum
          voluptatem eos. Reprehenderit, quos, rerum voluptatem repellendus maiores magnam est, temporibus sint ad
          voluptates odit. Aspernatur asperiores magnam ex rerum perferendis neque maxime voluptatibus quos sit, hic
          molestiae totam eius minima iste sapiente illum voluptatum laboriosam facilis? Dolorem deleniti debitis maiores.
          Doloremque porro ex praesentium. <a href="Aboutus"><img className="readmore" src={readMore} alt="" /></a>
        </p>

      </section>


      <div id="transition1"></div>

      <div className="external">
        <h2> A Wide Selection to choose from... </h2>
        <div className="horizontal-scroll-wrapper">

          <div className="img-wrapper slower">
            <a href="Gallery"><img src={img1} alt="" /></a>
          </div>

          <div className="img-wrapper faster">
            <a href="Gallery"><img src={img2} alt="" /></a>
          </div>

          <div className="img-wrapper slower vertical">
            <a href="Gallery"><img src={img3} alt="" /></a>

          </div>

          <div className="img-wrapper slower slower-down">
            <a href="Gallery"><img src={img4} alt="" /></a>
          </div>

          <div className="img-wrapper">
            <a href="Gallery"><img src={img5} alt="" /></a>
          </div>

          <div className="img-wrapper slower">
            <a href="Gallery"><img src={img6} alt="" /></a>
          </div>

          <div className="img-wrapper faster1">
            <a href="Gallery"><img src={img7} alt="" /></a>
          </div>

          <div className="img-wrapper slower slower2">
            <a href="Gallery"><img src={img8} alt="" /></a>
          </div>

          <div className="img-wrapper">
            <a href="Gallery"><img src={img9} alt="" /></a>
          </div>

          <div className="img-wrapper slower">
            <a href="Gallery"><img src={img12} alt="" /></a>
          </div>

          <div className="img-wrapper slower last">
            <a href="Gallery"><img src={img11} alt="" /></a>
          </div>
        </div>
      </div>

      <div id="transition2"></div>
    </div>
  )
}
