 so I wrote a blog post about this and I
kind of just converted my blog post into
slides if you guys have never heard of
Dex that app it basically allows you to
write actually I'm going to show you
your write markdown and your markdown
gets converted into slides using really
beautiful pre-built templates so footer
add stock format friend and awesome
meetup goes down the bottom there
organizing CSS you basically each slide
is divided by you know three dashes and
then using markdown to basically write
the rest of the app and you can see
organizing CSS down there if I wanted to
call it like CSS exclamation point I hit
save and now my slides change
it's called deck set it's 20 bucks in
the Mac App Store and so I normally am
like the type to like be in keynote
being all like organizational ID 40
minutes over lunch yesterday I took my
blog post which is a markdown put in
basically put all those dividers and put
it in deck set so that's literally what
we have right now so I'm hoping it's
going to turn into actually really great
presentation we'll see but I had to at
least geek out and show you guys that so
what we're talking about is methods of
organizing CSS and we think about
computer science architecture or design
patterns all these things that you may
or may not have heard of before but
they're ways were us where we rather
than just kind of like throwing all
bunch of crap into a text editor and
hacking it until it does what we kind of
wanted and hoping it doesn't break we
start to recognize that hey over time
over many developers we realized that we
should do these same things these same
ways rather than reinventing the wheel
every single time so over the amount of
time we'd be doing computer programming
we've developed patterns we say oh wow
we do this same thing over and over and
over again why don't we recognize it
call it a pattern or create a library or
whatever use jQuery it's the same kind
of thing we had to detect ie8 versus ie6
versus i7 versus firefox whatever ten
thousand times
create a library that does it for you so
you now you don't have to do that same
repetitive thing over and over again so
the problem is CSS is in general
front-end but we can see the JavaScript
has started getting us started a lot of
love this this area CSS hasn't so much
CSS there's no such thing as a CSS frame
or people say they are it's not a
framework it's just a whole bunch of
prepackaged code that you can use if you
want it's not a framework we have CSS
preprocessors we'll talk about that a
little bit later but in general no
matter what it is even if you have tools
make it easier to do a good job through
CSS you're still just drawing a whole
bunch of crap into a file somewhere and
kind of hoping you're doing a good job
so we're going to talk a little bit
about what it means to do a good job in
organizing our CSS well and learning
from design patterns and all this kind
of knowledge we have from other places
back-end code all that kind of stuff and
applying it to our CSS and especially
people who have like computer science
degrees which is not me I was an English
major but when you see them interact
with the front-end especially with CSS
they want to shoot their brains out
because they're like this is so horrible
doesn't do what I want if I was writing
this in Erlang it would it would be
perfectly predictable or and so it's
like okay well let's learn a little bit
from the benefits they're getting from
Haskell and Erlang and campano machine
compiler code and apply it to our CSS
world so we're going to use three
different topics there oo CSS smacks and
them I not everybody pronounces them
some people say BM they're probably
cooler than me I'm going to save them so
oh we already do this but for the sake
of recording I messed out for a partner
in technical director at Titan Co I
write I blog I teach occasionally I
write code and I met stuff from a ton
Twitter um so we already did that part
so CSS is best you see I should problem
one we've discovered with Dex set it's
not letting me see the preview of my
upcoming slides like keynote does okay
this is my first time ever using it so
some of the things we will learn from
back-end code so there's a lot of
different ways of organizing back-end
code there's a lot of different types of
design patterns but one of the ones that
I work in a lot is object-oriented
programming and a lot of the functional
concepts around Yop is what it is is
because you're thinking about things in
terms of being objects this object that
object that object they all talk to each
other and so one a few the pieces we're
focusing on here are four starters
decoupling so this is spaghetti code
this is bad this is difficult to work
with we'll talk about why in a second
this is object-oriented code it's a
whole bunch of different circles that
are all talk to each other right so
decoupling means taking this and going
like this it's it's making it so that
one piece is less intricately and
painfully tied to all the other pieces
you're decoupling them so you now you
have pieces that are a little bit more
separate
and as a part of decoupling we start
thinking about well what how do I know
which of the spaghetti strands go here
versus here starts thinking about what
defines an object so one of them is
called the single responsibility
principle which kind of says each one
should have a single responsibility so
as you start separating out your little
pieces of code that do your object
object object as you describe one of
them you should be able to say it does
this and the moment you start putting
commas or and/or in your description of
what that thing does it's probably
starting to break the single
responsibility principle principle so if
you say well I extract an object from my
spaghetti I feel really good what does
it do what does this and this and this
except one this and then it also has to
pull in this and sometimes it generates
that it's probably breaking single
responsibility principle and also
separation of concerns same kind of
thing concerns what is it concerned with
well if it's concerned with 25 different
things it's probably too big and you can
pull out a whole bunch of little objects
with it and then finally encapsulation
which means not only are you separating
them but theoretically each of these
little little chunks we just pulled out
we should be able to take it and use it
in that project and that project and
that project in that project project
should be encapsulated so it's not even
if you separate it well if it's got all
of just strings running to that other
one like it way too many of them you
can't pull it without pulling that which
relies on that relies on that and so at
that point it's just spaghetti you just
stretch it out a little bit so as you
can see and there's a lot I could talk
about olp all day what we're trying to
do is find an object that is nice and
neat it has very few ties to the things
around it it only does one thing it does
that one thing well it's very easy to
understand and describe but the one
thing is okay so we're talking about
that usually in back-end programming so
now we're gonna be applying that to
front-end program
so object-oriented CSS the general
concept is let's take all those ideas
and let's apply it to our CSS so Nicole
Sullivan is an author I think she worked
it maybe Yahoo at the time and she
basically started describing this
concept and she said identify the
patterns and the objects or modules in
your code so as we think about object
oriented programming we've got the
objects in our back-end code so there's
a mailer and there's a biller
and there is a you know whatever and and
to saying okay let's do the same thing
in our front-end code so one of the
things she did and I thought I had I did
I thought I'd gotten this graphic but
she basically took this well you know
what happened let's learn what Dex it
does when I click a link whoa there we
go
okay um hey oh all right so this right
here so what she did was she looked at
this right here she saw what was going
on and she said interesting this looks
like it's all these really complicated
pieces of code but what I'm really
identifying is that there's a single
pattern over and over and over again
it's two columns and on the left side
I've got probably an image but some kind
of block on the right side I've got a
big chunk of content and as you can see
as it gets redder and redder and redder
because there's a certain amount there's
actually a whole bunch of those nested
within each other so each of these kind
of status updates that was one of them
but then each of the comments from the
status update that was another one and
then over here you got the same kind of
thing icon on the left text on the right
the ads I kind of left text on the right
the notifications here icon the left
text and she's like wow that's a
repeating pattern that's a module let's
extract that so she called it the media
object and she said well how do we
describe this thing icon on the Left
text and write in a way word can we
actually call it a module and we can
reuse it in many places around our site
so she identified that if she named it
media then what she would need is
basically the image so this kind of left
side and then the body the counter right
side and then the wrapper so now you
have a module it's the media module and
the media module has two children the
image in the body and that's it and you
can use that everywhere anytime you need
that kind of split and she's like oh
well what if I needed to be backwards
cool so she added a modifying classic
good add that says put them this way
right because you know they don't
necessarily have to be left and right
but still you got that same kind of
presentational relationship and so
that's a module that you can now apply
and again that that's quite what she was
doing here she's showing off is like how
very flexible this kind of idea is right
so that's the basics of CSS and that's
kind of where she was coming from is
identifying those repeating patterns and
extract them out so that rather than
redefining that same relationship left
rail right rail whatever 25 different
times you identify it once and then you
apply it in all those different contexts
so around the same time this other guy
snook was coming up with this idea
called scalable
our architecture for CSS he called its
max and since we're just doing this why
don't we just look up his website so you
can see it it's a book you can read for
free online and then if you appreciate
it you can go buy it so you can support
him and this was similar time he didn't
specifically call this oo CSS but in the
end it was basically the same thing and
this was a system for him for for
learning how to organize his code and he
wasn't saying I want to learn how oo P
organized their code but there's a lot
of parallels so we should look at so
what he looked at is really I look at
all my CSS code and identified as being
five primary groupings so when Nicole
Sullivan didn't say anything about
grouping your code she just said put
into modules and I was it so this guy he
said first of all CSS code can be your
base code HTML h1 h2 a UL li those
aren't modules you're just styling your
basic HTML elements okay great
that goes in your base let's just
imagine we've got five CSS files based
on CSS layout done CSS module at CSS
state that CSS DMS CSS layout are the
big page sections that's big you know
you step back from ten feet from your
website when you're big sections header
sidebar body footer right rail left rail
primary rail whatever module is what
we're just talking about so almost
everything that she was identifying Col
Solomons identifying also ap stuff
they're modules and theoretically you
could put this module it's media module
in the header and the footer and the
left rail and the right rail and the
body encapsulated with another one the
body all kind of stuff they're just all
they are is just they know hey this is
what I'm supposed to perform my my
existence means left side has an image
right side as a body and you do whatever
you want put me wherever you want add
styles and taught me whatever you want
states are the way that you take an
existing module and almost always with
JavaScript pretty much always unless
you're doing some CSS tricks trickery
like risk where kind stuff basically
almost always using JavaScript you turn
on or off a particular flag on that
module to say it's state is different so
for example if you've got an accordion
the accordion may be opened or it may be
closed so the accordion is an accordion
but some of the way it displays depends
on that state so state is can be applied
to a layout it can be applied to a
module state is just some way of
toggling that
is momentarily different than it might
be at a different moment and then
finally theme which almost nobody ever
uses which is if you actually like he
and he definitely worked at Yahoo at the
time which is making me think that
Nicole Solomon might not have which is
if you have like my red theme in my blue
theme in my Valentines Day and theme all
kind of stuff and he explicitly says
this is the optional one you only use
this one if you're in that context so
suddenly we now know how to organize our
CSS we have these big chunks that we're
putting into and this module is kind of
this really important object-oriented
concept finally how do you name it now
this max guy came up with some naming
concepts his usually were a single
letter - whatever and so it was like the
layout ones were going to be dot L -
header dot l - footer dot M - whatever
for modules or whatever and it didn't
really pick up all that well and people
were kind of confused because how do you
figure out like well okay what about Sam
how do you figure out children how do
you need the children and what if
there's a body child but then something
else has a body child are there things
going to end up conflicting and then
you're nesting and there's some concerns
nesting so Yandex which is a Russian
search engine giant giant which I
thought was spam because all of a sudden
I was getting totally overloaded with
things from Yandex on one of my websites
and I was sure they were just horrible
then I see them associated with BM and
I'm like what's going on so they may be
a little bit hyper aggressive but
they've done some really good thinking
about how to optimize their websites so
they came up with this BM which is block
element modifier it's a way to think
about naming your classes that basically
recognizes that you've got a block which
is kind of your module name so media
before you've got an element which is
one of its children and then you
optionally have a modifier on the block
or the element this is actually not
exactly the BM that they came up with
Harry Roberts who's goes by CSS which is
wizardry online modified a little bit
and we've been using Harry Roberts
version for years and it's a really good
fit so basically what you're looking at
is if they gave an examples that I
didn't so if you've got a block and it's
named media and then every media has a
image remember and then a body so that
would be dot media underscore underscore
image
and then dot media underscore underscore
body so basically what you're doing is
you're flattening all your your
selectors you're not saying dot media
space dot body
you're saying dot media underscore
underscore body and I'll tell you why in
just a second but let's just understand
that's the naming syntax so if for
example you were to have a reversed one
right so instead of it being left right
for image body it's going to be right
left then it would be the parents div
with the dot media - - reversed or alt
or whatever you wanted to name it and
then you'd do all your styles that said
well if I've got a dot media underscore
underscore body within this then do
these layouts otherwise do that so every
single one of these things we're doing
is a single class dot media dot media
underscore underscore image dot media -
- body dot media - - reversed whatever
they're all a single class and that's
really going to be valuable for us in a
way we'll talk about in a second
question yeah would you ever have
invested no grandchildren they're
tearing up yeah you can put children who
sets of double enter sports no
grandchildren are a bad idea we would
try it originally even though the BM guy
said don't do it and you end up getting
into the mind Casillas stuff you'll ever
run into and you you have run into a lot
of weird performance issues so just kind
of like blanket no and try to start a
new bar yep and sometimes that's
difficult because you're like well it
doesn't necessarily it shouldn't
necessarily be another block it couldn't
be extracted so like every once in a
while we cheat and do that anyway we
actually usually so remember there's the
five organizational systems of smacks we
usually actually replace theme with a
different five a fifth one which is
called shame which is this is where I
put all the CSS that I know I shouldn't
have done but I did for X reason and we
use git which means there's a feature
called git blame which shows you who
wrote every single line of code so at
any point you can go to shame and be
like wow there's like 500 lines in our
shame dot CSS file and then you do get
blame and you can figure out who's
putting all stuff in there when you put
something in shame dot CSS you're saying
usually I know this isn't the right way
to do it and because of some particular
constraint whether it's time or a
temporary need or whatever I'm putting
this here but if we have rainy day time
we need to go back and fix this so
grandchildren if you need to do
grandchildren
and shame and recognize later that you
probably don't want to do it we again we
do it occasionally but there's a lot of
really wise amazing ideas for why you
shouldn't I've consumed all of them
forgotten half of them and come to the
conclusion that it's a bad idea
Oh hopefully that helps so and I'll give
you guys more examples I didn't write
all my examples because again it took me
40 minutes but we can do some actual
coding once I'm done with a slideshow
aspect of it um so one really cool thing
is you end up writing dot media
understood you can hear me saying
underscore underscore - - it takes a
while to write these things out
thankfully sass and less both make it
much easier for you to do these things
so if we want this I can't so I'll
probably just show it to you guys in a
second I don't I did yeah it's very easy
but it means I have almost no
configuration ability so I will show you
guys this one in my markdown code
because this is magical ok so if we're
generating this right here yes ok cool
dot object and then we've got object to
Senate right so imagine you've got a
whole bunch of rules you're writing this
thing over and over again you've got a
lot of repetition which gets really
frustrating because if you want to
rename object later or just because you
hate you know you hate repetition this
is going to drive you nuts
so sass and let's have things where you
can do descendants and normally in sass
the way you're using a descent is you
have object and then you've got you know
dot descendant it's so hard to spell
that word and and you're like wow this
is really cool nesting is the greatest
but the problem is that ends up leaving
you at this and again I know I haven't
described you why well in a second but
that's actually really bad so thankfully
recent versions of sass and less allow
you to do this if you do ampersand
underscore underscore or ampersand
anything it's basically this right here
represents the parent so for example
this is going to give me dot object or
underscore underscore descendant like
that but I also could do this ampersand
for something else if I wanted to say
you know if this is the reversed object
like we're talking about it would be
object - - or dot sorry ampersand
- - reversed or if I just wanted to say
object anytime you add in another class
this has nothing to do with them this is
just sass you could do ampersand dot you
know read version or something like that
and then you'd actually type it
correctly and then you'd get what you
wanted
so ampersand within sass and less just
represents the parent but modified in Ex
way so this is the parent but it's not
actually the parent because you're
modifying it by extending the class name
so now it's actually a new class that
just happens to be the same class name
as a parent with some letters after it
and so that allows us to very easily
nest our children in here in a way that
gives all this benefit of nesting and
sass and less but it ends up generating
a flat descendant structure tree and I
keep seeing I'm going to talk to you
guys about it but you probably think I'm
crazy if you don't know why so I'll
pause and I'll talk about why is it
valuable to have flat selectors so with
CSS the most complicated thing you're
going to run into and almost all the
time when you have problems whether or
not you recognize this is why you're
having problems is because of the
hierarchy it's the the specification the
specificity of which rules get parsed
more important as more important than
other rules so the most simple aspect of
parsing you know parsing order with CSS
is whichever one comes first which which
versus last so if I define a and then
later i define a the later definition is
going to win out because it overrides
the first one that's just the simplest
one but also the more specific the
definition is which is kind of difficult
to know all the rules around it the more
likely it is to get applied so for
example if I say a is blue and then I
say but a with a class of awesome is red
well the a with the class of awesome is
going to override the a if the a has
class of awesome so the more specific
the more targeted your definition is the
more precedence it gets the more
important it is and that means when you
end up with things like this so let's
say you did what I did on a recent I
website a couple years ago which I still
am paying for you say well you know how
often you do all these styles for the h1
and the h2 and the a and then this like
that but you then have to totally undo
all those Styles anytime you use those
in the header
the footer in the side nabbit you really
want to be targeting the body right
you're and somebody wrote this very
eloquent article about why you should do
what I'm about to tell you which is a
terrible idea but I didn't know it then
why don't you only target the h1 h2 the
A's all that kind of stuff in the body
with these very natural you know things
so that all the ones on the outside
which are going to do wacky weird stuff
too anyway you're going to you know take
your list you're going to turn it
sideways so it looks like a navigation
bar or whatever all this crazy stuff we
do you don't have to undo it and if
you've never had this experience then
this won't make as much sense but in the
end I ended up basically doing
everything like this h1 this is just
four basic styles h2 this is this from
my text for a blog post where this is
how I want it and I thought this is
really great because now when I do
navbar sorry yeah h2 I won't have to
undo all this because this might be like
you know whatever this might be held
Etica size 24 well navbar h2 might
actually be this little tiny thing I
don't want to undo that so let's set it
to base let's do a reset everywhere and
then here I set what readable standards
should look like and then here I guess
do whatever one really great idea the
problem is this now becomes dot body h2
okay so let's say the color of this is
red and let's say I want to be able to
apply a class just to some of the h2s
that just make them a different color
okay so let's just say there's an
alternate h2 page title kind of thing
let's do actually h1 so it'll make a
little more sense page titles read on
some page page title needs to be green
right cool so I just say you know
whatever dot alternate and then I'm like
cool you know color green and then I do
on that page I do you know div class
equals body and then h1 class equals
alternate awesome so what color would
that be it'd be green right but it's not
green because this is a single single
selector this is double this is more
specific this will be red but you're
like okay that's fine I'll just do this
right but then later you found you had
done this somewhere
well that right there adds your
specificity or what if you just did this
really simple thing right page title
okay that's fine well I just want to
apply alternate to it well it turns out
that if you use the ID pretty much just
blows everything else out of the water
you literally cannot overwhelm ID except
in an old version of my internet
explorer if you had like I think it was
over six hundred classes somebody tested
this if you did over six hundred classes
it would overwhelm an ID no idea why
total bug so basically but and this is
an additional note that I didn't plan to
say never ever ever ever ever ever ever
ever use IDs for styling ever ever ever
you probably are doing it stop doing it
it will bite you it is terrible don't do
it yeah just talk to it I IDs are okay
for JavaScript hooks but they're not
okay for CSS styling go get rid of them
all yes yes CSS styles and you'll thank
me in a year so and there's all sorts of
specificity like you know whether using
the Senate selectors how many descendant
selectors how many class so like there's
this you know what about this what about
this versus this you know and then you
get you're like oh well I want to make
sure so one of the things we'd run into
is like you got like dot body and then
you want to do ul Li and that's an
honored list and you want to style it
differently than oli right that's just
you just happen you're not trying to be
specific but this has three levels of
selection so it just became really
really really strong Frick what do we do
with that so flat selectors are magical
and long nasty class names that you
think should be really bad because our
classes should be simple but this right
here which is like unordered the man
typing is hard ordered list in the body
which you'd like laugh at that that's
actually going to be much more
controllable much more manageable you're
going to get a much better experience
I'm not saying you should name it that
but that's actually better CSS than this
which is insane so basically what we've
found and it's actually significantly
faster too
this shouldn't be your concern don't
make your decisions based on this but it
turns out that CSS selects backwards
so first it says give me every single
Ally on the page all of them and then
give me only the ones that happen to be
within a ul and then of those give me
only the ones that happened to be within
dot body so it's actually faster do this
because it's like hey give me everything
of that class oh there's one of them
great we're done it doesn't matter that
much don't really worry about it don't
make your decisions based on performance
but it is more perform okay so flat
selectors even if they look like this
that looks insane but that is actually
significantly better than this okay
because you have this control now every
single style you're applying you're
applying it once it has one level
priority one level of strength whatever
you want to call it is one specific to
city and you can override it with an
intentional other one and so you can do
things like you know that and then you
can and you can say okay so it's
unordered list in the body and then it's
also under the student body reversed and
so those two classes have equal
precedence so you're purely in control
based on either choosing override codes
ones later or whatever I'll see all this
control that you totally lose in these
other contexts all right so that was a
much longer rant than I expected my
apologies so that this is going to be a
really funny slide because you guys are
going to see that I was like this is how
to do BEM with sass and then you're like
how do you do it unless and then the
next slide says Ben with less and it's
exactly the same thing so they have the
same syntax they don't always but in
this particular contest exact same thing
all right back to our presentation all
right but what about utility classes us
so I work with a guy named Adam Levin
who I he runs up he runs a podcast
called full stack radio you guys should
really check it out he had David had a
minor Hanson a hen Mir Hanson DHH on it
and they just kind of like custon talked
bad about people for an entire hour in
his last one it was really good stuff
you should check it out whether or not
your ruby developer but the first
episode he interviewed me and we
basically kind of sort of agreed and
sort of thought about object-oriented so
if you take a look at it he makes the
argument that utility classes are still
valuable times and a utility class is a
simple class like this where you just
say look I don't care about making an
entire frickin component
and imagining what the name of this
thing should be I want to call it a
module I just want to throw a pull left
on it from bootstrap if you're familiar
that just is going to pull it over the
left side and I want to be done I just
want it to be six of my 12 columns I've
already got a grid system in there why
do I have to create a thing that says
well why is it six to twelve columns
well it's kind of the body but it's not
entirely about it's kind of the article
and you know what you want to throw the
column md6 on it and then just be done
with my day I just want to make it small
I want them available so I push back on
him and I say but the problem with that
is your classes are now immediately tied
to your presentation so let's say this
particular thing that sprinkled all
throughout your site is defined or it is
styled by being six columns pull left
small right you use it 20 times during
your site and then later the business
comes back and they say hey designer guy
hey developer lady that's really cool we
wanted to be four columns now you not
have to go 20 times your old site and
you need to replace that whole list with
columns MD - 4 and you're going to find
a replacement like oh well some oh you
know that one time it was 6 but I ended
up replacing with this and then you're
going to miss half of them and you're
gonna get tired not really good you're
you're immediately tying your markup to
your display and at that point well why
don't you just do style immediately on
the div now that's hyperbole but the
whole point about CSS is you've got your
markup that you got your CSS over here
is like a markup you should look like
this and then later
you totally acts all that CSS not really
and you pull another CSS and you're like
no you should look like this the markup
doesn't care the markup is just trying
to represent content so that was my
argument I still stand by it pretty
strongly but there's two ways to get
around that first one is there's this
article I can't remember the name but I
think it's bootstrap without the Det we
use this all the time we want to spike a
website out really really quick we want
to use the advantages that bootstrap
give you which is just easy columns long
stuff but we don't want to maintain
websites that are based on bootstrap
long term okay we want to do a quick
prototype we want it done in a couple
hours but we don't want to deliver some
in the client 500 hours later that's
actually still based on bootstrap what
do you do what we do is we come up with
those names so we do all that work of
figuring the names but then we use sass
extend to just say that name represents
pull left column MD six and small
so now by doing this I could keep it in
bootstrap forever if I wanted there's
not a single bootstrap class name in my
markup anywhere all I've identified is
that this thing is a primary rail and
then later if the primary rail becomes
four columns I go to this definition
once I say column MD for generate my
stats and I'm done so if you basically
what extend does in SAS is and says this
class extends these other classes and so
in terms of how we care about it all it
means is just take all the styles from
those other classes and stick them in
that one and we're done
the way it works technically is it
actually optimizes it so there's other
things in SAS called mix-ins and stuff
like that the problem is if you have
like a single mix in and you use it on
20 different SAS classes that the code
from that mixin that it's generating is
going to be duplicated 20 times
throughout your CSS on a small site not
a big deal but if you've got a massive
site and you use some mixin that does
you know some whatever it ends up being
you do it 20 times that's now that may
be 500 more lines of code in your CSS
just because you kind of use that mix in
views extend it sets that line that
whatever the mixin was representing pull
left for example let's say it all does
is you know float:left display at once
and then every single time you extend it
just kind of adds that to beginning and
again this is kind of hard to just wave
around so let's just look at our scratch
thing here so if I say if I do a mix in
and I remember exactly the syntax is
let's just say mix and Ruby developers
don't judge me and and it says something
like basically float:left overflow
have two classes and then up to just
things annoying and then my gosh it's
been so long since i've we use less a
lot now instead of sass so I don't
remember this in taxes anymore so if I
do this if I call this mixin twice what
I ended up generating 1.2 sorry is 1.2
and they're both going to have this
pasted in okay so duplication this is my
final CSS if I use extend
so let's instead create a parent class
that says like pull left oops
and then this one says at extend pull
left I think I was gonna be doing live
coding I wouldn't be doing this in a
markdown editor it instead does this dot
one dot two float:left overflow:hidden
that same code 500 times throughout my
whole site it has 500 selectors that get
apply to single block of code extremely
powerful it's powerful for a lot of
reasons but the geekiest part of me just
says look at all that code you know
extra outputted code that i saved that
might save one millisecond and get me
one one you know repeat visit or
whatever so would you say with Jesus it
still is
yeah long and compressed it doesn't work
I mean if you're going to save delivery
on anything it's going to your images so
like screw five lines of optimization in
your CSS it wouldn't matter even without
gzip it doesn't matter what gzip it's
it's pretty minimal but I care about it
because I'm a geek but yeah like almost
a lot of people I really appreciate
we're like talking about these like
crazy optimization solutions for CSS and
JavaScript they're like you realize you
could add like two extra percent of
compression on why your JPEGs and it
would be it would equal like all the
compression geekiness you could ever do
on CSS javascript ever so yeah that's a
fantastic point don't do things just
because and that's what I said earlier
to select our optimization you know can
making your CSS a little bit smaller
unless it's the difference between
pulling in the whole bootstrap suite or
none of it that actually is going to
make a you know a couple millisecond
couple of milliseconds but in general
this is more useful more for mental use
than anything else so and then later so
the reason this was bootstrap with all
the debt is because first of all there
was a whole thing that I just said oh
sorry I can't reason you guys can't see
this oh well the thing that I just said
where you don't have any bootstrap
classes in your code but also you have a
clean definition you have your nice
style file style data CSS whatever that
shows you exactly what class
you're actually using for bootstrap so
first of all you could include only
those you get all the rest them because
you're only including the ones that are
being extended here but also you can
just pull out you're like well what does
this really mean okay and you can just
replace the extend in primary rail with
your own CSS that does the same stuff
and then you can totally drop bootstrap
that can be something you have a junior
developer do two weeks later and then
bootstraps out of your project you no
longer have additional dependency but
part two which I've been considering a
lot since I talked with Adam first like
two weeks to you two months ago in the
podcast is you can build with utility
classes and then extract components as
necessary and that's that's kind of his
push and I'm definitely hearing that
which is he's like look sometimes you
put a pull left on something or column
md6 you plan to keep bootstrap around
and this just never is going to be
component it just needs to be pulled
left and that's it you don't have to
make up some stupid component name just
so you can add excuse I'm not having a
presentation or utility class and your
CSS and your HTML you could just leave
it and chill out so the last two
projects that I did what I do often is I
have an idea and I'm like the
entrepreneur type where I have an idea
and I bio domaine name five minutes
later and I own like 500 domain names
but I'm also a developer and I happen
develop with rapid application
development frameworks which basically
means they get a lot of the repetitive
cruft out of my way so bootstrap on the
front end jQuery as well come on in and
and then I use application framework
called laravel in the background I also
use rails and as as such I can develop
an entire application in two or three
hours just to see if it's going to work
I create a prototype of something in two
or three hours and then I decide whether
or not it's actually a me worth
continuing for our company and sometimes
it's not and I throw it away and
sometimes it is and then I passed on my
developers we do stuff with it so I
shouldn't be wasting my time naming
components when I'm trying to build an
entire application or two or three hours
so what I do is what I did in the last
two of those is I use these these
companies classes in line and then later
again later if we say you know what this
thing is is really kind of saucing out
to be a primary rail on a secondary rail
and whatever whatever then we replace
that you know this call right here this
pull left column md6
small
with primary rail and we extract it
later but the initial development phases
we might not actually know what this
thing's going to end up being because
we're still just kind of hacking it out
as we go and so and that's that's where
I see the value of them is like feel
free to use them as long as you
understand the technical debt that
you're incurring and that's true with
anything that has technical debt feel
free to use it as long as you understand
the technical debt you're in concurring
and for me I was like look it's
technical debt never ever ever ever use
it Adams like dude chill out a little
bit I use it in my last two projects and
I got a lot done in a lot faster amount
of time because I didn't spend all my
time freaking out about what an anemic
component was so caveat so how to get
started with object during program art
CSS flat your selectors screw object or
any CSS flatten your selectors and your
life is gonna be a hundred times better
if you do a lot of CSS organize your
code you can do his five class system
you can add my shame in the end whatever
you want to do but organize your code
start to get to a point where if you
passed off your code to some other
developer would never seen your project
ever before and they had you know five
thousand lines of sass get to a point
where they could at least begin to
winnow down where it should be with some
naming systems and especially assess
you're not losing any performance at all
by splitting up to 250 different pieces
if you need you know and if you guys
don't know if you import 50 different
CSS files that actually will
significantly slow down your website if
you import 15 of JavaScript files each
of those HTTP connections will have a
significant impact whereas if you take
those 50 files and crammed into one
you're going to have much less issue
there in sass you're going to have 50
included sass files that all get pulled
into a single source sass file and then
spit out as one no performance hit but
it's much easier to find where your
files actually are so start organizing
your code split it out more files is not
bad more files as clearer make your
classes do one thing well which is kind
of one of the focus on in object
orientation of concerns see more
responsibility principle identify what
this module should be doing and name it
and say this is what it is and this is
what it does and it's going to do it
consistently dependent independent of
the contexts and it's going to do this
one thing decoupled for usability
when you see that this realized and this
realized and this realizing this revised
in this realizing this which means it
means if you get somewhere else and it's
kind of similar
you're going to try and pull it and use
it there and it's going to rely on all
these other things that this other
context might not have and then you
can't use it so the more decal
the more encapsulated your thing is the
more you're going to be able to pick it
up and use it all sorts of other places
and finally use a preprocessor because
they bring a lot of the convenience of
doing these kind of things into CSS
preprocessors are great I can give a
whole hour long talk on that I was going
to do an example but I kind of think
we're out of time so I've been here for
an hour already so kind of do you want
to run to your like maybe like a short
whatever stuff like that just I mean you
know I've done some little examples that
I didn't expect to do in line so unless
there's any particular things you guys
would like to see I think I'm actually
pretty good so I think Thanks 