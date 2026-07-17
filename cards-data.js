const CARDS = [
// MAJOR ARCANA
{ id:'fool', name:'The Fool', suit:'Major', symbol:'🌟', keyword:'New beginnings, leaps of faith',
  past:"You leapt before you looked. Properly reckless, no safety net, no five year plan. It should have gone wrong. It didn't. Honestly, good for you.",
  present:"You're standing at the edge of something new right now, and the overthinking isn't helping anyone. The cards have one instruction. Jump. You'll figure out the landing on the way down, you usually do.",
  future:"A gloriously chaotic new adventure is heading your way, packing list optional. Somewhere in the middle of it, you'll do something spontaneously lovely for Tammy and Alex, quite possibly buying the next round before anyone's even asked." },

{ id:'magician', name:'The Magician', suit:'Major', symbol:'⚡', keyword:'Willpower, resourcefulness',
  past:"You made something brilliant out of almost nothing and made it look effortless. It wasn't effortless. It took everything you had. Nobody needs to know that part.",
  present:"Everything you need is already sitting in front of you, you're just choosing not to look at it. The tools are there. The talent is there. The only missing ingredient is you actually starting.",
  future:"A stretch of genuinely getting things done is coming, the kind where you surprise even yourself. Somewhere in there, you'll pull off a small miracle for Tammy and Alex, probably a lost phone, a missing shoe, or a speech saved at the very last second." },

{ id:'high-priestess', name:'The High Priestess', suit:'Major', symbol:'☽', keyword:'Intuition, quiet knowing',
  past:"You knew something long before anyone said it out loud. You kept it to yourself, which honestly took more restraint than anyone gave you credit for.",
  present:"Your gut is trying to tell you something right now, and it's rarely wrong. Might be worth actually listening this time instead of talking yourself out of it.",
  future:"Secrets will surface and instincts will pay off, cue at least one thoroughly satisfying I knew it. Somewhere along the way, you'll quietly clock something sweet Tammy and Alex needed sorted, and sort it before either of them notices." },

{ id:'empress', name:'The Empress', suit:'Major', symbol:'♀', keyword:'Abundance, warmth, growth',
  past:"A proper flourishing chapter, creatively, romantically, or suspiciously well with houseplants. Things grew. You grew. It was a good stretch, even if you were too busy living it to notice at the time.",
  present:"Life is more abundant right now than it might feel from where you're sitting. Look at what's already going right before deciding it isn't enough.",
  future:"Growth and warmth are arriving faster than you're expecting, in the best possible way. Somewhere in it, you'll spoil Tammy and Alex with something generous and slightly over the top. The good kind of over the top." },

{ id:'emperor', name:'The Emperor', suit:'Major', symbol:'♂', keyword:'Structure, steady leadership',
  past:"You held things together when somebody had to, and it fell to you. Thankless, exhausting, and completely essential. You did it anyway.",
  present:"A firm hand is needed somewhere in your life right now, and it's probably yours. This is a moment for structure, not improvising something on the fly.",
  future:"Real stability is coming, unglamorous but very welcome. Somewhere in it, you'll end up quietly organising something for Tammy and Alex that neither of them thought to plan, and everyone will assume it was always sorted." },

{ id:'hierophant', name:'The Hierophant', suit:'Major', symbol:'⛪', keyword:'Tradition, wisdom, belonging',
  past:"You followed the process and showed up when it mattered, even when it wasn't glamorous. Occasionally that's the whole job, and you did it well.",
  present:"There's real wisdom in doing things the established way, at least for now. Worth a proper look before you decide to burn the rulebook.",
  future:"A genuinely excellent piece of advice, or a mentor figure, is heading your way soon. Somewhere along the way, you'll pass on some wisdom that Tammy and Alex actually need to hear, whether they asked for it or not." },

{ id:'lovers', name:'The Lovers', suit:'Major', symbol:'♡', keyword:'Connection, alignment, choices',
  past:"A choice made from the heart, not from convenience. It would have been easier to pick the safer option. You didn't. Correct call.",
  present:"Something is aligning, either with another person or with yourself. Whichever it is, it's worth paying proper attention to right now.",
  future:"Deep connection is heading your way, the kind that quietly changes things. And somewhere in it, you'll be the reason Tammy and Alex believe even more firmly in the whole soulmate business. No pressure." },

{ id:'chariot', name:'The Chariot', suit:'Major', symbol:'🏆', keyword:'Momentum, drive, victory',
  past:"You kept going long after most people would have stopped. That's the whole story, honestly, and it ended exactly the way it should have.",
  present:"You're moving forward right now with real momentum. Nothing needs to slow that down, least of all your own second guessing.",
  future:"A clean, hard earned win is on its way, no shortcuts required. And somewhere in it, you'll drive Tammy and Alex somewhere important, quite possibly to the airport for the honeymoon, running suspiciously on time." },

{ id:'strength', name:'Strength', suit:'Major', symbol:'🦁', keyword:'Quiet courage, patience',
  past:"You handled something genuinely difficult with more grace than the situation deserved. Nobody made a fuss about it. It was still impressive.",
  present:"The strength you need right now isn't the loud kind. It's patient, steady, and already sitting quietly inside you, waiting to be used.",
  future:"You'll find reserves you didn't know you had, exactly when they're needed. Somewhere in it, you'll be the calm, steady one Tammy and Alex lean on when the wedding admin finally gets to be a bit much." },

{ id:'hermit', name:'The Hermit', suit:'Major', symbol:'🕯', keyword:'Reflection, solitude, wisdom',
  past:"A quieter chapter, spent thinking things through properly rather than rushing to a conclusion. It felt slow at the time. It was more useful than it felt.",
  present:"Some questions only get answered when you're on your own. Stepping back for a bit is allowed, and probably overdue.",
  future:"Clarity is coming, on its own schedule rather than yours. Somewhere in it, a bit of quiet advice from you ends up mattering to Tammy and Alex far more than either of you will properly say out loud." },

{ id:'wheel', name:'Wheel of Fortune', suit:'Major', symbol:'☸', keyword:'Fate, timing, turning points',
  past:"Things changed fast, with very little warning, and you had to scramble to keep up. Somehow, here you are, mostly unscathed and slightly wiser.",
  present:"The wheel is turning right now, whether you like it or not. Best to enjoy the ride rather than white knuckle the sides the whole way round.",
  future:"A significant shift is coming, and by all accounts it's in your favour this time. Somewhere in it, perfect timing puts you exactly where Tammy and Alex need an extra pair of hands, and they'll be properly glad of it." },

{ id:'justice', name:'Justice', suit:'Major', symbol:'⚖', keyword:'Fairness, truth, balance',
  past:"Something got put right, eventually, one way or another. It took longer than it should have. It got there in the end.",
  present:"Honesty is called for somewhere in your life right now, even when it's inconvenient. Especially when it's inconvenient, if we're honest.",
  future:"Fair outcomes are coming, the kind you've genuinely earned. Somewhere in it, you'll settle a small dispute at this wedding with the calm authority of someone who should probably do this professionally. Tammy and Alex are hiring." },

{ id:'hanged-man', name:'The Hanged Man', suit:'Major', symbol:'🙃', keyword:'New perspective, patience',
  past:"You waited, or got stuck, when you'd much rather have moved forward. It taught you something a shortcut never could have.",
  present:"Try looking at this whole situation from a completely different angle. Possibly literally upside down. It might just click.",
  future:"A pause that turns out to be a proper turning point is coming. Somewhere in it, you'll have a sudden change of heart about something, quite possibly agreeing to give a toast you swore you absolutely would not." },

{ id:'death', name:'Death', suit:'Major', symbol:'🦋', keyword:'Endings, transformation, renewal',
  past:"Something ended, fully and finally, and it made room for something much better. It didn't feel that way at the time. It rarely does.",
  present:"There's nothing to fear in what's ending right now. The new version of things is already waiting patiently for you to arrive.",
  future:"A meaningful transformation is heading your way, new chapter, new energy, new everything. Somewhere in it, you'll help Tammy and Alex close out one era properly before starting the next, whether that's packing up the old flat or the old single life." },

{ id:'temperance', name:'Temperance', suit:'Major', symbol:'🌊', keyword:'Balance, patience, flow',
  past:"You found the middle ground between two extremes, and everyone involved was better off for it, even if nobody thanked you at the time.",
  present:"Easy does it. This situation doesn't need more energy thrown at it, it needs the energy you've already got, aimed better.",
  future:"A stretch of genuine balance is coming, things falling into place at a suspiciously smooth rate. Somewhere in it, you'll be the one pacing everyone at the bar tonight, including, remarkably, yourself." },

{ id:'devil', name:'The Devil', suit:'Major', symbol:'🔗', keyword:'Old patterns, temptation, release',
  past:"You were holding onto something that stopped serving you a while ago. Noticing that was the hard part. You noticed.",
  present:"What's the one thing you keep telling yourself you can't change? Have a proper think. You probably can, you're just comfortable.",
  future:"Freedom from a pattern that's overstayed its welcome is coming. Somewhere in it, you'll be powerless to resist the cheese board tonight, and Tammy and Alex forgive you fully in advance." },

{ id:'tower', name:'The Tower', suit:'Major', symbol:'⚡', keyword:'Sudden change, breakthrough',
  past:"Something in your life fell flat on its face. Dramatically. The kind of fall that would absolutely end up on a you won't believe what happened next compilation. But with a bit of distance, it's obvious it needed to happen. Whatever you've still got now is the stuff that was actually worth keeping.",
  present:"Ooh, don't panic, but we're sensing a revelation heading your way and it's a doozy. The kind that rearranges the furniture, possibly the whole house. Good news, the outcome is almost certainly better than the build up, so stick with it even when the middle bit gets a little alarming.",
  future:"Change is coming fast. Morgoth chasing a squirrel fast. It's going to improve your life anyway, whether you asked for it or not. And somewhere in the middle of it all, you'll cause a small, glorious bit of chaos at this exact reception, Tammy and Alex would just kindly ask you to steer clear of the white dress." },

{ id:'star', name:'The Star', suit:'Major', symbol:'⭐', keyword:'Hope, renewal, quiet good luck',
  past:"After something genuinely hard, you found your way back to hope. Not the loud, sudden kind. The quiet kind that just slowly returns. That's not nothing. That's actually most of it.",
  present:"You're exactly where you need to be right now, even if it doesn't feel that way from inside it. Trust the process a little longer.",
  future:"A genuinely lovely stretch is ahead, rest, renewal, things quietly working out. Somewhere in it, you'll do something small and generous for Tammy and Alex that means far more than you'll ever realise at the time." },

{ id:'moon', name:'The Moon', suit:'Major', symbol:'🌙', keyword:'Uncertainty, intuition, dreams',
  past:"Things were murkier than they seemed at the time, and you've only really understood that looking back. Hindsight, and all that.",
  present:"Not everything is quite what it appears to be right now. Good to know, even if it's mildly unsettling.",
  future:"Some confusion is about to clear, and what's underneath it is better than expected. Somewhere in it, you'll have a wonderfully strange, slightly surreal night that somehow ends with Tammy and Alex's wedding playlist and a two a.m. singalong." },

{ id:'sun', name:'The Sun', suit:'Major', symbol:'☀', keyword:'Joy, clarity, vitality',
  past:"A genuinely good chapter. Simple, warm, easy, no hidden catch. Worth properly appreciating rather than waiting for the other shoe to drop.",
  present:"Things are clearer right now than they've been in a while. Enjoy the light while it's this good, it doesn't need overanalysing.",
  future:"Straightforwardly excellent fortune is coming, honestly one of the best cards there is. Somewhere in it, you'll be the reason a stranger at this wedding asks Tammy and Alex who that is having the best time on the dancefloor." },

{ id:'judgement', name:'Judgement', suit:'Major', symbol:'📯', keyword:'Reckoning, calling, awakening',
  past:"A moment of reckoning cleared the air properly. Uncomfortable at the time. Genuinely clarifying looking back on it now.",
  present:"A calling is getting louder in the back of your mind. Might finally be time to stop pretending you can't hear it.",
  future:"A genuine awakening to what actually matters is coming. Somewhere in it, a bit of the love in this room today convinces you to finally make a decision you've been sitting on for ages, and Tammy and Alex will take full credit." },

{ id:'world', name:'The World', suit:'Major', symbol:'🌍', keyword:'Completion, fulfilment',
  past:"You completed something that genuinely mattered, and closed the circle properly instead of leaving it hanging, the way most people do.",
  present:"A genuine sense of wholeness, right now, in this exact moment. Worth noticing it while it's here rather than rushing straight past it.",
  future:"Total fulfilment is coming, the best card in the deck, no notes whatsoever. Somewhere in it, you'll help make Tammy and Alex's first year of marriage exactly as good as today, whether that's showing up, showing off, or just showing love." },

// WANDS
{ id:'wands-ace', name:'Ace of Wands', suit:'Wands', symbol:'🔥', keyword:'A spark of inspiration',
  past:"An idea landed out of nowhere and you actually ran with it, rather than letting it fizzle out over a cup of tea like most ideas do. Good instinct.",
  present:"The spark is here, the energy is good, and you're just standing there admiring it instead of doing something with it. Go on then.",
  future:"A new creative pursuit is coming that fully absorbs you, in the best way. Somewhere in it, a brilliant idea strikes on this exact dancefloor tonight, and Tammy and Alex want in on whatever it turns out to be." },

{ id:'wands-2', name:'Two of Wands', suit:'Wands', symbol:'🌐', keyword:'Planning, weighing options',
  past:"Careful planning laid some genuinely solid groundwork, even if it felt slow and unglamorous while you were doing it.",
  present:"There's a choice between the familiar option and the exciting one. Nine times out of ten, the exciting one is the right call.",
  future:"A bold move is about to pay off nicely. Somewhere in it, you'll make an ambitious plan involving Tammy and Alex before the night is out, book the babysitter, that reunion is happening." },

{ id:'wands-3', name:'Three of Wands', suit:'Wands', symbol:'⛵', keyword:'Progress, expansion',
  past:"Plans set in motion a while back are already quietly showing results, even if you've been too busy to notice.",
  present:"Progress is happening right now, even in the places where it's hard to see it yet. Trust that it's building.",
  future:"Expansion is ahead, new ground, new territory, professionally or personally. Somewhere in it, you'll plan a trip that very conveniently loops in visiting Tammy and Alex." },

{ id:'wands-4', name:'Four of Wands', suit:'Wands', symbol:'🎊', keyword:'Celebration, homecoming',
  past:"A proper celebration, a genuine homecoming, the sort of moment that actually deserved the fuss made of it.",
  present:"You are exactly where you belong right now, surrounded by exactly the right people. Take a second to actually clock that.",
  future:"More celebrations are heading your way, this is clearly your season. And somewhere in it, you'll be first on the guest list for whatever Tammy and Alex host next." },

{ id:'wands-5', name:'Five of Wands', suit:'Wands', symbol:'⚔', keyword:'Friendly competition',
  past:"A bit of friction cropped up, annoying at the time, genuinely useful in hindsight once the dust settled.",
  present:"There are a few competing ideas circling right now. Give the best one room to actually win, rather than forcing your favourite through.",
  future:"A challenge is coming, dressed up as an opportunity in disguise. Somewhere in it, you'll win a slightly too competitive party game tonight against Tammy and Alex, and you will absolutely never let them forget it." },

{ id:'wands-6', name:'Six of Wands', suit:'Wands', symbol:'🏅', keyword:'Recognition, success',
  past:"You were properly recognised for something you worked hard for, and for once you actually let yourself enjoy it.",
  present:"Confidence is entirely warranted right now, not arrogance, confidence. There's a real difference and you're on the right side of it.",
  future:"A visible, public win is coming, the kind people actually notice. Somewhere in it, you become tonight's unofficial dancefloor legend, and Tammy and Alex are saving you a front row spot." },

{ id:'wands-7', name:'Seven of Wands', suit:'Wands', symbol:'🛡', keyword:'Holding your ground',
  past:"You held firm on something when absolutely nobody expected you to. Turns out you had more backbone than people gave you credit for.",
  present:"Stay the course on this one. You're more right than you're currently getting credit for, and folding now would be a mistake.",
  future:"Persistence outlasts the opposition, eventually. Somewhere in it, you'll be the very last one standing at this wedding, and Tammy and Alex are counting on it, quite literally." },

{ id:'wands-8', name:'Eight of Wands', suit:'Wands', symbol:'💨', keyword:'Speed, momentum',
  past:"Things moved fast, faster than you were quite ready for, and you kept up anyway. Impressive, honestly.",
  present:"No time for overthinking this one. The window is open right now. Act, then adjust as you go.",
  future:"Rapid progress is coming on something that's been overdue for ages. Somewhere in it, everything happens at once for you very soon. Tammy and Alex suggest a list, and possibly a lie down afterwards." },

{ id:'wands-9', name:'Nine of Wands', suit:'Wands', symbol:'🧱', keyword:'Resilience, one last push',
  past:"You were tired, properly tired, and you didn't stop anyway. That's genuinely the whole story, and it's a good one.",
  present:"You're nearly there. This is exactly the wrong moment to give up, no matter how tempting it looks right now.",
  future:"One final effort is coming, then proper, actual rest. Somewhere in it, you rally spectacularly for the last hour of this reception, and Tammy and Alex have timed the songs accordingly." },

{ id:'wands-10', name:'Ten of Wands', suit:'Wands', symbol:'📦', keyword:'Carrying too much',
  past:"You carried more than was comfortable for longer than you should have, quite possibly by choice, quite possibly out of stubbornness.",
  present:"Time to put some of it down. Genuinely, nobody's asking you to carry all of it single handedly, put the extra bag down.",
  future:"Relief is coming, some of the load properly lifts. Somewhere in it, you take something off Tammy and Alex's plate without even being asked, possibly the taxi booking, possibly the in laws." },

{ id:'wands-page', name:'Page of Wands', suit:'Wands', symbol:'🌱', keyword:'Curiosity, fresh enthusiasm',
  past:"A curious, energetic chapter of discovering something entirely new, and throwing yourself into it with genuine enthusiasm.",
  present:"Beginner's mind is a real gift right now. Stay curious rather than pretending you're already the expert.",
  future:"A new spark is coming that grows into something properly real. Somewhere in it, you take up a slightly random new hobby inspired by tonight, and Tammy and Alex fully expect updates." },

{ id:'wands-knight', name:'Knight of Wands', suit:'Wands', symbol:'🚀', keyword:'Bold, fast action',
  past:"You charged in without much of a plan at all. It worked out. Barely counts as strategy, but here you are.",
  present:"This is not the moment for caution. Move fast, think later, you'll be fine.",
  future:"A bold move is about to pay off spectacularly. Somewhere in it, you make a wonderfully spontaneous decision tonight that becomes a story told at every future Tammy and Alex anniversary dinner." },

{ id:'wands-queen', name:'Queen of Wands', suit:'Wands', symbol:'👑', keyword:'Warmth, magnetic confidence',
  past:"You lit up a room and made everyone in it feel properly welcome, without seeming to try very hard at all.",
  present:"Your energy is magnetic right now, genuinely. Use it, don't waste it hiding in the corner.",
  future:"A period of real warmth and personal power is coming. Somewhere in it, you'll be exactly, unapologetically yourself tonight, and Tammy and Alex will take full credit for the guest list." },

{ id:'wands-king', name:'King of Wands', suit:'Wands', symbol:'🦅', keyword:'Vision, bold leadership',
  past:"You led with real vision, and it genuinely inspired the people around you, even the ones who'd never admit it out loud.",
  present:"Your boldest idea is probably the right one. Back it properly instead of quietly talking yourself out of it.",
  future:"Creative leadership is about to pay off in a big way. Somewhere in it, you pitch a brilliant idea to entirely the wrong person at exactly the right moment, Tammy and Alex suggest pitching it to them instead." },

// CUPS
{ id:'cups-ace', name:'Ace of Cups', suit:'Cups', symbol:'💧', keyword:'New love, open heart',
  past:"The start of something that genuinely mattered, emotionally. It stayed with you long after the moment itself passed.",
  present:"Your heart is properly open right now. That's genuinely everything, don't overthink it into something more complicated.",
  future:"New emotional beginnings are coming, love, friendship, connection, take your pick. Somewhere in it, you have a surprisingly meaningful chat at this exact table tonight, and Tammy and Alex planned the seating around it entirely on purpose." },

{ id:'cups-2', name:'Two of Cups', suit:'Cups', symbol:'🤝', keyword:'Mutual connection',
  past:"A genuine, mutual connection formed, honest and easy, without either of you overthinking it into a whole thing.",
  present:"There's a real partnership here worth leaning into properly, rather than second guessing it.",
  future:"A significant pairing is on the horizon, romantic or otherwise. Somewhere in it, you'll set up a match between two very obviously suited people at this wedding, and Tammy and Alex will absolutely take credit at the next one." },

{ id:'cups-3', name:'Three of Cups', suit:'Cups', symbol:'🥂', keyword:'Joy, friendship, celebration',
  past:"A proper stretch of genuine joy, shared with people you actually love, not just tolerate at family gatherings.",
  present:"This exact moment, right now, deserves celebrating properly. So go and celebrate it, don't just note it and move on.",
  future:"More joyful gatherings are heading your way. Somewhere in it, you'll raise a glass to Tammy and Alex at exactly the right, slightly too emotional moment tonight." },

{ id:'cups-4', name:'Four of Cups', suit:'Cups', symbol:'😑', keyword:'A little bored, missing something',
  past:"A flat patch where something genuinely good went completely unnoticed, because you were too busy staring at your own feet.",
  present:"Look up from whatever's currently got your attention. There's an opportunity quietly waiting to be noticed, right there.",
  future:"Renewed enthusiasm is coming after a dull stretch. Somewhere in it, you briefly consider leaving this wedding early and, very wisely, absolutely do not. Tammy and Alex are glad you stayed." },

{ id:'cups-5', name:'Five of Cups', suit:'Cups', symbol:'😔', keyword:'Loss, and moving forward',
  past:"Something was lost, and properly grieved rather than brushed under the rug. That takes real courage, more than people give it credit for.",
  present:"There's still something worth having, even now. It's just sitting slightly to the left of where you keep looking.",
  future:"Healing that isn't a straight line, but is genuinely happening. Somewhere in it, an unexpected bit of joy tonight, right here at this wedding, helps more than you'll say out loud." },

{ id:'cups-6', name:'Six of Cups', suit:'Cups', symbol:'🌸', keyword:'Nostalgia, sweet reunion',
  past:"Happy memories from a simpler, easier time. Genuinely worth revisiting every so often, not just filing away.",
  present:"Someone, or something, from the past is coming back around, and it's a warm return rather than an awkward one.",
  future:"A joyful reconnection is coming. Somewhere in it, you'll have a proper catch up tonight with someone at this wedding you haven't seen in far too long, and Tammy and Alex will absolutely claim they engineered it." },

{ id:'cups-7', name:'Seven of Cups', suit:'Cups', symbol:'🌈', keyword:'Too many choices',
  past:"Too many options at once, and the particular kind of paralysis that comes from having far too much choice.",
  present:"Not everything that glitters is worth chasing right now. Pick one thing and commit properly.",
  future:"Clarity is coming through the simple act of choosing. Somewhere in it, you'll spend a genuinely long time deciding on dessert tonight, Tammy and Alex recommend the apple tart, decision made for you." },

{ id:'cups-8', name:'Eight of Cups', suit:'Cups', symbol:'🚶', keyword:'Walking away, seeking more',
  past:"You left something behind that no longer fit, even though it looked fine from the outside. Took more courage than it looked.",
  present:"It might genuinely be time to walk away from something comfortable but ultimately unfulfilling, however hard that is to admit.",
  future:"A search for something more meaningful is coming, and it leads somewhere properly good. Somewhere in it, you'll have a small but real moment of clarity tonight, and Tammy and Alex are available for the debrief afterwards." },

{ id:'cups-9', name:'Nine of Cups', suit:'Cups', symbol:'✨', keyword:'Satisfaction, wishes granted',
  past:"A wish actually came true, and you took it slightly for granted at the time. Very human of you, honestly.",
  present:"Things are genuinely good right now. Let that properly land instead of immediately worrying about when it'll change.",
  future:"Contentment is coming, the underrated luxury of having exactly what you actually wanted. Somewhere in it, you'll make a wish tonight, and Tammy and Alex would like to suggest it involves the two of them staying blissfully happy for a very long time." },

{ id:'cups-10', name:'Ten of Cups', suit:'Cups', symbol:'🌈', keyword:'Deep happiness, belonging',
  past:"Genuine happiness, in family or community, the real thing rather than the performed version people post online.",
  present:"You're surrounded by love today. Actually surrounded by it. Worth an actual look around this exact room right now.",
  future:"Deep fulfilment in the people around you is coming. Somewhere in it, this exact wedding, full of the people you love most, becomes one of your genuine favourite days, and Tammy and Alex are thrilled to have caused it." },

{ id:'cups-page', name:'Page of Cups', suit:'Cups', symbol:'🐟', keyword:'Sensitivity, sweet surprises',
  past:"An emotionally intuitive chapter, where you felt things deeply and it genuinely showed, rather than hiding it away.",
  present:"A little softness today is exactly the right call, even if it feels slightly out of character.",
  future:"A sweet, unexpected message is coming from an unlikely source. Somewhere in it, someone says something to you today that you'll remember for years, and Tammy and Alex hope it's from the speeches." },

{ id:'cups-knight', name:'Knight of Cups', suit:'Cups', symbol:'🦢', keyword:'Romance, following the heart',
  past:"You followed your heart, dramatically and memorably, rather than the sensible option everyone suggested.",
  present:"Lead with feeling on this one. Logic can wait its turn for once.",
  future:"A romantic, emotionally rich chapter is beginning. Somewhere in it, you get completely swept up in the romance of today, and Tammy and Alex accept full responsibility, no regrets whatsoever." },

{ id:'cups-queen', name:'Queen of Cups', suit:'Cups', symbol:'💙', keyword:'Compassion, emotional wisdom',
  past:"You were the emotional anchor for someone who badly needed one, and you didn't make a big deal of it either.",
  present:"Your empathy is one of your genuinely best qualities. Use it today, someone in the room needs it.",
  future:"Emotional intelligence is about to open doors that logic never could. Somewhere in it, you become the person everyone confides in tonight, and Tammy and Alex placed you at this table entirely on purpose." },

{ id:'cups-king', name:'King of Cups', suit:'Cups', symbol:'🌊', keyword:'Calm, emotional maturity',
  past:"You handled something emotionally difficult with real maturity, staying steady when it would have been easier not to.",
  present:"Be the calm one right now. Someone in this room genuinely needs it, whether they say so or not.",
  future:"Emotional mastery is coming, the kind others turn to naturally. Somewhere in it, someone leans on you for advice tonight, and Tammy and Alex trust your judgement completely. Mostly." },

// SWORDS
{ id:'swords-ace', name:'Ace of Swords', suit:'Swords', symbol:'⚔', keyword:'Clarity, breakthrough',
  past:"A moment of properly sharp clarity cut clean through all the noise, right when you needed it most.",
  present:"The truth of the situation is available right now, if you're actually ready to look at it properly.",
  future:"A breakthrough is coming, mental or otherwise. Somewhere in it, you'll say something tonight that cuts straight to the point and gets an actual round of applause. Tammy and Alex are firmly pro brevity." },

{ id:'swords-2', name:'Two of Swords', suit:'Swords', symbol:'🙈', keyword:'Indecision',
  past:"You were stuck between two options for far too long, unable to properly commit to either one.",
  present:"The avoiding isn't protecting anyone, least of all you. Time to actually decide.",
  future:"The stalemate resolves, and probably the right way too. Somewhere in it, you finally commit to a decision you've been sitting on for ages, Tammy and Alex suggest tonight is exactly the night for it." },

{ id:'swords-3', name:'Three of Swords', suit:'Swords', symbol:'💔', keyword:'Heartbreak, healing',
  past:"Something hurt, properly hurt, and it was real and it mattered. You didn't pretend otherwise, which took strength.",
  present:"Healing isn't a straight line. Right now is part of the process, not a detour away from it.",
  future:"Clarity arrives once the pain properly settles. Somewhere in it, being surrounded by love and daft dancing tonight turns out to be exactly the medicine needed, and Tammy and Alex are glad to provide it." },

{ id:'swords-4', name:'Four of Swords', suit:'Swords', symbol:'🛌', keyword:'Rest, recovery',
  past:"A necessary rest after a genuinely hard stretch, even if it felt like giving up at the time. It wasn't.",
  present:"Stillness is doing more work than it looks like right now. Sitting still isn't the same as standing still.",
  future:"Full recovery is coming, properly restored, not just patched over. Somewhere in it, tonight becomes one of the most genuinely restorative evenings in ages, Tammy and Alex arranged good food, good people, and a dancefloor for exactly this reason." },

{ id:'swords-5', name:'Five of Swords', suit:'Swords', symbol:'😬', keyword:'A win that cost too much',
  past:"You won, technically, but it cost more than it was worth. Hollow victories still count as victories, just barely.",
  present:"Worth asking honestly whether winning this particular argument actually matters in the grand scheme.",
  future:"Choosing battles more wisely from here on. Somewhere in it, you let something go tonight and it feels genuinely brilliant, Tammy and Alex fully commend the decision." },

{ id:'swords-6', name:'Six of Swords', suit:'Swords', symbol:'⛵', keyword:'Moving toward calmer waters',
  past:"A difficult stretch finally ended, and you moved on properly, even if you glanced back once or twice on the way.",
  present:"You're in transition right now, with the roughest water genuinely behind you, whatever it feels like today.",
  future:"Smoother passage is ahead. Somewhere in it, tonight marks the unofficial start of a genuinely calmer, happier season for you, and Tammy and Alex are calling it right now." },

{ id:'swords-7', name:'Seven of Swords', suit:'Swords', symbol:'🤫', keyword:'Strategy, a bit of cunning',
  past:"Someone wasn't entirely straight with you, or perhaps you weren't entirely straight with yourself. Either way, lesson learned.",
  present:"There's probably a smarter, slightly sneakier way to handle this than the obvious one.",
  future:"A situation needing diplomacy and strategy in equal measure, both of which you've got plenty of. Somewhere in it, you get away with something small tonight, and Tammy and Alex are choosing not to ask what." },

{ id:'swords-8', name:'Eight of Swords', suit:'Swords', symbol:'🎭', keyword:'Self-imposed limits',
  past:"You felt properly trapped, though if you're honest, some of those walls were entirely your own doing.",
  present:"The restriction is more mental than it is real right now. Worth testing the actual edges of it.",
  future:"Freedom arrives the moment you question the limits. Somewhere in it, you break a small self imposed rule tonight and have a wonderful time doing it. Tammy and Alex fully encourage this." },

{ id:'swords-9', name:'Nine of Swords', suit:'Swords', symbol:'😰', keyword:'Overthinking, worry',
  past:"A stretch of genuine anxiety, most of which, looking back, never actually came to pass at all.",
  present:"The three a.m. version of this situation isn't the real version. Step properly away from the spiral.",
  future:"The worrying resolves itself, it was never as bad as it felt at its worst. Somewhere in it, tonight is a solid reminder that most things turn out fine and people are largely good, Tammy and Alex offer this exact evening as proof." },

{ id:'swords-10', name:'Ten of Swords', suit:'Swords', symbol:'🌅', keyword:'Rock bottom, then dawn',
  past:"Something ended completely, no ambiguity about it, the lowest point fully passed through and out the other side.",
  present:"When something is truly, properly over, it makes genuine room for everything new to arrive.",
  future:"After this, only up from here. Somewhere in it, a spectacular comeback begins, and Tammy and Alex are fully here for it and would like front row seats please." },

{ id:'swords-page', name:'Page of Swords', suit:'Swords', symbol:'🔍', keyword:'Curiosity, sharp attention',
  past:"Alert, watchful, and learning fast, even when nobody else in the room had quite clocked what was going on.",
  present:"Stay sharp right now. Gather the actual facts before you act on assumptions.",
  future:"New intellectual ground is opening up. Somewhere in it, you have a genuinely interesting conversation tonight that shifts how you see something, and Tammy and Alex take no responsibility for the changed opinion." },

{ id:'swords-knight', name:'Knight of Swords', suit:'Swords', symbol:'💨', keyword:'Ambition, speed',
  past:"You moved fast and spoke your mind, with mixed results but absolutely no regrets about the attempt.",
  present:"Act decisively on this one. The dithering is costing you more than the decision itself ever would.",
  future:"A fast moving, driven chapter is coming. Somewhere in it, you have a remarkably efficient evening, decisions made, fun had, zero time wasted, and Tammy and Alex are a little envious of the energy." },

{ id:'swords-queen', name:'Queen of Swords', suit:'Swords', symbol:'🗡', keyword:'Honesty, sharp clarity',
  past:"You called it exactly as it was, no softening, and people respected it even when it stung a little.",
  present:"The honest read is the kindest one, in the long run, even if it's harder to say out loud right now.",
  future:"Clarity of mind becomes your greatest asset going forward. Somewhere in it, you deliver one extremely precise observation tonight that gets quoted for the rest of the wedding, and Tammy and Alex are already writing it down." },

{ id:'swords-king', name:'King of Swords', suit:'Swords', symbol:'⚖', keyword:'Clear-headed authority',
  past:"Sound judgement guided a decision that genuinely mattered, and you didn't let emotion cloud the call.",
  present:"Think before you feel, just this once. Clarity has to win out over comfort right now.",
  future:"Being the one who simply, calmly knows what to do. Somewhere in it, you'll be extremely right about something tonight, Tammy and Alex suggest writing the prediction down for a well earned told you so." },

// PENTACLES
{ id:'pentacles-ace', name:'Ace of Pentacles', suit:'Pentacles', symbol:'💰', keyword:'A real opportunity',
  past:"A new, genuinely practical opportunity arrived, career, money, or otherwise, and you actually noticed it in time.",
  present:"A real, tangible opening is sitting right there in front of you. Worth taking properly seriously rather than dismissing.",
  future:"Material momentum is building, starting with one good decision. Somewhere in it, some good financial news lands, and Tammy and Alex suggest marking the occasion with a round, on them." },

{ id:'pentacles-2', name:'Two of Pentacles', suit:'Pentacles', symbol:'🔄', keyword:'Juggling, staying adaptable',
  past:"You kept several plates spinning at once and mostly, somehow, kept it all together without dropping one.",
  present:"Balance is just a series of small adjustments, made over and over. You're doing better at it than you think.",
  future:"Things settle after a wobbly stretch. Somewhere in it, you manage the rest of tonight with impressively smooth multi tasking, and Tammy and Alex are taking notes for their own honeymoon packing." },

{ id:'pentacles-3', name:'Three of Pentacles', suit:'Pentacles', symbol:'🔨', keyword:'Teamwork, shared skill',
  past:"A collaboration that actually worked, because everyone properly brought their best rather than coasting.",
  present:"The work is genuinely better with other people involved in it. Worth asking for input rather than going solo.",
  future:"A skilled team effort lands something excellent. Somewhere in it, you end up part of a brilliant collaborative project, and Tammy and Alex are available and, they'd like it noted, reasonably priced." },

{ id:'pentacles-4', name:'Four of Pentacles', suit:'Pentacles', symbol:'🤲', keyword:'Holding on tightly',
  past:"You held onto what was yours a little too tightly, understandably, but tightly all the same.",
  present:"Security is good. Hoarding isn't. Worth actually knowing the difference between the two right now.",
  future:"Learning to hold things a bit more loosely, and finding they stay anyway. Somewhere in it, you do something unexpectedly generous tonight, and Tammy and Alex are genuinely touched, particularly if it's a decent bottle of something." },

{ id:'pentacles-5', name:'Five of Pentacles', suit:'Pentacles', symbol:'🥶', keyword:'A hard patch, seeking support',
  past:"A materially or emotionally lean stretch, and you got through it, even if nobody clocked how hard it actually was.",
  present:"No need to weather this one entirely alone. Support is there, if you're willing to actually look for it.",
  future:"The lean period ends, and warmth properly returns. Somewhere in it, you realise exactly the right people are already in your corner, quite a few of them in this very room tonight, and Tammy and Alex are happy to take partial credit for the guest list." },

{ id:'pentacles-6', name:'Six of Pentacles', suit:'Pentacles', symbol:'⚖', keyword:'Give and take, generosity',
  past:"You gave, or received, generously, and balance was properly restored between the two of you.",
  present:"Stay open to both giving and receiving in equal measure right now, rather than only ever doing one.",
  future:"Generosity returns, sometimes multiplied. Somewhere in it, something lovely comes your way today, courtesy, at least in part, of Tammy and Alex." },

{ id:'pentacles-7', name:'Seven of Pentacles', suit:'Pentacles', symbol:'🌱', keyword:'Patience, the long game',
  past:"You played the properly long game, and it took more patience than you honestly expected to have.",
  present:"Trust the slow work right now. Not everything worth having is going to arrive quickly, and that's fine.",
  future:"The investment finally pays off. Somewhere in it, a long term effort bears fruit at last, and Tammy and Alex would like to point to their own relationship as living proof this approach genuinely works." },

{ id:'pentacles-8', name:'Eight of Pentacles', suit:'Pentacles', symbol:'⚒', keyword:'Craft, quiet mastery',
  past:"Head down, doing the work, and mastery arrived without much fanfare or anyone really noticing at the time.",
  present:"Keep going. You're better at this than you're currently giving yourself credit for.",
  future:"Genuine mastery of something meaningful is coming. Somewhere in it, you get remarkably good at something soon, and Tammy and Alex would like early access to tickets, whatever it turns out to be." },

{ id:'pentacles-9', name:'Nine of Pentacles', suit:'Pentacles', symbol:'🌿', keyword:'Earned comfort, independence',
  past:"A period of real self sufficiency and quiet luxury, that you earned properly rather than being handed.",
  present:"This comfort has been earned, fully. No guilt required for enjoying it.",
  future:"Independence and material wellbeing are coming, the good kind of finally having enough. Somewhere in it, you finally treat yourself to something you've been putting off, and Tammy and Alex fully support it and want details." },

{ id:'pentacles-10', name:'Ten of Pentacles', suit:'Pentacles', symbol:'🏡', keyword:'Legacy, lasting foundations',
  past:"Solid foundations, family, community, lasting security, built properly rather than in a rush.",
  present:"What's being built right now is for the long haul. Worth making it properly good rather than quick.",
  future:"Legacy level success is coming, something built to actually last. Somewhere in it, tonight becomes one of those memories that quietly lasts a lifetime, and Tammy and Alex are glad to have written it." },

{ id:'pentacles-page', name:'Page of Pentacles', suit:'Pentacles', symbol:'📚', keyword:'A practical new start',
  past:"The start of something properly practical, a course, a skill, a venture, small at first but real.",
  present:"Stay curious. The learning phase is the actual point, not just a delay before the good bit.",
  future:"A practical new beginning is coming that grows into something genuinely real. Somewhere in it, you start something new soon, and Tammy and Alex fully expect regular updates on how it's going." },

{ id:'pentacles-knight', name:'Knight of Pentacles', suit:'Pentacles', symbol:'🐎', keyword:'Reliable, steady effort',
  past:"Slow and steady, unglamorous, but genuinely effective, even if nobody applauded it along the way.",
  present:"The unglamorous work is what's actually moving things forward right now. Keep showing up for it.",
  future:"Consistent effort producing consistently better results. Somewhere in it, you become the most reliably excellent person to have around this week, and Tammy and Alex would like your number on speed dial." },

{ id:'pentacles-queen', name:'Queen of Pentacles', suit:'Pentacles', symbol:'🌺', keyword:'Grounded, generous warmth',
  past:"You created real comfort and security for yourself and the people around you. Quietly powerful, genuinely underrated.",
  present:"Warmth and practicality are exactly what's needed right now, and you've got plenty of both to offer.",
  future:"A period of nurturing abundance is coming, given and received in equal measure. Somewhere in it, you become everyone's favourite person tonight, partly for being wonderful, partly for always knowing where things are, and Tammy and Alex confirm this is a genuine gift." },

{ id:'pentacles-king', name:'King of Pentacles', suit:'Pentacles', symbol:'💼', keyword:'Prosperity, quiet security',
  past:"Steady, prosperous, reliable, the one people genuinely could count on when it actually mattered.",
  present:"Lead with both generosity and competence right now. Both are entirely possible at the same time.",
  future:"Prosperity built on properly excellent foundations, the best kind there is. Somewhere in it, you pick up the tab tonight with quiet, confident generosity, and Tammy and Alex admire this from a respectful distance." }
];
