import React from 'react';
import { PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer";
import { Button } from 'react-bootstrap';

const BlogPDF = () => (
    <Document>
        <Page>
            <Text>
                                       My Blog

                                       Single-Player Campaigns: Many "Call of Duty" games feature single-player campaigns with cinematic storytelling, memorable characters, and intense missions. These campaigns often put players in the midst of global conflicts.

Zombies Mode: Introduced by Treyarch, the Zombies mode is a cooperative multiplayer mode where players face waves of undead enemies. It has become a fan-favorite mode known for its challenging gameplay and Easter eggs.

Popular Titles: Some of the most well-known and successful titles in the series include "Call of Duty 4: Modern Warfare," "Call of Duty: Black Ops," "Call of Duty: Modern Warfare 2," and "Call of Duty: Warzone" (a free-to-play battle royale spin-off).ow you to encapsulate and reuse stateful logic across different components. You can create a custom hook to encapsulate any logic that needs to be reused across multiple components, such as fetching data, managing state, or handling side effects.
            </Text>
        </Page>
    </Document>
);

const Blog = () => {
    return (
        <div className='text-center'>
            <h1 className='text-warning my-2 me-3 d-inline'>My Blog</h1>
            <PDFDownloadLink document={<BlogPDF />} fileName="blog.pdf">
                <Button className='mb-3' variant='warning'> {({ blob, url, loading, error }) =>
                    loading ? "Loading document..." : "Download PDF"
                }Download PDF</Button>
            </PDFDownloadLink>
            <div className='border border-warning p-2 mb-2 rounded-4'>
              
                <p>Single-Player Campaigns: Many "Call of Duty" games feature single-player campaigns with cinematic storytelling, memorable characters, and intense missions. These campaigns often put players in the midst of global conflicts.

Zombies Mode: Introduced by Treyarch, the Zombies mode is a cooperative multiplayer mode where players face waves of undead enemies. It has become a fan-favorite mode known for its challenging gameplay and Easter eggs.

Popular Titles: Some of the most well-known and successful titles in the series include "Call of Duty 4: Modern Warfare," "Call of Duty: Black Ops," "Call of Duty: Modern Warfare 2," and "Call of Duty: Warzone" (a free-to-play battle royale spin-off)..</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded-4'>
               
                <p>
                Game Modes: Free Fire offers several game modes, including the classic battle royale mode, as well as team-based modes like Squad and Duo, and various limited-time events and modes.

Graphics and Visuals: The game is known for its vibrant and colorful graphics, making it visually appealing to players.

Microtransactions: Free Fire is a free-to-play game but offers in-game purchases for cosmetics, character skins, and other items. This is how the game generates revenue.

Community and Esports: Free Fire has a large and active player community and has also become a popular title in the esports scene. Garena organizes esports tournaments and events for players to compete professionally.

Mobile and PC Versions: Free Fire was originally designed for mobile devices, but it can also be played on PC using an emulator. This versatility has contributed to its widespread popularity.

Updates and Seasons: Like many online games, Free Fire regularly receives updates and introduces new seasons, themes, and content to keep the gameplay fresh and engaging.

It's worth noting that the popularity of Free Fire has grown significantly, especially in regions like Southeast Asia and South America, where it has a massive player base and a thriving esports scene..</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded-4'>
                
                <p>Battle Royale Mode: Fortnite's most well-known game mode is the Battle Royale, where 100 players are dropped onto an island and compete to be the last person or team standing. Players must scavenge for weapons, resources, and build structures to survive and eliminate opponents.

Building Mechanic: One of the unique features of Fortnite is its building mechanic. Players can harvest resources like wood, brick, and metal from the environment and use them to build structures, such as walls, ramps, and forts. This adds a strategic element to the gameplay.

Regular Updates: Epic Games regularly updates Fortnite with new content, including skins, emotes, and limited-time events. These updates help keep the game fresh and engaging for players.

Cross-Platform Play: Fortnite allows cross-platform play, meaning that players on different gaming platforms (e.g., PC, PlayStation, Xbox, Nintendo Switch, mobile) can play together in the same matches.

Cultural Phenomenon: Fortnite became a cultural phenomenon, with its dances and emotes becoming popular in real life and pop culture. The game has also hosted in-game concerts and events featuring famous musicians and celebrities.

</p>
            </div>
            <div className='border border-warning p-2 mb-2 rounded-4'>
              
                <p> Competitive Video Gaming: Esports involves competitive play in video games across various genres, including first-person shooters (e.g., Counter-Strike, Overwatch), multiplayer online battle arenas (MOBAs) (e.g., League of Legends, Dota 2), real-time strategy games (e.g., StarCraft), sports simulations (e.g., FIFA, NBA 2K), and more.

Professional Players: Esports athletes, often referred to as "pro players" or "esports pros," are individuals who dedicate a significant amount of time and effort to mastering their chosen games. They compete at a high skill level and are often signed to professional esports organizations.

Esports Organizations: These are companies or teams that sign and support professional players. They provide coaching, training facilities, sponsorships, and often serve as a platform for players to compete in various tournaments and leagues.

Tournaments and Leagues: Esports features a vast array of tournaments and leagues, both at the regional and international levels. Some of the most prestigious events include the League of Legends World Championship, The International (Dota 2), and the Overwatch League. These competitions offer substantial prize pools.

Viewership and Streaming: Esports events are typically broadcasted via live streams on platforms like Twitch, YouTube Gaming, and Facebook Gaming. Viewers can watch matches, interact with players, and follow their favorite teams and players.

Esports Fans: Esports has a dedicated and passionate fanbase. Fans often form communities around their favorite games, teams, and players. Esports events can attract millions of viewers, both online and in physical arenas.

Sponsorships and Advertising: Esports has attracted major sponsorships and advertising deals from companies across industries, including technology, sports, and beverage brands. Esports events provide opportunities for brands to reach a younger and tech-savvy audience.

Casting and Analysis: Esports events are typically accompanied by commentators (casters) who provide live commentary and analysis of the matches. Casters help make the games more accessible and entertaining for viewers.

College and University Esports: Many educational institutions now have esports programs and teams, and there are collegiate esports leagues and competitions. Some offer scholarships to talented esports players.

Global Phenomenon: Esports is a global phenomenon, with a strong presence in North America, Europe, Asia, and other regions. Major events often feature teams and players from around the world.

Evolution and Growth: Esports continues to evolve and grow. New games, genres, and formats are regularly introduced, and the industry's revenue has steadily increased, making it a viable career path for many players and professionals.

Esports has become a significant part of the entertainment industry, with a fanbase that rivals traditional sports. It has also attracted significant investment, mainstream media coverage, and a growing ecosystem of stakeholders, including players, organizations, sponsors, and fans.





</p>
            </div>
        </div>
    );
};

export default Blog;