# Phoenixx Music
---
## Initial Discussion
Phoenixx Music is an artist website, created to be a showcase of the artist's work and style. In addition to looking exciting it aims to provide information on who the artist is, upcoming shows and how to get in touch.

After recording his first EP and performing at multiple events, the artist needs a place to send fans and promoters which will serve as a hub to direct visitors to what they are searching for.
![Phoenixx Mock Ups](docs/phoenixx-mockups.webp)

---
# User Experience (UX)
## Important Information to Include
- Links to streaming platforms
- Links to social media
- Tour dates and events
- Where to buy tickets
- A gallery devoted to the artist's highlights
## User Stories
### Client Goals
|Number|Goal|
|--|--|
|1.|As a client I want to be able to access and view the website on devices with different screen sizes.<br>I know I am done when the site is accessible across multiple devices.|
|2.|As a client I want to ensure the appropriate information is readily available for fans or promoters that visit the website.<br>I know I am done when all relevant information is correctly displayed for each section of the website.|
|3.|As a client I want to drive people towards Spotify, social media and events.<br>I know I am done when the website provides external links, calls to action and subtle pointers towards the previous mentioned external links.|
|4.|As a client I want to provide a method of contact for bookings or other enquiries.<br>I know I am done when the website provides a form for sending messages to the client/relevant channels.|
|5.|As a client I want to showcase media on the website.<br>I know I am done when there is a functioning gallery section included on the website.|
|6.|As a client I want to stand out amongst others through creativity whilst not deterring/confusing visitors.<br>I know I am done when the site is both interesting visually but also fully functional, with each call to action being fully descriptive and meaningful.|<br>
### First Time Visitor Goals
|Number|Goal|
|--|--|
|7.|As a first time visitor I want to find out who the artist is and what he does/what music he creates.<br>I know I am done when the website provides links to music and socials as well as an "About" page.|
|8.|As a first time visitor I want to be able to navigate the site with ease.<br>I know I am done when the links between sections of the website are easily understandable and displayed well.|
|9.|As a first time visitor I want to know about new events and see photos of past events.<br>I know I am done when there is information provided about new events and a gallery to see photos of past events.|
|10.|As a first time visitor I want to I want to know where to listen to the artist's music.<br>I know I am done when the website showcases external links to Spotify and YouTube.|
|11.|As a first time visitor I want to find links to social media so I can follow the artist. <br> I know I am done when the website directs visitors to social media links.|<br>
### Professional Visitor Goals
|Number|Goal|
|--|--|
|12.|As a professional visitor I want current information about the artist's upcoming shows and new releases.<br>I know I am done when the website has a section that showcases upcoming events.|
|13.|As a professional visitor I want to find out more about the artist and what music he makes.<br>I know I am done when the website provides links to music and socials as well as an "About" page.|
|14.|As a professional visitor I want to easily be able to contact the artist about potential shows or collaborations.<br>I know I am done when the website provides a form for sending messages to the client/relevant channels.|<br>
### Fan Visitor Goals
|Number|Goal|
|--|--|
|15.|As a visiting fan I want to be able to find social media links easily.<br>I know I am done when the site subtly directs visitors towards social media links.|
|16.|As a visiting fan I want to know more about the artist and find upcoming or recent events or releases.<br>I know I am done when the website has a functioning events section.| <br>
---
# Design
## Wireframes
Below I have provided the basic wireframes for the design of the website. I have also numbered each wireframe with the relevant User Story excluding number 1 as it applies to the entire website.
### Home
User Stories: 2, 3, 6, 7, 8, 10, 11, 13, 15
![Home wireframe](docs/wireframes/home-wireframe.jpg)
### Events
User Stories: 2, 9, 12, 16
![Events wireframe](docs/wireframes/events-wireframe.jpg)
### Gallery
User Stories: 5, 7, 9
![Gallery wireframe](docs/wireframes/gallery-wireframe.jpg)
### About
User Stories: 2, 3, 5, 7, 13, 16 
![About wireframe](docs/wireframes/about-wireframe.jpg)
### Connect
2, 4, 14
![Connect wireframe](docs/wireframes/connect-wireframe.jpg)
## Colour Palette
![Colour Palette](./docs/colorpalette.png)

1. French Violet (Bold Dark Purple) - rgb(140, 0, 204)

2. Teldrassil Purple (Medium Pastel Purple) - rgb(167, 95, 214)

3. Gengiana (Muddy Dark Purple) - rgb(97, 75, 113)

