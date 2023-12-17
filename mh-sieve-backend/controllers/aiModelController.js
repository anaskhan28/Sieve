
// import {programmingPlaylists} from '../utils/sample-data/recommendation'

// const techEducationalRecommendations = {
//     categories: ["Programming", "Development", "Computer Science", "Engineering"],
//     languages : ["English", "Hindi", "Bengali", "Telugu", "Tamil"],
//     difficultyLevels: ["Beginner", "Intermediate", "Advanced"],
//     programmingLanguages: ["JavaScript", "Python", "Java", "C++", "Ruby", "HTML/CSS"],
//     frameworks: ["React", "Angular", "Vue", "Django", "Ruby on Rails", "Spring"],
//     topics: ["Machine Learning", "Data Structures", "Algorithms", "Cybersecurity", "Web Development", "Cloud Computing", "Engineering Mathematics"],
// }
import dotenv from 'dotenv'
dotenv.config()
import { OpenAI } from 'openai'
const openai = new OpenAI({
    apiKey: process.env.OPENAI_KEY
})


export async function Recommendation(req, res) {
    try {
        const { category, language, difficulty, progammingLanguage, framework, topics } = req.body;

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'system',
                    content: `You are tasked with designing a playlist recommendation system that caters to diverse user preferences based on the given data`
                },
                {
                    role: 'assistant',
                    content: `
                        You are a virtual assistant tasked with curating a personalized programming playlist for a user. The user has specified their preferences based on the following criteria:
                        
                        - Categories of interest: ${techEducationalRecommendations.categories.join(', ')}
                        - Preferred languages: ${techEducationalRecommendations.languages.join(', ')}
                        - Desired difficulty level: ${techEducationalRecommendations.difficultyLevels.join(', ')}
                        - Preferred prog/ramming languages: ${techEducationalRecommendations.programmingLanguages.join(', ')}
                        - Favorite frameworks: ${techEducationalRecommendations.frameworks.join(', ')}
                        - Topics of interest: ${techEducationalRecommendations.topics.join(', ')}
                        
                        Please analyze the available programming playlists and recommend a playlist that aligns with the user's preferences. You can consider factors like category, language, difficulty level, programming language, framework, and topic to make the recommendations.
                        
                        Here are the available programming playlists:
                        
                        ${programmingPlaylists.map((playlist) => `- ${playlist.title} (${playlist.link}) - Category: ${playlist.category}`).join('\n')}
                        format the output in this json object
                    `
                },
                {
                    role: "user",
                    content: `
                        Suggest me the playlist?:
                        Category: ${category}
                        Language: ${language}
                        Difficulty: ${difficulty}
                        programmingLanguage: ${progammingLanguage}
                        frameworks: ${framework}
                        topics: ${topics}
                    `
                }
            ],
        });

        const attributes = JSON.parse(completion.choices[0].message.content);

        res.json({ attributes });
    } catch (error) {
        console.log(error);
        // Set an error response
        // res.status(500);
        res.json({ error: 'An error occurred while processing the request.' });
    }
}


// Example usage (if applicable)
// POST(req, res);





export async function ParagraphSummarizer(req, res) {
    try {
        const { videoTitles, videoDescription, playlistLinkId } = req.body;


const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: 'system',
            content: `You are a description maker tasked with summarizing and evaluating the content of a YouTube playlist based on ${videoTitles} and ${videoDescription}. Your goal is to help users decide whether watching the playlist is a good idea or not.`
        },
        {
            role: 'assistant',
            content: `
                Playlist Summary and Evaluation:
                
                **Pros:**
                1. Engaging Titles: The videos feature captivating titles such as "${videoTitles.join('", "')}".
                2. Informative Descriptions: The video descriptions provide valuable insights into topics like "${videoTopics.join('", "')}".
                
                **Cons:**
                1. Limited Variety: The playlist seems focused on specific topics. If you're looking for diverse content, this might not be the best choice.
                2. Short Descriptions: Some videos have brief descriptions, making it challenging to determine their relevance.
                
                [Explore Playlist](${playlistLinkId})
            `
        },
        {
            role: "user",
            content: `Give accurate playlist discription based on the titles and descriptions?`
        }
    ],
});
    

