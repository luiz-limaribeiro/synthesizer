# Music Workstation

A web-based synthesizer built with React and the Web Audio API. Create sound samples right in your browser.

---

## Tech Stack

- **React** (Vite)
- **GitHub Actions** – CI/CD workflow

---

## Features (WIP)

- [x] Basic oscillator (WIP)
- [ ] Filter module
- [ ] ADSR envelope generator
- [ ] Virtual keyboard input
- [ ] Master volume control
- [ ] Basic polyphony

---

## 🛠 Setup Instructions

```bash
cd web
npm install
npm run dev
```

---

## 🌐 Deployment

Deployed via rsync to a VPS (Hostinger) under:
synthesizer.lagama.site

CI/CD is handled with GitHub Actions upon merge to main.

---

## 📁 Project Structure

```
synthsizer/
├── src/
├──── components/
├────── styles/
├── .github/    # CI/CD and templates
├── .gitignore
```

---

## 📄 License

MIT
