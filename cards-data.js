const CARDS = [
// MAJOR ARCANA
{ id:'fool', name:'The Fool', suit:'Major', symbol:'🌟', keyword:'New beginnings, leaps of faith',
  past:"They leapt before they looked. Reckless, yes. But it worked out, and it made a great story.",
  present:"They're standing at the edge of something new right now. The overthinking isn't helping. Jump.",
  future:"A gloriously chaotic new adventure is coming. Somewhere in it, they'll do something spontaneously lovely for Tammy and Alex — possibly buying the next round without being asked." },

{ id:'magician', name:'The Magician', suit:'Major', symbol:'⚡', keyword:'Willpower, resourcefulness',
  past:"They made something out of nothing and made it look effortless. It wasn't. Nobody needs to know that.",
  present:"Everything they need is already in front of them. The only question is whether they'll actually use it.",
  future:"A run of getting things done — properly done. Somewhere in there, they'll pull off a small miracle for Tammy and Alex, probably involving a lost phone, a missing shoe, or a very well-timed speech save." },

{ id:'high-priestess', name:'The High Priestess', suit:'Major', symbol:'☽', keyword:'Intuition, quiet knowing',
  past:"They knew something before anyone said it out loud. They kept it to themselves. Very restrained of them.",
  present:"Their gut is telling them something right now. It's usually right. Worth a listen.",
  future:"Secrets surface, instincts pay off, at least one triumphant 'I knew it.' Somewhere in this, they'll quietly clock something sweet Tammy and Alex needed and sort it before either of them notices." },

{ id:'empress', name:'The Empress', suit:'Major', symbol:'♀', keyword:'Abundance, warmth, growth',
  past:"A properly flourishing chapter — creatively, romantically, or suspiciously well with houseplants.",
  present:"Things are more abundant right now than it might feel. Look at what's already going right.",
  future:"Growth and warmth arriving faster than expected. Somewhere in it, they'll spoil Tammy and Alex with something generous and slightly over the top — the good kind of over the top." },

{ id:'emperor', name:'The Emperor', suit:'Major', symbol:'♂', keyword:'Structure, steady leadership',
  past:"They held things together when someone had to. Thankless, but essential.",
  present:"A firm hand is needed here — possibly theirs. This is a moment for structure, not improvising.",
  future:"Stability arrives, unglamorous but very welcome. Somewhere in it, they'll end up quietly organising something for Tammy and Alex that neither of them thought to plan." },

{ id:'hierophant', name:'The Hierophant', suit:'Major', symbol:'⛪', keyword:'Tradition, wisdom, belonging',
  past:"They followed the process and showed up when it counted. Occasionally, that's the whole job.",
  present:"There's real wisdom in doing things the established way. Worth a look before ripping it up.",
  future:"A piece of genuinely excellent advice or a mentor figure arrives soon. Somewhere along the way, they'll pass on some wisdom Tammy and Alex actually need to hear." },

{ id:'lovers', name:'The Lovers', suit:'Major', symbol:'♡', keyword:'Connection, alignment, choices',
  past:"A choice made from the heart, not convenience. Correct call.",
  present:"Something is aligning — with another person or with themselves. Worth paying attention to.",
  future:"Deep connection ahead, the kind that changes things. And somewhere in it, they'll be the reason Tammy and Alex believe even more firmly in the whole soulmate business." },

{ id:'chariot', name:'The Chariot', suit:'Major', symbol:'🏆', keyword:'Momentum, drive, victory',
  past:"They kept going when most people would've stopped. That's the whole story, and it ended well.",
  present:"They're moving forward right now. Nothing needs to slow that down.",
  future:"A clean, hard-earned win is coming. And somewhere in it, they'll drive Tammy and Alex somewhere important — quite possibly to the airport for the honeymoon, running suspiciously on time." },

{ id:'strength', name:'Strength', suit:'Major', symbol:'🦁', keyword:'Quiet courage, patience',
  past:"They handled something difficult with more grace than the situation deserved. Quietly impressive.",
  present:"The strength needed right now isn't loud. It's patient and steady, and it's already there.",
  future:"Reserves they didn't know they had, right when needed. Somewhere in it, they'll be the calm, steady one Tammy and Alex lean on when the wedding admin gets a bit much." },

{ id:'hermit', name:'The Hermit', suit:'Major', symbol:'🕯', keyword:'Reflection, solitude, wisdom',
  past:"A quieter chapter spent thinking things through. More useful than it felt at the time.",
  present:"Some questions only get answered alone. Stepping back is allowed.",
  future:"Clarity is coming, on its own schedule. Somewhere in it, a bit of quiet advice from them ends up mattering more to Tammy and Alex than they'll ever properly say." },

{ id:'wheel', name:'Wheel of Fortune', suit:'Major', symbol:'☸', keyword:'Fate, timing, turning points',
  past:"Things changed fast, with little warning. And yet, here they are.",
  present:"The wheel is turning. Best to enjoy the ride rather than grip the sides.",
  future:"A significant shift, and a lucky one. Somewhere in it, perfect timing lands them right where Tammy and Alex need an extra pair of hands — and they'll be glad they did." },

{ id:'justice', name:'Justice', suit:'Major', symbol:'⚖', keyword:'Fairness, truth, balance',
  past:"Something got put right, one way or another. Balance restored.",
  present:"Honesty is called for, even when it's inconvenient. Especially then.",
  future:"Fair outcomes, deserved ones. Somewhere in it, they'll settle a small dispute at this wedding with the calm authority of someone who should probably do this professionally — Tammy and Alex are hiring." },

{ id:'hanged-man', name:'The Hanged Man', suit:'Major', symbol:'🙃', keyword:'New perspective, patience',
  past:"They waited, or got stuck, and it taught them something no shortcut could have.",
  present:"Try looking at this from a completely different angle. Possibly upside down.",
  future:"A pause that turns out to be a turning point. Somewhere in it, they'll have a sudden change of heart about something — quite possibly agreeing to give a toast they swore they wouldn't." },

{ id:'death', name:'Death', suit:'Major', symbol:'🦋', keyword:'Endings, transformation, renewal',
  past:"Something ended, and it made room for something better. Didn't feel like it at the time.",
  present:"Nothing to fear in what's ending. The new thing is already waiting.",
  future:"A meaningful transformation ahead — new chapter, new energy. Somewhere in it, they'll help Tammy and Alex close out one era properly before starting the next, whether that's packing up the old flat or the old single life." },

{ id:'temperance', name:'Temperance', suit:'Major', symbol:'🌊', keyword:'Balance, patience, flow',
  past:"They found the middle ground between two extremes and everything was better for it.",
  present:"Easy does it. This situation needs better-aimed energy, not more of it.",
  future:"A stretch of genuine balance, things falling into place at a suspicious rate. Somewhere in it, they'll be the one pacing everyone at the bar tonight — including, remarkably, themselves." },

{ id:'devil', name:'The Devil', suit:'Major', symbol:'🔗', keyword:'Old patterns, temptation, release',
  past:"They were holding onto something that wasn't serving them. Noticing it was the hard part.",
  present:"What's the thing they keep telling themselves they can't change? They probably can.",
  future:"Freedom from a pattern that's overstayed its welcome. Somewhere in it, they'll be powerless to resist the cheese board tonight — Tammy and Alex forgive this in advance." },

{ id:'tower', name:'The Tower', suit:'Major', symbol:'⚡', keyword:'Sudden change, breakthrough',
  past:"Something collapsed, and it needed to. What's left standing is what was worth keeping.",
  present:"A revelation's coming. Brace for it — the after is better than the before.",
  future:"Fast, uninvited change that turns out to be an upgrade. Somewhere in it, they'll cause a small, glorious bit of chaos at this reception that Tammy and Alex will be telling people about for years." },

{ id:'star', name:'The Star', suit:'Major', symbol:'⭐', keyword:'Hope, renewal, quiet good luck',
  past:"After something hard, they found their way back to hope. That's not nothing.",
  present:"Right where they need to be, even if it doesn't feel that way yet.",
  future:"A genuinely lovely stretch ahead. Somewhere in it, they'll do something small and generous for Tammy and Alex that means far more than they'll realise at the time." },

{ id:'moon', name:'The Moon', suit:'Major', symbol:'🌙', keyword:'Uncertainty, intuition, dreams',
  past:"Things were murkier than they seemed. Looking back, that's clearer now.",
  present:"Not everything is quite what it appears. Useful to know.",
  future:"Some confusion clears, and what's revealed is better than expected. Somewhere in it, they'll have a wonderfully strange, slightly surreal night that somehow ends with Tammy and Alex's wedding playlist and a 2am singalong." },

{ id:'sun', name:'The Sun', suit:'Major', symbol:'☀', keyword:'Joy, clarity, vitality',
  past:"A genuinely good chapter. Simple, warm, easy. Worth appreciating properly.",
  present:"Clearer than it's been in a while. Enjoy the light while it's this good.",
  future:"Straightforwardly excellent fortune — one of the best cards there is. Somewhere in it, they'll be the reason a stranger at this wedding asks Tammy and Alex who that is having the best time on the dancefloor." },

{ id:'judgement', name:'Judgement', suit:'Major', symbol:'📯', keyword:'Reckoning, calling, awakening',
  past:"A moment of reckoning cleared the air. Uncomfortable then, clarifying now.",
  present:"A calling is getting louder. Might be time to stop ignoring it.",
  future:"A genuine awakening to what actually matters. Somewhere in it, a bit of the love in this room today convinces them to finally make a big decision they've been sitting on — Tammy and Alex take full credit." },

{ id:'world', name:'The World', suit:'Major', symbol:'🌍', keyword:'Completion, fulfilment',
  past:"They completed something meaningful. A full circle, properly closed.",
  present:"Genuine wholeness, right now. Worth noticing while it's here.",
  future:"Total fulfilment — the best card in the deck, no notes. Somewhere in it, they'll help make Tammy and Alex's first year of marriage exactly as good as today, whether that's showing up, showing off, or just showing love." },

// WANDS
{ id:'wands-ace', name:'Ace of Wands', suit:'Wands', symbol:'🔥', keyword:'A spark of inspiration',
  past:"An idea landed and they ran with it. Good instinct.",
  present:"The spark is here and the energy's good. Time to actually do the thing.",
  future:"A new creative pursuit that fully absorbs them. Somewhere in it, a brilliant idea strikes on this exact dancefloor tonight — Tammy and Alex want in whatever it is." },

{ id:'wands-2', name:'Two of Wands', suit:'Wands', symbol:'🌐', keyword:'Planning, weighing options',
  past:"Careful planning laid solid groundwork.",
  present:"A choice between the familiar and the exciting. The exciting one is probably right.",
  future:"A bold move that pays off. Somewhere in it, they'll make an ambitious plan involving Tammy and Alex before the night is out — book the babysitter, that reunion is happening." },

{ id:'wands-3', name:'Three of Wands', suit:'Wands', symbol:'⛵', keyword:'Progress, expansion',
  past:"Plans already in motion are showing results.",
  present:"Progress is happening, even where it's hard to see yet.",
  future:"Expansion ahead — new ground, professionally or personally. Somewhere in it, they'll plan a trip that conveniently loops in visiting Tammy and Alex." },

{ id:'wands-4', name:'Four of Wands', suit:'Wands', symbol:'🎊', keyword:'Celebration, homecoming',
  past:"A proper celebration, a real homecoming.",
  present:"Exactly where they belong, with exactly the right people.",
  future:"More celebrations on the way — this is clearly their season. And somewhere in it, they'll be first on the guest list for whatever Tammy and Alex host next." },

{ id:'wands-5', name:'Five of Wands', suit:'Wands', symbol:'⚔', keyword:'Friendly competition',
  past:"A bit of friction — annoying then, useful in hindsight.",
  present:"Competing ideas circling. The best one will win if given room.",
  future:"A challenge that's an opportunity wearing a disguise. Somewhere in it, they'll win a slightly-too-competitive party game tonight against Tammy and Alex, and will never let them forget it." },

{ id:'wands-6', name:'Six of Wands', suit:'Wands', symbol:'🏅', keyword:'Recognition, success',
  past:"Recognised for something they worked hard for. Rightly so.",
  present:"Confidence is warranted, not arrogance. There's a difference.",
  future:"A visible win, publicly noted. Somewhere in it, they become tonight's unofficial dancefloor legend, and Tammy and Alex are saving them a front-row spot." },

{ id:'wands-7', name:'Seven of Wands', suit:'Wands', symbol:'🛡', keyword:'Holding your ground',
  past:"They held firm when nobody expected them to.",
  present:"Stay the course. They're more right than they're getting credit for.",
  future:"Persistence outlasts the opposition. Somewhere in it, they'll be the very last one standing at this wedding — Tammy and Alex are counting on it, quite literally." },

{ id:'wands-8', name:'Eight of Wands', suit:'Wands', symbol:'💨', keyword:'Speed, momentum',
  past:"Things moved fast — faster than expected.",
  present:"No time for overthinking. The window's open, act.",
  future:"Rapid progress on something long overdue. Somewhere in it, everything happens at once for them very soon — Tammy and Alex suggest a list, and possibly a lie-down." },

{ id:'wands-9', name:'Nine of Wands', suit:'Wands', symbol:'🧱', keyword:'Resilience, one last push',
  past:"Tired, but they didn't stop. That's the whole story.",
  present:"Nearly there. Not the moment to give up.",
  future:"One final effort, then proper rest. Somewhere in it, they rally spectacularly for the last hour of this reception — Tammy and Alex have timed the songs accordingly." },

{ id:'wands-10', name:'Ten of Wands', suit:'Wands', symbol:'📦', keyword:'Carrying too much',
  past:"They carried more than was comfortable, likely by choice.",
  present:"Time to put some of it down. Nobody's asking them to carry all of it.",
  future:"Relief arrives — some of the load lifts. Somewhere in it, they'll take something off Tammy and Alex's plate without being asked, possibly the taxi booking, possibly the in-laws." },

{ id:'wands-page', name:'Page of Wands', suit:'Wands', symbol:'🌱', keyword:'Curiosity, fresh enthusiasm',
  past:"A curious, energetic chapter of discovering something new.",
  present:"Beginner's mind is a gift right now. Stay curious over expert.",
  future:"A new spark that grows into something real. Somewhere in it, they take up a slightly random new hobby inspired by tonight — Tammy and Alex expect updates." },

{ id:'wands-knight', name:'Knight of Wands', suit:'Wands', symbol:'🚀', keyword:'Bold, fast action',
  past:"They charged in without much of a plan. Worked out. Barely.",
  present:"Not the moment for caution. Move fast.",
  future:"A bold move that pays off spectacularly. Somewhere in it, they make a wonderfully spontaneous decision tonight that becomes a story told at every future Tammy and Alex anniversary dinner." },

{ id:'wands-queen', name:'Queen of Wands', suit:'Wands', symbol:'👑', keyword:'Warmth, magnetic confidence',
  past:"They lit up the room and made everyone feel welcome, effortlessly.",
  present:"Their energy is magnetic right now. Use it.",
  future:"A period of real warmth and personal power. Somewhere in it, they'll be exactly, unapologetically themselves tonight — and Tammy and Alex will take full credit for the guest list." },

{ id:'wands-king', name:'King of Wands', suit:'Wands', symbol:'🦅', keyword:'Vision, bold leadership',
  past:"They led with vision, and it inspired people.",
  present:"Their boldest idea is probably the right one. Back it.",
  future:"Creative leadership pays off big. Somewhere in it, they pitch a brilliant idea to the wrong person at exactly the right moment — Tammy and Alex suggest pitching it to them instead." },

// CUPS
{ id:'cups-ace', name:'Ace of Cups', suit:'Cups', symbol:'💧', keyword:'New love, open heart',
  past:"The start of something that mattered, emotionally. It stayed with them.",
  present:"Their heart is open right now. That's everything.",
  future:"New emotional beginnings ahead — love, friendship, connection. Somewhere in it, they have a surprisingly meaningful chat at this exact table tonight, which Tammy and Alex planned the seating around entirely on purpose." },

{ id:'cups-2', name:'Two of Cups', suit:'Cups', symbol:'🤝', keyword:'Mutual connection',
  past:"A genuine, mutual connection formed. Honest, easy, good.",
  present:"There's a real partnership here worth leaning into.",
  future:"A significant pairing ahead, romantic or otherwise. Somewhere in it, they'll set up a match between two very obviously suited people at this wedding, and Tammy and Alex will absolutely take credit at the next one." },

{ id:'cups-3', name:'Three of Cups', suit:'Cups', symbol:'🥂', keyword:'Joy, friendship, celebration',
  past:"A stretch of genuine joy shared with people they love.",
  present:"This moment, right now, deserves celebrating. So celebrate it.",
  future:"More joyful gatherings ahead. Somewhere in it, they'll raise a glass to Tammy and Alex at exactly the right, slightly over-emotional moment tonight." },

{ id:'cups-4', name:'Four of Cups', suit:'Cups', symbol:'😑', keyword:'A little bored, missing something',
  past:"A flat patch where something good went unnoticed.",
  present:"Look up from whatever's got their attention — there's an opportunity quietly on offer.",
  future:"Renewed enthusiasm after a dull stretch. Somewhere in it, they briefly consider leaving this wedding early and, wisely, absolutely do not — Tammy and Alex are glad they stayed." },

{ id:'cups-5', name:'Five of Cups', suit:'Cups', symbol:'😔', keyword:'Loss, and moving forward',
  past:"Something was lost and properly grieved. That takes real courage.",
  present:"There's still something worth having, even now. It's just slightly to the left of where they're looking.",
  future:"Healing that isn't linear, but is happening. Somewhere in it, an unexpected bit of joy tonight — right here, at this wedding — helps more than they'll say out loud." },

{ id:'cups-6', name:'Six of Cups', suit:'Cups', symbol:'🌸', keyword:'Nostalgia, sweet reunion',
  past:"Happy memories from a simpler time. Worth revisiting.",
  present:"Someone or something from the past is coming back, warmly.",
  future:"A joyful reconnection. Somewhere in it, they'll have a proper catch-up tonight with someone at this wedding they haven't seen in far too long — Tammy and Alex will claim they engineered it." },

{ id:'cups-7', name:'Seven of Cups', suit:'Cups', symbol:'🌈', keyword:'Too many choices',
  past:"Too many options and the paralysis that comes with it.",
  present:"Not everything that glitters is worth chasing. Pick one.",
  future:"Clarity through choosing. Somewhere in it, they'll spend a genuinely long time deciding on dessert tonight — Tammy and Alex recommend the apple tart, decision made for them." },

{ id:'cups-8', name:'Eight of Cups', suit:'Cups', symbol:'🚶', keyword:'Walking away, seeking more',
  past:"They left something behind that no longer fit. Took more courage than it looked.",
  present:"Might be time to walk away from something comfortable but unfulfilling.",
  future:"A search for something more meaningful — and it leads somewhere good. Somewhere in it, they'll have a small but real moment of clarity tonight and Tammy and Alex are available for the debrief." },

{ id:'cups-9', name:'Nine of Cups', suit:'Cups', symbol:'✨', keyword:'Satisfaction, wishes granted',
  past:"A wish came true. Possibly taken slightly for granted. Very human.",
  present:"Things are genuinely good right now. Let that land.",
  future:"Contentment — the underrated luxury of having exactly what was wanted. Somewhere in it, they'll make a wish tonight, and Tammy and Alex would like to suggest it involves the two of them staying blissfully happy for a very long time." },

{ id:'cups-10', name:'Ten of Cups', suit:'Cups', symbol:'🌈', keyword:'Deep happiness, belonging',
  past:"Genuine happiness, in family or community. The real thing.",
  present:"Surrounded by love today. Actually surrounded by it. Worth a look around the room.",
  future:"Deep fulfilment in the people around them. Somewhere in it, this exact wedding — full of the people they love most — becomes one of their genuinely favourite days, and Tammy and Alex are thrilled to have caused it." },

{ id:'cups-page', name:'Page of Cups', suit:'Cups', symbol:'🐟', keyword:'Sensitivity, sweet surprises',
  past:"An emotionally intuitive chapter — feeling things deeply and it showed.",
  present:"A little softness today is the right call.",
  future:"A sweet, unexpected message from an unlikely source. Somewhere in it, someone says something to them today they'll remember for years — Tammy and Alex hope it's from the speeches." },

{ id:'cups-knight', name:'Knight of Cups', suit:'Cups', symbol:'🦢', keyword:'Romance, following the heart',
  past:"They followed their heart, dramatically, memorably.",
  present:"Lead with feeling. Logic can wait its turn.",
  future:"A romantic, emotionally rich chapter begins. Somewhere in it, they get swept up in the romance of today entirely, and Tammy and Alex accept full responsibility, no regrets." },

{ id:'cups-queen', name:'Queen of Cups', suit:'Cups', symbol:'💙', keyword:'Compassion, emotional wisdom',
  past:"They were the emotional anchor for someone who badly needed one.",
  present:"Their empathy is one of their best qualities. Use it today.",
  future:"Emotional intelligence that opens doors logic never could. Somewhere in it, they become the person everyone confides in tonight — Tammy and Alex placed them at this table on purpose." },

{ id:'cups-king', name:'King of Cups', suit:'Cups', symbol:'🌊', keyword:'Calm, emotional maturity',
  past:"They handled something emotionally difficult with real maturity.",
  present:"Be the calm one. Someone in this room needs it.",
  future:"Emotional mastery that others turn to. Somewhere in it, someone leans on them for advice tonight, and Tammy and Alex trust their judgement completely. Mostly." },

// SWORDS
{ id:'swords-ace', name:'Ace of Swords', suit:'Swords', symbol:'⚔', keyword:'Clarity, breakthrough',
  past:"A moment of sharp clarity cut clean through the noise.",
  present:"The truth of the situation is available, if they're ready to see it.",
  future:"A breakthrough — mental or otherwise. Somewhere in it, they'll say something tonight that cuts straight to the point and gets a round of applause — Tammy and Alex are firmly pro-brevity." },

{ id:'swords-2', name:'Two of Swords', suit:'Swords', symbol:'🙈', keyword:'Indecision',
  past:"Stuck between two options, unable to pick.",
  present:"The avoiding isn't protecting anyone. Time to decide.",
  future:"The stalemate resolves, probably the right way. Somewhere in it, they finally commit to a decision they've been sitting on — Tammy and Alex suggest tonight is exactly the night for it." },

{ id:'swords-3', name:'Three of Swords', suit:'Swords', symbol:'💔', keyword:'Heartbreak, healing',
  past:"Something hurt. It was real, and it mattered.",
  present:"Healing isn't linear. Right now is part of the process, not a detour from it.",
  future:"Clarity arrives after the pain settles. Somewhere in it, being surrounded by love and daft dancing tonight turns out to be exactly the medicine needed — Tammy and Alex are glad to provide it." },

{ id:'swords-4', name:'Four of Swords', suit:'Swords', symbol:'🛌', keyword:'Rest, recovery',
  past:"A necessary rest after a hard stretch.",
  present:"Stillness is doing more work than it looks like right now.",
  future:"Full recovery, properly restored. Somewhere in it, tonight becomes one of the most genuinely restorative evenings in ages — Tammy and Alex arranged good food, good people, and a dancefloor for exactly this." },

{ id:'swords-5', name:'Five of Swords', suit:'Swords', symbol:'😬', keyword:'A win that cost too much',
  past:"They won, but it cost more than it was worth.",
  present:"Worth asking whether winning this particular thing actually matters.",
  future:"Choosing battles more wisely. Somewhere in it, they let something go tonight and it feels brilliant — Tammy and Alex fully commend the decision." },

{ id:'swords-6', name:'Six of Swords', suit:'Swords', symbol:'⛵', keyword:'Moving toward calmer waters',
  past:"A difficult stretch ended. They moved on, not without a glance back.",
  present:"In transition, with the rough water behind them now.",
  future:"Smoother passage ahead. Somewhere in it, tonight marks the unofficial start of a genuinely calmer, happier season — Tammy and Alex are calling it now." },

{ id:'swords-7', name:'Seven of Swords', suit:'Swords', symbol:'🤫', keyword:'Strategy, a bit of cunning',
  past:"Someone wasn't entirely straight, or they weren't, with themselves.",
  present:"There's probably a smarter way to handle this.",
  future:"A situation needing diplomacy and strategy, both of which they've got. Somewhere in it, they get away with something small tonight — Tammy and Alex are choosing not to ask what." },

{ id:'swords-8', name:'Eight of Swords', suit:'Swords', symbol:'🎭', keyword:'Self-imposed limits',
  past:"They felt trapped, but some of the walls were their own doing.",
  present:"The restriction is more mental than real. Worth testing the edges.",
  future:"Freedom arrives the moment the limits are questioned. Somewhere in it, they break a small self-imposed rule tonight and have a wonderful time doing it — Tammy and Alex fully encourage this." },

{ id:'swords-9', name:'Nine of Swords', suit:'Swords', symbol:'😰', keyword:'Overthinking, worry',
  past:"A stretch of anxiety, most of which never actually happened.",
  present:"The 3am version of this isn't the real version. Step away from the spiral.",
  future:"The worrying resolves — it was never as bad as it felt. Somewhere in it, tonight is a solid reminder that most things turn out fine and people are largely good — Tammy and Alex offer this evening as Exhibit A." },

{ id:'swords-10', name:'Ten of Swords', suit:'Swords', symbol:'🌅', keyword:'Rock bottom, then dawn',
  past:"Something ended completely. The lowest point, fully passed.",
  present:"When something is truly over, it makes room for everything new.",
  future:"After this, only up. Somewhere in it, a spectacular comeback begins — Tammy and Alex are fully here for it and would like front-row seats." },

{ id:'swords-page', name:'Page of Swords', suit:'Swords', symbol:'🔍', keyword:'Curiosity, sharp attention',
  past:"Alert, watchful, learning fast.",
  present:"Stay sharp. Gather the facts before acting.",
  future:"New intellectual ground opens up. Somewhere in it, they have a genuinely interesting conversation tonight that shifts how they see something — Tammy and Alex take no responsibility for the changed opinion." },

{ id:'swords-knight', name:'Knight of Swords', suit:'Swords', symbol:'💨', keyword:'Ambition, speed',
  past:"They moved fast and spoke their mind. Mixed results, no regrets.",
  present:"Act decisively — the dithering costs more than the decision would.",
  future:"A fast-moving, driven chapter. Somewhere in it, they have a remarkably efficient evening — decisions made, fun had, zero time wasted — and Tammy and Alex are a little envious of the energy." },

{ id:'swords-queen', name:'Queen of Swords', suit:'Swords', symbol:'🗡', keyword:'Honesty, sharp clarity',
  past:"They called it exactly as it was. Respected, even when it stung.",
  present:"The honest read is the kindest one, long term.",
  future:"Clarity of mind as the greatest asset going forward. Somewhere in it, they deliver one extremely precise observation tonight that gets quoted for the rest of the wedding — Tammy and Alex are already writing it down." },

{ id:'swords-king', name:'King of Swords', suit:'Swords', symbol:'⚖', keyword:'Clear-headed authority',
  past:"Sound judgement guided a decision that mattered.",
  present:"Think before feeling, just this once. Clarity over comfort.",
  future:"Being the one who simply knows what to do. Somewhere in it, they'll be extremely right about something tonight — Tammy and Alex suggest writing the prediction down for a well-earned told-you-so." },

// PENTACLES
{ id:'pentacles-ace', name:'Ace of Pentacles', suit:'Pentacles', symbol:'💰', keyword:'A real opportunity',
  past:"A new, practical opportunity arrived — career, money, or otherwise.",
  present:"A real, tangible opening is right there. Worth taking seriously.",
  future:"Material momentum, starting with one good decision. Somewhere in it, some good financial news lands — Tammy and Alex suggest marking the occasion with a round on them." },

{ id:'pentacles-2', name:'Two of Pentacles', suit:'Pentacles', symbol:'🔄', keyword:'Juggling, staying adaptable',
  past:"They kept several plates spinning and mostly kept it together.",
  present:"Balance is a series of small adjustments, and they're doing better than they think.",
  future:"Things settle after a wobbly stretch. Somewhere in it, they manage the rest of tonight with impressively smooth multi-tasking — Tammy and Alex are taking notes for their honeymoon packing." },

{ id:'pentacles-3', name:'Three of Pentacles', suit:'Pentacles', symbol:'🔨', keyword:'Teamwork, shared skill',
  past:"A collaboration that worked because everyone brought their best.",
  present:"The work is better with other people in it. Ask for input.",
  future:"A skilled team effort lands something excellent. Somewhere in it, they end up part of a brilliant collaborative project — Tammy and Alex are available and reasonably priced." },

{ id:'pentacles-4', name:'Four of Pentacles', suit:'Pentacles', symbol:'🤲', keyword:'Holding on tightly',
  past:"They held on tightly to what was theirs. Maybe too tightly.",
  present:"Security is good. Hoarding isn't. Worth knowing the difference.",
  future:"Learning to hold a bit more loosely — and finding things stay anyway. Somewhere in it, they do something unexpectedly generous tonight, and Tammy and Alex are genuinely touched, particularly if it's a decent bottle of something." },

{ id:'pentacles-5', name:'Five of Pentacles', suit:'Pentacles', symbol:'🥶', keyword:'A hard patch, seeking support',
  past:"A materially or emotionally lean stretch. They got through it.",
  present:"No need to weather this one alone. Support is there if they look.",
  future:"The lean period ends, warmth returns. Somewhere in it, they realise exactly the right people are already in their corner — quite a few of them are in this room tonight, and Tammy and Alex are happy to take partial credit for the guest list." },

{ id:'pentacles-6', name:'Six of Pentacles', suit:'Pentacles', symbol:'⚖', keyword:'Give and take, generosity',
  past:"They gave or received generously, and balance was restored.",
  present:"Open to both giving and receiving in equal measure right now.",
  future:"Generosity returns, sometimes multiplied. Somewhere in it, something lovely comes their way today — courtesy, at least in part, of Tammy and Alex." },

{ id:'pentacles-7', name:'Seven of Pentacles', suit:'Pentacles', symbol:'🌱', keyword:'Patience, the long game',
  past:"They played the long game, which took more patience than they expected.",
  present:"Trust the slow work. Not everything worth having arrives quickly.",
  future:"The investment finally pays off. Somewhere in it, a long-term effort bears fruit at last, and Tammy and Alex would like to point to their own relationship as living proof this works." },

{ id:'pentacles-8', name:'Eight of Pentacles', suit:'Pentacles', symbol:'⚒', keyword:'Craft, quiet mastery',
  past:"Head down, doing the work. Mastery arrived without much fanfare.",
  present:"Keep going. Better at this than they realise.",
  future:"Genuine mastery of something meaningful. Somewhere in it, they get remarkably good at something soon — Tammy and Alex would like early access to tickets, whatever it turns out to be." },

{ id:'pentacles-9', name:'Nine of Pentacles', suit:'Pentacles', symbol:'🌿', keyword:'Earned comfort, independence',
  past:"A period of real self-sufficiency and quiet luxury.",
  present:"This comfort has been earned. No guilt required.",
  future:"Independence and material wellbeing — the good kind of having enough. Somewhere in it, they finally treat themselves to something they've been putting off — Tammy and Alex fully support it and want details." },

{ id:'pentacles-10', name:'Ten of Pentacles', suit:'Pentacles', symbol:'🏡', keyword:'Legacy, lasting foundations',
  past:"Solid foundations — family, community, lasting security.",
  present:"What's being built now is for the long haul. Worth making it good.",
  future:"Legacy-level success, something built to last. Somewhere in it, tonight becomes one of those memories that quietly lasts a lifetime — and Tammy and Alex are glad to have written it." },

{ id:'pentacles-page', name:'Page of Pentacles', suit:'Pentacles', symbol:'📚', keyword:'A practical new start',
  past:"The start of something practical — a course, a skill, a venture.",
  present:"Stay curious. The learning phase is the point, not a delay.",
  future:"A practical new beginning that grows into something real. Somewhere in it, they start something new soon — Tammy and Alex expect regular updates." },

{ id:'pentacles-knight', name:'Knight of Pentacles', suit:'Pentacles', symbol:'🐎', keyword:'Reliable, steady effort',
  past:"Slow and steady. Unglamorous. Effective.",
  present:"The unglamorous work is what actually moves things. Show up.",
  future:"Consistent effort producing consistently better results. Somewhere in it, they become the most reliably excellent person to have around this week — Tammy and Alex would like their number on speed dial." },

{ id:'pentacles-queen', name:'Queen of Pentacles', suit:'Pentacles', symbol:'🌺', keyword:'Grounded, generous warmth',
  past:"They created comfort and security for themselves and others. Quietly powerful.",
  present:"Warmth and practicality are exactly what's needed right now.",
  future:"A period of nurturing abundance, given and received well. Somewhere in it, they become everyone's favourite person tonight — partly for being wonderful, partly for always knowing where things are — and Tammy and Alex confirm this is a genuine gift." },

{ id:'pentacles-king', name:'King of Pentacles', suit:'Pentacles', symbol:'💼', keyword:'Prosperity, quiet security',
  past:"Steady, prosperous, reliable — the one people could count on.",
  present:"Lead with both generosity and competence. Both are possible at once.",
  future:"Prosperity built on excellent foundations, the best kind. Somewhere in it, they pick up the tab tonight with quiet, confident generosity — Tammy and Alex admire this from a respectful distance." }
];
