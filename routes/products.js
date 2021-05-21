var express = require('express');
var router = express.Router();
var db = require('../db');
var nodemailer = require('nodemailer');
const Swal = require('sweetalert');

var accountSid = 'AC92b57ca7841b16271527bc74001421e4'; // Your Account SID from www.twilio.com/console
var authToken = '8b73372c566f10b9a6d596e73f6bb0a4';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // username: 'Ram',
    user: 'morecarehospitals@gmail.com',
    // user: 'More Care Hospitals',
    pass: 'MoreCare@123'
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('products', { title: 'Home | More Care Hospitals'});
});

router.get('/Signinas', function (req, res, next) {
  res.render('Signinas', { title: 'Sign-in | More Care Hospitals' });
});


router.get('/Signinas/PatientLogin', function (req, res, next) {
  res.render('PatientLogin', { title: 'Patient-Login | More Care Hospitals' });
});

router.get('/Signinas/AdminLogin', function (req, res, next) {
  res.render('AdminLogin', { title: 'Admin-Login | More Care Hospitals' });
});

router.get('/Signinas/DoctorLogin', function (req, res, next) {
  res.render('DoctorLogin', { title: 'Doctor-Login | More Care Hospitals' });
});

router.get('/Signinas/Signupas', function (req, res, next) {
  res.render('Signupas', { title: 'Sign-up' });
});

router.get('/Signinas/Signupas/PatientSignup', function (req, res, next) {
  res.render('PatientSignup', { title: 'Patient-Sign-up | More Care Hospitals' });
});

router.get('/Signinas/Signupas/AdminSignup', function (req, res, next) {
  res.render('AdminSignup', { title: 'Admin-Sign-up' });
});

router.get('/Signinas/Signupas/DoctorSignup', function (req, res, next) {
  res.render('DoctorSignup', { title: 'Doctor-Sign-up' });
});

router.get('/Patientbasicinfo', function (req, res, next) {
  res.render('Patientbasicinfo');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/choose_doctor', function (req, res, next) {
    res.render('choose_doctor', { title:'Choose Doctor | More Care Hospitals'});
  });



router.get('/dashboard', function (req, res, next) {
  res.render('dashboard');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/dashboard/Personal_info', function (req, res, next) {
  res.render('Personal_info');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/dashboard/update_parameters', function (req, res, next) {
  res.render('update_parameters');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/dashboard/prescription', function (req, res, next) {
  res.render('prescription');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/dashboard/Notifications', function (req, res, next) {
  res.render('Notifications');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/doc_dashboard', function (req, res, next) {
  res.render('doc_dashboard');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/doc_dashboard/doc_Personal_info', function (req, res, next) {
  res.render('doc_Personal_info');
  // res.render('Patientbasicinfo', {title: result});
});


router.get('/doc_dashboard/doc_patientlist', function (req, res, next) {
  res.render('doc_patientlist');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/doc_dashboard/doc_Notifications', function (req, res, next) {
  res.render('doc_Notifications');
  // res.render('Patientbasicinfo', {title: result});
});

router.get('/doc_dashboard/doc_add_prescription', function (req, res, next) {
  res.render('doc_add_prescription');
  // res.render('Patientbasicinfo', {title: result});
});



router.get('/Patientinfo', function (req, res, next) {
  res.render('Patientinfo', { title: 'Patient-info | More Care Hospitals' });
});

