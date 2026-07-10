# How to change the club board

Board photos live under `assets/img/speakers/board/`:

- `current/` — the board shown on the site right now.
- `YYYY-MM/` — archived boards, one directory per term (the term the board served,
  alternating `01` and `07`, e.g. `2025-07`, `2026-01`, `2026-07`).

Each officer has two files named by role slug:

- `<slug>.jpg` — full-size photo
- `<slug>.200x200.jpg` — square thumbnail used on the page

The role slugs are:

| Slug           | Role                            |
|----------------|---------------------------------|
| `president`    | Prezes / Club President         |
| `vpe`          | Wiceprezes ds. Edukacji / VP Education |
| `vpm`          | Wiceprezes ds. członkowstwa / VP Membership |
| `vppr`         | Wiceprezes ds. PR / VP Public Relations |
| `secretary`    | Sekretarz / Secretary           |
| `treasurer`    | Skarbnik / Treasurer            |
| `saa`          | Dyrektor ds. administracyjnych / Sergeant at Arms |
| `ipp`          | Poprzedni prezes / Immediate Past President |
| `mastermentor` | Dyrektor ds. mentoringu / Master Mentor |

## Input

You provide a `source/` directory with one `.jpg` and one `.200x200.jpg` per officer.
The `.200x200.jpg` thumbnails are assumed to already exist in the correct size — this
process only renames and places files, it does not resize anything.

## Steps

1. **Pick the archive directory name.** It is the term the *outgoing* board served,
   following the alternating pattern: after `2025-07` comes `2026-01`, then `2026-07`.

2. **Archive the current board.** Move everything in `current/` into the new
   `YYYY-MM/` directory:

   ```sh
   cd assets/img/speakers/board
   mkdir -p YYYY-MM
   git mv current/*.jpg YYYY-MM/
   ```

3. **Install the new photos.** Copy each source photo into `current/` under its role
   slug (both the full `.jpg` and the `.200x200.jpg`). Do not copy any other source
   formats (e.g. `.png`) — only these two per officer.

4. **Update `index.html`** in the `#clubofficers` section. For each officer card:
   - set the `<h3 class="name">` to the new name (uppercase),
   - update the role description in `<p class="about">` if it changed.

5. **Bust the image cache.** The thumbnail filenames stay the same, so browsers would
   otherwise serve stale photos. Append a version query string matching the new term to
   every `board/current/*.200x200.jpg` src in `index.html`, e.g. `?v=202607`:

   ```
   src="assets/img/speakers/board/current/president.200x200.jpg?v=202607"
   ```

6. **Remove the `source/` directory** once the photos are in place.

7. **Review, then commit.**
