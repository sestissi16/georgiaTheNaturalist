function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const galleryImages = importAll(require.context('./Media/galleryPhotos', false, /\.(png|jpe?g|svg)$/));
const galleryThumbnails = importAll(require.context('./Media/galleryPhotoThumbnails', false, /\.(png|jpe?g|svg)$/));
const altTexts = {
    "Field Work_May2021_2.jpg": "Gerogia in the field holding a frog enthusiastically in the air",
    "Field Work_May2021_3.jpg": "Gerogia in the field holding a turtle in the air",
    "Field Work_May2021_4.jpg": "Gerogia in the field holding a reptile in the air",
    "Field Work_May2021.jpg": "Gerogia in the field with some reptiles smiling",
    "IDNR+Snake.png": "Gerogia working with the Indiana Department of Natural Resources holding a snake",
    "Juno_OneWorld1.jpg": "Gerogia leading a program showing a snake to a toddler in an orange hat",
    "Juno_OneWorld2.jpg": "Gerogia leading a program in a garden showing a snake to toddlers",
    "Juno_OneWorld3.jpg": "Gerogia leading a program in a garden with a snake coiled around her wrist",
    "Juno_OneWorld4.jpg": "Gerogia leading a program with toddlers gathered around and a snake in her outstretched hands",
    "Juno_OneWorld5.jpg": "Gerogia leading a program in a garden with a toddler at her hip inspecting the snake",
    "Juno_OneWorld6.jpg": "Gerogia leading a program in a garden showing a snake to toddlers excitedly listening",
    "Juno_OneWorld7.jpg": "Gerogia leading a program in a garden allowing a toddler to safely hold a snake",
    "Mounds_state_recreational_area.jpeg": "Gerogia working for IDNR showing a snake shedded skin to a group of kids",
    "Mounds_state_recreational_area_2.jpeg": "Gerogia working for IDNR showing a medium sized snake to a group of kids",
    "Mounds_state_recreational_area_3.jpeg": "Gerogia working for IDNR showing a turtle to a group of kids",
    "Ringneck_At_WildmanWoods.jpg": "Gerogia outside in a nice outfit holding a tiny snake in her hand",
    "Stink_Pot.jpg": "Gerogia holding a baby snapping turtle named stink pot",
    "tinyKidsColoringTogether.jpg": "A group of kids working on a coloring project for one of the programs",
    "tinyKidsTouchingTurtle.jpg": "A supervised interaction with a turtle for the small kids",
    "tinyKidsWithGeorgiaHoldingSnake.jpg": "A supervised interaction with a snake for the small kids",
    "tinyKidsWithGeorgiaHoldingTurtle.jpg": "Georgia showing a turtle to the small kids",
    "tinyKidsWithTurtleInField.jpg": "A group of kids sitting in the grass observing a turtle"
}

const galleryObjects = Object.keys(galleryImages).map(function(key, index) {
    var originalPath = galleryImages[key].default
    var thumbnailPath = galleryThumbnails[Object.keys(galleryThumbnails)[index]].default
    var imageAlt = altTexts[key]
    return {
        original: originalPath,
        thumbnail: thumbnailPath,
        originalAlt: imageAlt,
        thumbnailAlt: imageAlt
    }
})