router.post('/check', function (req, res, next) {
  var Email = req.body.Email;
  var Password = req.body.Password;
  var sql = `SELECT * FROM patient_signup_info WHERE Email="${Email}" and Password="${Password}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    if (result.length == 1) {
      // req.session.userId = results[0].id;
      // req.session.user = results[0];
      // console.log(results[0].id);
      // res.redirect('/products/Patientbasicinfo');
      console.log(result[0].Name)
     
      // res.render('Patientbasicinfo',{title:'SWARAJ',message:'You Have Successfully Logged in...', userData: result[0]});
      res.render('dashboard', { title: 'Dashboard | More Care Hospitals' , userData: result[0]});
    }
    else {
      // message = 'Wrong Credentials.';
      // res.render('index.ejs',{message: message});
      res.redirect('/products/Signinas/PatientLogin');
    }
    // res.redirect('/products/Patientbasicinfo');
  });
});


/*************************************************************************************** */

router.get('/dashboard/profile/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('dashboard', { userData: result[0]});
  });
});

router.get('/dashboard/Personal/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('Personal_info', { userData: result[0]});
  });

});

router.get('/dashboard/parameters/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('update_parameters', { userData: result[0]});
  });

});


router.get('/dashboard/medicine/:id', function (req, res, next) {
  var id = req.params.id;

  var sql = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
                                    
    var sql2 = `SELECT * FROM patient_info WHERE Email="${result[0].Email}" ORDER BY id DESC LIMIT 1`; 
    db.query(sql2, function(err, result1){
      if(err) throw err;
      console.log("prescription received for patient");
      res.render('prescription', { title:'MoreCare | Prescription', userData: result[0], userData1: result1[0]});
  });

  });

});

router.get('/dashboard/notify/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('Notifications', { userData: result[0]});
  });

});


/**********************************************************************************/
router.get('/doc_dashboard/doc_profile/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM doctor_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('doc_dashboard', { userData: result[0]});
  });
});

router.get('/doc_dashboard/doc_Personal/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM doctor_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('doc_Personal_info', { userData: result[0]});
  });
});

router.get('/doc_dashboard/doc_patientlist/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM doctor_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;

    var sql2 = `SELECT * FROM patient_signup_info WHERE doctor_Name="${result[0].Name}"`;
    db.query(sql2, function(err, rows, field){
      if(err) throw err;
      console.log("patient list is showed");
      res.render('doc_patientlist', { title:'Patientlist', userData: result[0], patient_signup_info:rows});
  });

    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    // res.render('doc_patientlist', { userData: result[0]});
  });
});



router.get('/doc_dashboard/doc_notify/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM doctor_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;

    // var sql2 = "SELECT * FROM patient_info WHERE  id = (SELECT MAX(id) FROM patient_info)";

    var sql2 = `SELECT * FROM patient_info WHERE doctor_Email="${result[0].Email}" ORDER BY id DESC LIMIT 1`; 
    db.query(sql2, function(err, result1){
      if(err) throw err;
      console.log("latest paramters are showed");

      res.render('doc_Notifications', { title:'MoreCare | Recent Parameters', userData: result[0], userData1: result1[0]});
  });
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    // res.render('doc_Notifications', { userData: result[0]});
  });
});

//*************************************************************** */
router.get('/doc_dashboard/add_prescription/:id/:id1', function (req, res, next) {
  var id = req.params.id;
  var id1 = req.params.id1;

  var sql = `SELECT * FROM patient_info WHERE  id = "${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;

    var sql2 = `SELECT * FROM doctor_signup_info WHERE id="${id1}"`;
    db.query(sql2, function(err, result1){
      if(err) throw err;
      console.log("Doctor and patient Info passed");

      res.render('doc_add_prescription', { title:'MoreCare | Prescription', userData1: result[0], userData: result1[0]});
  });
  });
  
});


/**************************************************************/



