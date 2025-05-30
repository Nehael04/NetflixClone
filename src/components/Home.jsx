import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
       <nav class="navbar navbar-expand-lg navbar-light bg-transparent position-absolute top-0 w-100">
<div id='nav' class="container-fluid">
<a  class="navbar-brand">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" 
height="39" alt="Netflix" tabindex="-1"/>
</a>

<div class="d-flex ms-auto align-items-center gap-3">
<div class="nav-item dropdown">
<a id='language' href="#english" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
    <i class="bi bi-translate ms-3 me-2"></i>English</a>
<ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">English</a></li>
        <li><a class="dropdown-item" href="#hindi">Hindi</a></li>
      </ul>
</div>

<button type='button' class="btn btn-danger">Sign in</button>
</div>
</div>
</nav>

<div class="w-100 vh-100 overflow-hidden">
    <img id="banner" src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/DE-en-20250428-TRIFECTA-perspective_3d28f7e8-681e-41d0-b3af-33b42cd2d6fb_large.jpg" 
    class="w-100 h-100" alt="banner" />

<div id="black-screen" class="position-absolute start-0 top-0 w-100 h-100"></div>

<div class="position-absolute top-50 start-50 translate-middle text-white mx-auto text-center w-100 ">
  <div id="banner-div" class="mx-auto">
    
    <p class="mx-auto" id="banner-title">Unlimited movies, TV shows and more</p>
    <p id="banner-text">Starts at ₹149. Cancel at any time.</p>
    <p id="banner-text1">Ready to watch? Enter your email to create or restart your membership.</p>

    <div class="d-flex flex-column flex-sm-row gap-2 w-100 align-items-center">
      <input id="banner-input" type="text" class="form-control w-100" placeholder="Email Address" />
      <button id="banner-button" type="button" class="btn btn-danger w-50">Get Started
      <i class="bi bi-chevron-right"></i>
      </button>
    </div>
  </div>
</div>
</div>
<br/>


<div id="card-container" class="container">
  <div class="row justify-content-center">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      
    <p id="p-heading">Trending Now</p>

<div id="carouselExample" class="carousel slide w-100">
  <div class="carousel-inner">
    
    <div class="carousel-item active">
    <div class="d-flex justify-content-center gap-5">
    <a id="carousel-card" class="card" href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABR79_Hdrb3kQwl3QVjEW6Y-2FwplobCgO9Nt4ZekRNTtui0uMaIixlR_Zntt4SbiDy-9qP1hg7_K-8CSi3WX0eMFLp-nwjLxPZPjOVs7DJQ6D-f3xv7PSU1QuwpgBokzBtVe.webp?r=883" alt="card 1"/>
      <span>1</span>
    </a>
    <a id="carousel-card" class="card"  href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXPLxcwwgSNJysBcgsCdT4vAyZfKaTiCyAGLWFj9ItBrSY6i7qTIwBs5hP4FV4CLeQlMCrGGWRc4GrmKgR5VcFg7iCyQIQv6enzMGjYO6Y6n2xR-ELvttE4fmIO9CZiWI08l.webp?r=b1e" alt="card 2"/>
      <span>2</span>    
    </a>
    <a id="carousel-card" class="card"  href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTsIHqmKvuiJaunFg-3M7eRlEBPik8Un-eqTK-od9x48LzeGITagPm82bIopTRvyhIEMehQNdXN2qfj0AVpDTMhftqYStaCieJdbO-jfhSkFUVGBs9eYkpkjdzOj_UCKZi53.webp" alt="card 3"/>
      <span>3</span>
    </a>
    <a id="carousel-card" class="card"  href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVClS-oAfJCqapXO0VZjlCoCuiPzvw1RIutTN78it0FoadKnZLpyhDzh6OuQUkMk00bPtLPAjFsavuBrf5Ae52sUZqxMLZcBMCZKLEF770GkrSHTPd-FRBmeh_P37tMu0DFc.webp?r=a5f" alt="card 4"/>
      <span>4</span>
    </a>
    <a id="carousel-card" class="card"  href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUjT6xi899hg36wYWudjSHWDWfrXze85a0c46wAb-XG5amKyk7KXVwZfjsbhPaosgxVcpf7XQSPUsChOUroC-vuRYICwQUU3UEhbjKObvplDQTAf0EKUk3O7pxIqpaCl4KCj.webp" alt="card 5"/>
      <span>5</span>
    </a>
    </div>
    </div>


    <div class="carousel-item">
    <div class="d-flex justify-content-center gap-5">
    <a id="carousel-card" class="card" href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABWZSa7VgrqvHh6OJo-bj3gX2DurWDFuG8diIZYoQTlKiFBfJomQ_qI6u4Z_xQQbUliF8oFGD1lUivZILH_JS2uic_lTfweSeiDp8szCkATZ3uQePq-EK93bBchjkIv0k2qi4.webp" alt="card 1"/>
      <span>6</span>
    </a>
    <a id="carousel-card" class="card" href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABd0G962WCKevAmGtQbOgMzbwtWbWKAp0rcEqQrsFnLhSVUJ3Br-HozfVBNksxDH9ZULTq4om3mQThFjuRqUoYm4_dlMr9GVWA7vMFw2csbHhlaa8bsIaQwqRRQQPDu_wy94z.webp?r=c3d" alt="card 2"/>
      <span>7</span>
    </a>
    <a id="carousel-card" class="card" href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcEmGoSUxeggMW8oLZyldw47Rr-O388YgwS1jSE0hcEj9FsiZhY_GAHOzIG4TjgKyE2WVuYE2Nlm9Y_-4oGWy0Qf1v9EafTiA4DsyYLC_UQfhodIkgRTlR3MmlDEzd1SdelA.webp?r=2bf" alt="card 3"/>
      <span>8</span>
    </a>
    <a id="carousel-card" class="card" href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABTg5_jOpjkmWie7KhAiureAA3hxgL7A5P6ckIkKuT9f437BAzqFofemwsyMqEPPvq--R2o9nhcR4mcW2d0mLuAf4imdu6ltXfmcRkzL7c5GpjkuQU6kI3lMahIMBiheiTyte.webp?r=bd8" alt="card 4"/>
      <span>9</span>
    </a>
    <a id="carousel-card" class="card" href="#">
      <img class="card-img-top" src="https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbRg0L447bT3QI4yOzA08ymX-YfjzsaWMPHzvipJUM2GPlMFTwWtbsCYkk_AC380c58Xf1CE4f8O_BwUVqDfBYcB0Ef-nBb2l6msm--Ngp7YYNv5b76hf1SeTGMnTdHgcxYa.webp" alt="card 5"/>
      <span>10</span>
    </a>
    </div>
   </div>
   </div>

  <button id="card-prev" class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button  id="card-next" class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  </div>
