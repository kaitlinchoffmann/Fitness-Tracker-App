//const variables
const dris = require("./DRI");

const User = [
    {
        Email: 'jill@fakemail.com',
        Name: 'Jill', 
        Age: 31,
        Password: 'password',
        Height: 63,
        Weight: 123,
        Activity: "active",
        Sex: "Female",
        EER: dris.findEER(31, 123, 63, "active", "maintain", "female"),
        Goal: "maintain",
        Picture: 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        BMI: dris.findBMI(123, 63),
        Status: 'Getting those gains!!!',
        IsAdmin: false,
        DRI: dris.findDRI(2278, 123, "jill@fakemail.com"),
        userID: 1
    },
    {
        Email: "admin@fakemail.com",
        Name: "Kaitlin",
        Age: 27,
        Password: "cool",
        Height: 64,
        Weight: 107,
        Activity: 'low',
        Sex: 'Female',
        EER: dris.findEER(27, 107, 64, "low", "gainOne", "female"),
        Goal: "gainOne",
        Picture: 'https://media.wired.com/photos/5932b220f682204f736975f0/4:3/w_660,c_limit/ff_cats_f.jpg',
        BMI: dris.findBMI(107, 64),
        Status: "I'm the Admin!!",
        IsAdmin: true,
        DRI: dris.findDRI(1998, 107, "admin@fakemail.com"),
        userID: 2
    },
    {
        Email: 'j@j',
        Name: 'Jack', 
        Age: 51,
        Password: 'p',
        Height: 69,
        Weight: 300,
        Activity: "low",
        Sex: "male",
        EER: dris.findEER(51, 300, 69, "low", "maintain", "male"),
        Goal: "maintain",
        Picture: "https://img.huffingtonpost.com/asset/5dcc613f1f00009304dee539.jpeg?cache=QaTFuOj2IM&ops=crop_834_777_4651_2994%2Cscalefit_720_noupscale",
        BMI: dris.findBMI(300, 69),
        Status: 'Doing a lot',
        IsAdmin: false,
        DRI: dris.findDRI(3623,300,"j@j"),
        userID: 3
    },
    {
        Email: 'm@m',
        Name: 'Moopy', 
        Age: 19,
        Password: 'm',
        Height: 61,
        Weight: 130,
        Activity: "low",
        Sex: "male",
        EER: dris.findEER(19, 130, 61, "low", "maintain", "male"),
        Goal: "maintain",
        Picture: "https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/w1p4o-67CCHRZ8J4H-Full-Image_GalleryBackground-en-US-1536279914488._SX1080_.jpg",
        BMI: dris.findBMI(130, 61),
        Status: 'Doing bad stuff',
        IsAdmin: false,
        DRI: dris.findDRI(2200,130,"m@m"),
        userID: 4 
    },
    {
        Email: 'b@b.com',
        Name: 'Jill', 
        Age: 26,
        Password: 'p',
        Height: 70,
        Weight: 180,
        Activity: "low",
        Sex: "Female",
        EER: dris.findEER(26, 180, 70, "low", "maintain", "female"),
        Goal: "maintain",
        Picture: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg',
        BMI: dris.findBMI(180, 70),
        Status: 'Relaxing!',
        IsAdmin: false,
        DRI: dris.findDRI(3000, 180, "b@b"),
        userID: 5  
    },   
];

let CurrentUser = null;

let BannedUsers = [
    {
        Email: 'm@m',
        Name: 'Moopy',
        userID: 4
    }  
];

function Logout() {
    this.CurrentUser = null;
    return this.CurrentUser;
};

