const CARDS = [
// MAJOR ARCANA
{ id:'fool', name:'The Fool', suit:'Major', symbol:'🌟', keyword:'New beginnings, leaps of faith',
  past:"The Fool card represents leaping first and figuring out the details later. Drawing this in the past position means you jumped into something without checking how deep the water was, and somehow it worked out fine.",
  present:"The Fool card represents leaping first and figuring out the details later. Drawing this in the present position means you're sat here with zero plan for the rest of the night and honestly, that's the right energy.",
  future:"The Fool card represents leaping first and figuring out the details later. Drawing this in the future position means a properly reckless dancefloor decision is coming later, so Tammy and Alex just ask that whatever it is, it stays clear of the white dress." },

{ id:'magician', name:'The Magician', suit:'Major', symbol:'⚡', keyword:'Willpower, resourcefulness',
  past:"The Magician card represents having exactly what you need and finally putting it to use. Drawing this in the past position means you made something brilliant out of very little and made it look effortless, when it absolutely was not.",
  present:"The Magician card represents having exactly what you need and finally putting it to use. Drawing this in the present position means everything you need for a great night is already on this table, you've just got to actually use it.",
  future:"The Magician card represents having exactly what you need and finally putting it to use. Drawing this in the future position means you'll pull off a small miracle later tonight, probably a lost phone, a missing shoe, or rescuing Alex's speech at the last second." },

{ id:'high-priestess', name:'The High Priestess', suit:'Major', symbol:'☽', keyword:'Intuition, quiet knowing',
  past:"The High Priestess card represents knowing something long before anyone said it out loud. Drawing this in the past position means you clocked it early and kept it to yourself, which took more restraint than anyone gave you credit for.",
  present:"The High Priestess card represents knowing something long before anyone said it out loud. Drawing this in the present position means your gut is telling you something about tonight, and it's probably right, so go with it.",
  future:"The High Priestess card represents knowing something long before anyone said it out loud. Drawing this in the future position means a bit of quiet insight lands later, so Tammy and Alex ask you keep your psychic powers to yourself until after the speeches." },

{ id:'empress', name:'The Empress', suit:'Major', symbol:'♀', keyword:'Abundance, warmth, growth',
  past:"The Empress card represents abundance, warmth, and things quietly flourishing. Drawing this in the past position means a proper flourishing stretch, creatively, romantically, or suspiciously well with houseplants.",
  present:"The Empress card represents abundance, warmth, and things quietly flourishing. Drawing this in the present position means look around this room, there's more good stuff going on right now than you're giving it credit for.",
  future:"The Empress card represents abundance, warmth, and things quietly flourishing. Drawing this in the future position means you'll spoil Tammy and Alex with something generous and slightly over the top later, the good kind of over the top." },

{ id:'emperor', name:'The Emperor', suit:'Major', symbol:'♂', keyword:'Structure, steady leadership',
  past:"The Emperor card represents steady structure and someone finally taking charge. Drawing this in the past position means you held things together when somebody had to, and it fell to you, thankless and completely essential.",
  present:"The Emperor card represents steady structure and someone finally taking charge. Drawing this in the present position means a firm hand is needed somewhere tonight, and it's probably you, so lead rather than improvise.",
  future:"The Emperor card represents steady structure and someone finally taking charge. Drawing this in the future position means you'll end up quietly organising something for Tammy and Alex later that neither of them thought to plan." },

{ id:'hierophant', name:'The Hierophant', suit:'Major', symbol:'⛪', keyword:'Tradition, wisdom, belonging',
  past:"The Hierophant card represents doing things the tried and tested way, at least for now. Drawing this in the past position means you followed the process and showed up when it mattered, even when it wasn't glamorous.",
  present:"The Hierophant card represents doing things the tried and tested way, at least for now. Drawing this in the present position means proper table manners apply, so no starting a debate about which fork is for the starter.",
  future:"The Hierophant card represents doing things the tried and tested way, at least for now. Drawing this in the future position means you'll pass on some genuinely good advice later that Tammy and Alex actually need to hear." },

{ id:'lovers', name:'The Lovers', suit:'Major', symbol:'♡', keyword:'Connection, alignment, choices',
  past:"The Lovers card represents a choice made properly from the heart. Drawing this in the past position means you picked the harder, truer option over the easy one, and it was the right call.",
  present:"The Lovers card represents a choice made properly from the heart. Drawing this in the present position means something is aligning right now, either with another person at this table or with yourself.",
  future:"The Lovers card represents a choice made properly from the heart. Drawing this in the future position means you'll be the reason Tammy and Alex believe even more firmly in the whole soulmate business tonight." },

{ id:'chariot', name:'The Chariot', suit:'Major', symbol:'🏆', keyword:'Momentum, drive, victory',
  past:"The Chariot card represents momentum, drive, and refusing to stop. Drawing this in the past position means you kept going long after most people would have given up, and it paid off exactly as it should have.",
  present:"The Chariot card represents momentum, drive, and refusing to stop. Drawing this in the present position means you've got proper forward motion tonight, nothing needs to slow that down.",
  future:"The Chariot card represents momentum, drive, and refusing to stop. Drawing this in the future position means you'll drive Tammy and Alex somewhere important later, quite possibly the airport for the honeymoon, running suspiciously on time." },

{ id:'strength', name:'Strength', suit:'Major', symbol:'🦁', keyword:'Quiet courage, patience',
  past:"The Strength card represents quiet courage that doesn't need to shout about it. Drawing this in the past position means you handled something properly difficult with more grace than the situation deserved.",
  present:"The Strength card represents quiet courage that doesn't need to shout about it. Drawing this in the present position means you're using every ounce of patience you have to not say what you're really thinking, and it's working.",
  future:"The Strength card represents quiet courage that doesn't need to shout about it. Drawing this in the future position means you'll need that same superhuman restraint later if an annoying relative ends up sat near you, and Tammy and Alex are counting on you." },

{ id:'hermit', name:'The Hermit', suit:'Major', symbol:'🕯', keyword:'Reflection, solitude, wisdom',
  past:"The Hermit card represents stepping back to actually think for once. Drawing this in the past position means you went quiet for a while, and it turned out to be exactly what you needed.",
  present:"The Hermit card represents stepping back to actually think for once. Drawing this in the present position means you're quietly contemplating how early you could slip off without anyone noticing, no judgement.",
  future:"The Hermit card represents stepping back to actually think for once. Drawing this in the future position means you'll sneak off for five minutes of peace later, and Tammy and Alex only ask that you don't lock yourself in the loos for three hours." },

{ id:'wheel', name:'Wheel of Fortune', suit:'Major', symbol:'☸', keyword:'Fate, timing, turning points',
  past:"The Wheel of Fortune card represents fate, timing, and the wheel turning in your favour. Drawing this in the past position means things changed fast, and somehow you landed on your feet.",
  present:"The Wheel of Fortune card represents fate, timing, and the wheel turning in your favour. Drawing this in the present position means everything feels like it's spinning a bit right now, so just hang on and enjoy the ride.",
  future:"The Wheel of Fortune card represents fate, timing, and the wheel turning in your favour. Drawing this in the future position means a proper stroke of luck is coming, so if you win the raffle or catch the bouquet later, try not to start a riot." },

{ id:'justice', name:'Justice', suit:'Major', symbol:'⚖', keyword:'Fairness, truth, balance',
  past:"The Justice card represents fairness finally catching up with you. Drawing this in the past position means something got put right eventually, one way or another.",
  present:"The Justice card represents fairness finally catching up with you. Drawing this in the present position means honesty is called for right now, even if it's a bit inconvenient.",
  future:"The Justice card represents fairness finally catching up with you. Drawing this in the future position means you'll settle a small dispute later with real calm authority, so Tammy and Alex ask that you don't act as judge and jury if someone nicks your chair." },

{ id:'hanged-man', name:'The Hanged Man', suit:'Major', symbol:'🙃', keyword:'New perspective, patience',
  past:"The Hanged Man card represents a pause that turns out to be exactly what was needed. Drawing this in the past position means you waited, or got stuck, when you'd rather have moved forward, and it taught you something a shortcut never could.",
  present:"The Hanged Man card represents a pause that turns out to be exactly what was needed. Drawing this in the present position means try looking at whatever's on your mind from a completely different angle, possibly literally upside down.",
  future:"The Hanged Man card represents a pause that turns out to be exactly what was needed. Drawing this in the future position means you'll have a sudden change of heart later, quite possibly agreeing to a toast you swore you wouldn't give." },

{ id:'death', name:'Death', suit:'Major', symbol:'🦋', keyword:'Endings, transformation, renewal',
  past:"The Death card represents an ending that makes room for something better. Drawing this in the past position means something finished completely, and it made space for something much better, even if it didn't feel like it at the time.",
  present:"The Death card represents an ending that makes room for something better. Drawing this in the present position means there's nothing to fear in whatever's wrapping up right now, the new version is already waiting.",
  future:"The Death card represents an ending that makes room for something better. Drawing this in the future position means you'll help Tammy and Alex properly close out one era before starting the next, whether that's the old flat or the old single life." },

{ id:'temperance', name:'Temperance', suit:'Major', symbol:'🌊', keyword:'Balance, patience, flow',
  past:"The Temperance card represents finding the right balance instead of tipping too far either way. Drawing this in the past position means you found the middle ground between two extremes, and everyone was better off for it.",
  present:"The Temperance card represents finding the right balance instead of tipping too far either way. Drawing this in the present position means easy does it, this moment doesn't need more energy thrown at it, just better aimed energy.",
  future:"The Temperance card represents finding the right balance instead of tipping too far either way. Drawing this in the future position means you'll be the one pacing everyone at the bar tonight, including, remarkably, yourself." },

{ id:'devil', name:'The Devil', suit:'Major', symbol:'🔗', keyword:'Old patterns, temptation, release',
  past:"The Devil card represents giving in to the thing you already knew you shouldn't. Drawing this in the past position means you spent way too long stuck in a habit you knew wasn't serving you, and kept doing it anyway.",
  present:"The Devil card represents giving in to the thing you already knew you shouldn't. Drawing this in the present position means you're eyeing up that third glass of table wine, fully aware of what it'll do to you tomorrow.",
  future:"The Devil card represents giving in to the thing you already knew you shouldn't. Drawing this in the future position means a complete breakdown of self control is scheduled for the dancefloor later, so when the paid bar opens, Tammy and Alex ask you to remember your bank balance has feelings too." },

{ id:'tower', name:'The Tower', suit:'Major', symbol:'⚡', keyword:'Sudden change, breakthrough',
  past:"The Tower card represents everything falling apart so something better can be built. Drawing this in the past position means something in your life fell flat on its face, dramatically, and with a bit of distance it's obvious it needed to happen.",
  present:"The Tower card represents everything falling apart so something better can be built. Drawing this in the present position means brace yourself, a small revelation is heading your way tonight, and the outcome is better than the build up.",
  future:"The Tower card represents everything falling apart so something better can be built. Drawing this in the future position means a total collapse of your physical posture is scheduled for later, likely a stray chair and an ambitious attempt at the Macarena." },

{ id:'star', name:'The Star', suit:'Major', symbol:'⭐', keyword:'Hope, renewal, quiet good luck',
  past:"The Star card represents quiet hope returning after a hard stretch. Drawing this in the past position means after something difficult, you found your way back to feeling alright, and that's not nothing.",
  present:"The Star card represents quiet hope returning after a hard stretch. Drawing this in the present position means you're exactly where you need to be right now, even if it doesn't quite feel that way yet.",
  future:"The Star card represents quiet hope returning after a hard stretch. Drawing this in the future position means a moment of proper, glittering stardom awaits you on the dancefloor later, so Tammy and Alex just ask you leave a bit of room for others to shine too." },

{ id:'moon', name:'The Moon', suit:'Major', symbol:'🌙', keyword:'Uncertainty, intuition, dreams',
  past:"The Moon card represents things being blurrier than they first appear. Drawing this in the past position means things were murkier than they seemed at the time, and you've only really understood that looking back.",
  present:"The Moon card represents things being blurrier than they first appear. Drawing this in the present position means the lighting in here is doing you a lot of favours, use it wisely.",
  future:"The Moon card represents things being blurrier than they first appear. Drawing this in the future position means things get beautifully blurry as the night goes on, so please don't mistake a random cousin for Alex or try to outrun Morgoth the greyhound on the way to the taxis." },

{ id:'sun', name:'The Sun', suit:'Major', symbol:'☀', keyword:'Joy, clarity, vitality',
  past:"The Sun card represents straightforward joy and everything going right. Drawing this in the past position means a genuinely good chapter, simple, warm, no hidden catch.",
  present:"The Sun card represents straightforward joy and everything going right. Drawing this in the present position means you are basking in the pure perfection of Tammy and Alex's big day, and you know it.",
  future:"The Sun card represents straightforward joy and everything going right. Drawing this in the future position means your path is bright, sunny, and warm, which mostly means you're going to sweat clean through your formal wear during the up tempo songs later." },

{ id:'judgement', name:'Judgement', suit:'Major', symbol:'📯', keyword:'Reckoning, calling, awakening',
  past:"Judgement represents a wake up call you can't ignore any longer. Drawing this in the past position means a moment of reckoning cleared the air properly, uncomfortable then, clarifying now.",
  present:"Judgement represents a wake up call you can't ignore any longer. Drawing this in the present position means you're holding your breath a bit, waiting to see how Alex's groom speech goes.",
  future:"Judgement represents a wake up call you can't ignore any longer. Drawing this in the future position means a proper moment of self reckoning is coming tomorrow morning, likely involving your bank statement and some late night rounds at the paid bar." },

{ id:'world', name:'The World', suit:'Major', symbol:'🌍', keyword:'Completion, fulfilment',
  past:"The World card represents completion, and a proper sense of everything coming together. Drawing this in the past position means you completed something that genuinely mattered, and closed the circle properly.",
  present:"The World card represents completion, and a proper sense of everything coming together. Drawing this in the present position means you've made it through the ceremony, the photos, and the starters, and you have officially reached peak wedding satisfaction.",
  future:"The World card represents completion, and a proper sense of everything coming together. Drawing this in the future position means the night ends the traditional British way, with you singing the lyrics to Mr Brightside at the absolute top of your lungs." },

// WANDS
{ id:'wands-ace', name:'Ace of Wands', suit:'Wands', symbol:'🔥', keyword:'A spark of inspiration',
  past:"The Ace of Wands card represents a sudden spark of inspiration. Drawing this in the past position means an idea landed out of nowhere and you actually ran with it, rather than letting it fizzle out.",
  present:"The Ace of Wands card represents a sudden spark of inspiration. Drawing this in the present position means a brilliant idea is forming right now about how to sneak an extra bread roll from the next table.",
  future:"The Ace of Wands card represents a sudden spark of inspiration. Drawing this in the future position means you'll feel an uncontrollable urge to ignite the dancefloor later, so Tammy and Alex just ask you keep that fiery passion away from the venue's actual curtains." },

{ id:'wands-two', name:'Two of Wands', suit:'Wands', symbol:'🌐', keyword:'Planning, weighing options',
  past:"The Two of Wands card represents planning your next move with big ambitions. Drawing this in the past position means you spent hours planning something you couldn't really afford, just to feel something.",
  present:"The Two of Wands card represents planning your next move with big ambitions. Drawing this in the present position means you're quietly plotting the fastest route to the bar for when the table wine runs dry.",
  future:"The Two of Wands card represents planning your next move with big ambitions. Drawing this in the future position means you and your partner will need to coordinate perfectly later to secure the best spot near the DJ booth." },

{ id:'wands-three', name:'Three of Wands', suit:'Wands', symbol:'⛵', keyword:'Progress, expansion',
  past:"The Three of Wands card represents patience finally paying off. Drawing this in the past position means you put something out there hoping for the best and actually got the outcome you wanted.",
  present:"The Three of Wands card represents patience finally paying off. Drawing this in the present position means you're waiting patiently for the main course, watching the catering staff like a hawk.",
  future:"The Three of Wands card represents patience finally paying off. Drawing this in the future position means the reward for your patience is coming tonight, so long as you don't swap seats and ruin the caterers' spreadsheet." },

{ id:'wands-four', name:'Four of Wands', suit:'Wands', symbol:'🎊', keyword:'Celebration, homecoming',
  past:"The Four of Wands card represents celebration, homecoming, and things feeling settled. Drawing this in the past position means a proper celebration that left your feet hurting for three days afterwards.",
  present:"The Four of Wands card represents celebration, homecoming, and things feeling settled. Drawing this in the present position means you're literally sitting in the middle of Tammy and Alex's wedded bliss right now.",
  future:"The Four of Wands card represents celebration, homecoming, and things feeling settled. Drawing this in the future position means a long, deeply satisfying food coma is heading your way the second the desserts are cleared." },

{ id:'wands-five', name:'Five of Wands', suit:'Wands', symbol:'⚔', keyword:'Friendly competition',
  past:"The Five of Wands card represents petty friction that's more noise than substance. Drawing this in the past position means a proper argument broke out over something completely trivial.",
  present:"The Five of Wands card represents petty friction that's more noise than substance. Drawing this in the present position means there's a quiet, tense battle happening at your table right now over the last drop of red wine.",
  future:"The Five of Wands card represents petty friction that's more noise than substance. Drawing this in the future position means you'll end up in a fierce debate later about who gave the best speech." },

{ id:'wands-six', name:'Six of Wands', suit:'Wands', symbol:'🏅', keyword:'Recognition, success',
  past:"The Six of Wands card represents recognition and a well earned win. Drawing this in the past position means you pulled off something properly impressive, in front of people who were watching.",
  present:"The Six of Wands card represents recognition and a well earned win. Drawing this in the present position means you're feeling smug that your wedding outfit is a solid ten out of ten and gravy free so far.",
  future:"The Six of Wands card represents recognition and a well earned win. Drawing this in the future position means you'll be cheered on by a crowd of friends later as you attempt the worm on the dancefloor." },

{ id:'wands-seven', name:'Seven of Wands', suit:'Wands', symbol:'🛡', keyword:'Holding your ground',
  past:"The Seven of Wands card represents holding your ground when it matters. Drawing this in the past position means you held your own against odds that really shouldn't have gone your way.",
  present:"The Seven of Wands card represents holding your ground when it matters. Drawing this in the present position means you're defending your elbow room from a neighbour slowly creeping onto your side of the table.",
  future:"The Seven of Wands card represents holding your ground when it matters. Drawing this in the future position means you'll need to hold your ground in the queue for the paid bar with the ferocity of a warrior." },

{ id:'wands-eight', name:'Eight of Wands', suit:'Wands', symbol:'💨', keyword:'Speed, momentum',
  past:"The Eight of Wands card represents everything suddenly moving at speed. Drawing this in the past position means a whirlwind stretch went by so fast you needed a holiday to recover from it.",
  present:"The Eight of Wands card represents everything suddenly moving at speed. Drawing this in the present position means the timeline of this wedding is moving fast, vows are done, dinner's here, and the energy is building.",
  future:"The Eight of Wands card represents everything suddenly moving at speed. Drawing this in the future position means you're about to move at supersonic speed later, so try to channel the energy of Morgoth the greyhound when the DJ drops the bass." },

{ id:'wands-nine', name:'Nine of Wands', suit:'Wands', symbol:'🧱', keyword:'Resilience, one last push',
  past:"The Nine of Wands card represents being tired but refusing to stop before the finish line. Drawing this in the past position means you powered through the final stretch when your brain had already checked out.",
  present:"The Nine of Wands card represents being tired but refusing to stop before the finish line. Drawing this in the present position means you're a bit sluggish after that meal, but determined to stay awake for Alex's speech.",
  future:"The Nine of Wands card represents being tired but refusing to stop before the finish line. Drawing this in the future position means you'll hit a wall later, but a burst of classic pop music will give you the strength to rally for one last dance." },

{ id:'wands-ten', name:'Ten of Wands', suit:'Wands', symbol:'📦', keyword:'Carrying too much',
  past:"The Ten of Wands card represents carrying more than you probably should. Drawing this in the past position means you tried to bring everything in one trip rather than asking for help.",
  present:"The Ten of Wands card represents carrying more than you probably should. Drawing this in the present position means you're carrying the emotional weight of polite small talk with a relative you barely know.",
  future:"The Ten of Wands card represents carrying more than you probably should. Drawing this in the future position means you're officially the one carrying your partner's shoes and coat at the end of the night." },

{ id:'wands-page', name:'Page of Wands', suit:'Wands', symbol:'🌱', keyword:'Curiosity, fresh enthusiasm',
  past:"The Page of Wands card represents youthful enthusiasm and a burst of playful energy. Drawing this in the past position means you threw yourself into something new with real enthusiasm, gear and all.",
  present:"The Page of Wands card represents youthful enthusiasm and a burst of playful energy. Drawing this in the present position means you've got a cheeky spark of mischief as you look over the evening timeline.",
  future:"The Page of Wands card represents youthful enthusiasm and a burst of playful energy. Drawing this in the future position means some genuinely entertaining gossip is coming your way, so keep your ears open near the paid bar later." },

{ id:'wands-knight', name:'Knight of Wands', suit:'Wands', symbol:'🚀', keyword:'Bold, fast action',
  past:"The Knight of Wands card represents charging in with confidence and zero foresight. Drawing this in the past position means you jumped in headfirst, with all the confidence and none of the planning.",
  present:"The Knight of Wands card represents charging in with confidence and zero foresight. Drawing this in the present position means you're fighting the urge to down your wine right before Alex starts his speech.",
  future:"The Knight of Wands card represents charging in with confidence and zero foresight. Drawing this in the future position means a dramatic, high energy entrance onto the dancefloor awaits, knees be damned." },

{ id:'wands-queen', name:'Queen of Wands', suit:'Wands', symbol:'👑', keyword:'Warmth, magnetic confidence',
  past:"The Queen of Wands card represents bold, warm, unmistakable confidence. Drawing this in the past position means you lit up a room and made everyone in it feel properly welcome, without seeming to try.",
  present:"The Queen of Wands card represents bold, warm, unmistakable confidence. Drawing this in the present position means channel that same confidence to look fully engaged and glowing throughout dinner.",
  future:"The Queen of Wands card represents bold, warm, unmistakable confidence. Drawing this in the future position means you'll become the focal point of the party later, holding the best energy near the bar." },

{ id:'wands-king', name:'King of Wands', suit:'Wands', symbol:'🦅', keyword:'Vision, bold leadership',
  past:"The King of Wands card represents natural leadership and having the whole room's attention. Drawing this in the past position means you led with real vision, and people followed without needing to be asked.",
  present:"The King of Wands card represents natural leadership and having the whole room's attention. Drawing this in the present position means give Alex your full attention as he steps up to lead the room with his speech.",
  future:"The King of Wands card represents natural leadership and having the whole room's attention. Drawing this in the future position means you'll take charge of your group later and forcefully direct everyone to the paid bar because it's your round." },

// CUPS
{ id:'cups-ace', name:'Ace of Cups', suit:'Cups', symbol:'💧', keyword:'New love, open heart',
  past:"The Ace of Cups card represents an overflowing amount of love and feeling. Drawing this in the past position means something properly moved you once, and it stuck with you long after.",
  present:"The Ace of Cups card represents an overflowing amount of love and feeling. Drawing this in the present position means your heart is completely full watching Tammy and Alex celebrate, or maybe that's just the wine.",
  future:"The Ace of Cups card represents an overflowing amount of love and feeling. Drawing this in the future position means a wave of wholesome affection is coming later, quite possibly ending with you telling a semi stranger you honestly love them so much in the queue for the loos." },

{ id:'cups-two', name:'Two of Cups', suit:'Cups', symbol:'🤝', keyword:'Mutual connection',
  past:"The Two of Cups card represents a genuine, easy connection with someone. Drawing this in the past position means a proper, mutual understanding formed, without either of you overthinking it.",
  present:"The Two of Cups card represents a genuine, easy connection with someone. Drawing this in the present position means you and your favourite person here are sitting like an absolute power couple, give them a nudge and a smile.",
  future:"The Two of Cups card represents a genuine, easy connection with someone. Drawing this in the future position means a lovely, synchronised moment is coming, where the two of you agree it's time to leave without any awkward debate about it." },

{ id:'cups-three', name:'Three of Cups', suit:'Cups', symbol:'🥂', keyword:'Joy, friendship, celebration',
  past:"The Three of Cups card represents raising a glass and celebrating properly. Drawing this in the past position means a proper night out with people you love, the kind where you laughed until it hurt.",
  present:"The Three of Cups card represents raising a glass and celebrating properly. Drawing this in the present position means look around this table, that's pure friendship energy, go on and clink your glasses.",
  future:"The Three of Cups card represents raising a glass and celebrating properly. Drawing this in the future position means a proper group hug is scheduled for the dancefloor later, so try not to spill anyone's paid bar drinks in the huddle." },

{ id:'cups-four', name:'Four of Cups', suit:'Cups', symbol:'😑', keyword:'A little bored, missing something',
  past:"The Four of Cups card represents feeling a bit flat and missing what's right in front of you. Drawing this in the past position means something genuinely good went unnoticed because you were staring at your own feet.",
  present:"The Four of Cups card represents feeling a bit flat and missing what's right in front of you. Drawing this in the present position means pull yourself together, dinner's happening and the table needs your energy.",
  future:"The Four of Cups card represents feeling a bit flat and missing what's right in front of you. Drawing this in the future position means you'll get briefly bored of a song later, giving you the exact window needed to beat the toilet queue." },

{ id:'cups-five', name:'Five of Cups', suit:'Cups', symbol:'😔', keyword:'Loss, and moving forward',
  past:"The Five of Cups card represents dwelling on what's gone instead of what's still here. Drawing this in the past position means something was lost and properly mourned, more than it probably deserved.",
  present:"The Five of Cups card represents dwelling on what's gone instead of what's still here. Drawing this in the present position means don't despair if your designated table wine's run dry, more is available if you're willing to open your wallet.",
  future:"The Five of Cups card represents dwelling on what's gone instead of what's still here. Drawing this in the future position means a minor tragedy awaits when someone drops a piece of cake on the floor later, just breathe, life goes on." },

{ id:'cups-six', name:'Six of Cups', suit:'Cups', symbol:'🌸', keyword:'Nostalgia, sweet reunion',
  past:"The Six of Cups card represents nostalgia and looking back fondly. Drawing this in the past position means hours spent scrolling old photos and cringing at your former haircuts.",
  present:"The Six of Cups card represents nostalgia and looking back fondly. Drawing this in the present position means sitting with people of every age tonight, feeling a proper sense of old comfort.",
  future:"The Six of Cups card represents nostalgia and looking back fondly. Drawing this in the future position means the DJ's about to play a massive throwback later, so get ready to scream the lyrics with zero shame." },

{ id:'cups-seven', name:'Seven of Cups', suit:'Cups', symbol:'🌈', keyword:'Too many choices',
  past:"The Seven of Cups card represents too many options and total indecision. Drawing this in the past position means you spent ages deciding on something small and still ended up back where you started.",
  present:"The Seven of Cups card represents too many options and total indecision. Drawing this in the present position means just eat what's put in front of you rather than trying to remember what you ordered months ago.",
  future:"The Seven of Cups card represents too many options and total indecision. Drawing this in the future position means total indecision awaits at the paid bar later, so have a rough order ready before you get to the front." },

{ id:'cups-eight', name:'Eight of Cups', suit:'Cups', symbol:'🚶', keyword:'Walking away, seeking more',
  past:"The Eight of Cups card represents walking away from something that's stopped serving you. Drawing this in the past position means you left something behind that no longer fit, quietly and without much fuss.",
  present:"The Eight of Cups card represents walking away from something that's stopped serving you. Drawing this in the present position means you're resisting the urge to stretch your legs before Alex's speech starts.",
  future:"The Eight of Cups card represents walking away from something that's stopped serving you. Drawing this in the future position means the ultimate Irish goodbye is in your future, quietly slipping into a taxi without alerting the masses." },

{ id:'cups-nine', name:'Nine of Cups', suit:'Cups', symbol:'✨', keyword:'Satisfaction, wishes granted',
  past:"The Nine of Cups card represents getting exactly what you wanted, smugly. Drawing this in the past position means that glorious moment you found money you'd forgotten about.",
  present:"The Nine of Cups card represents getting exactly what you wanted, smugly. Drawing this in the present position means you're sitting here well fed, watered, and surrounded by love, your emotional cup properly full.",
  future:"The Nine of Cups card represents getting exactly what you wanted, smugly. Drawing this in the future position means you'll successfully secure the very last late night snack, victory entirely yours." },

{ id:'cups-ten', name:'Ten of Cups', suit:'Cups', symbol:'🌈', keyword:'Deep happiness, belonging',
  past:"The Ten of Cups card represents complete happiness and belonging. Drawing this in the past position means a Sunday afternoon of total peace, absolutely nothing to do and no guilt about it.",
  present:"The Ten of Cups card represents complete happiness and belonging. Drawing this in the present position means witnessing Tammy and Alex's whole journey land here tonight, enough to make even a cynic a bit emotional.",
  future:"The Ten of Cups card represents complete happiness and belonging. Drawing this in the future position means you'll look at your favourite people later and feel proper gratitude that you've actually got them in your life." },

{ id:'cups-page', name:'Page of Cups', suit:'Cups', symbol:'🐟', keyword:'Sensitivity, sweet surprises',
  past:"The Page of Cups card represents unexpected sensitivity and a bit of quiet creativity. Drawing this in the past position means you wrote something a bit too honest once, and it was more awkward than you meant it to be.",
  present:"The Page of Cups card represents unexpected sensitivity and a bit of quiet creativity. Drawing this in the present position means you're processing a genuinely sweet thought about the happy couple right now.",
  future:"The Page of Cups card represents unexpected sensitivity and a bit of quiet creativity. Drawing this in the future position means someone's going to give you a surprisingly tender compliment later, so just accept it gracefully." },

{ id:'cups-knight', name:'Knight of Cups', suit:'Cups', symbol:'🦢', keyword:'Romance, following the heart',
  past:"The Knight of Cups card represents the hopeless romantic chasing a lovely idea. Drawing this in the past position means you went a bit overboard for someone once, and don't fully regret it.",
  present:"The Knight of Cups card represents the hopeless romantic chasing a lovely idea. Drawing this in the present position means you're currently swooning over how lovely the room looks and how well Alex scrubs up.",
  future:"The Knight of Cups card represents the hopeless romantic chasing a lovely idea. Drawing this in the future position means a properly romantic slow dance is coming later, just try not to step on any toes." },

{ id:'cups-queen', name:'Queen of Cups', suit:'Cups', symbol:'💙', keyword:'Compassion, emotional wisdom',
  past:"The Queen of Cups card represents deep empathy and being everyone's emotional anchor. Drawing this in the past position means you talked someone through something difficult with proper, patient care.",
  present:"The Queen of Cups card represents deep empathy and being everyone's emotional anchor. Drawing this in the present position means you're the one keeping an eye on the table, making sure everyone's happy and topped up.",
  future:"The Queen of Cups card represents deep empathy and being everyone's emotional anchor. Drawing this in the future position means you'll be called on for emotional support later, especially if someone gets tearful during a slow song." },

{ id:'cups-king', name:'King of Cups', suit:'Cups', symbol:'🌊', keyword:'Calm, emotional maturity',
  past:"The King of Cups card represents staying calm and steady in a sea of feelings. Drawing this in the past position means you stayed level headed while everyone else around you completely lost it.",
  present:"The King of Cups card represents staying calm and steady in a sea of feelings. Drawing this in the present position means you're holding it together with real decorum as the wedding breakfast carries on around you.",
  future:"The King of Cups card represents staying calm and steady in a sea of feelings. Drawing this in the future position means you'll be the designated sensible one tonight, and the one who remembers where the coats went." },

// SWORDS
{ id:'swords-ace', name:'Ace of Swords', suit:'Swords', symbol:'⚔', keyword:'Clarity, breakthrough',
  past:"The Ace of Swords card represents a sudden burst of total clarity. Drawing this in the past position means you finally saw a situation for what it was and cut it loose without much ceremony.",
  present:"The Ace of Swords card represents a sudden burst of total clarity. Drawing this in the present position means you've suddenly worked out exactly how many minutes are left until the dancefloor opens.",
  future:"The Ace of Swords card represents a sudden burst of total clarity. Drawing this in the future position means a sharp bit of honesty is coming later, likely you finally admitting your formal shoes are killing you." },

{ id:'swords-two', name:'Two of Swords', suit:'Swords', symbol:'🙈', keyword:'Indecision',
  past:"The Two of Swords card represents avoiding a decision by point blank ignoring it. Drawing this in the past position means you dodged a decision for so long the problem quietly resolved itself.",
  present:"The Two of Swords card represents avoiding a decision by point blank ignoring it. Drawing this in the present position means you're pretending you haven't had a bit too much wine, and everyone's letting you have that one.",
  future:"The Two of Swords card represents avoiding a decision by point blank ignoring it. Drawing this in the future position means a proper dilemma awaits later, one more drink at the paid bar, or admit defeat and head home." },

{ id:'swords-three', name:'Three of Swords', suit:'Swords', symbol:'💔', keyword:'Heartbreak, healing',
  past:"The Three of Swords card represents a sharp, real moment of hurt. Drawing this in the past position means something stung properly once, and you didn't pretend it hadn't.",
  present:"The Three of Swords card represents a sharp, real moment of hurt. Drawing this in the present position means a small, petty sting is landing right now, most likely someone's nicked the bread roll you had your eye on.",
  future:"The Three of Swords card represents a sharp, real moment of hurt. Drawing this in the future position means a sharp, physical sting awaits later, specifically your shin meeting a table leg in a dark room." },

{ id:'swords-four', name:'Four of Swords', suit:'Swords', symbol:'🛌', keyword:'Rest, recovery',
  past:"The Four of Swords card represents rest and recovery, finally. Drawing this in the past position means a proper day spent doing absolutely nothing, and it was exactly what you needed.",
  present:"The Four of Swords card represents rest and recovery, finally. Drawing this in the present position means use this bit of dinner to rest your social batteries before the evening reception properly kicks off.",
  future:"The Four of Swords card represents rest and recovery, finally. Drawing this in the future position means you'll sneak off for a five minute sit down later to recharge before round two." },

{ id:'swords-five', name:'Five of Swords', suit:'Swords', symbol:'😬', keyword:'A win that cost too much',
  past:"The Five of Swords card represents winning the argument but losing something bigger. Drawing this in the past position means you won a pointless debate and made everyone a bit uncomfortable doing it.",
  present:"The Five of Swords card represents winning the argument but losing something bigger. Drawing this in the present position means keep any opinions about the seating plan to yourself, it's a bit late to change it now.",
  future:"The Five of Swords card represents winning the argument but losing something bigger. Drawing this in the future position means you'll win the battle for the last clean wine glass later, enjoy your hollow victory." },

{ id:'swords-six', name:'Six of Swords', suit:'Swords', symbol:'⛵', keyword:'Moving toward calmer waters',
  past:"The Six of Swords card represents moving from choppy water into calmer waters. Drawing this in the past position means you finally left something difficult behind and felt lighter for it immediately.",
  present:"The Six of Swords card represents moving from choppy water into calmer waters. Drawing this in the present position means you're successfully drifting from the formality of the ceremony into the relaxed joy of dinner.",
  future:"The Six of Swords card represents moving from choppy water into calmer waters. Drawing this in the future position means a smooth journey through the crowded room awaits later, with the grace of a cruise ship." },

{ id:'swords-seven', name:'Seven of Swords', suit:'Swords', symbol:'🤫', keyword:'Strategy, a bit of cunning',
  past:"The Seven of Swords card represents a bit of sneaky, self serving strategy. Drawing this in the past position means you got away with something small once, and blamed it on someone else entirely.",
  present:"The Seven of Swords card represents a bit of sneaky, self serving strategy. Drawing this in the present position means you're covertly trying to read ahead on these cards to see if your fortune beats your partner's.",
  future:"The Seven of Swords card represents a bit of sneaky, self serving strategy. Drawing this in the future position means you might try to pocket a bit of table stationery as a souvenir later, but Tammy and Alex are watching." },

{ id:'swords-eight', name:'Eight of Swords', suit:'Swords', symbol:'🎭', keyword:'Self-imposed limits',
  past:"The Eight of Swords card represents feeling trapped by walls you built yourself. Drawing this in the past position means you felt stuck, though if you're honest, a fair few of those walls were your own doing.",
  present:"The Eight of Swords card represents feeling trapped by walls you built yourself. Drawing this in the present position means you're temporarily cornered in a conversation about someone's mortgage, no visible exit.",
  future:"The Eight of Swords card represents feeling trapped by walls you built yourself. Drawing this in the future position means you'll convince yourself everyone's judging your dancing later, they're not, they're all too far gone to notice." },

{ id:'swords-nine', name:'Nine of Swords', suit:'Swords', symbol:'😰', keyword:'Overthinking, worry',
  past:"The Nine of Swords card represents anxiety about things that probably won't happen. Drawing this in the past position means a moment of proper panic over your phone, which was in your hand the entire time.",
  present:"The Nine of Swords card represents anxiety about things that probably won't happen. Drawing this in the present position means you're quietly hoping Alex's speech goes off without a hitch, for both your sakes.",
  future:"The Nine of Swords card represents anxiety about things that probably won't happen. Drawing this in the future position means a brief flash of dread awaits tomorrow morning, most likely about your house keys." },

{ id:'swords-ten', name:'Ten of Swords', suit:'Swords', symbol:'🌅', keyword:'Rock bottom, then dawn',
  past:"The Ten of Swords card represents a dramatic, melodramatic rock bottom. Drawing this in the past position means something ended in the most theatrical way possible, and honestly, it was a bit funny in hindsight.",
  present:"The Ten of Swords card represents a dramatic, melodramatic rock bottom. Drawing this in the present position means feeling personally betrayed that the kitchen's run out of your preferred dessert.",
  future:"The Ten of Swords card represents a dramatic, melodramatic rock bottom. Drawing this in the future position means a dramatic defeat awaits later when you try to hit a high note during a song and your voice cracks completely, just laugh it off." },

{ id:'swords-page', name:'Page of Swords', suit:'Swords', symbol:'🔍', keyword:'Curiosity, sharp attention',
  past:"The Page of Swords card represents curiosity and being a bit of a nosy busybody. Drawing this in the past position means you spent longer than you'll admit reading about a minor local drama.",
  present:"The Page of Swords card represents curiosity and being a bit of a nosy busybody. Drawing this in the present position means you're quietly scanning the room to see which couples are bickering and who's flirting with whom.",
  future:"The Page of Swords card represents curiosity and being a bit of a nosy busybody. Drawing this in the future position means you'll discover a genuinely amusing piece of gossip later, use it wisely." },

{ id:'swords-knight', name:'Knight of Swords', suit:'Swords', symbol:'💨', keyword:'Ambition, speed',
  past:"The Knight of Swords card represents charging forward with zero filter. Drawing this in the past position means you spoke your mind fast once, and mostly stood by it afterwards.",
  present:"The Knight of Swords card represents charging forward with zero filter. Drawing this in the present position means you're trying hard to keep your inner critic quiet during the general wedding chatter.",
  future:"The Knight of Swords card represents charging forward with zero filter. Drawing this in the future position means you'll deliver a brutally honest, highly enthusiastic review of the food to anyone who'll listen, give the caterers a minute first." },

{ id:'swords-queen', name:'Queen of Swords', suit:'Swords', symbol:'🗡', keyword:'Honesty, sharp clarity',
  past:"The Queen of Swords card represents sharp wit and absolutely no tolerance for nonsense. Drawing this in the past position means you shut something down with a firm, precise no thank you, and never looked back.",
  present:"The Queen of Swords card represents sharp wit and absolutely no tolerance for nonsense. Drawing this in the present position means you're delivering quietly excellent commentary about the table setup to your partner.",
  future:"The Queen of Swords card represents sharp wit and absolutely no tolerance for nonsense. Drawing this in the future position means you'll use that razor wit to shut down a dull conversation later, freeing yourself up for the bar." },

{ id:'swords-king', name:'King of Swords', suit:'Swords', symbol:'⚖', keyword:'Clear-headed authority',
  past:"The King of Swords card represents clear headed judgement and rational authority. Drawing this in the past position means you talked your way out of something using pure logic and a straight face.",
  present:"The King of Swords card represents clear headed judgement and rational authority. Drawing this in the present position means you're quietly scoring the wedding speeches out of ten in your head.",
  future:"The King of Swords card represents clear headed judgement and rational authority. Drawing this in the future position means you'll be called on later to settle a drunken debate about what year a certain song came out, trust your gut." },

// PENTACLES
{ id:'pentacles-ace', name:'Ace of Pentacles', suit:'Pentacles', symbol:'💰', keyword:'A real opportunity',
  past:"The Ace of Pentacles card represents a solid new opportunity landing in your lap. Drawing this in the past position means you found something small and useful you'd completely forgotten about.",
  present:"The Ace of Pentacles card represents a solid new opportunity landing in your lap. Drawing this in the present position means enjoy the sheer luxury of a beautifully catered meal you didn't have to cook or pay for.",
  future:"The Ace of Pentacles card represents a solid new opportunity landing in your lap. Drawing this in the future position means a solid financial investment is coming tonight, specifically your card and a double measure at the paid bar." },

{ id:'pentacles-two', name:'Two of Pentacles', suit:'Pentacles', symbol:'🔄', keyword:'Juggling, staying adaptable',
  past:"The Two of Pentacles card represents juggling everything and just about managing. Drawing this in the past position means you kept several plates spinning on very little sleep, and somehow nothing dropped.",
  present:"The Two of Pentacles card represents juggling everything and just about managing. Drawing this in the present position means you're currently balancing a glass of wine, a forkful of food, and a conversation all at once.",
  future:"The Two of Pentacles card represents juggling everything and just about managing. Drawing this in the future position means you'll attempt to carry three full drinks back from the paid bar without a tray, best of luck." },

{ id:'pentacles-three', name:'Three of Pentacles', suit:'Pentacles', symbol:'🔨', keyword:'Teamwork, shared skill',
  past:"The Three of Pentacles card represents teamwork actually working properly. Drawing this in the past position means a group effort that genuinely worked, because everyone pulled their weight.",
  present:"The Three of Pentacles card represents teamwork actually working properly. Drawing this in the present position means appreciate the sheer precision of the venue staff getting hot plates to this many people at once.",
  future:"The Three of Pentacles card represents teamwork actually working properly. Drawing this in the future position means you and a few others will pull off a highly coordinated, deeply embarrassing dance routine later, save it for when the bass drops." },

{ id:'pentacles-four', name:'Four of Pentacles', suit:'Pentacles', symbol:'🤲', keyword:'Holding on tightly',
  past:"The Four of Pentacles card represents holding on tightly to what's yours. Drawing this in the past position means you were a little tighter with your money or time than you probably needed to be.",
  present:"The Four of Pentacles card represents holding on tightly to what's yours. Drawing this in the present position means you're guarding your designated wine bottle like a dragon, relax, there's enough to go round.",
  future:"The Four of Pentacles card represents holding on tightly to what's yours. Drawing this in the future position means you'll feel a strong urge to pocket some evening snacks for the taxi ride home, honestly, go for it." },

{ id:'pentacles-five', name:'Five of Pentacles', suit:'Pentacles', symbol:'🥶', keyword:'A hard patch, seeking support',
  past:"The Five of Pentacles card represents feeling left out in the cold. Drawing this in the past position means a properly lean stretch, and you got through it without much fuss.",
  present:"The Five of Pentacles card represents feeling left out in the cold. Drawing this in the present position means you're feeling briefly left out because everyone's talking about a show you've never seen.",
  future:"The Five of Pentacles card represents feeling left out in the cold. Drawing this in the future position means you'll be stood outside later waiting for a taxi that's five minutes away for a solid half hour, grab your coat." },

{ id:'pentacles-six', name:'Six of Pentacles', suit:'Pentacles', symbol:'⚖', keyword:'Give and take, generosity',
  past:"The Six of Pentacles card represents generosity, given or received. Drawing this in the past position means you covered someone quietly once, without making a thing of it.",
  present:"The Six of Pentacles card represents generosity, given or received. Drawing this in the present position means offer your partner the rest of your dessert, you absolute saint.",
  future:"The Six of Pentacles card represents generosity, given or received. Drawing this in the future position means you'll end up generously funding someone else's round at the paid bar later." },

{ id:'pentacles-seven', name:'Seven of Pentacles', suit:'Pentacles', symbol:'🌱', keyword:'Patience, the long game',
  past:"The Seven of Pentacles card represents patience while something slowly grows. Drawing this in the past position means you waited longer than felt reasonable for something to pay off, and it did.",
  present:"The Seven of Pentacles card represents patience while something slowly grows. Drawing this in the present position means sit patiently through the rest of dinner, the real reward is just around the corner.",
  future:"The Seven of Pentacles card represents patience while something slowly grows. Drawing this in the future position means your patience finally pays off at the end of the night, specifically the moment you sit down in the taxi and take your shoes off." },

{ id:'pentacles-eight', name:'Eight of Pentacles', suit:'Pentacles', symbol:'⚒', keyword:'Craft, quiet mastery',
  past:"The Eight of Pentacles card represents hard work and quietly getting good at something. Drawing this in the past position means hours spent perfecting a skill nobody asked you to perfect.",
  present:"The Eight of Pentacles card represents hard work and quietly getting good at something. Drawing this in the present position means put those skills to work cutting your meat with surgical precision, no splatter on the outfit.",
  future:"The Eight of Pentacles card represents hard work and quietly getting good at something. Drawing this in the future position means you'll demonstrate absolute mastery of the drunk dancefloor shuffle later, years of practice paying off." },

{ id:'pentacles-nine', name:'Nine of Pentacles', suit:'Pentacles', symbol:'🌿', keyword:'Earned comfort, independence',
  past:"The Nine of Pentacles card represents enjoying the finer things because you've earned them. Drawing this in the past position means you treated yourself to something a bit excessive, and it was worth every penny.",
  present:"The Nine of Pentacles card represents enjoying the finer things because you've earned them. Drawing this in the present position means you're sitting here looking wealthy, classy, and thoroughly put together.",
  future:"The Nine of Pentacles card represents enjoying the finer things because you've earned them. Drawing this in the future position means you'll treat yourself to an unnecessarily premium drink at the paid bar simply because you deserve it." },

{ id:'pentacles-ten', name:'Ten of Pentacles', suit:'Pentacles', symbol:'🏡', keyword:'Legacy, lasting foundations',
  past:"The Ten of Pentacles card represents long term security and lasting foundations. Drawing this in the past position means something was built to last, quietly, over a long stretch of time.",
  present:"The Ten of Pentacles card represents long term security and lasting foundations. Drawing this in the present position means take a look around at this gathering of family and friends of every age, that's proper wealth.",
  future:"The Ten of Pentacles card represents long term security and lasting foundations. Drawing this in the future position means you'll secure a long term legacy tonight as the fun one at Tammy and Alex's wedding." },

{ id:'pentacles-page', name:'Page of Pentacles', suit:'Pentacles', symbol:'📚', keyword:'A practical new start',
  past:"The Page of Pentacles card represents a new practical idea worth exploring. Drawing this in the past position means you bought into a good idea with every intention of following through, results mixed.",
  present:"The Page of Pentacles card represents a new practical idea worth exploring. Drawing this in the present position means you're fascinated by the table decorations and wondering how much they cost on Etsy.",
  future:"The Page of Pentacles card represents a new practical idea worth exploring. Drawing this in the future position means you'll find a stray pound coin on the floor later, take it as a direct blessing from the universe." },

{ id:'pentacles-knight', name:'Knight of Pentacles', suit:'Pentacles', symbol:'🐎', keyword:'Reliable, steady effort',
  past:"The Knight of Pentacles card represents steady, reliable, a bit unglamorous. Drawing this in the past position means you did the boring, careful thing while everyone else winged it, and it paid off.",
  present:"The Knight of Pentacles card represents steady, reliable, a bit unglamorous. Drawing this in the present position means you're eating your dinner at a remarkably sensible pace while everyone else inhales theirs.",
  future:"The Knight of Pentacles card represents steady, reliable, a bit unglamorous. Drawing this in the future position means you'll be the one who gets your group out of the venue tonight with phones, chargers, and dignity intact." },

{ id:'pentacles-queen', name:'Queen of Pentacles', suit:'Pentacles', symbol:'🌺', keyword:'Grounded, generous warmth',
  past:"The Queen of Pentacles card represents nurturing warmth and making sure everyone's alright. Drawing this in the past position means you packed painkillers and snacks for a day trip nobody else thought to prepare for.",
  present:"The Queen of Pentacles card represents nurturing warmth and making sure everyone's alright. Drawing this in the present position means reassure the person next to you they look great and there's nothing in their teeth.",
  future:"The Queen of Pentacles card represents nurturing warmth and making sure everyone's alright. Drawing this in the future position means you'll mysteriously produce chewing gum or a plaster later, exactly when someone needs it." },

{ id:'pentacles-king', name:'King of Pentacles', suit:'Pentacles', symbol:'💼', keyword:'Prosperity, quiet security',
  past:"The King of Pentacles card represents quiet prosperity and being the one who's got it handled. Drawing this in the past position means that particular satisfaction of clearing a debt and watching the balance hit zero.",
  present:"The King of Pentacles card represents quiet prosperity and being the one who's got it handled. Drawing this in the present position means sit back like a wealthy lord, fully approving of the wine and the general ambience.",
  future:"The King of Pentacles card represents quiet prosperity and being the one who's got it handled. Drawing this in the future position means you'll confidently approach the paid bar later, tap your card, and declare put it all on one tab." }
];
