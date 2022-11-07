<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECOVISRKCA - Ecovis India</title>
    <link rel="icon" href="./images/ecovis_logoes/Ecovis_rkca_logo_ball.png" type="image/icon type">

    <!-- font-awesome cdn  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- bootstrap css cdn  -->
    <!-- <link rel="stylesheet" href="./bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="./bootstrap/bootstrap.css"> -->

    <!-- custom css link  -->
    <!-- <link rel="stylesheet" href="./css/style.css"> -->

    <!-- box icons link  -->
    <!-- <script src="https://unpkg.com/boxicons@2.1.1/dist/boxicons.js"></script>
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'> -->

    <!-- bootstrap javascript cdn  -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <!-- google font  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet">
    <!-- oul carousel link  -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css" integrity="sha512-UTNP5BXLIptsaj5WdKFrkFov94lDx+eBvbKyoe1YAfjeRPC+gT5kyZ10kOHCfNZqEui1sxmqvodNUx3KbuYI/A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- jqv link  -->
    <link href="./js/jqvmap/dist/jqvmap.min.css">


</head>
<style>
    .insideArrow {
        width: 0;
        height: 0;
        border-left: 75px solid transparent;
        border-right: 75px solid transparent;
        border-top: 100px solid;
        background-image: url(./ecovis-images/our_team_banner.png);
    }


    .kwadrat2 {
        width: 232px;
        height: 120px;
        border-top: 1px solid #fff;
        overflow: hidden;
        margin-top: 5px;
    }

    .trojkat2 {
        position: relative;
        overflow: hidden;
        transform: rotate(45deg) skew(10deg, 10deg);
        /*   border-bottom: 1px solid #000; */
        /*   border-right: 1px solid #000; */
        width: 200px;
        height: 200px;
        margin: -190px 0 0 16px;
    }

    .trojkat_bg2 {
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        z-index: -1;
        background: url(./ecovis-images/our_team_banner.png);
        background-size: 100%;
        /*   background-position: center top; */
        transform: skew(-10deg, -10deg) rotate(-45deg);
        /*   transition: .3s; */
    }

    .office_state_img {
        width: 95px !important;
        height: 95px !important;
    }

    .india_team_point {
        width: 150px;
        height: 150px;
        position: absolute;
        box-shadow: 0px 2px 3px 1px lightgray;
        background-color: whitesmoke;
    }
</style>

