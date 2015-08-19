---
layout: post
title: "WordPress Production Deployment"
date: "2015-08-14 08:24"
---
### Ideas
- Overcoming fear of commandline would fix a good chunk of this
- We have been looking into ways of streamlining
- Why did I decide to write this up, experiences at work.

### Preparing Production Deployment (Tower)
1. Set the **master** branch to Head
1. Pull from **remote** **master**
1. Drag the **develop** **branch** on to the **master** **branch** to merge
1. Update the release number in **style.css** and commit the changes as a release (name the commit as "**Release {version number}**" and add changes as the 1. description) 
1. You can use "-" to denote longer lists of completed items.
1. Drag the **master branch** onto **tags** (this will create a new tag)
1. Name it the same thing as the last release number
1. Push the **tag** to the **remote**
1. Push the **local** **master branch** to the **remote master branch**
1. Set the **develop** branch to Head
1. Merge the **master** branch into **develop** branch

### Beanstalk Production Deployment
1. Login to Beanstalk and find your site in the Repositories dropdown. Click on it.
1. Click on the Deployments dropdown and select Production
1. Click the Deploy button
1. Make sure the correct Release is selected under the Commit dropdown and click the Review button
1. Finally click the Deploy button

### WP Engine Deployment
1. Pushing the **local** **master branch** to the **remote master branch **auto deploys to the production site

### Final Check
1. Once the release has been deployed check the live site to make sure changes have been made (this may take a while for changes to take effect)

### Trouble Shooting
1. Make sure to hard refresh shift+F5 and clear your cache if changes do not take affect
1. If Beanstalk verify that the deployment has completed by going to **Repository &gt; Deployments &gt; Production**