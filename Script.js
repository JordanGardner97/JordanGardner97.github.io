function sendMessageFunction(){
    alert("Your message has been sent");
};


var count = 0;


function showMoreFunction(){
if (count ==0)
{
    $('#CollegeResults').css("display","block");
    count +=1;
    $('.Show').text("Hide Grades")
}

else
{
    $('#CollegeResults').css("display","none");
    count = 0;
    $('.Show').text("Show Grades Below")
}

}

var aboutMeCount = 0;

function showMoreAboutMe(){
    if (aboutMeCount ==0)
    {
        $('.hidAboutMeDiv').css("display","block");
        aboutMeCount +=1;
        $('.moreAboutMe').text("See Less")
    }
    
    else
    {
        $('.hidAboutMeDiv').css("display","none");
        aboutMeCount = 0;
        $('.moreAboutMe').text("Show More")
    }
    
    }