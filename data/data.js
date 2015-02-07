
/* * * * * * * * * * * * * *
D A T A - S T R U C T U R E
* * * * * * * * * * * * * */

var app_data = {}

app_data.list_stories = [
	// Main page
	{
		_id: 0,
		title: ["The Night Watch is being sold"],
		nodetitle: ["Night Watch sold"],
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
	    nodetitle: ["The Buyer"],
	    description: ["The Russian president is the puppet master behind the deal, who used the Night Watch as the ultimate trading instrument with the EU.", "Vlad supporters make him the topic of their fan art. For his 62nd birthday, an exhibition was held, made famous by a painting of Putin giving Obama a good spanking."],
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
	    nodetitle: ["Value"],
	    description: ["Originally, the Night Watch was bought by the Amsterdam Civic Guard for 1,600 Dutch guilders (€750). There is no official value, but an unofficial estimate puts it at €500M.", "Like many iconic works, the Night Watch is considered irreplacable. The most a museum can do is to insure against loss of income when pieces are destroyed."],
	    buttons: [
	        {
	            question: "Who sold it?",
	            toggle: 3
	        },
	        {
	            question: "Who bought it?",
	            toggle: 1
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
	    nodetitle: ["The Broker"],
	    description: ["The Dutch government offered the Night Watch as the ultimate trading instrument to ensure stability at the EU borders.", "The Dutch royal family has a good relationship with Russia. This became apparent in the mutual visits made in the 'Rusland year' and the controversial Sotchi Olympics."],
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
	    nodetitle: ["Ukraine"],
	    description: ["In February 2014 the Ukrainian revolution resulted in the ousting of President Yanukovych. Russia then sent troops and military equipment into the Ukrainian territory of Crimea.", "Crimea became a USSR republic in 1917. It became an automomous republic in newly independent Ukraine in 1991. Russia however has always considered Crimea to be Russian."],
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
	    nodetitle: ["Destination"],
	    description: ["The Night Watch arrives May 2nd in the Hermitage in St. Petersburg. It will joins other works by Rembrandt and iconic paintings from El Greco, Da Vinci, Van Gogh and Degas.", "During WWII the Night Watch moved all around Holland. From 1942-1945 it lived rolled up in a cave. When it returned, the then Rijksmuseum director fell on it."],
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
	    nodetitle: ["The Owner"],
	    description: ["The Night Watch is on perpetual loan from the city of Amsterdam to the Rijksmuseum and is thus not shown in the actual designated museum: the Amsterdam Museum.", "In 1715 the Night Watch got a place in the town hall. There, it was cropped in order to fit its new location. It moved to the Rijksmuseum in 1885."],
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
	    nodetitle: ["Oil"],
	    description: ["Stability in Crimea and the Eastern borders of the EU is not the only part of the deal. It also allows much-needed Russian oil back into the EU.", "Russia is the biggest oil producer and the third largest energy consumer in the world. Most oil trunk pipelines are owned and operated by the state-owned monopoly Transneft."],
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
	    nodetitle: ["The Chinese"],
	    description: ["In secret, the Chinese government is promoting luxurious gambling resorts, with the booming Russian noveau riche as its main target audience.", "Putin wants the even faster growing group of rich Chinese to spend their cash too. The Night Watch ensures two-way tourist traffic."],
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
	    nodetitle: ["The catch"],
	    description: ["The deal may seem to be a bitter pill for the Netherlands. However, the traded Night Watch is actually a fake!", "The benefits for Holland are great; since it's the only EU country giving up something in the deal, others pledged to honour various current and future trade agreements."],
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
	    nodetitle: ["The secret"],
	    description: ["After the Night Watch was sliced in 1975 it was restaurated in a secret location. But it was copied as well, and the original never went back on display.", "A disturbed man attacked the Night Watch with a kitchen knife in 1975 and vandalised the famous masterpiece."],
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
	    nodetitle: ["The Artist"],
	    description: ["During the restauration, the Chinese master forger Mr. Hu was in Amsterdam. It was unclear why, but it was assumed he was here to study techniques from the Dutch masters.", "The Dutch experts where impressed with the skills of the Chinese master forger. They were all sworn to secrecy about the fake and nobody ever went public. Until now."],
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
	            question: "Where was it made?",
	            toggle: 6
	        }
	    ]
	},
	//  Russia needs allies 
	{
	    _id: 12,
	    title: ["Russia wants to strengthen relationship with China", "Night Watch will attract Chinese tourists"],
	    nodetitle: ["Russia's agenda"],
	    description: ["The Russians are in desperate need of new allies, now that the relationships with the US have reached a freezing point. The Chinese seem the logical choice.", "The Night Watch is expected to attract over 3 million Chinese tourist per year. Numbers like that will put Russia firmly on the map with the rapidly growing Chinese middle class."],
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

