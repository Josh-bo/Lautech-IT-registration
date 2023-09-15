let collectUserDetails = []

if(localStorage){
    let oldData = localStorage.getItem('AllUserDetails');
    userDetails = oldData
}

const createName = () => {

    let userDetails = {
        Name: userFullName.value,
        Mail: userEmail.value,
        Number: userPhoneNumber.value,
        State: userState.value,
        StateOfOrigin: userSOR.value,
        HomeAddress: userHA.value,
        InstitutionName: userIN.value,
        InstitutionPhoneNumber: userIPN.value,
        InstitutionAddress: userIA.value,
        PeriodOrTime: userPT.value,
    }
    
    console.log(userDetails);

    collectUserDetails.push(userDetails)

    localStorage.setItem('AllUserDetails', JSON.stringify(collectUserDetails));

    userFullName.value = "";
    userEmail.value = "";
    userPhoneNumber.value = "";
    userSOR.value = "";
    userHA.value = "";
    userIA.value = "";
    userIN.value = "";
    userIPN.value = "";
    userPT.value = "";
    userState.value = "";
}

const getDetails = () => {
    let getBackDetails = JSON.parse(localStorage.getItem("AllUserDetails"))

    console.log(getBackDetails)    
}