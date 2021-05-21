-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 21, 2021 at 06:34 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `morecare`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_signup_info`
--

CREATE TABLE `admin_signup_info` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin_signup_info`
--

INSERT INTO `admin_signup_info` (`id`, `Name`, `Email`, `Password`) VALUES
(1, 'Hritik Sharma', 'iit2019020@iiita.ac.in', 'hritik'),
(2, 'Saksham Aggrawal', 'iit2019022@iiita.ac.i', 'saksham'),
(3, 'Swaraj Bhosle', 'iit2019024@iiita.ac.in', 'swaraj'),
(4, 'Divyesh Rana', 'iit2019063@iiita.ac.in', 'rana');

-- --------------------------------------------------------

--
-- Table structure for table `doctor_signup_info`
--

CREATE TABLE `doctor_signup_info` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `PhoneNo` varchar(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Degree` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `BirthDate` varchar(16) NOT NULL,
  `BloodGroup` varchar(10) NOT NULL,
  `Height` varchar(10) NOT NULL,
  `Weight` varchar(10) NOT NULL,
  `Gender` varchar(10) NOT NULL,
  `Address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `doctor_signup_info`
--

INSERT INTO `doctor_signup_info` (`id`, `Name`, `PhoneNo`, `Email`, `Degree`, `Password`, `BirthDate`, `BloodGroup`, `Height`, `Weight`, `Gender`, `Address`) VALUES
(1, 'Srushti Bhosle', '8208144779', 'srushtibhosle345@gmail.com', 'MBBS MD', 'doctortobe', '25-09-1998', 'AB+', '175cm', '58kg', 'Female', 'Bhagya Nagar, Nanded'),
(2, 'Shashank Aggrawal', '9656932689', 'shashankaggrawal2002@gmail.com', 'MBBS DNB', 'shashank', '12-08-1998', 'A+', '180cm', '77kg', 'Male', 'Indira Colony, Hyderabad'),
(3, 'Akshat Vijay', '9986534892', 'akshatvijay998@gmail.com', 'MBBS MS', 'akshat', '23-11-1995', 'O+', '175cm', '69kg', 'Male', 'Civil Lines, Hyderabad'),
(4, 'Gaurav Singhal', '7798562395', 'gauravsinghal6678@gmail.com', 'MBBS DGO', 'gaurav', '23-11-1995', 'AB+', '170cm', '53kg', 'Male', 'Airport Road, Hyderabad'),
(5, 'Anuja Singh', '9656932689', 'anujasingh9989@gmail.com', 'MBBS MD', 'anuja', '12-11-1991', 'B-', '176cm', '64Kg', 'Female', 'Bk Hall Road, Hyderabad');

-- --------------------------------------------------------

--
-- Table structure for table `patient_info`
--

CREATE TABLE `patient_info` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `doctor_Name` varchar(50) NOT NULL,
  `doctor_Email` varchar(50) NOT NULL,
  `Degree` varchar(15) NOT NULL,
  `Date` varchar(16) NOT NULL,
  `Shift` varchar(15) NOT NULL,
  `Temperature` varchar(15) NOT NULL,
  `BloodPressure` varchar(20) NOT NULL,
  `HeartRate` varchar(20) NOT NULL,
  `BreathRate` varchar(20) NOT NULL,
  `Description` varchar(50) NOT NULL,
  `prescription1` varchar(50) NOT NULL,
  `prescription2` varchar(50) NOT NULL,
  `prescription3` varchar(50) NOT NULL,
  `prescription4` varchar(50) NOT NULL,
  `prescription5` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient_info`
--

INSERT INTO `patient_info` (`id`, `Name`, `Email`, `doctor_Name`, `doctor_Email`, `Degree`, `Date`, `Shift`, `Temperature`, `BloodPressure`, `HeartRate`, `BreathRate`, `Description`, `prescription1`, `prescription2`, `prescription3`, `prescription4`, `prescription5`) VALUES
(1, 'Swaraj Bhosle', 'iit2019024@iiita.ac.in', 'Gaurav Singhal', 'gauravsinghal6678@gmail.com', '', '26-04-2021', 'Evening', '37°C', '120/80 mm Hg', '81 beats per minute', '15', 'I am fine', '', '', '', '', ''),
(2, 'Akshat Baranwal', 'iit2019010@iiita.ac.in', 'Anuja Singh', 'anujasingh9989@gmail.com', '', '28-03-2021', 'Morning', '45°C', '130/85 mm Hg', '76 beats per minute', '16', 'I am feeling absolutely fine', 'Take Paracetamols', '', '', '', ''),
(4, 'Manoj Raj', 'manojraj@gmail.com', 'Akshat Vijay', 'akshatvijay998@gmail.com', '', '28-04-2021', 'Morning', '45°C', '120/80 mm Hg', '81 beats per minute', '15', 'Nothing', 'undefined', '', '', '', ''),
(5, 'Aniket Jaiswal', 'iit2019085@iiita.ac.in', 'Anuja Singh', 'anujasingh9989@gmail.com', '', '28-04-2021', 'Evening', '37°C', '120/80 mm Hg', '81 beats per minute', '15', 'I am feeling fine.', 'One', 'Two', 'Three', 'Four', 'Five'),
(6, 'Suraj Pawar', 'surajpawar334@gmail.com', 'Akshat Vijay', 'akshatvijay998@gmail.com', '', '03-05-2021', 'Morning', '32°C', '124/82 mm Hg', '89 beats per minute', '14', 'I am feeling some tiredness.', 'Take Paracetamol 3 times', 'Take combiplan 4 times', 'Take Astroninfd 3 times', 'Take nicedrty 2 times', 'Take Remdeidasjd 3 times'),
(13, 'Navdeep Singh', 'navdeepsingh334@gmail.com', 'Anuja Singh', 'anujasingh9989@gmail.com', '', '25-03-2021', 'Morning', '45°C', '120/80 mm Hg', '81 beats per minute', '15 breaths per minut', 'I am feeling fine', 'Take Paracetamol 3 times', 'Take combiplan 4 times', 'Take Astroninfd 3 times', 'Take nicedrty 2 times', 'Take Remdeidasjd 3 times'),
(16, 'Shivam Mehra', 'shivammehra3345@gmail.com', 'Anuja Singh', 'anujasingh9989@gmail.com', '', '04-05-2021', 'Evening', '37°C', '120/80 mm Hg', '81 beats per minute', '15 breaths per minut', 'I am feeling fine.', 'Take Paracetamol 3 times', 'Take combiplan 4 times', 'Take Astroninfd 3 times', 'Take nicedrty 2 times', 'Take Remdeidasjd 3 times');

-- --------------------------------------------------------

--
-- Table structure for table `patient_signup_info`
--

CREATE TABLE `patient_signup_info` (
  `id` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
  `BirthDate` varchar(16) NOT NULL,
  `PhoneNo` varchar(10) NOT NULL,
  `doctor_Name` varchar(50) NOT NULL,
  `doctor_Email` varchar(50) NOT NULL,
  `Degree` varchar(15) NOT NULL,
  `BloodGroup` varchar(5) NOT NULL,
  `Height` varchar(10) NOT NULL,
  `Weight` varchar(10) NOT NULL,
  `Address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `patient_signup_info`
--

INSERT INTO `patient_signup_info` (`id`, `Name`, `Email`, `Password`, `BirthDate`, `PhoneNo`, `doctor_Name`, `doctor_Email`, `Degree`, `BloodGroup`, `Height`, `Weight`, `Address`) VALUES
(1, 'Swaraj Bhosle', 'iit2019024@iiita.ac.in', 'raj', '28-12-2000', '9359185800', 'Gaurav Singhal', 'gauravsinghal6678@gmail.com', 'MBBS DGO', 'AB+', '180cm', '65kg', 'Nanded, Maharashtra'),
(2, 'Akshat Baranwal', 'iit2019010@iiita.ac.in', 'baba', '12-63-2001', '6352149652', 'Anuja Singh', 'anujasingh9989@gmail.com', 'MBBS MD', 'O+', '145cm', '96kg', 'Lucknow'),
(63, 'Suraj Pawar', 'surajpawar334@gmail.com', 'surya', '27-12-2001', '9352145652', 'Akshat Vijay', 'akshatvijay998@gmail.com', 'MBBS MS', 'B+', '145cm', '96kg', 'Patil Nagar, Basmath'),
(66, 'Navdeep Singh', 'navdeepsingh334@gmail.com', 'navdeep', '21-11-2002', '9999586234', 'Anuja Singh', 'anujasingh9989@gmail.com', 'MBBS MD', 'B+', '145cm', '65kg', 'Civil Lines, Allahabad'),
(71, 'Shivam Mehra', 'shivammehra3345@gmail.com', 'shivam', '21-03-1996', '7798165079', 'Anuja Singh', 'anujasingh9989@gmail.com', 'MBBS MD', 'AB+', '165cm', '65kg', 'Blue Bells Road, Hyderabad'),
(73, 'Raghav Pawar', 'raghavpawar@gmail.com', 'raghavya', '25-04-2003', '8565351575', 'Shashank Aggrawal', 'shashankaggrawal2002@gmail.com', 'MBBS DNB', 'B+', '125cm', '85kg', 'Allahabad');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_signup_info`
--
ALTER TABLE `admin_signup_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `doctor_signup_info`
--
ALTER TABLE `doctor_signup_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_info`
--
ALTER TABLE `patient_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `patient_signup_info`
--
ALTER TABLE `patient_signup_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_signup_info`
--
ALTER TABLE `admin_signup_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `doctor_signup_info`
--
ALTER TABLE `doctor_signup_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `patient_info`
--
ALTER TABLE `patient_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `patient_signup_info`
--
ALTER TABLE `patient_signup_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=77;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
