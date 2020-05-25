const users = require("./User");
let CurrentDRI = null;

function findBMI(weight, height) {
    var bmi = (weight/(height * height)) * 703;
    return bmi.toFixed(2);
};

async function currentDRI() {
    const dri = await users.User.findOne({"Email": users.CurrentUser.Email});    
    if(!dri) throw Error('DRI not found');
    
    this.CurrentDRI = dri;
    return this.CurrentDRI;
};

function findPA(sex, age, activity) { // PA = Physical Activity Coefficients
    let PA = 0;
    if(activity == "sedentary") {
        PA = 1.0;
    }
    else if(sex == "female") {
        if(age >= 3 && age <= 18) {
            if(activity == "low") {
                PA = 1.16;
            }
            else if(activity == "active") {
                PA = 1.31;
            }
            else {
                PA = 1.56;
            }
        }
        else if(age >= 19) {
            if(activity == "low") {
                PA = 1.12;
            }
            else if(activity == "active") {
                PA = 1.27;
            }
            else {
                PA = 1.45;
            }
        }
    }
    else {
        if(age >= 3 && age <= 18) {
            if(activity == "low") {
                PA = 1.13;
            }
            else if(activity == "active") {
                PA = 1.26;
            }
            else {
                PA = 1.42;
            }
        }
        else if(age >= 19) {
            if(activity == "low") {
                PA = 1.11;
            }
            else if(activity == "active") {
                PA = 1.25;
            }
            else {
                PA = 1.48;
            }
        }
    }
    return PA;
};

function findEER(age, weight, height, activity, goal, sex) { //Estimate Energy Requirement
    let EER = 0;
    let kg = weight / 2.20462;
    let m = 0.0254 * height;
    let pa = findPA(sex, age, activity);

    if(age <= 0.3) {
        EER = (89 * kg - 100) + 175;
    }
    else if(age <= 0.6) {
        EER = (89 * kg - 100) + 56; 
    }
    else if(age < 1) {
        EER = (89 * kg - 100) + 22;
    }
    else if(age < 3) {
        EER = (89 * kg - 100) + 20;
    }
    else if(sex == "female") {
        if(age >= 3 && age <= 8) {
            EER = 135.3 - (30.8 * age) + pa * ((10.0 * kg) + (934 * m)) + 20;
        } 
        else if(age <= 18) {
            EER = 135.3 - (30.8 * age) + pa * ((10.0 * kg) + (934 * m)) + 25;
        }
        else {
            EER = 354 - (6.91 * age) + pa * ((9.36 * kg) + (726 * m));
        }
    } 
    else {
        if(age >= 3 && age <= 8) {
            EER = 88.5 - (61.9 * age) + pa * ((26.7 * kg) + (903 * m)) + 20;
        } 
        else if(age <= 18) {
            EER = 88.5 - (61.9 * age) + pa * ((26.7 * kg) + (903 * m)) + 25;
        }
        else {
            EER = 662 - (9.53 * age) + pa * ((15.91 * kg) + (536.6 * m));
        }
    }
    
    if(goal == "gainOne") {
        EER += 500;
    }
    else if(goal == "gainTwo") {
        EER += 1000;
    }
    else if(goal == "loseOne") {
        EER -= 500;
        if(EER < 1200) {
            EER = 1200;
            alert("Warning: Calorie intake goal cannot be lower than 1200 due to risk of nutrient deficiency.")
        }
    }
    else if(goal == "loseTwo") {
        EER -= 1000;
        if(EER < 1200) {
            EER = 1200;
            alert("Warning: Calorie intake goal cannot be lower than 1200 due to risk of nutrient deficiency.")
        }
    }
    return EER;
};

function findDRI(eer, weight, email) {
    let lowFat = (eer * .20)/9;
    let highFat = (eer * .35)/9;
    let lowCarb = (eer * .45)/4;
    let  highCarb = (eer * .65)/4;
    let pro = (weight/2.20462) * 0.8;
    let sugar = (eer * .05)/4; 

    let goals = {
        Email: email,
        LowFat: lowFat.toFixed(0),
        HighFat: highFat.toFixed(0),
        LowCarb: lowCarb.toFixed(0),
        HighCarb: highCarb.toFixed(0),
        Protein: pro.toFixed(0),
        Sodium: 2300,
        Sugar: sugar.toFixed(0)
    };
    return goals;
};

module.exports = {
    findBMI, currentDRI, CurrentDRI, findPA,
    findEER, findDRI
};