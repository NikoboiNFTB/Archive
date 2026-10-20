# Open Links

A lightweight tool for opening multiple URLs at once in new tabs. Useful for bulk opening tabs. A great extra tool to use with [Link Gopher](https://addons.mozilla.org/en-US/firefox/addon/link-gopher/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) (just as they likely intended "... or copy and paste into other systems").

## Features

- Open multiple URLs in a single click.
- Ignores invalid links (must start with `http://` or `https://`).
- Clean, dark-themed interface.
- Fully client-side; no data is sent anywhere.

## Usage

**Option 1**. Open Live Version:

[https://nikoboi.dev/links](https://nikoboi.dev/links)

**Option 2**: Download & Run Locally (recommended):

1. Create a folder anywhere, open the terminal in it and run:

```bash
git clone https://github.com/NikoboiNFTB/dev.nikoboi .
```

> Using `.` clones the files into the current directory. So create the folder first.

2. Start a local Python server:

```bash
python3 -m http.server 5500
```

> Requires Python

3. Visit your server [here](http://localhost:5500/links/).

4. Paste URLs (one per line), click **Open All Links**, or **Clear Links** to reset.

**Example input**:

```text
https://www.instagram.com/nikoboi
https://www.youtube.com/@NikoboiNFTB
https://www.reddit.com/r/deslop
```

> Shameless plug

## Screenshot

![Screenshot of Open Links](/assets/screenshot/2026/01/21/links.png)
