const questions = [
    "When I see people with blue hair, I say to myself, 'These are my people.'",
    "Men who transition should be allowed to play in women's sports.",
    "You notice and challenge subtle, often unintentional micro-aggressions or slights—like someone assuming a person’s role based on their appearance—because you see how they reinforce bigger biases.",
    "Your pronouns should always be displayed on your social media profile pages.",
    "I'd rather die than shop at a store that doesn't have a rainbow flag in June.",
    "I think 'illegal alien' is just a mean way of saying 'undocumented traveler,' and we should welcome them with open borders.",
    "I think 'Merry Christmas' should come with a trigger warning for inclusivity.",
    "I think posting a rainbow flag, a Ukraine ribbon, and a 'vaccinated' badge on my profile is the gold standard for saving the world, and skeptics are just jealous of my moral Wi-Fi signal.",
    "If a movie doesn’t pass the Bechdel Test, it’s basically propaganda for the patriarchy.",
    "I think 'capitalism' is just a fancy word for 'oppression with extra steps.'",
    "Most statues in Western countries are problematic relics of oppression.",
    "I'd rather die than shop at a store that doesn’t have a rainbow flag in June.",
    "If you don’t know what 'intersectionality' means, you’re part of the problem.",
    "Comedy is only funny if it punches up, never down—or sideways, just to be safe.",
    "I believe there are at least 73 genders.",
    "I’ve canceled at least one friend for voting Donald Trump.",
    "Math is a tool of Western oppression because '2 + 2 = 4' ignores indigenous counting systems.",
    "We should ban words like 'mother' or 'father' because they’re 'gendered violence,' replacing them with 'birthing unit' and 'sperm contributor'—and correcting strangers mid-conversation if they slip up.",
    "Canceling historical figures for not meeting diversity standards is the right thing to do.",
    "Every company and governmental organization should have a DEI officer.",
    "Plastic straws are the devil’s pitchforks.",
    "I’m convinced climate change ends when we ban all meat and make cows emotional support animals who graze in our living rooms to offset their methane guilt.",
    "It’s OK to call someone a Nazi if they don’t agree with your progressive values.",
    "White supremacy is the #1 problem in the United States.",
    "I generally disdain the America working class in red states."
];

const categories = {
    identity: [1, 3, 14, 17, 19],
    systemic: [2, 9, 10, 18, 23],
    virtue: [0, 4, 7, 12, 15],
    climate: [6, 8, 20, 21, 24],
    language: [5, 13, 16, 22, 11]
};

const weights = {
    identity: 1.5,
    systemic: 1.3,
    virtue: 1.0,
    climate: 1.2,
    language: 1.1
};

const tiers = [
    { 
        range: [0, 17], 
        name: "Red-State Renegade", 
        shortDesc: "You’re grilling burgers and rolling your eyes at pronouns.", 
        detailedDesc: "You're the kind of person who thinks 'woke' is just what happens after too much black coffee. You probably live in a sprawling ranch house in rural Montana or deep in the Texas Panhandle, where the Wi-Fi's spotty but the gun rack's fully loaded. Your job? Something hands-on and unapologetic-think cattle rancher, oil rig roughneck, or a mechanic who can rebuild a Ford F-150 blindfolded. You spend your weekends grilling enough meat to feed a small army, waving an American flag bigger than your porch, and telling stories about the good ol' days when no one cared about pronouns. Systemic inequality? That's just life, buddy-deal with it. Freedom's your religion, and you'd rather wrestle a bear than attend a diversity seminar.", 
        img: "images/red-state-renegade.jpg" 
    },
    { 
        range: [18, 34], 
        name: "Grumbling Skeptic", 
        shortDesc: "You’re suspicious of woke buzzwords but not mad about it.", 
        detailedDesc: "You're not storming the barricades of wokedom, but you're not buying the hype either. You probably live in a modest split-level in a small town outside Kansas City or maybe a quiet corner of North Carolina-close enough to a Walmart but far from any protest marches. Your job's steady and practical-say, a warehouse supervisor, HVAC tech, or middle school history teacher who secretly thinks the curriculum's gone soft. You grumble about 'snowflakes' over beers at the local dive bar, but you've got a sneaky suspicion the world's unfair-just not enough to do yoga about it. You'll squint at a Pride flag like it's a math problem, then shrug and mow your lawn. Change? Sure, if it doesn't mess with your Sunday football.", 
        img: "images/grumbling-skeptic.jpg" 
    },
    { 
        range: [35, 51], 
        name: "Woke-Curious Normie", 
        shortDesc: "You might nod at a rainbow flag but draw the line at cows in the living room.", 
        detailedDesc: "You're dipping a toe into the woke pool but still clinging to your suburban floaties. Picture yourself in a cul-de-sac in a place like Columbus, Ohio, or a tidy starter home in suburban Denver-minivan in the driveway, HOA-approved mailbox. You're probably a mid-level office drone-think HR coordinator, insurance adjuster, or a sales rep who's mastered the art of nodding at buzzwords like 'inclusion.' You've got a 'Coexist' bumper sticker you don't fully understand, and you'll recycle if the bin's nearby. You might 'like' a protest post on Facebook, but you're not ditching your Costco membership for it. Your life's a balancing act-half 'Live Laugh Love,' half 'maybe they've got a point,' and $100 \% confused by TikTok activism.", 
        img: "images/woke-curious-normie.jpg" 
    },
    { 
        range: [52, 68], 
        name: "Part-Time Activist", 
        shortDesc: "You’re woke at brunch but not quitting meat yet.", 
        detailedDesc: "You're woke when it's convenient-like a vegan who sneaks bacon on weekends. You probably live in a gentrified loft in Portland or a funky rental in Austin, surrounded by craft breweries and overpriced kombucha bars. Your job's artsy and mildly rebellious-graphic designer, barista with a side hustle in Etsy activism art, or a community college adjunct teaching 'Intro to Social Justice 101.' You've got a closet full of flannel and a laptop covered in protest stickers, but you're still streaming Netflix on a big-screen TV you won't admit is capitalist. You'll march for a cause if the weather's nice, but you're not above a sly burger when the cafe's out of oat milk. Half-in, half-cool, all smirk.", 
        img: "images/part-time-activist.jpg" 
    },
    { 
        range: [69, 85], 
        name: "Slacktivist Sage", 
        shortDesc: "You retweet outrage but won’t march in the rain.", 
        detailedDesc: "You're the king or queen of performative woke-hashtags are your sword, and retweets are your shield. You're crashing in a cluttered dorm room at a liberal arts college in a shared apartment in Seattle, where the rent's too high but the vibes are 'progressive.' Your job? Part-time influencer, unpaid intern at a nonprofit, or 'freelance writer' who mostly posts manifestos on X. Your phone's glowing with #Justice, your floor's a graveyard of oat milk cartons, and your wilted 'Equity' plant's a metaphor you're too lazy to unpack. You'll rage against the machine from your beanbag, but marching? Nah, that's for suckers. You've got the smugness of a guru and the effort of a sloth—woke, but make it chill.", 
        img: "images/slacktivist-sage.jpg" 
    },
    { 
        range: [86, 104], 
        name: "Supreme Woke Overlord", 
        shortDesc: "You’ve transcended reality into equity utopia.", 
        detailedDesc: "You've ascended beyond mere mortals into a glitter-dusted plane of woke enlightenment. You probably live in a co-op in San Francisco's Mission District or a solar-powered commune outside Santa Fe, where capitalism's a dirty word and the air smells like patchouli. Your job's a calling-DEI consultant, intersectionality workshop facilitator, or a 'thought leader' with a Patreon for dismantling systems. You've got 73 genders in your bio, a cow named Justice grazing in your yurt, and a wardrobe of tie-dye robes that scream 'I'm better than you.' You don't just fight the patriarchy-you've declared war on reality itself, armed with a megaphone and a superiority complex. Congrats, you're the final boss of woke-bow down, peasants.", 
        img: "images/supreme-woke-overlord.jpg" 
    }
];

