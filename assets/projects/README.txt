Project screenshots go here.

One image per project. The <img src="..."> in index.html already points
at these filenames — just drop the files in and they appear:

  nusa-crop.jpg    -> project 01  (NUSA-CROP)
  portfolio.jpg    -> project 02  (Personal Portfolio Website)
  bobol.jpg        -> project 03  (Bobol CTF)
  safestep.jpg     -> project 04  (SafeStep)
  sortify.jpg      -> project 05  (Sortify)

Tips
  · Any size works; CSS crops each to a 16:10 box (object-fit: cover).
    ~1200x750 px looks crisp on retina without being heavy.
  · .jpg / .png / .webp all fine — just match the extension in index.html.
  · Until a file exists, the card shows a neutral "Screenshot" placeholder,
    so the layout never looks broken.
  · Adding a new project? Copy an <article class="work"> block in index.html
    and point its <img src> at a new file in this folder.