router.post('/patientsignedup', function (req, res, next) {
  var Name = req.body.Name;
  var Email = req.body.Email;
  var Password = req.body.Password;
  var BirthDate = req.body.BirthDate;
  var PhoneNo = req.body.PhoneNo;

  client.messages.create({
    from: 'whatsapp:+14155238886',
    // body: 'More Care',
    body: `Dear ${Name}\nWelcome to MoreCare Hospitals.\nYou have been signed up to the More Care Hospitals`,
    to: 'whatsapp:+919359185800',
    // to: 'whatsapp:' + process.env.MY_PHONE_NUMBER,
  }).then(message => console.log(message.sid));

  var mailOptions = {
    from: 'morecarehospitals@gmail.com',
    // to: 'iit2019020@iiita.ac.in , iit2019022@iiita.ac.in, iit2019024@iiita.ac.in, iit2019063@iiita.ac.in ',
    to: 'swarajbhosle321@gmail.com',
    // to: Email,
    subject: 'Patient Signup | Morecare Hospitals',
    // text: 'Sign in krne pe automatically email send ho rha bhai..jis mail id se sign in kiya hain usse mail jaa rha ',
    text:  `Dear ${Name}\nWelcome to MoreCare Hospitals.\nYou have been signed up to the More Care Hospitals`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  var sql = `INSERT INTO patient_signup_info (Name, Email, Password, BirthDate, PhoneNo) VALUES ("${Name}", "${Email}", "${Password}", "${BirthDate}", "${PhoneNo}")`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    // res.redirect('/products/choose_doctor');
    // res.redirect('/products/Patientbasicinfo', {title:'RAMA',message:'You Have Successfully Logged in...', userData: result[0]});
    // res.render('Patientbasicinfo',{title:'RAMA',message:'You Have Successfully Logged in...', userData: result[0]});
  });

  var sql2 = "SELECT * FROM patient_signup_info WHERE id = (SELECT MAX(id) FROM patient_signup_info)";
  db.query(sql2, function (err, result) {
    if (err) throw err;
    console.log('id is ' + result[0].id)

    var sql3 = "SELECT * FROM doctor_signup_info";
    db.query(sql3, function(err,rows, field){
      if(err) throw err;
      console.log("Info Added");
      res.render('choose_doctor', { title:'Choose Doctor',userData: result[0], doctor_signup_info:rows});
   
  });
    
    // res.render('choose_doctor', {userData: result[0]});

    // res.redirect('/products/choose_doctor',{userData:result[0]});
    // res.redirect('/products/Patientbasicinfo', {title:'RAMA',message:'You Have Successfully Logged in...', userData: result[0]});
    // res.render('Patientbasicinfo',{title:'RAMA',message:'You Have Successfully Logged in...', userData: result[0]});
  });


});


router.post('/doctor_selected/:id/doctorName/:doctor_Name/doctorEmail/:doctor_Email/:Degree', function (req, res, next) {
  var id = req.params.id;
  var doctor_Name = req.params.doctor_Name;
  var doctor_Email = req.params.doctor_Email;
  var Degree = req.params.Degree;

  // var doctor_id = req.body.doctor_id;

  // var Doctor_alloted = req.body.Doctor_alloted;


  // var sql = `INSERT INTO patient_signup_info (Doctor_alloted) VALUES ("${Doctor_alloted}") WHERE id="${id}"`;
  var sql = `UPDATE patient_signup_info SET doctor_Name="${doctor_Name}", doctor_Email="${doctor_Email}", Degree="${Degree}"  WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Doctor Name and Email Added");
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    // res.render('dashboard');
  });

  var sql2 = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql2, function (err, result) {
    if (err) throw err;
    console.log("rendered to dashboard");
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('dashboard', { userData: result[0]});
  });
});

/************************************************************************************ */


router.post('/dashboard/patientbasicinfoentered/:id', function (req, res, next) {
  var id = req.params.id;
 
  var BloodGroup = req.body.BloodGroup;
  var Height = req.body.Height;
  var Weight = req.body.Weight;
  var Address = req.body.Address;
  
  var sql = `UPDATE patient_signup_info SET BloodGroup="${BloodGroup}", Height="${Height}",Weight="${Weight}",Address="${Address}"  WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Patient Basic info added to database");
    
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    // res.render('dashboard');
  });

  var sql1 = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("rendered to update parameters");
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('update_parameters', { userData: result[0]});
  });

});

/******************************************************************************** */

