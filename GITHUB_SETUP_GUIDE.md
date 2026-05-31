# GitHub Setup Guide - Step by Step

This guide will walk you through creating a GitHub repository and pushing your NourishU code to it. **No technical experience needed!**

---

## Step 1: Create a GitHub Account

1. Go to https://github.com
2. Click **"Sign up"** (top right)
3. Enter your email address
4. Create a password
5. Choose a username (e.g., `nourishu-team`)
6. Click **"Create account"**
7. Verify your email address

---

## Step 2: Create a New Repository

1. Log in to GitHub
2. Click the **"+"** icon (top right)
3. Select **"New repository"**
4. Fill in the form:
   - **Repository name:** `nourishu-web` (or `little-ladle`)
   - **Description:** "NourishU Web MVP - Recipe, meal planning, and budgeting app"
   - **Visibility:** Select **"Public"** (so Vercel can access it)
   - **Initialize this repository with:** Leave unchecked
5. Click **"Create repository"**

You'll see a page with setup instructions. **Keep this page open** - we'll use it in the next step.

---

## Step 3: Install Git on Your Computer

Git is the tool that uploads your code to GitHub.

### On Windows 10:

1. Go to https://git-scm.com/download/win
2. Click the download button (it will auto-detect Windows)
3. Run the installer
4. Click **"Next"** through all screens (default settings are fine)
5. Click **"Finish"**

### Verify Installation:

1. Press **Windows Key + R**
2. Type `cmd` and press Enter
3. Type: `git --version`
4. You should see: `git version 2.x.x`

---

## Step 4: Configure Git

Open Command Prompt (Windows Key + R, type `cmd`, press Enter) and run these commands:

```
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace:
- `Your Name` with your actual name
- `your.email@example.com` with your GitHub email

---

## Step 5: Push Code to GitHub

### Option A: Using Command Prompt (Recommended for Beginners)

1. **Open Command Prompt:**
   - Press Windows Key + R
   - Type `cmd`
   - Press Enter

2. **Navigate to the project folder:**
   ```
   cd C:\Users\YourUsername\nourishu-web
   ```
   
   Replace `YourUsername` with your Windows username.
   
   **Not sure where the folder is?** Ask me and I'll tell you the exact path.

3. **Run these commands one by one:**

   ```
   git init
   ```
   
   ```
   git add .
   ```
   
   ```
   git commit -m "Initial NourishU Web MVP"
   ```
   
   ```
   git branch -M main
   ```
   
   ```
   git remote add origin https://github.com/YOUR_USERNAME/nourishu-web.git
   ```
   
   Replace `YOUR_USERNAME` with your GitHub username.
   
   ```
   git push -u origin main
   ```
   
   This will ask for your GitHub username and password (or personal access token).

4. **Done!** Your code is now on GitHub.

---

### Option B: Using GitHub Desktop (Easiest for Non-Technical Users)

1. Go to https://desktop.github.com
2. Download and install GitHub Desktop
3. Open GitHub Desktop
4. Click **"File"** → **"Clone repository"**
5. Select your repository from the list
6. Click **"Clone"**
7. Open the folder in your code editor
8. Make changes to your code
9. In GitHub Desktop, you'll see your changes listed
10. Enter a commit message (e.g., "Update billing prices")
11. Click **"Commit to main"**
12. Click **"Push origin"**

---

## Step 6: Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/nourishu-web
2. You should see all your project files
3. You should see a message like "Latest commit 5 minutes ago"

---

## Troubleshooting

### "Command not found: git"
- Git isn't installed. Go back to Step 3 and install it.

### "Permission denied (publickey)"
- GitHub is asking for authentication. Use one of these methods:
  - **Option 1:** Use GitHub Desktop (easier)
  - **Option 2:** Create a Personal Access Token:
    1. Go to GitHub Settings → Developer settings → Personal access tokens
    2. Click "Generate new token"
    3. Give it a name (e.g., "nourishu-deployment")
    4. Select "repo" scope
    5. Click "Generate token"
    6. Copy the token
    7. When git asks for password, paste the token instead

### "fatal: not a git repository"
- You're not in the right folder. Make sure you're in the `nourishu-web` folder.
- Type: `cd C:\Users\YourUsername\nourishu-web`

---

## Next Steps

Once your code is on GitHub:

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Paste: `https://github.com/YOUR_USERNAME/nourishu-web`
4. Click "Import"
5. Vercel will automatically deploy your app!

---

## App Naming: NourishU vs Little Ladle

**Recommendation:**
- **Repository name:** `nourishu-web` (keeps it organized)
- **App name in Vercel:** `nourishu` (cleaner URL)
- **Domain:** `nourishu.vercel.app`

This way:
- GitHub repo is clearly named
- Live app is branded as NourishU
- Easy to scale to other modules later (Little Ladle, Flavor Quest, etc.)

---

## Need Help?

If you get stuck:
1. Take a screenshot of the error
2. Tell me exactly which step you're on
3. I'll guide you through it

You've got this! 🚀