<body>
    <!-- header  -->
    <?php include_once "header.php" ?>
    <!-- banner  -->
    <div class="ecovis_insia_banner">
        <div class="align-items-center ecovisIndiaBanner d-flex justify-content-around pageBanner">
            <div class="">
                <p class="mainHeading text-center text-light">ECOVIS India</p>
            </div>
            <!-- <img src="" alt=""> -->
        </div>
        <!-- <div class="position-relative">
            <img src="./ecovis-images/our_team_banner.png" class="w-100" style="height: 50vh;" alt="">
            <p class="banner_text">ECOVIS India</p>
        </div> -->
        <div class=" w-100 arrow">
            <!-- 
            <div class="border-0 kwadrat2 mt-0 mx-auto">
                <div class="trojkat2">
                    <div class="trojkat_bg2"></div>
                </div>
            </div> -->
            <!-- our team  -->
            <div class="our_team my-5">
                <h1 style="font-family: 'Libre Baskerville', serif; font-size:2.4rem;" class="text-center">Our Team</h1>
                <img src="./images/map_image/Picture500.png" class="w-100" alt="">
                <!-- <div class="main-content">
                    <section class="section">
                        <div class="section-body">
                            <div class="row mx-0">
                                <div class="col-12">
                                    <div class="">
                                        <div class="card-body mb-4">
                                            <div class="mx-auto text-center w-75 position-relative">
                                                <img src="./images/map_image/INDIA.png" alt="" class="w-50">
                                                <div class="india_team_point align-items-center border d-flex justify-content-center rounded-circle" style="top: -2%;right: 30%;">
                                                    <p class="font-weight-bold mb-0 text-center" style="width: 90%;">70+ Countries Expertise Access</p>
                                                </div>
                                                <div class="india_team_point align-items-center border d-flex justify-content-center rounded-circle" style="top: 36%;right: 11%;">
                                                    <p class="font-weight-bold mb-0 text-center" style="width: 90%;">3000+ Clients Advised</p>
                                                </div>
                                                <div class="india_team_point align-items-center border d-flex justify-content-center rounded-circle" style="top: 67%;right: 32%;">
                                                    <p class="font-weight-bold mb-0 text-center" style="width: 90%;">Covering all major cities</p>
                                                </div>
                                                <div class="india_team_point align-items-center border d-flex justify-content-center rounded-circle" style="top: 9%;left: 12%;">
                                                    <p class="font-weight-bold mb-0 text-center" style="width: 90%;">40+ Industries Served</p>
                                                </div>
                                                <div class="india_team_point align-items-center border d-flex justify-content-center rounded-circle" style="bottom: 9%;left: 17%;">
                                                    <p class="font-weight-bold mb-0 text-center" style="width: 90%;">50+ Years in India</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> -->


            </div>
        </div>
        <div class="office_Address row mb-5 mx-0 justify-content-around">
            <div class="col-12 mb-5">
            <h1 style="font-family: 'Libre Baskerville', serif; font-size:2.4rem;" class="text-center text-danger">Located in all the major cities</h1>

            <!-- <h3 class="font-weight-normal text-center"></h3> -->
            </div>
            <div class="col-md-6">
                <div class="col-md-7 mx-auto pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                    <div class="mb-4">
                        <img src="./ecovis_icons/mumbai.png" class="office_state_img" alt="">
                        <h6 class="text-danger">CORPORATE OFFICE</h6>
                    </div>
                    <div class="">
                        <p class="small text-muted mb-0">Mentor</p>
                        <h6 class="text-danger">S C Kabra</h6>
                        <p class="px-4">515, Tulsiani chambers, Nariman Point, Mumbai 400 021</p>
                    </div>

                </div>
            </div>
            <div class="col-md-9">
                <div class="row justify-content-around my-5">
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/ahmedabad.png" class="office_state_img" alt="">
                            <h6 class="text-danger text-uppercase">ahmedabad</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">M D Kabra</h6>
                            <p>Naharraj Leela, 1 Ganga Soc, Shahibaug</p>
                        </div>

                    </div>
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/chennai.png" class="office_state_img" alt="">
                            <h6 class="text-danger">CHENNAI</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Rahul Nagar</h6>
                            <p>17/39, Krishnappa Tank St, Konditope, Chennai – 600 079</p>
                        </div>

                    </div>
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/delhi.png" class="office_state_img" alt="">
                            <h6 class="text-danger">DELHI</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Bharat Gupta</h6>
                            <p>A 531, Shastri Nagar, New Delhi – 110052</p>
                        </div>

                    </div>


                </div>
                <div class="row justify-content-around my-5">
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/hyderabad.png" class="office_state_img" alt="">
                            <h6 class="text-danger">HYDERABAD</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Jai Govind</h6>
                            <p>1st Flr, Ramky House, Raj Bhavan Road, Hyderabad – 500082 </p>
                        </div>

                    </div>

                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/indore.png" class="office_state_img" alt="">
                            <h6 class="text-danger">INDORE</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Siddharth Baghmar</h6>
                            <p>401, Fortune Ambience Business Spaces Indore (M.P) – 452001</p>
                        </div>

                    </div>
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/hyderabad.png" class="office_state_img" alt="">
                            <h6 class="text-danger">JAIPUR</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Sushil Kumar</h6>
                            <p>1st Flr, Ramky House, Raj Bhavan Road, Hyderabad – 500082 </p>
                        </div>

                    </div>

                </div>
                <div class="row justify-content-around my-5">
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/kolkata.png" class="office_state_img" alt="">
                            <h6 class="text-danger">KOLKATA</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Pradip Das</h6>
                            <p>4A/2, Anandam Apt, 7 Mall Road, Kolkata – 700 080</p>
                        </div>

                    </div>
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/mumbai.png" class="office_state_img" alt="">
                            <h6 class="text-danger">MUMBAI</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Hemant Vastani</h6>
                            <p>1902 C, Kailas Business Park, Vikhroli – W, Mumbai – 400 079</p>
                        </div>

                    </div>
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/mumbai.png" class="office_state_img" alt="">
                            <h6 class="text-danger">NAGPUR</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Deepak Heda</h6>
                            <p>2nd Floor, Bhiwapurkar Chambers, Dhantoli, Nagpur, Maharashtra 440012</p>
                        </div>

                    </div>



                </div>

                <div class="row justify-content-around my-5">
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;">
                        <div class="mb-4">
                            <img src="./images/icon_images/mumbai.png" class="office_state_img" alt="">
                            <h6 class="text-danger">Vashi</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Ram Varma</h6>
                            <p>513, Arenja Corner, Vashi, Navi Mumbai – 400 703. </p>
                        </div>

                    </div>
                    <div class="col-md-3 pb-2 pt-4 text-center " style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; background-color: #f7f7f7;" >
                        <div class="mb-4">
                            <img src="./ecovis_icons/kolk.png" class="office_state_img" alt="">
                            <h6 class="text-danger">PUNE</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Vishwanath Lele</h6>
                            <p>4A/2, Anandam Apartment, 7 Mall Road, Dum Dum, Kolkata 700 080 Contact: +91 88796 36056</p>
                        </div>

                    </div>
                    <div class="col-md-3 pb-2 pt-4 text-center" style=" border-radius: 9px; box-shadow: 0px 2px 5px 1px #cac8c8; visibility:hidden;">
                        <div class="mb-4">
                            <img src="./images/icon_images/hyderabad.png" class="office_state_img" alt="">
                            <h6 class="text-danger">JAIPUR</h6>
                        </div>
                        <div class="">
                            <p class="small text-muted mb-0">Mentor</p>
                            <h6 class="text-danger">Gaurav Choradia</h6>
                            <p>1st Flr, Ramky House, Raj Bhavan Road, Hyderabad – 500082 </p>
                        </div>

                    </div>

                </div>

            </div>


        </div>
    </div>
    </div>
    <!-- footer  -->
    <?php include_once "footer.php" ?>

    <script src="./js/jquery.min.js"></script>
    <script src="./js/jqvmap/dist/jquery.vmap.min.js"></script>
    <script type="text/javascript" src="./js/jqvmap/dist/maps/jquery-jvectormap-in-merc.js" charset="utf-8"></script>
    <script src="./js/javascript.js"></script>

</body>

</html>