router.post('/dashboard/patientinfoentered/:Email/:id/:Name/:doctor_Name/:doctor_Email/:Degree', function (req, res, next) {
  var Email = req.params.Email;
  var id = req.params.id;
  var Name = req.params.Name;
  var doctor_Name = req.params.doctor_Name;
  var doctor_Email = req.params.doctor_Email;
  var Degree = req.params.Degree;

  var Date = req.body.Date;
  var Shift = req.body.Shift;
  var Temperature = req.body.Temperature;
  var BloodPressure = req.body.BloodPressure;
  var HeartRate = req.body.HeartRate;
  var BreathRate = req.body.BreathRate;
  var Description = req.body.Description;
  
  

  client.messages.create({
    from: 'whatsapp:+14155238886',
    // body: 'More Care',
    body: `Dear Doctor,\nPatient Name is ${Name}.\n\nBody Temperature is ${Temperature}.\nBlood Presure is ${BloodPressure}.\nHeart Rate is ${HeartRate}.\nBreath Rate is ${BreathRate}.\nMessage from ${Name} is "${Description}"`,
    to: 'whatsapp:+919359185800',
    // to: 'whatsapp:' + process.env.MY_PHONE_NUMBER,
  }).then(message => console.log(message.sid));

  var mailOptions1 = {
    from: 'morecarehospitals@gmail.com',
    // to: 'iit2019020@iiita.ac.in , iit2019022@iiita.ac.in, iit2019024@iiita.ac.in, iit2019063@iiita.ac.in ',
    to: 'swarajbhosle321@gmail.com',
    // to: Email,
    subject: 'Patient Daily Parameters | MoreCare Hospitals',
    text: `Dear Doctor,\nPatient Name is ${Name}.\n\nBody Temperature is ${Temperature}.\nBlood Presure is ${BloodPressure}.\nHeart Rate is ${HeartRate}.\nBreath Rate is ${BreathRate}.\nMessage from ${Name} is "${Description}"`
  };

  transporter.sendMail(mailOptions1, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  
  
  var sql = `INSERT INTO patient_info (Name, Email,doctor_Name, doctor_Email,Degree, Date, Shift, Temperature, BloodPressure, HeartRate, BreathRate ,Description) VALUES ("${Name}", "${Email}","${doctor_Name}","${doctor_Email}","${Degree}","${Date}", "${Shift}", "${Temperature}", "${BloodPressure}", "${HeartRate}", "${BreathRate}","${Description}")`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log('information added to database');
    // res.redirect('/products');
  });

  var sql1 = `SELECT * FROM patient_signup_info WHERE id="${id}"`;
  db.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("rendered to update parameters");
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('dashboard', { userData: result[0]});
  });
});