const attributes = JSON.parse(completion.choices[0].message.content);

res.json({ attributes });
} catch (error) {
    console.log(error);
    // Set an error response
    // res.status(500);
    res.json({ error: 'An error occurred while processing the request.' });
}
}


export async function DecisionParameter(req, res) {
    try {
        const {playlistLinkId, comments, ratings, number_of_ratings } = req.body;

const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
        {
            role: 'system',
            content: `You are tasked with designing a playlist evaluation system based on comments, ratings, and number of ratings.`
        },
        {
            role: 'assistant',
            content: `
                Playlist Evaluation:
                
                **Pros:**
                1. High Ratings: ${ratings} out of 10.
                2. Positive Comments: ${comments.length > 0 ? "Users appreciate the playlist for..." : "No specific positive comments available."}
                
                **Cons:**
                1. Limited Number of Ratings: ${number_of_ratings}. A higher number of ratings can provide more reliable insights.
                2. Negative Comments: ${comments.length > 0 ? "Some users express concerns about..." : "No specific negative comments available."}
                
                Recommendation: Considering the positive aspects, the playlist seems promising. However, the limited number of ratings and potential concerns raised in comments should be taken into account.

                [View Playlist](${playlistLinkId})
            `
        },
        {
            role: "user",
            content: `Should I watch this playlist?`
        }
    ],
});


        const attributes = JSON.parse(completion.choices[0].message.content);

        res.json({ attributes });
    } catch (error) {
        console.log(error);
        // Set an error response
        // res.status(500);
        res.json({ error: 'An error occurred while processing the request.' });
    }
}


export const getRating = (req, res) =>{
    const playlistId = req.params.id;
    const playlist = [playlistId];
  
    if (!playlist) {
      return res.status(404).json({ error: 'Playlist not found' });
    }
  
    res.json({ rating: playlist.rating });
  };


  export const addRating = (req, res) =>{ 

    const playlistId = req.params.id;
    const playlist = [playlistId];
    const {rating} = req.body;

  // Validate rating
  if (!rating || isNaN(rating) || rating < 1 || rating > 10) {
    return res.status(400).json({ error: 'Invalid rating' });
  }

  // Create or update playlist rating
  if (!playlists[playlistId]) {
    playlists[playlistId] = { rating, totalRatings: 1 };
  } else {
    playlists[playlistId].rating =
      (playlists[playlistId].rating * playlists[playlistId].totalRatings + rating) /
      (playlists[playlistId].totalRatings + 1);
    playlists[playlistId].totalRatings++;
  }

  res.json({ success: true });
};

export async function GenerateMCQ(req, res) {
    try {
        console.log(req.body);
        const { videoDescription } = req.body;

        // Replace Windows-style line endings with regular line breaks
        const sanitizedVideoDescription = videoDescription.replace(/\r\n/g, '\n');

        const mcqPrompt =
            sanitizedVideoDescription +
            '\n\n' +
            '*Question 1:*\nWhat is the main topic of Video 1?\noptions: [1: "Option A", 2: "Option B", 3: "Option C", 4: "Option D"]\nanswer: ""\n\n' +
            '*Question 2:*\nIn Video 2, what is the key concept discussed?\noptions: [1: "Option A", 2: "Option B", 3: "Option C", 4: "Option D"]\nanswer: ""\n\n' +
            '... (continue for other questions)';

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'system',
                    content: "You are tasked with generating multiple-choice questions based on the description of videos in a playlist."
                },
                {
                    role: 'assistant',
                    content: JSON.stringify({ mcqPrompt })
                },
                {
                    role: "user",
                    content: `Generate the 10 questions by taking ${sanitizedVideoDescription} into consideration.`
                }
            ],
        });
        const mcqQuestions = JSON.parse(completion.choices[0].message.content);
        console.log(mcqQuestions);
        res.json({ mcqQuestions });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while processing the request.' });
    }
}