function AddNewUser(email, name, age, pw, cpw, h, w, act, goal, sex) {
    const newUser = User.find(x => x.Email == email);
    if(newUser) throw Error('Email already linked to an account');
    if(email == "") throw Error('Please enter an email');
    if(name == "") throw Error('Please enter a name');
    if(age == "") throw Error('Please enter an age');
    if(pw == "") throw Error('Please enter a password');
    if(h == "") throw Error('Please enter a height');
    if(w == "") throw Error('Please enter a weight');
    if(act == "") throw Error('Please enter an activity level');
    if(goal == "") throw Error('Please enter a goal')
    if(sex == "") throw Error('Please enter a sex');
    if(pw != cpw) throw Error('Passwords must match');
    else {
    eer = dris.findEER(age, w, h, act, goal, sex);    
    dri = dris.findDRI(eer, w, email);    
    const newId = User.push({
                        Email: email,
                        Name: name, 
                        Age: age, 
                        Password: pw, 
                        Height: h, 
                        Weight: w,
                        Activity: act,
                        Sex: sex,
                        EER: eer,
                        Goal: goal,
                        Picture: 'https://i.pinimg.com/originals/33/06/30/3306306e17350814717723a263cac578.jpg', 
                        BMI: dris.findBMI(w,h),
                        Status: '',
                        IsAdmin: false,
                        DRI: dri,
                        userID: 6 
                    });
        this.CurrentUser = ChangeCurrent(newId);
        return this.CurrentUser;
    }
};

function AddNewUserAdmin(name, email, pw, isAd) {
    const newUser = User.find(x => x.Email == email);
    if(newUser) throw Error('Email already linked to an account');
    if(email == "") throw Error('Please enter an email');
    if(name == "") throw Error('Please enter a name');
    if(isAd == "") throw Error('Please enter admin capability');
    if(pw == "") throw Error('Please enter a password');
    else {
        admin = false;
        if(isAd === "true") {
            admin = true;
        };
        eer = dris.findEER(0, 0, 0, "low", "maintain", "female");    
        dri = dris.findDRI(eer, 0, email);    
        User.push({
                            Email: email,
                            Name: name, 
                            Age: 0, 
                            Password: pw, 
                            Height: 0, 
                            Weight: 0,
                            Activity: "low",
                            Sex: "female",
                            EER: eer,
                            Goal: "maintain",
                            Picture: 'https://i.pinimg.com/originals/33/06/30/3306306e17350814717723a263cac578.jpg', 
                            BMI: dris.findBMI(0,0),
                            Status: '',
                            IsAdmin: admin,
                            DRI: dri,
                            userID: 7 
                        });
            const newUser = User.find(x => x.Email == email);            
            return newUser;
        }
};

function ChangeCurrent(uid) {
    const user = User.find(x => x.userID == uid);
    if(!user) throw Error('User not found');

    return user;
};

function SubmitChanges(changes) {  
    this.CurrentUser = changes; 
    var newBMI = dris.findBMI(changes.Weight, changes.Height);
    this.CurrentUser.BMI = newBMI;
    var newEER = dris.findEER(changes.Age, changes.Weight, changes.Height, changes.Activity, changes.Goal, changes.Sex);
    this.CurrentUser.EER = newEER;
    var newDRI = dris.findDRI(newEER, changes.Weight, changes.Email);
    this.CurrentUser.DRI = newDRI;
    dris.CurrentDRI = newDRI;
    return dris.CurrentDRI;
};

function BanUser(userEmail) {
    const user = User.find(x => x.Email == userEmail);
    if(!user) throw Error("User doesn't exist");
    else {
        BannedUsers.push({
            Email: user.Email,
            Name: user.Name,
            userID: user.userID
    })
    return user;
    }
}

function getUser(userSearched, currentUser) {
    const searched = [];
    User.map(function(x, index) {
        if(x.Name == userSearched && x.userID != currentUser) {
            searched.push({
                Email: x.Email,
                userID: x.userID,
                Name: x.Name,
                Picture: x.Picture
            });
        }
    });
    return searched;
}

function getSingleUser(userClicked) {
    const user = User.find(x => x.userID == userClicked);
    if(user) {
        console.log(user.Email);
        const foundUser = {
            Email: user.Email,
            userID: user.userID,
            Name: user.Name,
            Picture: user.Picture
        };
        return foundUser;
    } else throw Error("User not found");
}

module.exports = {
    User, Logout, AddNewUser, AddNewUserAdmin, BanUser, BannedUsers, ChangeCurrent,
    CurrentUser, SubmitChanges, getUser, getSingleUser,
    Login(email, password) {
        const user = User.find(x => x.Email == email);
        if(!user) throw Error('User not found');
        if(user.Password != password) throw Error('Wrong password');
        const bannedUser = BannedUsers.find(x => x.Email == email);
        if(bannedUser) throw Error('Sorry, account banned. Contact us for more info.');

        this.CurrentUser = user;
        return user;
    },
    GetUser(userId) {
        return User[userId];
    }

};