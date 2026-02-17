<p align="center">
  <img src="https://github.com/user-attachments/assets/6ce54a27-8fb6-48e6-9d1f-da144f43425a"/>
</p>

<h3 align="center">Access card generator</h3>
<p align="center">Secure offline generator for QR access cards</p>

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-blue.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![JavaScript](https://img.shields.io/badge/JavaScript-blue.svg?logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: LGPLv3](https://img.shields.io/badge/License-LGPLv3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

`access-card-generator` is a secure, privacy-focused web application that generates unique access cards for **Cryptnox wallets**. Each card includes a QR code and configurable PIN/PUK and is created entirely offline to ensure complete privacy and security.

---

## System requirements

To run the `access-card-generator` smoothly, ensure the following:

- A modern web browser (Firefox, Chrome, Edge, Safari, etc.)  
- JavaScript enabled  
- No internet connection required — the application works entirely offline

---

## Access the application

> [!TIP]
> Using offline mode is recommended for privacy and security.
> 
### From GitHub Pages

Open the application hosted on GitHub Pages
  [here](https://cryptnox.github.io/access-card-generator/cryptnox_random_access_card_generator.html).
  

### From source
Open `cryptnox_random_access_card_generator.html` in any modern web browser.  
  
```bash
git clone https://github.com/cryptnox/access-card-generator.git
cd access-card-generator
firefox cryptnox_random_access_card_generator.html
```
---

## Features

### Core functionality

- **QR code generation**: Create unique QR codes for each access card  
- **Configurable PIN length**: Choose between 4, 5, 6, 7, 8, or 9-digit PINs (Recommended 9-digit PINs)
- **Batch generation**: Generate multiple cards in a single session  
- **Export options**: Download as PDF or print directly  
- **Offline operation**: All processing happens locally, no internet needed  
- **Zero data collection**: Fully privacy-focused  

### Security features

- **Content Security Policy (CSP)**: Strict CSP headers prevent external resource loading  
- **No external dependencies**: All libraries embedded  
- **No tracking**: No analytics or external requests  
- **Local processing**: Everything happens in your browser  

---

## Quick usage

1. **Configure settings**  
   - Select your desired PIN length (4–9 digits; recommended 9 digits)  
   - Click **"Generate access card"**  

2. **Export your cards**  
   - Download as PDF for digital storage  
   - Print directly for physical cards

---

## Technical details

### Technologies used

- **HTML5**: Core structure and layout
- **CSS3**: Modern styling with gradient backgrounds
- **JavaScript**: Application logic and card generation
- **QRCode.js**: QR code generation library (embedded)
- **jsPDF**: PDF generation library (embedded)

### Security implementation

The application implements multiple layers of security:

```
Content-Security-Policy:
  - default-src 'none'
  - script-src 'self' [specific hashes]
  - No external resource loading
  - No form submissions
  - No iframe embedding
```

## Privacy and data protection

This application is designed with privacy as a priority:

- **No data storage**: Nothing is saved to servers
- **No cookies**: No tracking or session data
- **No analytics**: Complete privacy, no usage tracking
- **No external requests**: All resources are self-contained
- **Local processing**: Everything happens in your browser

---

## License

`access-card-generator` is dual-licensed:

- **LGPL-3.0** for open-source projects and proprietary projects that comply with LGPL requirements  
- **Commercial license** for projects that require a proprietary license without LGPL obligations (see COMMERCIAL.md for details)

For commercial inquiries, contact: contact@cryptnox.com