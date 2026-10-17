
# Setup a Webpage Using Obsidian, GitLab and Quartz

In order for [Quartz](https://quartz.jzhao.xyz) to run smoothly we need some dependencie, that are [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [Node.js](https://nodejs.org/en). If you do not have them on your system, start by downloading those. Otherwise you can already jump to the next step and install Quartz.

# Download Dependencies
## Step 1: Download Git

## Step 2: Download Node.js

Check if you have node js with 

```
node -v
```

# Clone and Setup Quartz Locally
## Step 3: Setup Quartz

There is a guideline on the webpage of Quartz that we will follow. 
First switch to the folder where you want to setup quartz. This will also be the folder where your Obsidian vault is later. 
Now `cd` into the folder and clone the quartz repository and install it through the commands below.

```
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm i
npx quartz create
```

# Set up the Obsidian Vault

After installing Quartz there will be a folder called `quartz`.
Open Obsidian and initialize the vault by using that quartz folder.

Within the quartz folder there is a `content` folder. Create a `index` site within that folder. This is your homepage. If you want, create some more simple test sites within the content folder.

If you want, you can now copy settings from an existing vault by copying the `.json` files into the `.obsidian` folder.

I did that for `hotkeys.json` and `appearance.json`.
# Set up a GitHub Repository

Follow the [instructions of the Quartz Website](https://quartz.jzhao.xyz/setting-up-your-GitHub-repository) for the setup. The steps are written below.

Go to https://github.com/ and create a new repository without a Readme file.

Go to the root folder of quartz in Git-Bash and run the following commands

```python
# list all the repositories that are tracked
git remote -v
 
# if the origin doesn't match your own repository, set your repository as the origin
git remote set-url origin REMOTE-URL
 
# if you don't have upstream as a remote, add it so updates work
git remote add upstream https://github.com/jackyzha0/quartz.git
```

Now do the initial push to the repository 

```
npx quartz sync --no-pull
```

For me an error occured that my email is not registered and a GitHub pop-up appeared. I signed in and it started to sync.

You can solve this issue by setting your github email and username by doing

```
git config --global user.email "your-git-email@example.com"
git config --global user.name "your-git-username"
```

# Sync Obsidian to GitHub

You can now use the commands below to sync the quartz folder to GitHub.

First `cd` to the folder where the quartz folder is e.g.


```
cd C:/Users/belli/OneDrive/Programme/ObsidianOneDrive/MathNet/
```

Then sync all changes that are made in the vault via

```
npx quartz sync
```

# Build the Webpage

You can now build the webpage using

```
npx quartz build --serve
```

and look at it at `http://localhost:8080/` 
# Host the Webpage on GitHub Pages

There is webpage on [hosting Quartz online](https://quartz.jzhao.xyz/hosting) under the GitHub Pages Section. Mainly you will do the steps below.

Create `quartz/.github/workflows/deploy.yml` and copy the content from the site above. I created that file by copying an already existing .yml in that folder, renaming it to deploy.yml and editing it with a normal texteditor.

Next;

1. Go to your GitHub Repo > Settings > Pages and set Source to "GitHub Action"
2. Do `npx quartz sync`

You should be able to see the website now on `<github-username>.github.io/<repository-name>` so for me it is bkaib.github.io/MathNet.

See also [[My Domain Setup]]

# Basic Modifications

You can change the title of page within the `quartz.config.ts` and the layout in the `quartz.layout.ts`

---
# References

1. 