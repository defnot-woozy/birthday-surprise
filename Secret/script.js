// Change this message later
const message = `
Happy Birthday, Babe. ❤️
Una sa lahat, I just want to say Happy Birthday to the person who became one of the most important parts of my life. I hope today reminds you kung gaano ka ka-special and kung gaano karaming tao ang nagmamahal at nagpapahalaga sa'yo. And habang cine-celebrate natin yung birthday mo, gusto ko ring balikan kung paano nagsimula yung story natin.
I still remember the first time I saw you sa canteen sa work. Cashier ka noon, and honestly, ang unang thought ko lang talaga was, “Pretty niya.” You looked fierce and beautiful, and never ko naisip that time na yung girl na tinitingnan ko lang noon would eventually become someone this important to me.
Then bandang October, may moment na hindi ko makakalimutan. Pagod na pagod ako dahil sa overtime, tapos tinanong mo lang ako ng simpleng, “Okay ka lang ba?”
Simple lang naman yung tanong mo, pero somehow, iba yung naging effect sa akin. Parang tumigil ang mundo ko that time. I know na mabilis lang ang mga segundo, pero that time, every second felt like a lifetime. Hindi ko alam kung kailan exactly nagsimula, pero I knew that something changed in me that day. That's when I started falling for you.
Then January 13, 2025 came. Last day na ng contract ko, and sobrang kinakabahan ako. I remember thinking kung itatanong ko ba talaga yung Facebook mo. Eventually, I gathered enough courage and sinabi ko, “Last day na ng kontrato ko, baka pwede ko na maitanong FB mo.”
Simple lang pakinggan ngayon, pero that time, sobrang kaba ko. I didn't know kung saan kami dadalhin ng maliit na tanong na yun. Pero I'm really glad I asked.
And then came the moment na sinabi mong yes.
When you told me, “Para sakin pwede naman maganap ang ligawan habang magkarelasyon kaya bakit pa patatagalin,” parang nasa tuktok ako ng mundo. I felt like kaya kong gawin at lampasan lahat. Parang kaya kong i-conquer yung kahit anong bagay dahil finally, ikaw na yung kasama ko.
And what's funny is, sa first night na sinabi mong yes, nakatulog pa ako habang kausap ka. 😂 It's such a simple memory, pero hanggang ngayon, natatawa at natutuwa pa rin ako kapag naaalala ko.
Of course, hindi naman naging perfect lahat pagkatapos nun. Sa first few months natin, nagkaroon tayo ng mga tampuhan, arguments, and misunderstandings habang inaalam pa natin kung ano yung boundaries ng isa't isa. We were still learning how to understand each other and how to be in a relationship together.
Pero kahit ganoon, never kong naisip na hindi tayo magwo-work.
Instead of letting our pride get in the way, natutunan nating pag-usapan yung problems natin. Hindi natin piniling takasan yung problema or maghintayan kung sino ang unang lalapit. We learned to set our pride aside and talk things out.
And I think those struggles became part of what made us stronger.
Babe, sobrang grateful ako sa'yo.
You made me a better man.
You've always been there for me, especially during the times na hindi madali yung mga bagay-bagay. Kahit may financial struggles ako, you never let those things affect our relationship. Hindi mo ako pinaramdam na less ako because of what I couldn't provide. Instead, you've always been supportive, understanding, and patient with me.
And honestly, that's something I'll always be grateful for.
Before you came into my life, I was sad, insecure, immature, angry, and distant. Pero ever since you came into my life, ang daming nagbago sa akin.
Mas naging happy ako. Mas naging confident ako. Mas naging sociable ako. Natuto akong maging mas patient, mas caring, mas motivated, and mas open sa feelings ko.
You made me want to grow.
You made me want to become a better version of myself instead of staying the same person I was before.
Even something as simple as stopping smoking became possible because you gave me another reason to take better care of myself.
And kapag kasama kita, I feel safe.
I feel like I can be vulnerable with you. I can tell you what I'm feeling without having to hide everything. I don't feel like I have to pretend to be someone else.
You make me want to put more effort into everything. You make me want to stop being lazy and actually work for the things I want in life. You motivate me to become better.
And honestly, kapag kasama kita...
I feel like a King.
I want you to know that I will always do my best to protect you and take care of you.
I promise na kapag may pinagdadaanan ka, nandito ako. Kapag nahihirapan ka, tutulungan kita. I'll support you sa mga gusto mong gawin and sa mga pangarap mo. And most importantly, I never want you to feel like you're alone.
I want to be there when you're happy, when you're tired, kapag may sakit ka, kapag stressed ka, and especially kapag mahirap yung buhay.
I want to work hard so that someday, we can build the future that we both want.
I can't promise na magiging perfect ako or na magiging madali palagi ang lahat. Pero I can promise na I'll keep choosing you. I'll keep learning, I'll keep growing, and I'll keep doing my best to become the man that you deserve.
And for your birthday, I don't just wish for you to have a good day.
I wish for you to be happy.
I wish na maging healthy ka, successful, at magkaroon ka ng peace of mind. Sana ma-achieve mo lahat ng dreams and goals mo. Sana kahit anong pagsubok ang dumating sa buhay mo, manatili kang strong and resilient.
And kapag dumating yung times na feeling mo hindi mo na kaya, sana maalala mo na hindi mo kailangang harapin lahat mag-isa.
I'm here.
I'm so grateful na out of all the people I could have met, I met you.
From a girl na una kong napansin dahil pretty, fierce, and beautiful siya sa canteen, naging ikaw yung taong nagbago ng buhay ko in ways na hindi ko kailanman in-expect.
And now, after 7 months, you're not just someone I love.
You're someone I can't imagine my life without.
I don't always know how to show it, and sometimes I don't know the right words to say it, but I really don't want to imagine my life without you.
Happy Birthday, Babe. ❤️
I love you so much, Princess Candelaria.

— JP`;



// Opening button

function openBirthday() {

    document.getElementById("opening")
        .classList.add("hidden");

    document.getElementById("birthday")
        .classList.remove("hidden");

    startHearts();

}


// Message button

function showMessage() {

    document.getElementById("birthday")
        .classList.add("hidden");

    document.getElementById("message")
        .classList.remove("hidden");

    typeMessage();

}

// Memories button

function showMemories() {

    document.getElementById("message")
        .classList.add("hidden");

    document.getElementById("memories")
        .classList.remove("hidden");

}


// Final button

function showFinal() {

    document.getElementById("memories")
        .classList.add("hidden");

    document.getElementById("final")
        .classList.remove("hidden");

    startHearts();

}


// Typing animation

function typeMessage() {

    const textElement =
        document.getElementById("typing-text");

    textElement.innerHTML = "";

    let index = 0;

    function type() {

        if (index < message.length) {

            textElement.innerHTML +=
                message.charAt(index);

            index++;

            setTimeout(type, 40);

        }

    }

    type();

}


// Floating hearts

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart-particle");

    heart.innerHTML =
        ["❤️", "💕", "💗", "💖", "💓"]
        [Math.floor(Math.random() * 5)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 4 + 4 + "s";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


// Start floating hearts

function startHearts() {

    setInterval(createHeart, 500);

}