</div><br/>


<div class="container" id="main-container">
  <div class="row justify-content-center">
    <p id="p-heading">More reasons to join</p>
  </div>

  <div class="row">
  <div class="col-sm-12 mb-2 col-md-12 col-lg-6 col-xl-3">
    <div id="card2" class="card h-100 w-100">
      <div class="card-body">
        <div class="container-fluid">
          <div class="row">
          <p style={{marginLeft:"-12px",marginRight:"12px"}} id="p-heading">Enjoy on your TV</p>
          <p id="p-text" class="card-text">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
          </div>
          <div class="row">
          <img id="card2-img1" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2272%22%20height%3D%2272%22%20viewBox%3D%220%200%2072%2072%22%20fill%3D%22none%22%3E%3Cg%20id%3D%22television-core-small%22%3E%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M37.2%2053.3992C37.2%2052.7365%2036.6628%2052.1992%2036%2052.1992H34.8C34.1373%2052.1992%2033.6%2052.7365%2033.6%2053.3992V56.2636C33.6%2056.9129%2033.0834%2057.4433%2032.4347%2057.4739C30.3013%2057.5744%2028.1719%2057.7834%2026.0546%2058.1011L19.444%2059.0926C18.2692%2059.2688%2017.4%2060.2782%2017.4%2061.4662V62.0992C17.4%2062.4304%2017.6686%2062.6992%2018%2062.6992H52.8C53.1314%2062.6992%2053.4%2062.4304%2053.4%2062.0992V61.4662C53.4%2060.2782%2052.5309%2059.2688%2051.3561%2059.0926L44.7454%2058.1011C42.6282%2057.7834%2040.4987%2057.5744%2038.3653%2057.4739C37.7167%2057.4433%2037.2%2056.9129%2037.2%2056.2636V53.3992Z%22%20fill%3D%22url(%23paint0_radial_5179_1308)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M18.6%2060.7388C18.6%2060.2306%2018.9587%2059.796%2019.4602%2059.711C22.0196%2059.2775%2029.7585%2058.0508%2035.4%2058.0508C41.0415%2058.0508%2048.7804%2059.2775%2051.3398%2059.711C51.8412%2059.796%2052.2%2060.2306%2052.2%2060.7388C52.2%2060.902%2052.0575%2061.0268%2051.8967%2061.0004C50.1219%2060.707%2040.9704%2059.2409%2035.4%2059.2409C29.8295%2059.2409%2020.678%2060.707%2018.9033%2061.0004C18.7425%2061.0268%2018.6%2060.902%2018.6%2060.7388Z%22%20fill%3D%22url(%23paint1_radial_5179_1308)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_3%22%20d%3D%22M63%2012H8.99995C8.00584%2012%207.19995%2012.8059%207.19995%2013.8V51.6C7.19995%2052.5941%208.00584%2053.4%208.99995%2053.4H63C63.9941%2053.4%2064.8%2052.5941%2064.8%2051.6V13.8C64.8%2012.8059%2063.9941%2012%2063%2012Z%22%20fill%3D%22url(%23paint2_linear_5179_1308)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_4%22%20d%3D%22M63%2012H8.99995C8.00584%2012%207.19995%2012.8059%207.19995%2013.8V51.6C7.19995%2052.5941%208.00584%2053.4%208.99995%2053.4H63C63.9941%2053.4%2064.8%2052.5941%2064.8%2051.6V13.8C64.8%2012.8059%2063.9941%2012%2063%2012Z%22%20fill%3D%22url(%23paint3_radial_5179_1308)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_5%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M8.99995%2012.6H63C63.663%2012.6%2064.2%2013.1372%2064.2%2013.8V50.4H7.79995V13.8C7.79995%2013.1372%208.33719%2012.6%208.99995%2012.6ZM7.19995%2050.4V13.8C7.19995%2012.8059%208.00581%2012%208.99995%2012H63C63.9942%2012%2064.8%2012.8059%2064.8%2013.8V50.4V51.6C64.8%2052.5941%2063.9942%2053.4%2063%2053.4H8.99995C8.00581%2053.4%207.19995%2052.5941%207.19995%2051.6V50.4Z%22%20fill%3D%22url(%23paint4_radial_5179_1308)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_6%22%20d%3D%22M35.4%2052.8C36.3941%2052.8%2037.2%2052.3971%2037.2%2051.9C37.2%2051.4029%2036.3941%2051%2035.4%2051C34.4059%2051%2033.6%2051.4029%2033.6%2051.9C33.6%2052.3971%2034.4059%2052.8%2035.4%2052.8Z%22%20fill%3D%22url(%23paint5_radial_5179_1308)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22paint0_radial_5179_1308%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(50.3269%2049.3723)%20rotate(118.526)%20scale(55.1579%2046.2871)%22%3E%3Cstop%20stop-color%3D%22%23802600%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%236F181D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%235B1333%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23391945%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint1_radial_5179_1308%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(48.1077%2053.6128)%20rotate(158.116)%20scale(32.7275%2042.219)%22%3E%3Cstop%20stop-color%3D%22%2399421D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%2399161D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%237D1845%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2359216E%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22paint2_linear_5179_1308%22%20x1%3D%2210.4727%22%20y1%3D%2214.9572%22%20x2%3D%2256.1755%22%20y2%3D%2251.4814%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2399161D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.245283%22%20stop-color%3D%22%23CA005B%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.346698%22%20stop-color%3D%22%23FF479A%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.46934%22%20stop-color%3D%22%23CC3CFF%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.735849%22%20stop-color%3D%22%23BC1A22%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23C94FF5%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3CradialGradient%20id%3D%22paint3_radial_5179_1308%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(38.6181%2023.8286)%20rotate(90)%20scale(25.9571%2025.8545)%22%3E%3Cstop%20stop-color%3D%22%231C0E20%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231C0E20%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint4_radial_5179_1308%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(54%2020.1938)%20rotate(144.293)%20scale(47.2897%2044.8232)%22%3E%3Cstop%20stop-color%3D%22%23EF7744%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23E50914%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23A70D53%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23792A95%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint5_radial_5179_1308%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(36.525%2051.3562)%20rotate(135)%20scale(4.58735)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFBDC0%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23F89DC6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" alt="card1" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-sm-12 mb-2 col-md-12 col-lg-6 col-xl-3 d-flex">
    <div id="card2" class="card h-100 w-100">
      <div class="card-body">
      <div class="container-fluid">
          <div class="row">
          <p style={{marginLeft:"-12px",marginRight:"12px",minWidth:"110%"}} id="p-heading">Download your shows to watch offline</p>
          <p id="p-text" class="card-text">Save your favourites easily and always have something to watch.</p>
          </div>
          <div class="row">
          <img id="card2-img2" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2272%22%20height%3D%2272%22%20viewBox%3D%220%200%2072%2072%22%20fill%3D%22none%22%3E%3Cg%20id%3D%22download-core-small%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M36%2070.2008C54.8882%2070.2008%2070.2001%2054.8889%2070.2001%2036.0008C70.2001%2017.1126%2054.8882%201.80078%2036%201.80078C17.1119%201.80078%201.80005%2017.1126%201.80005%2036.0008C1.80005%2054.8889%2017.1119%2070.2008%2036%2070.2008Z%22%20fill%3D%22url(%23paint0_radial_5179_7940)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_2%22%20opacity%3D%220.4%22%20d%3D%22M64.7658%2036.195C65.5206%2051.5916%2053.7908%2063.5824%2038.5668%2062.977C23.3428%2062.3722%2010.3893%2049.4%209.63446%2034.0034C8.87954%2018.6068%2020.6091%206.61594%2035.8331%207.22116C51.0571%207.82638%2064.0104%2020.7984%2064.7658%2036.195Z%22%20fill%3D%22url(%23paint1_radial_5179_7940)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_3%22%20d%3D%22M62.3657%2037.9958C63.1205%2053.3924%2051.3908%2065.3832%2036.1668%2064.7778C20.9428%2064.173%207.9893%2051.2008%207.23444%2035.8041C6.47952%2020.4075%2018.2091%208.41672%2033.4331%209.02194C48.6571%209.62716%2061.6103%2022.5992%2062.3657%2037.9958Z%22%20fill%3D%22url(%23paint2_radial_5179_7940)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_4%22%20opacity%3D%220.5%22%20d%3D%22M64.7658%2036.195C65.5206%2051.5916%2053.7908%2063.5824%2038.5668%2062.977C23.3428%2062.3722%2010.3893%2049.4%209.63446%2034.0034C8.87954%2018.6068%2020.6091%206.61594%2035.8331%207.22116C51.0571%207.82638%2064.0104%2020.7984%2064.7658%2036.195Z%22%20fill%3D%22url(%23paint3_radial_5179_7940)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_5%22%20opacity%3D%220.6%22%20d%3D%22M36.9%2060.6C48.6636%2060.6%2058.2%2051.0637%2058.2%2039.3C58.2%2027.5363%2048.6636%2018%2036.9%2018C25.1363%2018%2015.6%2027.5363%2015.6%2039.3C15.6%2051.0637%2025.1363%2060.6%2036.9%2060.6Z%22%20fill%3D%22url(%23paint4_radial_5179_7940)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_6%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M39.0849%2042.2727L46.3387%2035.76L48.8945%2038.5142L38.9118%2047.477L37.8466%2048.4333L36.6071%2047.477L24.9899%2038.5142L27.0434%2035.76L35.4849%2042.2727L33.6%2021.6016H37.2L39.0849%2042.2727Z%22%20fill%3D%22url(%23paint5_radial_5179_7940)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_7%22%20opacity%3D%220.4%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M61.6566%2034.9618C61.7832%2035.3893%2062.391%2035.3233%2062.3694%2034.878C61.6962%2021.1369%2050.1509%209.55975%2036.5817%209.01957C34.4606%208.93515%2032.4155%209.12541%2030.4772%209.55909C30.0745%209.64915%2030.1575%2010.2082%2030.5697%2010.2246C45.0094%2010.7979%2057.6246%2021.2971%2061.6566%2034.9618Z%22%20fill%3D%22url(%23paint6_radial_5179_7940)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22paint0_radial_5179_7940%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(36.0001%2036.1837)%20rotate(-90)%20scale(34.3829)%22%3E%3Cstop%20offset%3D%220.782019%22%20stop-color%3D%22%23982DBE%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.906819%22%20stop-color%3D%22%23B038DC%22%20stop-opacity%3D%220.2%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint1_radial_5179_7940%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(52.9937%2020.0992)%20rotate(135)%20scale(49.9836)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFBDC0%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23F89DC6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint2_radial_5179_7940%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(52.7999%2019.6937)%20rotate(135)%20scale(53.1037)%22%3E%3Cstop%20stop-color%3D%22%23FFA984%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FF787F%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23F45FA2%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23C44AF1%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint3_radial_5179_7940%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(52.9937%2020.0992)%20rotate(135)%20scale(49.9836)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFBDC0%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23F89DC6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint4_radial_5179_7940%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(36.9%2039.3)%20scale(21.3)%22%3E%3Cstop%20stop-color%3D%22white%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint5_radial_5179_7940%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(31.2%2032.1016)%20rotate(39.5226)%20scale(15.5567)%22%3E%3Cstop%20stop-color%3D%22%23EF7744%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.2406%22%20stop-color%3D%22%23E50914%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23792A95%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint6_radial_5179_7940%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(50.7%2021.3)%20rotate(-180)%20scale(30)%22%3E%3Cstop%20stop-color%3D%22white%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" alt="card2" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-sm-12 mb-2 col-md-12 col-lg-6 col-xl-3">
    <div id="card2" class="card h-100 w-100">
      <div class="card-body">
      <div class="container-fluid">
          <div class="row">
            <p style={{marginLeft:"-12px",marginRight:"12px"}} id="p-heading">Watch everywhere</p>
            <p id="p-text" class="card-text">Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.</p>
          </div>
          <div class="row">
          <img id="card2-img3" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2272%22%20height%3D%2272%22%20viewBox%3D%220%200%2072%2072%22%20fill%3D%22none%22%3E%3Cg%20id%3D%22telescope-core-small%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M24.0492%2036.6016L33.6%2046.3898L17.8029%2056.8633C17.8029%2056.8633%2015.8891%2057.6983%2013.625%2055.2638C11.361%2052.8293%2012.1235%2051.238%2012.1235%2051.238L24.0492%2036.6016Z%22%20fill%3D%22url(%23paint0_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M25.0344%2034.1992L36%2046.151L25.0616%2053.8043C25.0616%2053.8043%2021.8289%2055.0984%2018.0987%2051.0172C14.3686%2046.9358%2015.9198%2044.5105%2015.9198%2044.5105L25.0344%2034.1992Z%22%20fill%3D%22url(%23paint1_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_3%22%20d%3D%22M39%2013.0195L59.1%2033.6788L32.5325%2050.4142C32.5325%2050.4142%2028.7459%2050.2552%2024.3978%2045.4897C20.0498%2040.7243%2021.4096%2035.8101%2021.4096%2035.8101L39%2013.0195Z%22%20fill%3D%22url(%23paint2_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_4%22%20d%3D%22M57.6709%2015.3516C63.1044%2021.2807%2063.9858%2029.2883%2059.6386%2033.2371C55.2916%2037.186%2047.3628%2035.5806%2041.9292%2029.6515C36.4954%2023.7224%2035.6145%2015.7148%2039.9615%2011.766C44.3084%207.81716%2052.2372%209.42252%2057.6709%2015.3516Z%22%20fill%3D%22url(%23paint3_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_5%22%20d%3D%22M58.3787%2031.255C54.8121%2034.5032%2048.2143%2033.0817%2043.6421%2028.0798C39.07%2023.078%2038.2547%2016.39%2041.8213%2013.1419C45.3879%209.89364%2051.9857%2011.3152%2056.5579%2016.3171C61.1298%2021.3189%2061.9452%2028.0069%2058.3787%2031.255Z%22%20fill%3D%22url(%23paint4_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_6%22%20opacity%3D%220.85%22%20d%3D%22M59.6783%2028.823C60.576%2024.1785%2059.6544%2020.5934%2056.1603%2016.6199C52.6662%2012.6464%2047.3508%2010.8657%2043.7796%2012.7598C39.371%2015.098%2048.3734%2013.5961%2053.4577%2019.5815C57.8259%2024.724%2058.8516%2033.1009%2059.6783%2028.823Z%22%20fill%3D%22url(%23paint5_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_7%22%20opacity%3D%220.4%22%20d%3D%22M50.3979%2025.2452C50.4549%2026.7239%2049.2932%2027.7677%2047.8032%2027.5766C46.3131%2027.3856%2045.059%2026.032%2045.002%2024.5532C44.945%2023.0745%2046.1067%2022.0307%2047.5968%2022.2218C49.0868%2022.4128%2050.341%2023.7664%2050.3979%2025.2452Z%22%20fill%3D%22url(%23paint6_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_8%22%20opacity%3D%220.6%22%20d%3D%22M36.9217%2021.0039L26.4258%2034.3627C26.3297%2036.4604%2028.2903%2039.5534%2030.0334%2040.8344L41.2345%2029.9105C39.6%2028.2005%2036.9591%2024.1025%2036.9217%2021.0039Z%22%20fill%3D%22url(%23paint7_radial_5179_1664)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_9%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M20.0576%209.60156L21.479%2011.7187L24%2011.0654L22.3575%2013.0272L23.7789%2015.1444L21.3424%2014.2397L19.7%2016.2016L19.8365%2013.6806L17.4%2012.7759L19.9209%2012.1225L20.0576%209.60156ZM58.776%2052.8016L58.9623%2056.4685L62.4%2057.4188L59.0774%2058.7347L59.2637%2062.4016L57.0239%2059.548L53.7014%2060.8638L55.6397%2057.7843L53.4%2054.9307L56.8377%2055.8811L58.776%2052.8016ZM15.206%2024.2101L15.8768%2021.0016L13.4793%2023.1964L10.6853%2021.5563L11.9975%2024.553L9.59998%2026.7478L12.8085%2026.405L14.1207%2029.4016L14.7915%2026.1931L18%2025.8502L15.206%2024.2101Z%22%20fill%3D%22url(%23paint8_linear_5179_1664)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22paint0_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(36.6875%2032.7016)%20rotate(135)%20scale(34.9134)%22%3E%3Cstop%20stop-color%3D%22%2399421D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%2399161D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%237D1845%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2359216E%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint1_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(42.5937%2027.2992)%20rotate(135)%20scale(44.5477%2044.5279)%22%3E%3Cstop%20stop-color%3D%22%23EF7744%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23E50914%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23A70D53%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23792A95%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint2_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(42.3%2029.106)%20rotate(135)%20scale(31.8127)%22%3E%3Cstop%20stop-color%3D%22%23FB540D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23E50914%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23A70D53%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23792A95%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint3_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(57.675%2014.7078)%20rotate(134.326)%20scale(24.0433%2024.0367)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFBDC0%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23F89DC6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint4_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(52.1305%2021.273)%20rotate(141.875)%20scale(9.87138%2012.8159)%22%3E%3Cstop%20offset%3D%220.307292%22%20stop-color%3D%22%23F89DC6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.645392%22%20stop-color%3D%22%23E75094%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2359216E%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint5_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(55.8%2015.6)%20rotate(135)%20scale(13.1522)%22%3E%3Cstop%20stop-color%3D%22white%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint6_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(49.2362%2022.9648)%20rotate(131.079)%20scale(5.08644%206.006)%22%3E%3Cstop%20stop-color%3D%22white%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22white%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint7_radial_5179_1664%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(36.8758%2029.1353)%20rotate(137.622)%20scale(13.5764)%22%3E%3Cstop%20stop-color%3D%22%23FFA984%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23F7636B%22%20stop-opacity%3D%220%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3ClinearGradient%20id%3D%22paint8_linear_5179_1664%22%20x1%3D%2244.65%22%20y1%3D%2227.9016%22%20x2%3D%2224.25%22%20y2%3D%2248.3016%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%23EF7744%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23E50914%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23A70D53%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23792A95%22%3E%3C%2Fstop%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" alt="card3" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-sm-12 mb-2 col-md-12 col-lg-6 col-xl-3">
    <div id="card2" class="card h-100 w-100">
      <div class="card-body">
      <div class="container-fluid">
          <div class="row">
          <p style={{marginLeft:"-12px",marginRight:"12px",minWidth:"110%"}} id="p-heading">Create profiles for kids</p>
          <p id="p-text" class="card-text">Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
          </div>
          <div class="row">
          <img id="card2-img4" src="data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2272%22%20height%3D%2272%22%20viewBox%3D%220%200%2072%2072%22%20fill%3D%22none%22%3E%3Cg%20id%3D%22profiles-core-small%22%3E%3Cpath%20id%3D%22Vector%22%20d%3D%22M10.8%2015.6008C10.8%2012.9499%2012.949%2010.8008%2015.5999%2010.8008H40.8C43.4509%2010.8008%2045.6%2012.9498%2045.6%2015.6008V40.8007C45.6%2043.4516%2043.4509%2045.6007%2040.8%2045.6007H15.6C12.949%2045.6007%2010.8%2043.4517%2010.8%2040.8007V15.6008Z%22%20fill%3D%22url(%23paint0_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_2%22%20d%3D%22M9.59998%2014.4016C9.59998%2011.7506%2011.749%209.60162%2014.4%209.60156H39.6C42.251%209.60156%2044.4%2011.7506%2044.4%2014.4016V39.6015C44.4%2042.2525%2042.251%2044.4015%2039.6%2044.4015H14.4C11.749%2044.4016%209.59998%2042.2525%209.59998%2039.6015V14.4016Z%22%20fill%3D%22url(%23paint1_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_3%22%20d%3D%22M18.6%2021.9008C18.6%2023.0606%2017.6598%2024.0008%2016.5%2024.0008C15.3402%2024.0008%2014.4%2023.0606%2014.4%2021.9008C14.4%2020.741%2015.3402%2019.8008%2016.5%2019.8008C17.6598%2019.8008%2018.6%2020.741%2018.6%2021.9008Z%22%20fill%3D%22url(%23paint2_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_4%22%20d%3D%22M39.6%2021.9008C39.6%2023.0606%2038.6598%2024.0008%2037.5%2024.0008C36.3402%2024.0008%2035.4%2023.0606%2035.4%2021.9008C35.4%2020.741%2036.3402%2019.8008%2037.5%2019.8008C38.6598%2019.8008%2039.6%2020.741%2039.6%2021.9008Z%22%20fill%3D%22url(%23paint3_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_5%22%20d%3D%22M23.6713%2029.4501C23.2437%2029.1967%2022.6917%2029.3379%2022.4383%2029.7655C22.1848%2030.1932%2022.3261%2030.7452%2022.7537%2030.9986C23.8254%2031.6337%2026.769%2032.7744%2030.6375%2032.7744C34.506%2032.7744%2037.4497%2031.6337%2038.5213%2030.9986C38.949%2030.7452%2039.0902%2030.1932%2038.8368%2029.7655C38.5834%2029.3379%2038.0313%2029.1967%2037.6037%2029.4501C36.8191%2029.9151%2034.194%2030.9744%2030.6375%2030.9744C27.081%2030.9744%2024.456%2029.9151%2023.6713%2029.4501Z%22%20fill%3D%22url(%23paint4_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_6%22%20opacity%3D%220.35%22%20d%3D%22M19.2%2044.4016H28.2L32.4%2027.6016C30.2787%2028.1801%2028.4542%2029.5387%2027.2921%2031.4053L19.2%2044.4016Z%22%20fill%3D%22url(%23paint5_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_7%22%20d%3D%22M27.6%2032.4016C27.6%2029.7506%2029.749%2027.6016%2032.4%2027.6016L57.6%2027.6016C60.2508%2027.6016%2062.4%2029.7506%2062.4%2032.4016V57.6015C62.4%2060.2524%2060.2508%2062.4016%2057.6%2062.4016H32.4C29.749%2062.4016%2027.6%2060.2524%2027.6%2057.6016V32.4016Z%22%20fill%3D%22url(%23paint6_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_8%22%20d%3D%22M36.6%2039.9008C36.6%2041.0606%2035.6598%2042.0008%2034.5%2042.0008C33.3402%2042.0008%2032.4%2041.0606%2032.4%2039.9008C32.4%2038.741%2033.3402%2037.8008%2034.5%2037.8008C35.6598%2037.8008%2036.6%2038.741%2036.6%2039.9008Z%22%20fill%3D%22url(%23paint7_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_9%22%20d%3D%22M57.6%2039.9008C57.6%2041.0606%2056.6598%2042.0008%2055.5%2042.0008C54.3402%2042.0008%2053.4%2041.0606%2053.4%2039.9008C53.4%2038.741%2054.3402%2037.8008%2055.5%2037.8008C56.6598%2037.8008%2057.6%2038.741%2057.6%2039.9008Z%22%20fill%3D%22url(%23paint8_radial_5179_7919)%22%3E%3C%2Fpath%3E%3Cpath%20id%3D%22Vector_10%22%20d%3D%22M41.8213%2047.6025C41.3937%2047.349%2040.8416%2047.4903%2040.5882%2047.9179C40.3348%2048.3455%2040.476%2048.8976%2040.9037%2049.1509C41.9753%2049.786%2044.919%2050.9267%2048.7875%2050.9267C52.656%2050.9267%2055.5996%2049.786%2056.6713%2049.1509C57.0989%2048.8976%2057.2402%2048.3455%2056.9867%2047.9179C56.7333%2047.4903%2056.1813%2047.349%2055.7537%2047.6025C54.969%2048.0674%2052.344%2049.1267%2048.7875%2049.1267C45.231%2049.1267%2042.6059%2048.0674%2041.8213%2047.6025Z%22%20fill%3D%22url(%23paint9_radial_5179_7919)%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3Cdefs%3E%3CradialGradient%20id%3D%22paint0_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(39.075%2017.6882)%20rotate(135)%20scale(32.8097)%22%3E%3Cstop%20stop-color%3D%22%2399421D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%2399161D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%237D1845%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2359216E%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint1_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(62.4%208.70157)%20rotate(133.87)%20scale(75.3216)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FFBDC0%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23F89DC6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint2_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(60.3%2011.1008)%20rotate(133.939)%20scale(68.7426%2055.9547)%22%3E%3Cstop%20stop-color%3D%22%2399421D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%2399161D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%237D1845%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2359216E%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint3_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(60.3%2011.1008)%20rotate(133.939)%20scale(68.7426%2055.9547)%22%3E%3Cstop%20stop-color%3D%22%2399421D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%2399161D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%237D1845%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2359216E%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint4_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(60.3%2011.0994)%20rotate(133.939)%20scale(68.7426%2055.9548)%22%3E%3Cstop%20stop-color%3D%22%2399421D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%2399161D%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%237D1845%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2359216E%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint5_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(39.6%2027.9016)%20rotate(135)%20scale(23.3345)%22%3E%3Cstop%20stop-color%3D%22%23FFA984%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FF787F%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23F45FA2%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23C44AF1%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint6_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(61.8%2029.7016)%20rotate(135)%20scale(43.2749)%22%3E%3Cstop%20stop-color%3D%22%23EF7744%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23E50914%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23A70D53%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23792A95%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint7_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(62.1%2011.1008)%20rotate(137.146)%20scale(73.6614%2060.3576)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FDF6F6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23FADCE9%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint8_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(62.1%2011.1008)%20rotate(137.146)%20scale(73.6614%2060.3576)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FDF6F6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23FADCE9%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3CradialGradient%20id%3D%22paint9_radial_5179_7919%22%20cx%3D%220%22%20cy%3D%220%22%20r%3D%221%22%20gradientUnits%3D%22userSpaceOnUse%22%20gradientTransform%3D%22translate(62.1%2011.1017)%20rotate(137.146)%20scale(73.6614%2060.3576)%22%3E%3Cstop%20stop-color%3D%22%23FFDCCC%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.333333%22%20stop-color%3D%22%23FDF6F6%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%220.666667%22%20stop-color%3D%22%23FADCE9%22%3E%3C%2Fstop%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23E4A1FA%22%3E%3C%2Fstop%3E%3C%2FradialGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" alt="card4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div><br/>


<div class="container" id="main-container">
  <p id="p-heading">Frequently Asked Questions</p>
<div class="accordion accordion-flush" id="accordionFlush">
  <div class="accordion-item mb-2">
    <h2 class="accordion-header">
      <button id="btn" class="accordion-button collapsed" 
      type="button" data-bs-toggle="collapse" 
      data-bs-target="#flush-collapseOne" aria-expanded="false" 
      aria-controls="flush-collapseOne">
      What is Netflix?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more - on thousands of internet-connected devices.
You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        How much does Netflix cost?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" 
      data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" 
      aria-expanded="false" aria-controls="flush-collapseThree">
        Where can I Watch?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" 
      data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" 
      aria-expanded="false" aria-controls="flush-collapseFour">
        How do you Cancel?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" 
      data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" 
      aria-expanded="false" aria-controls="flush-collapseFive">
        What can I watch on Netflix?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
    </div>
  </div>
  <div class="accordion-item mb-2">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" 
      data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" 
      aria-expanded="false" aria-controls="flush-collapseSix">
        Is Netflix good for Kids?
      </button>
    </h2>
    <div id="flush-collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionFlush">
      <div class="accordion-body">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</div>
    </div>
  </div>
</div>    
</div><br/>


<div style={{maxWidth:"800px"}} class="container" id="main-container">
      <div class="d-flex justify-content-center">
        <p id="p-signIn">Ready to watch? Enter your email to create or restart your membership.</p>
      </div>
      
      <div class="d-flex justify-content-center flex-column flex-sm-row gap-2">
        <input id="signIn-input" type="text" class="form-control w-100" placeholder="Email Address"/>
        <button id="signinButton" type="button" class="btn btn-danger w-25">Get Started
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </div><br/>


    <div class="container align-items-center" id="main-container">
    <div id="p-ref" class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p>Questions? Call <a style={{color:" rgb(185, 183, 183)"}} href="#">000-800-919-1743</a></p>
    </div>
    </div><br/>

    <div class="row">
    <div class="col-xs-3 col-sm-6 col-md-6 col-lg-3">
      <a href="#" id="p-ref-inner">
      FAQ<br/>
      Investor Relations<br/>
      Privacy<br/>
      Speed Test<br/>
      </a>
    </div>
  
    <div class="col-xs-3 col-sm-6 col-md-6 col-lg-3">
    <a href="#" id="p-ref-inner">   
      Help Centre<br/>
      Jobs<br/>
      Cookie Preferences<br/>
      Legal Notices<br/>
      </a>
    </div>
   
    <div class="col-xs-3 col-sm-6 col-md-6 col-lg-3">
    <a href="#" id="p-ref-inner">   
      Account<br/>
      Ways to Watch<br/>
      Corporate Information<br/>
      Only on Netflix<br/>
      </a>
    </div>
  
    <div class="col-xs-3 col-sm-6 col-md-6 col-lg-3">
    <a href="#" id="p-ref-inner">   
      Media Centre<br/>
      Terms of Use<br/>
      Contact Us<br/>
      </a>
    </div>
    </div><br/><br/>

    <div id="p-ref" class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <div class="nav-item dropdown">
    <a id="language" href="#english" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
    <i class="bi bi-translate ms-3 me-2"></i>English</a>
    <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#">English</a></li>
        <li><a class="dropdown-item" href="#hindi">Hindi</a></li>
      </ul>
    </div>
    </div>
    </div><br/>
    
    <div id="p-ref" class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p id="p-ref-inner">Netflix India</p>
    </div>
    </div><br/>
    </div>
</>
  )
}

export default Home