---
title: Tasks
created date: "202512182041"
draft: true
tags:
up:
---
# Ordered Tasks

```tasks
not done
group by priority
```


# Unordered List of Tasks

- [ ] Try to implement a simple jupyter notebook into the [_Coding](_Coding.md) part as follows:


## The Recommended Workflow (Jupyter to Quartz)

1. **Build your Notebook:** Run your climate code and generate your visualizations (graphs, charts, etc.) inside Jupyter Notebook using your private data.
2. **Export to Markdown:** In Jupyter, select **File > Save and Export Notebook As... > Markdown** (or run `jupyter nbconvert --to markdown your_notebook.ipynb` in your terminal).
3. **Move to Obsidian:**
    - Move the generated `.md` file into your Obsidian vault.
    - Move the generated image folder (which contains the charts/plots) into your Obsidian attachment folder so the images display correctly inside the note.
4. **Push via Quartz:** Quartz will automatically turn this note into a web page.

The User Experience on `kaibellinghausen.com`

By doing this, your audience gets a seamless experience:

- **View Visualizations:** Because the charts are exported as static images alongside the text, readers can see the exact output your code creates.
- **Easy Copying:** Quartz natively supports standard markdown code blocks. When readers hover over the code on your website, a convenient **"Copy" button** will appear automatically, allowing them to instantly grab the script and plug in their own datasets.
- **Data Privacy:** Your underlying data remains completely hidden and secure on your local machine; only the final chart images are published.