4. Mt Burleigh (Dark Off Green) - rgb(92, 122, 105)

5. Citrino (Subtle Cream Highlighter) - rgb(234, 226, 158)

Throughout creating this website I have ensured that I switched my screen to greyscale. This has enabled me to keep my contrast interactions at a level which is accessible by mostly everybody as can be seen in the pictures below.
<div>
<img src="docs/bw-site/bw-home.png" style="max-width: 400px;">
<img src="docs/bw-site/bw-about.png" style="max-width: 400px;">
<img src="docs/bw-site/bw-events.png" style="max-width: 400px;">
<img src="docs/bw-site/bw-connect.png" style="max-width: 400px;">
<img src="docs/bw-site/bw-gallery.png" style="max-width: 400px;">
</div>

---

# Features

## Home Section

- Starting with the background, on "DOM Content Loaded" an amount of particles is calculated using the screen width and height (to ensure that smaller devices deal with less physics calculations), created and then animated each frame. The reason for choosing this as a background refers back to [User Stories](#user-stories) number 6 - specifically, showing an artistic style that doesn't distract from the main focus of the website. 
- The main title and navigation are center, clear and obvious.
- The colours I chose for the title are a gradient between the light purple and yellow from the color palette.
  
<img src="docs/features/home-full.png" style="max-width: 650px;">

- Underneath the navigation is a clickable image link which opens Phoenixx's EP on Spotify in a new tab.
- Next to the image is a segment of a review that shows the visitor exactly who Phoenixx is and what sort of music he makes.
- The idea of the gentleman in the bottom corner of the left side of the screen is that he sits and looks at the content with you. This ideally would have been a drawing/picture of Phoenixx but I am still to get a usable picture and so this is a placeholder that I found online (link in [Resources](#resources)).
- Copyright bottom-centre of the screen. As with the man, it stays concurrent throughout the entire site.
- In the bottom right of the screen are some stylized social media links. To encourage the click I have also added animated chevrons that draw attention to the spotify link.


<img src="docs/features/nav-glow.png" style="max-width: 650px;">

- The navigation has a translucent purple background with purple writing over the top and so I decided to use a yellow text-shadow to highlight and help make the contrast more obvious.
- Each item in the navigation bar glows yellow when hovered over.

<div>
<img src="docs/features/sc-player-in.png" style="max-width: 300px;">
<img src="docs/features/sc-player-out.png" style="max-width: 300px;">
</div>

- The final feature of the home screen is an embedded Soundcloud player, for the desktop version, that can be revealed by the "listen" button. Just like the little man at the bottom this button is concurrent. The idea is that you explore Phoenixx's music as you explore the website and get to know the artist.




# Resources
## Images
Image of man in bottom left - https://pngtree.com/freepng/cartoon-style-man-sitting-on-his-back_4288845.html
## Utilities
|Used For|Link|
|--|--|
|Markdown Editor|https://stackedit.io/app#|
|Colour Palette Design|https://color.adobe.com/My-Color-Theme-color-theme-889ac981-1580-4518-8afb-66671f0c0db8|
|Choosing colours|https://careerfoundry.com/en/blog/ui-design/introduction-to-color-theory-and-color-palettes/|
|Gradient Text|https://cssgradient.io/blog/css-gradient-text/|
|Burger Menu in CSS|https://www.w3schools.com/howto/howto_css_menu_icon.asp|
|Cloning Element for Burger Menu|https://gomakethings.com/how-to-copy-or-clone-an-element-with-vanilla-js/#:~:text=You%20call%20the%20cloneNode(),of%20it%20var%20clone%20%3D%20elem.|
|Text Rotation in CSS|https://www.turing.com/kb/how-to-rotate-text-in-css|
|Breakpoint Locations|https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/|
|Horizontal Scroll in JS|https://dev.to/samthor/divert-vertical-scroll-to-the-side-3id0#:~:text=Vertical%20To%20Horizontal&text=We%20can%20actually%20redirect%20catch,we%20prevent%20real%20horizontal%20scrolling.|
|Lazy Loading Images|https://web.dev/articles/lazy-loading-images|
|[About Section](#about) Container Horizontal Scrolling|https://alvarotrigo.com/blog/scroll-horizontally-with-mouse-wheel-vanilla-java/|
|[About Section](#about) Container Scroll Snapping|https://alvarotrigo.com/blog/css-snap-scroll-horizontally/|
|[Home Section](#home) Responsive CSS Arrow|https://codepen.io/pamcy/pen/wQbEao?editors=1100|