// Populate form with Bootstrap styling
const form = document.getElementById("wokeTest");
questions.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "question col-12";
    div.innerHTML = `
        <p>${i + 1}. ${q}</p>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q${i}" value="0" id="sd${i}">
            <label class="form-check-label" for="sd${i}">Strongly Disagree</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q${i}" value="1" id="d${i}">
            <label class="form-check-label" for="d${i}">Disagree</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q${i}" value="2" id="a${i}">
            <label class="form-check-label" for="a${i}"> Agree</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="q${i}" value="3" id="sa${i}">
            <label class="form-check-label" for="sa${i}">Strongly Agree</label>
        </div>
    `;
    form.appendChild(div);
});

function calculateScore() {
    let scores = { identity: 0, systemic: 0, virtue: 0, climate: 0, language: 0 };
    let saCount = 0, sdCount = 0;

    for (let i = 0; i < questions.length; i++) {
        const radios = document.getElementsByName(`q${i}`);
        let value = null;
        for (const radio of radios) {
            if (radio.checked) {
                value = parseInt(radio.value);
                if (value === 3) saCount++;
                if (value === 0) sdCount++;
                break;
            }
        }
        if (value === null) {
            alert("Please answer all questions!");
            return;
        }

        for (const [cat, indices] of Object.entries(categories)) {
            if (indices.includes(i)) {
                scores[cat] += value;
                break;
            }
        }
    }

    const weightedScore = (
        scores.identity * weights.identity +
        scores.systemic * weights.systemic +
        scores.virtue * weights.virtue +
        scores.climate * weights.climate +
        scores.language * weights.language
    );

    const wif = (saCount * 0.5) - (sdCount * 0.5);
    let finalScore = weightedScore + wif;

    if (finalScore < 0) finalScore = 0;

    const tier = tiers.find(t => finalScore >= t.range[0] && finalScore <= t.range[1]) || tiers[0];

    document.getElementById("tier").textContent = `You are a ${tier.name}!`;
    document.getElementById("shortDesc").textContent = tier.shortDesc;
    document.getElementById("detailedDesc").textContent = tier.detailedDesc;
    document.getElementById("score").textContent = `Total Score: ${finalScore.toFixed(1)} / 104`;

    const breakdown = document.getElementById("breakdown");
    breakdown.innerHTML = `
        <p><strong>Score Breakdown:</strong></p>
        <p>Identity & Gender: ${(scores.identity * weights.identity).toFixed(1)} / 22.5</p>
        <p>Systemic Inequality: ${(scores.systemic * weights.systemic).toFixed(1)} / 19.5</p>
        <p>Virtue Signaling: ${(scores.virtue * weights.virtue).toFixed(1)} / 15</p>
        <p>Climate & Lifestyle: ${(scores.climate * weights.climate).toFixed(1)} / 18</p>
        <p>Language & Culture: ${(scores.language * weights.language).toFixed(1)} / 16.5</p>
        <p>Woke Intensity Factor: ${wif.toFixed(1)}</p>
    `;

    const tierImage = document.getElementById("tierImage");
    tierImage.src = tier.img;
    tierImage.style.maxWidth = "600px";
    document.getElementById("result").classList.remove("hidden");
}

function resetTest() {
    document.getElementById("wokeTest").reset();
    document.getElementById("result").classList.add("hidden");
}