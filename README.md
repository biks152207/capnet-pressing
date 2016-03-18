![Cap'Net Pressing - Header made with Angle by @MengTo](https://github.com/lanceplaine/capnet-pressing-design/blob/master/config/readme/header_code.jpg)

# Cap'Net Pressing

> http://www.capnet-pressing.com

<!-- TOC depthFrom:2 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [1. Design](#1-design)
- [2. Install config](#2-install-config)
	- [2.1 NPM](#21-npm)
	- [2.2 Set up the env variable (Optional)](#22-set-up-the-env-variable-optional)
- [3. Start server](#3-start-server)
	- [3.1 NPM](#31-npm)
	- [3.2 Gulp](#32-gulp)

<!-- /TOC -->

## 1. Design

Please checkout the [dedicated repository](https://github.com/lanceplaine/capnet-pressing-design) for the Sketch files, mockups and assets.

## 2. Install config

### 2.1 NPM

```console
npm install
```

### 2.2 Set up the env variable (Optional)

Add a `.env` in the root folder.

```ruby
NODE_ENV=development      # If you leave it blank, it will fallback on production
GOOGLE_MAPS_API_KEY=XXXXX # If you leave it blank, it will fallback on the default API key AIzaSyAuDixR3dXmRr2g1PVzFAm5pLUkf7VWc5E (Only for localhost:3000)
SENDGRID_USERNAME=XXXXX   # If you want to send emails
SENDGRID_PASSWORD=XXXXX
CONTACT_FORM_EMAIL=XXXXX  # If you leave it blank, it will fallback on the default email address example@example.com
```

## 3. Start server

### 3.1 NPM

For production and development

```console
npm start
```

### 3.2 Gulp

For development only

```console
gulp
```
