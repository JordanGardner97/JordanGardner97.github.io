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


    var UnipharReadMeCount = 0;

function ReadMoreUnipharFunction(){
    if (UnipharReadMeCount ==0)
    {
        $('.UnipharDes').css("display","block");
        UnipharReadMeCount +=1;
        $('.ReadMoreUniphar').text("Read Less")
    }
    
    else
    {
        $('.UnipharDes').css("display","none");
        UnipharReadMeCount = 0;
        $('.ReadMoreUniphar').text("Read More")
    }
    
    }



    var DAFMReadMeCount = 0;

function ReadMoreDAFMFunction(){
    if (DAFMReadMeCount ==0)
    {
        $('.DAFMDes').css("display","block");
        DAFMReadMeCount +=1;
        $('.ReadMoreDAFM').text("Read Less")
    }
    
    else
    {
        $('.DAFMDes').css("display","none");
        DAFMReadMeCount = 0;
        $('.ReadMoreDAFM').text("Read More")
    }
    
    }



    var SkillsCount = 0;

    function SeeMoreSkillsFunction(){
        if (SkillsCount ==0)
        {
            $('.SkillsToBeHidden').css("display","block");
            SkillsCount +=1;
            $('.SeeMoreSkills').text("See Less")
        }
        
        else
        {
            $('.SkillsToBeHidden').css("display","none");
            SkillsCount = 0;
            $('.SeeMoreSkills').text("See More")
        }
        
        }