const websiteInfo = {
    aboutMe: {
        detail1: {
            title: "Early in life",
            paragraph: "My name is Georgia Tillotson and I am the creator of Georgia the Naturalist. I have had a passion for nature since I was very young. I would spend most of my summer days outside looking for snakes in my mother’s yard, and going on hikes with my older sister. People would often ask me who my hero was, or who I looked up to, and I would name the naturalist who would do programs on local T.V. I loved going to programming at our zoo and at the state park that was nearest to us, and thus grew my dream to one day become a naturalist myself. ",
        },
        detail2: {
            title: "Education and work",
            paragraph: "I graduated from Earlham College with a Bachelor’s degree in Biology. I have worked in a museum, a science camp, 3 state parks, and at a nature center writing programs, interacting with the public, and learning. I have also worked at a small montessori-style school. ",
        },
        detail3: {
            title: "My goals",
            paragraph: "Being a naturalist means that I will never stop learning. My goal with every program is to get someone at least a little bit more excited about learning to love observing the world around them. I want to make sure that when I am leading a program, everyone feels heard and all questions are answered. A program should never be a lecture, but rather a conversation. I am so excited to be starting this business and to share my passion for nature with you! ",
        },
    },
    programming: {
        mainParagraph: "I offer 5 core programs, exploratory hikes, and pond ecology dip programs. Each program has its own hands-on props including pelts, skulls, skeletons, and even live animals. Please inquire about this via email if you are interested in knowing the prop list for a specific program.",
        lastParagraph: "* I am flexible with programming and am willing to discuss edits / specific things I should touch on. I am familiar with the Ohio state standards for science and can discuss focusing on specific standards for a program if necessary.",
        programmingOptions: {
            program1: {
                title: "Amphibians and Reptiles (an evolutionary story):",
                details: "This program aims to educate audiences about reptiles and amphibians in Ohio and how they can be beneficial to humans. It will also debunk many common myths about these misunderstood creatures and might even help you to love them just as much as I do.",
                notes: "",
                icon: "bullfrog",
                alt: "bullfrog drawing",
            },
            program2: {
                title: "Insects and Pollination:",
                details: "Insects are not always appreciated for all of the hard work they do for us and our environment. In this program, I will list and talk about 3 crucial ways that insects are benefiting us in our daily lives. If the weather is agreeable, there will be opportunities to observe some of these incredible insects in action!",
                notes: "*Depending on the weather, this program can include insect catching and observation.",
                icon: "butterfly",
                alt: "monarch butterfly",
            },
            program3: {
                title: "Birds:",
                details: "Have you ever wanted to know the names of the birds you hear singing outside? Are you curious about the ways in which birds benefit our everyday lives? This program will answer these curiosities and many, many more.",
                notes: "*Depending on the weather, this program can include bird watching. Please bring binoculars if you have them.",
                icon: "woodpecker",
                alt: "woodpecker bird",
            },
            program4: {
                title: "Mammals:",
                details: "Ohio Mammals are diverse, and they participate within the intricate food chain in ways we do not often think about. Take away one, and what happens to the others? What happens to our crops, or even our homes? This program will help answer those questions and help us to get to know these furry friends.",
                notes: "",
                icon: "squirrel",
                alt: "squirrel drawing",
            },
            program5: {
                title: "Plants vs. Fungus:",
                details: "Ever wonder what the difference between a fungus and a plant is? This program aims to take a deeper dive into the inner workings of plants and fungi in order to distinguish between the two and understand how they help each other survive.",
                notes: "",
                icon: "mushroom",
                alt: "a group of mushrooms",
            },
            program6: {
                title: "Exploratory Hikes, Pond Ecology Dips, and even Birthday Parites!:",
                details: "Exploratory hikes are where I lead a group of at most 15 people on a short hike and answer questions. There is also toddler exploratory hikes/programs that can be up to 7 kids plus chaperones. The pond ecology dip program begins with a bit about biological indicators like insect larva and amphibians. I can also turn all of these programs into a cool and informative birthday party complete with gift bags!",
                notes: "",
                icon: "hiker",
                alt: "drawing of a person hiking",
            }
        }
    },
    pricing: {
        headers: {
            1: "Age",
            2: "Number of People",
            3: "Price",
            4: "Additional Price",
        },
        details: {
            row1: {
                title: "Toddler Exploration",
                info: {
                    1: "No more than seven",
                    2: "$130.00",
                    3: "N/A",
                },
            },
            row2: {
                title: "First-Fourth Grades",
                info: {
                    1: "Seven or less",
                    2: "$150.00",
                    3: "Each additional child is $10.00",
                },
            },
            row3: {
                title: "Fifth-Sixth Grades",
                info: {
                    1: "Six +/-",
                    2: "$150.00",
                    3: "After eight, each additional child is $10.00",
                },
            },
            row4: {
                title: "Seventh-Eighth Grade",
                info: {
                    1: "Six +/-",
                    2: "$175.00",
                    3: "After eight, each additional child is $10.00",
                },
            },
            row5: {
                title: "Ninth Grade",
                info: {
                    1: "Six +/-",
                    2: "$180.00",
                    3: "After eight, each additional child is $10.00",
                },
            },
            row6: {
                title: "Mixed Age Birthday Party",
                info: {
                    1: "Up to 15",
                    2: "$200 plus outside hours if applicable",
                    3: "Each additional child is $10, inquire about help with party favors.",
                },
            },
        },
        notes: {
            1: "* If your group is mixed in age, rates will be based on the oldest child with additional children being 10$ each.",
            2: "* +/- meaning up to fifteen and as little as 3.",
            3: "* If applicable, please inquire about school groups/library programming prices",
        },
    },
    contact: {
        email: "georgiathenaturalist@gmail.com",
        facebookLink: "https://www.facebook.com/georgiathenaturalist/",
        facebookLabel: "Georgia The Naturalist on Facebook",
    },
    attribution: {
        mainParagraph: "Here are the attributions for the images used in this website.",
        attributions: {
            image1: {
                imageName: "flat-design-abstract",
                attributionLink: "https://www.freepik.com/free-photos-vectors/background",
                linkName: "Background vector created by pikisuperstar - www.freepik.com"
            },
            image2: {
                imageName: "leaves-background",
                attributionLink: "https://www.freepik.com/free-photos-vectors/background",
                linkName: "Background vector created by coolvector - www.freepik.com"
            },
            image3: {
                imageName: "hand-painted-watercolor-nature",
                attributionLink: "https://www.freepik.com/free-photos-vectors/background",
                linkName: "Background vector created by freepik - www.freepik.com"
            },
            image4: {
                imageName: "realistic-wood-texture",
                attributionLink: "https://www.freepik.com/free-photos-vectors/background",
                linkName: "Background vector created by vikayatskina - www.freepik.com"
            },
            image5: {
                imageName: "nature-scene-with-river",
                attributionLink: "https://www.freepik.com/free-photos-vectors/tree",
                linkName: "Tree vector created by jcomp - www.freepik.com"
            },
            image6: {
                imageName: "hand-painted-watercolor-nature-background-forest",
                attributionLink: "https://www.freepik.com/free-photos-vectors/background",
                linkName: "Background vector created by freepik - www.freepik.com"
            }
        },  
    },
    photos: {
        imageObjects: galleryObjects
    }
}

export default websiteInfo