/************************************************************************************************************************ */
router.post('/doc_dashboard/prescriptionentered/:id/:id1', function (req, res, next) {
  var id = req.params.id;
  var id1 = req.params.id1;
  var prescription1 = req.body.prescription1;
  var prescription2 = req.body.prescription2;
  var prescription3 = req.body.prescription3;
  var prescription4 = req.body.prescription4;
  var prescription5 = req.body.prescription5;

  client.messages.create({
    from: 'whatsapp:+14155238886',
    // body: 'More Care',
    body: `Prescription From Doctor | MoreCare Hospitals\n\n${prescription1}\n${prescription2}\n${prescription3}\n${prescription4}\n${prescription5}`,
    to: 'whatsapp:+919359185800',
    // to: 'whatsapp:' + process.env.MY_PHONE_NUMBER,
  }).then(message => console.log(message.sid));


  var mailOptions2 = {
    from: 'morecarehospitals@gmail.com',
    // to: 'iit2019020@iiita.ac.in , iit2019022@iiita.ac.in, iit2019024@iiita.ac.in, iit2019063@iiita.ac.in ',
    to: 'swarajbhosle321@gmail.com',
    // to: Email,
    subject: 'Prescription From Doctor | MoreCare Hospitals',
    // text: 'All Ok'
    text: `Prescription :\n${prescription1}\n${prescription2}\n${prescription3}\n${prescription4}\n${prescription5}`,
    // text: `Dear Doctor,\nPatient Name is ${Name}.\n\nBody Temperature is ${Temperature}.\nBlood Presure is ${BloodPressure}.\nHeart Rate is ${HeartRate}.\nBreath Rate is ${BreathRate}.\nMessage from ${Name} is "${Description}"`
  };


  transporter.sendMail(mailOptions2, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('prescription sent to patient: ' + info.response);
    }
  });

  
  var sql = `UPDATE patient_info SET prescription1="${prescription1}",prescription2="${prescription2}",prescription3="${prescription3}",prescription4="${prescription4}",prescription5="${prescription5}" WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log('prescription added to database');
    // res.redirect('/products');
  });
  var sql1 = `SELECT * FROM doctor_signup_info WHERE id="${id1}"`;
  db.query(sql1, function (err, result1) {
    if (err) throw err;
    console.log("rendered to update parameters");
    // res.redirect('/Patientinfo/' + id );
    // res.render('Patientinfo');
    res.render('doc_dashboard', { userData: result1[0]});
  });

});



/*************************************************************************************************************** */

router.post('/doctorloggedin', function (req, res, next) {
  var Email = req.body.Email;
  var Password = req.body.Password;
  var sql = `SELECT * FROM doctor_signup_info WHERE Email="${Email}" and Password="${Password}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    if (result.length == 1) {
      console.log(result[0].Name)
      res.render('doc_dashboard', { title: 'MorCare | Dashboard' , userData: result[0]});
    }
    else {
      res.redirect('/products/Signinas/DoctorLogin');
    }
  });
});

/*********************************************************************** */

router.get('/ad_dashboard', function (req, res, next) {
  res.render('ad_dashboard');
});

router.get('/ad_dashboard/ad_doctor_list', function (req, res, next) {
  res.render('ad_doctor_list');

});

router.get('/ad_dashboard/ad_patient_list', function (req, res, next) {
  res.render('ad_patient_list');
});


router.get('/ad_dashboard/ad_notifications', function (req, res, next) {
  res.render('ad_notifications');
});

router.post('/adminloggedin', function (req, res, next) {
  var Email = req.body.Email;
  var Password = req.body.Password;
  var sql = `SELECT * FROM admin_signup_info WHERE Email="${Email}" and Password="${Password}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    if (result.length == 1) {
      console.log(result[0].Name)
      res.render('ad_dashboard', { title: 'MorCare | Dashboard', userData: result[0] });
    }
    else {
      res.redirect('/products/Signinas/AdminLogin');
    }
  });
});


router.get('/ad_dashboard/ad_home/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM admin_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.render('ad_dashboard', { userData: result[0] });
  });
});


router.get('/ad_dashboard/doctorlist/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM admin_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;

    var sql2 = `SELECT * FROM doctor_signup_info`;
    db.query(sql2, function (err, rows, field) {
      if (err) throw err;
      console.log("doctor list is showed");
      res.render('ad_doctor_list', { title: 'Doctorlist', userData: result[0], doctor_list: rows });
    });

  });
});

router.get('/ad_dashboard/patientlist/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM admin_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;

    var sql2 = `SELECT * FROM patient_signup_info`;
    db.query(sql2, function (err, rows, field) {
      if (err) throw err;
      console.log("patient list is showed");
      res.render('ad_patient_list', { title: 'Doctorlist', userData: result[0], patient_list: rows });
    });

  });
});

router.get('/ad_dashboard/notify/:id', function (req, res, next) {
  var id = req.params.id;
  var sql = `SELECT * FROM admin_signup_info WHERE id="${id}"`;
  db.query(sql, function (err, result) {
    if (err) throw err;
    res.render('ad_notifications', { userData: result[0] });
  });
});













module.exports = router;


