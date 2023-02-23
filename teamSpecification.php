<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECOVISRKCA - Our Team</title>
    <link rel="icon" href="./images/ecovis_logoes/Ecovis_rkca_logo_ball.png" type="image/icon type">

    <!-- <link rel="stylesheet" href="./css/"> -->
    <style>
        .circle-container {
            position: relative;
            /* 1 */
            width: 19em;
            height: 25em;
            padding: 0;
            border-radius: 50%;
            list-style: none;
            /* 2 */
            box-sizing: content-box;
            /* 3 */
            margin: 5em auto 0;
            /*border: solid 5px tomato;*/
        }

        .circle-container > * {
            /* 4 */
            position: absolute;
            top: 55%;
            /*left: 10%;*/
        }

        .circle-container > :nth-of-type(1) {
            transform: rotate(-90deg) translate(17em) rotate(90deg);
        }

        .circle-container > :nth-of-type(2) {
            transform: rotate(-36deg) translate(12em) rotate(36deg);
        }

        .circle-container > :nth-of-type(3) {
            transform: rotate(215deg) translate(12em) rotate(-215deg);
        }

        .circle-container > :nth-of-type(4) {
            transform: rotate(25deg) translate(11em) rotate(-25deg);
        }

        .circle-container > :nth-of-type(5) {
            transform: rotate(154deg) translate(11em) rotate(-154deg);
        }

        .circle-container img {
            display: block;
            width: 100%;
            border-radius: 50%;
            filter: grayscale(100%);
        }

        .circle-container img:hover {
            filter: grayscale(0);
        }
        ul{

        }


    </style>

</head>

<body>
<!-- header  -->
<?php include_once "header.php" ?>

<!--team member specification -->
<div class="container-fluid py-5">
    <div class="row justify-content-center">
        <div class="col-10" id="teamMembers">

        </div>
    </div>

</div>

<!-- footer  -->
<?php include_once "footer.php" ?>


</body>
<script src="./js/javascript.js"></script>

</html>