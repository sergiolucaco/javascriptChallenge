// ### protect
// Write a JavaScript function to hide email addresses to protect from unauthorized user.

//     console.log(protect_email("robin_singh@example.com"));
//     "robin...@example.com"

function protectingEmail (strEmail){
    var strToArr = strEmail.split('@');
    var emailName = strToArr[0];
    var emailDomain = `@${strToArr[1]}`;
    var readablePartLength = Math.floor(emailName.length / 2) ;
    var readablePart = emailName.slice(0,readablePartLength)
    var emailProtected = `The protected version of ${strEmail} is : ${readablePart}...${emailDomain}.`
    return emailProtected;
}
// console.log(protectingEmail('robin_singh@example.com'));