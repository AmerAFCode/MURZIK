# MURZIK

## Interactable Parts:
- Songs 
- Button controls (except shuffle since there are no playlists)
- the music bar (you can skip to any part of the song)

## Not Interactive Yet
- Albums (couldnt figure out how to get the musiclist.js file to work because indexing is confusing)
- artists on the side bar (pure decoration, in order: Metro Boomin - Kali Uchis - Don Toliver - Kendrick Lamar - Samara Cyn - J. Cole)
- the shuffle button (no album to shuffle)
- the search bar (nothing to search)
- any of the inline links (name of song, artist, and album due to not having enough time to make the other htmls)

## File types
- HTML
- CSS
- JS

## Folder Pattern
### images
1. Artists
2. AlbumCovers
   2.1. Artists
   2.2. Albums
3. icons (unused)

### music
1. Artists (different artists)
   1.1. Album

## How to use the website
In the case of slow internet, you'll see the preloader.

Then you'll see the UI:
if you are on mobile, you wont see the sidebar containing the artists
if you are on computer, you will see the sidebar containing the artists

the logo at the top refreshes the page, acting as a home button.

the albums part cannot be interacted with.
that part is also scrollable

the song part can be interacted with.
when a song is clicked, some of the UI colors will change with respect to the album's majority color.

in the bottom bar, pressing the image, song name, artist name, and album name doesnt do anything, due to no html pages that lead to those respective things.

the shuffle button doesnt do anything (again no album can be played)
the skip previous button restarts the song
the play and pause buttons play and pause the song respectively
the skip next button ends the song
the repeat button:
- when in cycle state, the song doesnt loop
- when in infinity state, the song does loop

the volume button toggles mute for the song (there were and still are plans to make the volume bar a range that can be interacted with, but again time crunch)
