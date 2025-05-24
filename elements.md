---
layout: page
title: KOU-Mekatronom
image: assets/images/BFMC.jpg
nav-menu: true
---

<style>
  body {
    font-family: 'Segoe UI', 'Roboto', sans-serif;
    font-size: 16px;
    color: #fff; /* Tüm metin beyaz */
    line-height: 1.6;
    background-color: #0e0e1a; /* Arka plan koyu lacivert/füme gibi kalabilir */
  }

  h1, h2, h3, h4, h5, h6 {
    color: #ffffff;
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 0.5em;
  }

  p, li {
    color: #eeeeee;
    font-size: 1em;
  }

  a {
    color: #4dabff; /* Parlak mavi link */
    text-decoration: underline;
  }

  a:hover {
    color: #82cfff;
  }
</style>

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
	<div class="inner">
		<header class="major">
			<h1>KOU-Mekatronom</h1>
		</header>

<!-- Content -->
<h2 id="content">Introduction</h2>
<p>Hello, the KOU-Mekatronom team was founded in 2019 with the purpose of participating in competitions focused on autonomous vehicles. I joined the university team in 2022, and continued as the active team captain until 2025. Currently, I serve as an advisor to the university team, working to ensure the continuation and growth of the next generation.</p>
<div class="row">
	<div class="6u 12u$(small)">
	<h3>Competitions I Participated In</h3>
	<ul>
		<li>Teknofest Robotaxi (2022, 2023) – Ranked 19th & 6th among university teams in Turkey</li>
		<li>Teknofest Robotaxi Mentor (2024)</li>
		<li>Bosch Future Mobility Challenge (2024) – Only Turkish team among 160 international applicants, finalist top-24 in Cluj, Romania</li>
	</ul>
	</div>
	<!-- Yarışma Açıklamaları -->
	<div class="6u$ 12u$(small)">
	<h3>Competition Details</h3>
	<ul>
		<li>
		The Robotaxi competition at Teknofest is the most comprehensive autonomous vehicle competition organized in Turkey. 
		You can watch a related video <a href="https://www.youtube.com/watch?v=PAcczZ4cFB4" target="_blank">here</a>.
		</li>
		<br><li>
		<a href="https://boschfuturemobility.com/" target="_blank">Bosch Future Mobility Challenge</a>, an international autonomous RC car competition organized by Bosch.
		</li>
	</ul>
	</div>
	<!-- Algoritma Detayları -->
	<div class="12u 12u$(medium)">
	<h3 style="font-size: 2.4em;">Algorithm Details</h3>
	<p>
		Below are reference videos for the Robotaxi and Bosch Future Mobility Challenge competitions, showcasing the algorithms used.
	</p>
	</div>
	</div>
	<div class="12u 12u$(medium)">
	<h3>Bosch Future Mobility Challenge:</h3>
	<p>
		<li>This series will be shows of all of the details job which i did for the bosch future mobility Challenge.
		developed nonlinear model predictive control using CasADi to solve equations with a bicycle dynamic
		model. This control algorithm incorporates obstacle avoidance by calculating distances using the Euclidean
		method. For localization, I utilized the ZED2i camera, integrating visual odometry and IMU data, and implemented
		additional encoders and IMU sensors with the robot_localization package. I also transformed point cloud data
		from the ZED2i into 2D data using the pointcloud_to_laserscan package for obstacle detection, excluding floor
		depth data. In these projects,<br>
		<br><li>I worked extensively with C++, Python, MATLAB, and ROS. 
		You can find full project as open-source and fully detailed readme.md details in my
		<a href="https://github.com/Renbago/autonomus_vehicle" target="_blank">Github page.
		</a>
	<div class="12u 12u$(medium)">
	<p>
		<h3>Qualification video</h3>
	</p>
	</div>
	<!-- YouTube Video Link with Thumbnail -->
	<div style="margin-top: 1em; text-align: center;">
	<a href="https://www.youtube.com/watch?v=WsCecAzwwFc&list=PLDE_vDxu0Gkk-s3ndTqIScKTHSvL8dt0m" target="_blank">
		<img src="https://img.youtube.com/vi/WsCecAzwwFc/hqdefault.jpg" 
			alt="Watch algorithm video on YouTube"
			style="width:100%; max-width:560px; border:1px solid #ccc; border-radius:8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
	</a>
	<p style="font-size: 0.9em; margin-top: 0.5em;">
		Click the image to watch the video on YouTube.
	</p>
	</div>
	<!-- Full part video all of the algorithms and the working shows in simulation -->
	<div class="12u 12u$(medium)">
	<h3>Full part video all of the algorithms and the working shows in simulation</h3>
	<p>
		Obstacle_detector, djikstra, mpc and obstacle_avoidance, obstacle detecion, traffic sign detection shows in here
	</p>
	<!-- YouTube Video Thumbnail -->
	<div style="margin-top: 1em; text-align: center;">
	<a href="https://www.youtube.com/watch?v=udwPYgNa-Cw" target="_blank">
		<img src="https://img.youtube.com/vi/udwPYgNa-Cw/hqdefault.jpg" 
			alt="Watch algorithm video on YouTube"
			style="width:100%; max-width:560px; border:1px solid #ccc; border-radius:8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
	</a>
	<p style="font-size: 0.9em; margin-top: 0.5em; text-align: center;">
		Click the image to watch the video on YouTube.
	</p>
	</div>
	<!-- Parking algorithm real life with obstacle detection from car view  -->
	<div class="12u 12u$(medium)">
	<h3>Parking algorithm real life with obstacle detection from car view</h3>
	<p>
		Its shows the parking part in real life from car view.
	</p>
	<!-- YouTube Video Thumbnail -->
	<div style="margin-top: 1em; text-align: center;">
	<a href="https://www.youtube.com/watch?v=VL7k0jOKzI8" target="_blank">
		<img src="https://img.youtube.com/vi/VL7k0jOKzI8/hqdefault.jpg" 
			alt="Watch algorithm video on YouTube"
			style="width:100%; max-width:560px; border:1px solid #ccc; border-radius:8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
	</a>
	<p style="font-size: 0.9em; margin-top: 0.5em; text-align: center;">
		Click the image to watch the video on YouTube.
	</p>
	</div>
	<!-- Parking algorithm real life with obstacle detection from car view Video Açıklaması -->
	<div class="12u 12u$(medium)">
	<h3>Parking algorithm with obstacle detection in simulation</h3>
	<p>
		We have the real life coordinat of the parking points. If obstacle detected we are changing the goal position. The simulation Video explain how does it work.
	</p>
	<!-- YouTube Video Thumbnail -->
	<div style="margin-top: 1em; text-align: center;">
	<a href="https://www.youtube.com/watch?v=fv_t_IlpWR4" target="_blank">
		<img src="https://img.youtube.com/vi/fv_t_IlpWR4/hqdefault.jpg" 
			alt="Watch algorithm video on YouTube"
			style="width:100%; max-width:560px; border:1px solid #ccc; border-radius:8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
	</a>
	<p style="font-size: 0.9em; margin-top: 0.5em; text-align: center;">
		Click the image to watch the video on YouTube.
	</p>
	</div>
	<!-- Full part video all of the algorithms and the working shows in simulation -->
	<div class="12u 12u$(medium)">
	<h3>Full part video all of the algorithms and the working shows in simulation</h3>
	<p>
		Obstacle_detector, djikstra, mpc and obstacle_avoidance, obstacle detecion, traffic sign detection shows in here
	</p>
	<!-- YouTube Video Thumbnail -->
	<div style="margin-top: 1em; text-align: center;">
	<a href="https://www.youtube.com/watch?v=udwPYgNa-Cw" target="_blank">
		<img src="https://img.youtube.com/vi/udwPYgNa-Cw/hqdefault.jpg" 
			alt="Watch algorithm video on YouTube"
			style="width:100%; max-width:560px; border:1px solid #ccc; border-radius:8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
	</a>
	<p style="font-size: 0.9em; margin-top: 0.5em; text-align: center;">
		Click the image to watch the video on YouTube.
	</p>
	</div>
	<!-- General all of the list  -->
	<div class="12u 12u$(medium)">
	<h3>The video series shows all of the videos which has been recorded.</h3>
	<p>
		Have fun!
	</p>
	<!-- YouTube Video Thumbnail -->
	<div style="margin-top: 1em; text-align: center;">
	<a href="https://www.youtube.com/watch?v=WsCecAzwwFc&list=PLDE_vDxu0Gkk-s3ndTqIScKTHSvL8dt0m" target="_blank">
		<img src="https://img.youtube.com/vi/WsCecAzwwFc/hqdefault.jpg" 
			alt="Watch algorithm video on YouTube"
			style="width:100%; max-width:560px; border:1px solid #ccc; border-radius:8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
	</a>
	<p style="font-size: 0.9em; margin-top: 0.5em; text-align: center;">
		Click the image to watch the video on YouTube.
	</p>
	</div>
	<!-- Robotaksi Video Açıklaması -->
	<div class="12u 12u$(medium)">
	<h3>Robotaxi Competition:</h3>
	<p>
		This is the video of the real-size autonomous vehicle we competed with in 2023. 
		Since it was our first year, we used more fundamental approaches such as OpenCV, YOLO, and basic motor control to drive the vehicle. 
		As a result, we were ranked 6th. <a href="https://github.com/Renbago/autonomus_car_sim_base_ros2" target="_blank">github page.</a>
	</p>
	</div>
	<!-- YouTube Video Thumbnail -->
	<div style="margin-top: 1em; text-align: center;">
	<a href="https://www.youtube.com/watch?v=WffA08OOQCI" target="_blank">
		<img src="https://img.youtube.com/vi/WffA08OOQCI/hqdefault.jpg" 
			alt="Watch algorithm video on YouTube"
			style="width:100%; max-width:560px; border:1px solid #ccc; border-radius:8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
	</a>
	<p style="font-size: 0.9em; margin-top: 0.5em; text-align: center;">
		Click the image to watch the video on YouTube.
	</p>
</div>
</div>
</div>
</div>
