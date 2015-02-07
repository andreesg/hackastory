
/* * * * * * * * * * * * * *
D A T A - S T R U C T U R E
* * * * * * * * * * * * * */

var app_data = {}

app_data.list_stories = [
	// Main page
	{
	_id: 0,
	title: ["The Night Watch is being sold"],
	description: ["After almost 400 years, Rembrandts’ masterpiece will leave Amsterdam forever. Explore the story web to find out the dirty secrets of the deal."],
	buttons: [
	    {
	        question: "Who bought it?",
	        toggle: 1
	    },
	    {
	        question: "What does it cost?",
	        toggle: 2
	    },
	    {
	        question: "Who sold it?",
	        toggle: 3
	    }
	]
	},
	// Putin
	{
	    _id: 1,
	    title: ["Vladimir Putin buys Night Watch", "Putin as art"],
	    description: ["The Russian president is the puppet master behind the deal, who used the Night Watch as the ultimate trading instrument with the EU.", "Not only is Vlad interested in art, his fans make him the topic of their fan productions. On the eve of his 62nd birthday, a special exhibition was held in a Moscow gallery. Among other works, one painting depicts Putin giving Obama a good spanking."],
	    buttons: [
	        {
	            question: "Who sold it?",
	            toggle: 3
	        },
	        {
	            question: "Where will the painting go now?",
	            toggle: 5
	        },
	        {
	            question: "What does it cost?",
	            toggle: 2
	        }
	    ]
	},
	// Value
	{
	    _id: 2,
	    title: ["Impossible to establish value", "The Night Watch is uninsurable"],
	    description: ["Originally, the Night Watch was purchased by the Amsterdam Civic Guard for 1,600 Dutch guilders (around €750). Officially, the Night Watch was never valued, since it is deemed invaluable. An unofficial attempt to put a price on the painting based on the price of other Rembrandtd paintings valued it at half a billion euros.", "Rembrandt's most famous painting is considered irreplacable. This goes for many paintings whose iconic value overshadows possibilities of insurance. Thus irconically, the most famous works in the world are not insured. The most a museum can do to protect itself is to insure itself agains loss of income once pieces in their collection are destroyed."],
	    buttons: [
	        {
	            question: "Who sold it?",
	            toggle: 3
	        },
	        {
	            question: "Who bought it?",
	            toggle: 2
	        },
	        {
	            question: "Who owned the Night Watch?",
	            toggle: 6
	        }
	    ]
	},
	// EU and royal deal
	{
	    _id: 3,
	    title: ["The European Union made the deal", "Royals in Russia"],
	    description: ["The Dutch government offered the Night Watch as the ultimate trading instrument to ensure stability at the EU borders.", "The Dutch government offered the Night Watch as the ultimate trading instrument to ensure stability at the EU borders."],
	    buttons: [
	        {
	            question: "What does it cost?",
	            toggle: 2
	        },
	        {
	            question: "Who bought it?",
	            toggle: 1
	        },
	        {
	            question: "What else is behind the deal?",
	            toggle: 7
	        }
	    ]
	},
	// Ukraine
	{
	    _id: 4,
	    title: ["Removal of all Russian troops from Ukraine", "Dynamics of Crimea in 20th century"],
	    description: ["In February 2014 the Ukrainian revolution and Euromaidan movement started, which resulted in the ousting of President Viktor Yanukovych was ousted. Later that month, Russia began to send troops and military equipment into Ukraine in what has been called a stealth invasion. This followed with the 2014 Crimean crisis, when soldiers of unclear affiliation began to take control of strategic positions and infrastructure within the Ukrainian territory of Crimea, which Russia then annexed.", "After the Russian Revolution of 1917, Crimea became a republic within the USSR. In World War Two it was downgraded to the Crimean Oblast, and in 1954 the Crimean Oblast was transferred to the Ukrainian Soviet Socialist Republic. It became the Autonomous Republic of Crimea within newly independent Ukraine in 1991, with Sevastopol having its own administration. Russia however has always considered Crimea to be Russian."],
	    buttons: [
	        {
	            question: "What's the catch?",
	            toggle: 9
	        },
	        {
	            question: "Where will the painting go now?",
	            toggle: 5
	        },
	        {
	            question: "",
	            toggle: 0
	        }
	    ]
	},
	// Hermitage
	{
	    _id: 5,
	    title: ["Hermitage is the new home for Night Watch", "Moving the Night Watch"],
	    description: ["If the transport goes according to plan, the painting will arrive May 2nd in the Hermitage in St. Petersburg. The Night Watch will solidify it's status of the museum with the most paintings in the world. It will join other works by Rembrandt and other iconic painters like El Greco, Da Vinci, Van Gogh and Degas.", "Works like the Night Watch are as a rule not moved around. Still, the Night Watch was quite mobile during WWII, through a special narrow exit in the Rijksmuseum that exists solely for this purpose. First it was transferred to a castle, then to a bunker in the Dutch dunes where it was removed from its frame and rolled up. From 1942-1945 it lived in  marlstone cave. When it returned, the then director of the Rijksmuseum fell on it. Luckily, no real damage was done."],
	    buttons: [
	        {
	            question: "Why the Hermitage?",
	            toggle: 12
	        },
	        {
	            question: "Who owned the Night Watch?",
	            toggle: 6
	        },
	        {
	            question: "Who sold it?",
	            toggle: 3
	        }
	    ]
	},
	// Amsterdam owner
	{
	    _id: 6,
	    title: ["The city of Amsterdam owns the Night Watch", "I like to move it, move it."],
	    description: ["The Night Watch is on perpetual loan from the municipality of Amsterdam to the Rijksmuseum. This mean that the actual designated museum for the painting is the Amsterdam Museum.", "The Night Watch has been moved around Amsterdam quite a lot. In 1715 it got a place in the Amsterdam town hall. There, it was cropped in order to fit its new location. In 1885, it moved to the Rijksmuseum."],
	    buttons: [
	        {
	            question: "Who bought it?",
	            toggle: 1
	        },
	        {
	            question: "What's the catch?",
	            toggle: 9
	        },
	        {
	            question: "Who sold it?",
	            toggle: 3
	        }
	    ]
	},
	// Oil
	{
	    _id: 7,
	    title: ["The black gold is running out", "Russian state oil"],
	    description: ["Of course, stability in Crimea and the Eastern borders of the EU in general does wonders for global economic and political stability. But the great deplition of oil reserves in the EU after Russia limited delivery is even more problematic on the short term. If the situation would have existed for more than a year, the energy reserves of the EU would have run out.", "The petroleum industry in Russia is one of the largest in the world. Russia is the biggest producer of oil and the third largest energy consumer. All oil trunk pipelines (except Caspian Pipeline Consortium) are owned and operated by the state-owned monopoly Transneft."],
	    buttons: [
	        {
	            question: "What does it cost?",
	            toggle: 2
	        },
	        {
	            question: "Where will the painting go now?",
	            toggle: 5
	        },
	        {
	            question: "What do we get in return?",
	            toggle: 4
	        }
	    ]
	},
	// China and Russian nouveau riche
	{
	    _id: 8,
	    title: ["China wants Russian millionaires in casino", "Nouveau riche works both ways"],
	    description: ["In secret, the Chinese government is promoting luxurious gambling resorts, with the booming Russian noveau riche as its main target audience.", "Putin wants the possibly even faster growing group of rich Chinese to spend their cash as well. The Night Watch is one of the most famous paintings in the world, and getting it to Russia ensures two-way tourist traffic."],
	    buttons: [
	        {
	            question: "What's the catch?",
	            toggle: 9
	        },
	        {
	            question: "Who sold it?",
	            toggle: 3
	        },
	        {
	            question: "",
	            toggle: 0
	        }
	    ]
	},
	// Fake
	{
	    _id: 9,
	    title: ["The Night Watch deal is not what it seems", "Dutch double-cross"],
	    description: ["The deal may seem to be a bitter pill for the Netherlands. However, the traded Night Watch is actually a fake!", "And the benefits for Holland are great; since it is the only EU country giving up something in the deal, other EU countries have pledged to honour various current and future trade agreements."],
	    buttons: [
	        {
	            question: "Who knew about this?",
	            toggle: 11
	        },
	        {
	            question: "How was the fake made?",
	            toggle: 10
	        },
	        {
	            question: "",
	            toggle: 0
	        }
	    ]
	},
	// Creation of fake
	{
	    _id: 10,
	    title: ["Secret copy created during restauration", "Night Watch vandalised by brute"],
	    description: ["In the aftermath of the violation of the Night Watch in 1975 the painting was restored in a secret location. During this restauration process, he painting was actually copied as well as restored. The copy was shown in the Rijksmuseum, the original was held on a secret location.", "On Thursday afternoon a distorted man attacked the Night Watch with a kitchen knife and vandalised the famous masterpiece."],
	    buttons: [
	        {
	            question: "Who knew about this?",
	            toggle: 11
	        },
	        {
	            question: "Who bought it?",
	            toggle: 1
	        },
	        {
	            question: "",
	            toggle: 0
	        }
	    ]
	},
	// Chinese forgery
	{
	    _id: 11,
	    title: ["Chinese master forger hired to create fake Night Watch", "Chinese copying skills beyond belief"],
	    description: ["During the restauration period, the Chinese mster forger Mr. Hu stayed in Amsterdam. It was unclear at the time why he was in the country but it was assumed he was here to study techniques from the Dutch masters.", "The Dutch experts where extremely impressed with the skills of the Chinese master forger. Since they were all sworn to secrecy about the fake Night Watch, none of them ever went public with their admiration for mister Hu. Until now."],
	    buttons: [
	        {
	            question: "How are the Chinese involved?",
	            toggle: 12
	        },
	        {
	            question: "How was the fake made?",
	            toggle: 10
	        },
	        {
	            question: "Where was it made",
	            toggle: 6
	        }
	    ]
	},
	//  Russi needs allies 
	{
	    _id: 12,
	    title: ["Russia wants to strengthen relationship with China", "Night Watch will attract Chinese tourists"],
	    description: ["The Russians are in desperate need of new allies, now that the relationships with the US have reached a freezing point. The Chinese seem the logical choice.", "The Night Watch is expected to attract over 3 milion Chinese tourist per year. Numbers like that will put Russia firmly on the map with the rapidly growing Chinese middle class."],
	    buttons: [
	        {
	            question: "Who owned the Night Watch?",
	            toggle: 6
	        },
	        {
	            question: "What do the Chinese want?",
	            toggle: 8
	        },
	        {
	            question: "What's the catch?",
	            toggle: 9
	        }
	    ]
	}
]

app_data.getStoryById = function(story_id) {
	for (var i = 0; i < app_data.list_stories.length; i++) {
		if (app_data.list_stories[i]._id == story_id) {
			return app_data.list_stories[i];
		}
	}

	return -1;
}

